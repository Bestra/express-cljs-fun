(ns express-demo.property-graph
  (:require [cljs.nodejs :as nodejs]
            [express-demo.template-graph :as template-graph]
            [loom.graph :as graph]
            [express-demo.registry :as registry]
            [clojure.spec :as s]
            [cljs.core.match :refer-macros [match]]
            [express-demo.graph-visualizer :as vis]))
(nodejs/enable-util-print!)
(s/fdef create-graph-nodes
        :args (s/cat :entry map? :nodes map?)
        :ret map?)

(defn prop-node [entry node]
  {:type (:type node)
   :path (first (.split (:path node) "."))
   :src-module (:module-name entry)
   :start (get-in node [:location :start])})

(defn block-param
  "block params need their full location to check if they apply to a given binding"
  [entry node]
  {:type "block-param"
   :path (first (.split (:path node) "."))
   :src-module (:module-name entry)
   :loc (:loc node)})

(defn invocation->i-nodes [e invocation]
  (map (fn [attr]
         {:type "invocation"
          :path (:key attr)
          :invoked-name (:name invocation)
          :src-module (:module-name e)
          :start (get-in attr [:location :start])})
       (:attrs invocation)))

(defn entry->nodes [e m mapper key]
  (let [items (get e key [])]
    (apply conj m (map #(mapper e %) items))))

(defn create-invocations [e m]
  (let [invocations (get e :invocations [])
        nodes (map (partial invocation->i-nodes e) invocations)]
    (apply conj m (flatten nodes))))

(defn create-bindings [e m]
  (entry->nodes e m prop-node :bindings))

(defn create-gets [e m]
  (entry->nodes e m prop-node :property-gets))

(defn create-sets [e m]
  (entry->nodes e m prop-node :property-sets))

(defn create-block-params [e m]
  (entry->nodes e m block-param :block-params))

(defn invocable-name [{module-name :src-module}]
  (last (re-matches #"(template:components/|.*:)(.*)" module-name)))

(defn create-graph-nodes
  "consumes ember and hbs entries. returns a vector of nodes"
  [entry]
  ;;invocations
  ;;bindings
  ;;property-gets
  ;;property-sets
  ;;actions (later)
  (->> #{}
       (create-bindings entry)
       (create-gets entry)
       (create-sets entry)
       (create-block-params entry)
       (create-invocations entry)))

(defn add-module-nodes-to-graph [g module-names]
  (reduce
   #(apply graph/add-nodes %1 (create-graph-nodes (@registry/path-to-entry
                                                   (@registry/module-to-path %2))))
   g
   module-names))

(defn find-property-sources
  "returns module names. if a given node is in a template, its sources could either
  be its rendering context or any templates that invoke it. if the node is in an ember file,
  its sources could be that node itself (via a this.set()), a superclass or mixin, or a template
  that invokes it"
  [template-graph module-name]
  (mapcat (fn [parent]
            (if (.includes parent "template:")
              [[:invocations parent]]
              (cons [:setters parent] (find-property-sources template-graph parent))))
          (graph/predecessors template-graph module-name)))

(defn connect-srcs-to-node
  "looks at property source for the given node and tries to find
  the equivalent set or invocation nodes"
  [pg [src-type src-module-name] node]
  ;; (println (:path node) " " src-type " " src-module-name)
  (let [find-setter #(and (= (:src-module %) src-module-name)
                          (= (:path %) (:path node))
                          (re-find #"(ember-set|prototype-assignment)"
                                   (:type %)))
        find-invocation #(and (= (:src-module %) src-module-name)
                              (= (:path %) (:path node))
                              (= (:invoked-name %) (invocable-name node))
                              (re-find #"invocation" (:type %)))
        nodes-to-connect (case src-type
                           :setters (filter find-setter
                                            (graph/nodes pg))
                           :invocations (filter find-invocation
                                                (graph/nodes pg)))]
    (println "nodes to connect: " nodes-to-connect)
    (map (fn [p] [p node]) nodes-to-connect)))

(defn connect-binding-nodes
  "creates edges between bindings and any applicable setters"
  [property-graph template-graph]
  (let [nodes (graph/nodes property-graph)
        bound-paths (filter #(= "bound-path" (:type %)) nodes)]
    (reduce (fn [pg n]
              (let [srcs (cons [:setters (:src-module n)]
                               (find-property-sources template-graph
                                                      (:src-module n)))
                    new-edges (mapcat #(connect-srcs-to-node pg % n) srcs)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            bound-paths)))

(defn contains-start?
  "returns true if the child-locs start is between the parent's start and end"
  [{parent-start :start parent-end :end} child-start]
  (cond
    (< (:line child-start) (:line parent-start)) false
    (> (:line child-start) (:line parent-end)) false
    (and (= (:line child-start) (:line parent-start))
         (< (:column child-start) (:column parent-start))) false
    (and (= (:line child-start) (:line parent-end))
         (> (:column child-start) (:column parent-end))) false
    :else true))

(defn find-contained-bindings [block-param template-nodes]
  (filter #(and (= "bound-path" (:type %))
                (= (:path block-param) (:path %))
                (contains-start? (:loc block-param) (:start %))) template-nodes))

(defn connect-block-params
  "connect block params to paths of the same name contained within their block"
  [property-graph]
  (let [nodes (graph/nodes property-graph)
        block-params (filter #(= "block-param" (:type %)) nodes)]
    (reduce (fn [pg bp]
              (let [template-nodes (filter #(= (:src-module %)
                                               (:src-module bp))
                                           nodes)
                    contained-bindings (find-contained-bindings bp
                                                                template-nodes)
                    new-edges (map (fn [cb] [bp cb]) contained-bindings)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            block-params)))

(defn connect-getters-to-setters
  "creates edges between ember-gets and any applicable setters"
  [property-graph template-graph]
  (let [nodes (graph/nodes property-graph)
        getters (filter #(= "ember-get" (:type %)) nodes)]
    (reduce (fn [pg n]
              (let [srcs (cons [:setters (:src-module n)]
                               (find-property-sources template-graph (:src-module n)))
                    new-edges (mapcat #(connect-srcs-to-node pg % n) srcs)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            getters)))

(def sample-template-graph (graph/digraph ["template:components/paper-control-bar"
                                           "component:paper-version-picker"]
                                           ["component:paper-version-picker"
                                           "template:components/paper-version-picker"]
                                          ))

(def sample-prop-graph (add-module-nodes-to-graph (graph/digraph)
                                                  ["template:components/paper-control-bar"
                                                   "component:paper-version-picker"
                                                   "template:components/paper-version-picker"]))
(defn index-prop-nodes [nodes]
  (let [type-groups (group-by :type nodes)
        ])
  )

(def connected-graph (-> sample-prop-graph
                         (connect-binding-nodes sample-template-graph)
                         (connect-getters-to-setters sample-template-graph)
                         (connect-block-params)))

(vis/open-graph connected-graph)
