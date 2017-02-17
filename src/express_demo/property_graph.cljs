(ns express-demo.property-graph
  (:require [cljs.nodejs :as nodejs]
            [express-demo.template-graph :as template-graph]
            [loom.graph :as graph]
            [express-demo.registry :as registry]
            [clojure.spec :as s]
            [clojure.spec.test :as stest]
            [cljs.core.match :refer-macros [match]]
            [express-demo.graph-visualizer :as vis]))

(def progress (nodejs/require "progress"))

;; (def progress-bar (progress. ":bar" #js{"total" 10}))

(defn print-out [s]
  (.write (.-stdout nodejs/process) s))


(nodejs/enable-util-print!)
(s/fdef create-graph-nodes
        :args (s/cat :entry map? :nodes map?)
        :ret map?)

(s/def ::path string?)
(s/def ::prop-node (s/keys ::req-un [::type ::path ::src-module ::start]
                           ::opt-un [::loc]))

(s/fdef prop-node
        :args (s/cat
               :entry (s/keys :req-un [::module-name])
               :node (s/keys :req-un [::type ::path ::location]))
        :ret (s/keys ::req-un [::type ::path ::src-module ::start]))

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
   :start (get-in node [:loc :start])
   :loc (:loc node)})

(defn invocation->i-nodes [e invocation]
  (map (fn [attr]
         {:type "invocation"
          :path (:key attr)
          :invoked-name (:name invocation)
          :src-module (:module-name e)
          :start (get-in attr [:location :start])})
       (:attrs invocation)))

(defn entry->nodes [entry node-set mapper key]
  (let [items (get entry key [])]
    (apply conj
           node-set
           (map #(mapper entry %) items))))

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
  [indexed-nodes [src-type src-module-name] node]
  ;; (println (:path node) " " src-type " " src-module-name)
  (let [inv-name (invocable-name node)
        fetch-type (fn [t] (get-in indexed-nodes [src-module-name t] []))
        found-setters (fn []
                        (let [setters (concat (fetch-type "ember-set")
                                              (fetch-type "prototype-assignment"))]
                          (filter #(= (:path %) (:path node)) setters)))
        found-invocations (fn []
                            (filter #(and (= (:path %) (:path node))
                                          (= (:invoked-name %) inv-name))
                                    (fetch-type "invocation")))
        nodes-to-connect (case src-type
                           :setters (found-setters)
                           :invocations (found-invocations))]
    (map (fn [p] [p node]) nodes-to-connect)))

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

(defn find-contained-bindings [block-param binding-nodes]
  (filter #(and (= (:path block-param) (:path %))
                (contains-start? (:loc block-param) (:start %))) binding-nodes))

(defn connect-binding-nodes
  "creates edges between bindings and any applicable setters"
  [property-graph template-graph indexed-nodes]
  (let [bound-paths (get indexed-nodes "bound-path")]
    (reduce (fn [pg n]
              (let [srcs (cons [:setters (:src-module n)]
                               (find-property-sources template-graph
                                                      (:src-module n)))
                    new-edges (mapcat #(connect-srcs-to-node indexed-nodes % n) srcs)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            bound-paths)))

(defn connect-getters-to-setters
  "creates edges between ember-gets and any applicable setters"
  [property-graph template-graph indexed-nodes]
  (let [getters (get indexed-nodes "ember-get")]
    (reduce (fn [pg n]
              (let [srcs (cons [:setters (:src-module n)]
                               (find-property-sources template-graph (:src-module n)))
                    new-edges (mapcat #(connect-srcs-to-node indexed-nodes % n) srcs)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            getters)))

(defn connect-block-params
  "connect block params to paths of the same name contained within their block"
  [property-graph indexed-nodes]
  (let [block-params (get indexed-nodes "block-param")]
    (reduce (fn [pg bp]
              (let [contained-bindings (find-contained-bindings
                                        bp
                                        (get-in indexed-nodes [(:src-module bp) "bound-path"] []))
                    new-edges (map (fn [cb] [bp cb]) contained-bindings)]
                (apply graph/add-edges pg new-edges)))
            property-graph
            block-params)))

(def sample-template-graph (graph/digraph ["template:components/paper-submit/full-submit"
                                            "component:paper-submit/checklist"]
                                           ["component:paper-submit/checklist"
                                            "template:components/paper-submit/checklist"]))

(def sample-prop-graph (add-module-nodes-to-graph (graph/digraph)
                                                  ["template:components/paper-submit/full-submit"
                                                   "component:paper-submit/checklist"
                                                   "template:components/paper-submit/checklist"]))

(defn time-fn [fn & args]
  (let [start (.hrtime nodejs/process)
        result (apply fn args)
        [s ns] (.hrtime nodejs/process start)]
    (str "took " (* ns 1e-6) "ms")))

(defn create-connected-graph [prop-graph template-graph index]
  (let [log-print (fn [x msg]
                    (println msg)
                    x)]
    (-> prop-graph
        (log-print "Connecting bindings")
        (connect-binding-nodes template-graph index)
        (log-print "Connecting getters")
        (connect-getters-to-setters template-graph index)
        (log-print "Connecting block params")
        (connect-block-params index)
        (log-print "Done"))))

;; (stest/instrument `prop-node)

(def prop-node-graph
  (add-module-nodes-to-graph
   (graph/digraph)
   (keys @express-demo.registry/module-to-path)))

(defn indexed-prop-nodes
  "indexes the property nodes in a graph by module, then by type"
  [prop-graph]
  (let [nodes (graph/nodes prop-graph)
        by-module (reduce-kv #(assoc %1 %2 (group-by :type %3))
                             {}
                             (group-by :src-module nodes))
        by-type (group-by :type nodes)]
    (conj by-module by-type)))

(def indexed-sample-nodes (indexed-prop-nodes sample-prop-graph))

(vis/open-graph (create-connected-graph sample-prop-graph sample-template-graph indexed-sample-nodes))
(count (graph/edges (create-connected-graph sample-prop-graph sample-template-graph indexed-sample-nodes)))


(def property-graph (atom {}))

(defn setup-property-graph []
  (reset! property-graph
          (let [starting-graph (add-module-nodes-to-graph
                                  (graph/digraph)
                                  (keys @express-demo.registry/module-to-path))
                  idx (indexed-prop-nodes starting-graph)]
              {:index idx
               :graph (create-connected-graph starting-graph
                                              @express-demo.template-graph/template-graph
                                              idx)})))

(defn entry-item->prop-node [entry entry-item]
  (let [property-index (:index @property-graph)
        items (get-in property-index [(:module-name entry) (:type entry-item)])
        prop (first (filter (fn [n]
                              (= (:start n) (get-in entry-item [:location :start])))
                            items))]
    prop))

(defn predecessors [entry entry-item]
  (graph/predecessors @property-graph (entry-item->prop-node entry entry-item)))
