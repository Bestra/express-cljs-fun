(ns express-demo.hbs
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec :as s]))

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
                    })
(def htmlbars (nodejs/require "htmlbars/dist/cjs/htmlbars-syntax"))
(def util (nodejs/require "util"))

(defn find-nodes [ast node-type filter-fn]
  (let [found-nodes #js[]
        filter (fn [node]
                 (println "entered node")
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

(defn is-helper? [binding]
  true)

(s/def ::position (s/keys :req-un [::line ::column]))
(s/def ::location (s/keys :req-un [::file-path ::start ::end]))
(s/def ::binding (s/keys :req-un [::path ::type ::location]))

(defn node->binding [expr file-path]
  {:path (.-original expr)
   :type "binding"
   :location {:file-path file-path
              :start (js->clj (.. expr -loc -start) :keywordize-keys true)
              :end (js->clj (.. expr -loc -end) :keywordize-keys true)}})

(defn extract-bindings [str file-path]
  (->> str
       (extract-paths)
       (map #(node->binding % file-path))
       (filter (complement is-helper?))))

(defn ast [entry]
  (parse? (:src entry)))

(defn is-component? [block-or-mustache registry]
  (let [possible-name (.. block-or-mustache -path -original)]
    (contains? (:component registry) possible-name)))

;; the attr pairs need to be turned into 'set' nodes too
(defn node->invocation [node]
  {:name (.. node -path -original)
   :attrs (.. node -hash -pairs)})

(defn process-mustache-invocations [entry registry]
  (let [invocations (->> entry
                         ast
                         (all-nodes-of-type "MustacheStatement")
                         (filter #(is-component? % registry))
                         (map node->invocation))]
    (update-in entry [:invocations] #(apply conj % invocations))))

(defn process-block-invocations [entry registry]
  )

(defn process-actions [entry]
  "could be element modifiers or subexpressions"
  entry)
(defn process-bindings [entry] entry)

(defn create-template-entry [str file-path registry]
  (-> (create-entry str file-path)
      (process-mustache-invocations registry)
      (process-block-invocations registry)
      (process-actions)
      (process-bindings)))

(defn create-entry [template-str file-path]
  {:src template-str
   :file-path file-path
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

(def test-entry (create-entry test-hbs-file "/foo"))

(process-mustache-invocations test-entry
                                      {:component {"another-component" "/foo/component"}})
