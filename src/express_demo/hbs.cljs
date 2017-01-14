(ns express-demo.hbs
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec :as s]
            clojure.set))

(nodejs/enable-util-print!)

(s/def ::hbs-node-types #{"Program"
                      "MustacheStatement"
                      "BlockStatement"
                      "ElementModifierStatement"
                      "PartialStatement"
                      "CommentStatement"
                      "ElementNode"
                      "ComponentNode"
                      "AttrNode"
                      "TextNode"
                      "ConcatStatement"
                      "SubExpression"
                      "PathExpression"
                      "StringLiteral"
                      "BooleanLiteral"
                      "NumberLiteral"
                      "NullLiteral"
                      "UndefinedLiteral"
                      "Hash"
                      "HashPair"
                      "All"})

(def ember-helper-paths #{
                          "action"
                          "if"
                          "unless"
                          "else"
                          "concat"
                          "each"
                          "with"
                          "yield"
                          "not"
                          "hash"
                          "eq"
                          "can"
                    })
(def htmlbars (nodejs/require "htmlbars/dist/cjs/htmlbars-syntax"))
(def util (nodejs/require "util"))

(defn find-nodes [ast node-type filter-fn]
  (let [found-nodes #js[]
        filter (fn [node]
                 (if (filter-fn node) (.push found-nodes node)))
        finder (js-obj node-type
                       #js {:enter filter})]
    (.traverse htmlbars ast finder)
    found-nodes))

(defn parse? [ast-or-str]
  (if (object? ast-or-str)
    ast-or-str
    (.parse htmlbars ast-or-str)))

(defn all-nodes-of-type [node-type ast]
  (find-nodes (parse? ast) node-type #(identity true)))

(def extract-paths (partial all-nodes-of-type "PathExpression"))


(s/def ::line nat-int?)
(s/def ::column nat-int?)
(s/def ::position (s/keys :req-un [::line ::column]))
(s/def ::start ::position)
(s/def ::end ::position)
(s/def ::location (s/keys :req-un [::start ::end]))
(s/def ::binding (s/keys :req-un [::path ::module-name ::type ::location]))

(defn location-map [node]
  (let [get-loc #(js->clj (aget node "loc" %) :keywordize-keys true)]
    {:start (get-loc "start")
     :end (get-loc "end")}))

(defn ast [entry]
  (parse? (:src entry)))

(defn is-component? [block-or-mustache registry]
  (let [possible-name (str "component:" (.. block-or-mustache -path -original))]
    (contains? registry possible-name)))

(defn node->bound-path [path-node]
  {:path (.-original path-node)
   :type "bound-path"
   :location (location-map path-node)})

(defn node->block-params
  "block params don't have their own location information so they steal
  it from their parent program node"
  [block-node]
  (let [node (aget block-node "program")
        loc (location-map node)
        params (aget node "blockParams")]
    (map (fn [p] {:path p :loc loc}) params)))

;; the attr pairs need to be turned into 'set' nodes too
(defn node->invocation [node]
  (let [n->hash-pair (fn [n]
                       {:key (aget n "key")
                        :location (location-map n)})
        path (node->bound-path (.. node -path))]
    {:name (:path path)
       :location (location-map node)
       :path path
       :attrs (map n->hash-pair (.. node -hash -pairs))}))

(defn process-mustache-invocations [entry registry]
  (update-in entry
             [:invocations]
             (fn [i]
               (apply conj i (->> entry
                                  ast
                                  (all-nodes-of-type "MustacheStatement")
                                  (filter #(is-component? % registry))
                                  (map node->invocation))))))

(defn process-block-invocations [entry registry]
  (update-in entry
             [:invocations]
             (fn [i]
               (apply conj i (->> entry
                                  ast
                                  (all-nodes-of-type "BlockStatement")
                                  (filter #(is-component? % registry))
                                  (map node->invocation))))))

(defn process-block-params [entry]
  (update-in entry
             [:block-params]
             (fn [i]
               (apply conj i (->> entry
                                  ast
                                  (all-nodes-of-type "BlockStatement")
                                  (mapcat node->block-params)
                                  (remove empty?))))))

(defn process-actions
  "could be element modifiers or subexpressions"
  [entry]
  entry)

(defn process-bound-paths [entry]
  (let [invocation-paths (->> entry
                              :invocations
                              (map :path)
                              set)
        all-paths (->> entry
                       ast
                       (all-nodes-of-type "PathExpression")
                       (map node->bound-path))
        bindings (->> all-paths
                      (remove #(contains? invocation-paths %))
                      (remove #(re-find #"-" (:path %)))
                      (remove #(contains? ember-helper-paths (:path %))))]

    (update-in entry [:bindings] #(into [] bindings))))

(defn create-template-entry [str module-name registry]
  (-> (create-entry str module-name)
      (process-mustache-invocations registry)
      (process-block-invocations registry)
      (process-block-params)
      (process-actions)
      (process-bound-paths)))

(defn create-entry [template-str module-name]
  {:src template-str
   :module-name module-name
   :invocations []
   :block-params []
   :actions []
   :bindings []})

(def test-hbs-file "<div> Welcome!</div>

{{bound.path}}
{{#some-component foo=bar as |stuff|}}
  There's {{stuff}} here.
{{/some-component}}

<button {{action \"clicked\"}}>Click me</button>
{{another-component
  name=\"bob\"
  clicked=(action \"clicked\")}}

{{#each items as |item|}}
  {{item.name}}
{{/each}}")

(def test-registry {"component:another-component" "/foo/component"
                    "component:some-component" "/foo/component"})

(:block-params
 (create-template-entry test-hbs-file "template:components/foo" test-registry))

