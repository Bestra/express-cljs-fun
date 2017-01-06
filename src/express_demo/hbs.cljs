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


(s/def ::position (s/keys :req-un [::line ::column]))
(s/def ::location (s/keys :req-un [::start ::end]))
(s/def ::binding (s/keys :req-un [::path ::module-name ::type ::location]))

(defn location-map [node]
  (let [get-loc #(js->clj (aget node "loc" %) :keywordize-keys true)]
    {:start (get-loc "start")
     :end (get-loc "end")}))

(defn node->bound-path [path-node]
  {:path-name (.-original path-node)
    :location (location-map path-node)})

(defn node->binding [path-node module-name]
  {:path (.-original path-node)
   :module-name module-name
   :type "binding"
   :location (js->clj (.. path-node -loc) :keywordize-keys true)})

(defn extract-bindings [str module-name]
  (->> str
       (extract-paths)
       (map #(node->binding % module-name))
       (filter (complement is-helper?))))

(defn ast [entry]
  (parse? (:src entry)))

(defn is-component? [block-or-mustache registry]
  (let [possible-name (str "component:" (.. block-or-mustache -path -original))]
    (contains? registry possible-name)))

(defn is-helper? [binding]
  true)

;; the attr pairs need to be turned into 'set' nodes too
(defn node->invocation [node]
  (let [path (node->bound-path (.. node -path))
        i {:name (:path-name path)
           :location (location-map node)
           :path path
           :attrs (.. node -hash -pairs)}]
    (if (.. node -program)
      (assoc i :block-params (.. node -program -blockParams))
      i)))

(defn process-mustache-invocations [entry registry]
  (let [invocations (->> entry
                         ast
                         (all-nodes-of-type "MustacheStatement")
                         (filter #(is-component? % registry))
                         (map node->invocation))]
    (update-in entry [:invocations] #(apply conj % invocations))))

(defn process-block-invocations [entry registry]
  (let [invocations (->> entry
                         ast
                         (all-nodes-of-type "BlockStatement")
                         (filter #(is-component? % registry))
                         (map node->invocation))]
    (update-in entry [:invocations] #(apply conj % invocations))))

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
                      (remove #(contains? ember-helper-paths (:path-name %))))]

    (update-in entry [:bindings] #(into [] bindings))))

(defn create-template-entry [str module-name registry]
  (-> (create-entry str module-name)
      (process-mustache-invocations registry)
      (process-block-invocations registry)
      (process-actions)
      (process-bound-paths)))

(defn create-entry [template-str module-name]
  {:src template-str
   :module-name module-name
   :invocations []
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

;; (def test-registry {"component:another-component" "/foo/component"
;;                     "component:some-component" "/foo/component"})
;; (def test-entry (create-entry test-hbs-file "foo"))

