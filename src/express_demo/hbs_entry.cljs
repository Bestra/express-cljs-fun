(ns express-demo.hbs-entry
  "hbs-entry deals with extracting and organizing information from the handlebars AST.
   it uses the htmlbars parser"
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec.alpha :as s]
            clojure.set))

(nodejs/enable-util-print!)

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
                          "unbound"
                    })
(def htmlbars (nodejs/require "htmlbars/dist/cjs/htmlbars-syntax"))
(def util (nodejs/require "util"))

(defn find-nodes [ast node-type filter-fn]
  (let [found-nodes #js[]
        filter (fn [node]
                 (if (filter-fn node) (.push found-nodes node))
                 node)
        finder (js-obj node-type
                       #js {:enter filter})]
    (.traverse htmlbars ast finder)
    found-nodes))

(defn parse? [ast-or-str]
  (if (object? ast-or-str)
    ast-or-str
    (.parse htmlbars ast-or-str)))

(defn all-nodes-of-type [node-type ast]
  (find-nodes (parse? ast) node-type (fn [] true)))

(def extract-paths (partial all-nodes-of-type "PathExpression"))

(s/def ::line nat-int?)
(s/def ::column nat-int?)
(s/def ::position (s/keys :req-un [::line ::column]))
(s/def ::start ::position)
(s/def ::end ::position)
(s/def ::location (s/keys :req [::start ::end]))

(defn location-map
  "given an AST node, returns a map of that node's start and end locations"
  [node]
  (let [get-location
        (fn [k]
          (clj (aget node "loc" %) :keywordize-keys true))]
    {::start (get-location "start")
     ::end (get-location "end")}))

(defn ast [entry]
  (parse? (::src entry)))

(defn node->mustache-call
  "the basic builder function for both blocks and mustaches.
   this fn translates some information about the given ast
   node into clojure, but keeps some info in js land for later
   processing."
  [m-or-b node]
  (let [n->hash-pair (fn [n]
                       {::key (aget n "key")
                        ::location (location-map n)})]
    {:location (location-map node)
     ::path-string (.. node -path -original)
     ::path-node (.. node -path)
     ::mustache-type m-or-b
     ::meta nil
     ::params (.-params node)
     ::attrs (map n->hash-pair (.. node -hash -pairs))}))

(defn get-mustaches
  "extracts all MustacheStatement nodes from the ast"
  [ast]
  (->> (all-nodes-of-type "MustacheStatement" ast)
       (map (partial node->mustache-call "mustache"))))

(defn get-blocks
  "blocks are just mustaches that have block params included"
  [ast]
  (let [node->block-params
        (fn
          [block-node]
          (let [node (aget block-node "program")
                loc (location-map node)
                params (aget node "blockParams")]
            (map (fn [p] {::path-node p ::loc loc}) params)))]
    (->> (all-nodes-of-type "BlockStatement" ast)
         (map (fn [n]
                (assoc (node->mustache-call "block" n)
                       ::block-params
                       (node->block-params n)))))))

(defn extract-hbs-mustaches
  "returns a seq of both mustaches and blocks"
  [ast]
  (concat (get-mustaches ast)
          (get-blocks ast)))

;; TODO: make this work
(defn process-bound-paths [entry]
  (let [invocation-paths (->> entry
                              ::invocations
                              (map :path)
                              set)
        all-paths (->> entry
                       ast
                       (all-nodes-of-type "PathExpression")
                       (map node->bound-path))
        bindings (->> all-paths
                      (remove #(contains? ember-helper-paths (:path %)))
                      (remove #(contains? invocation-paths %))
                      (remove #(re-find #"-" (:path %))))]

    (update-in entry [::bindings] #(into [] bindings))))

(defn base-entry [template-str module-name]
  {::src template-str
   ::module-name module-name})

(defn create-invocation-meta [registry mustache]
  (let [possible-name
        (str "component:" (::path-string mustache))]
    (if (contains? registry possible-name)
      (assoc mustache ::meta {::type "invocation"
                              ::invoked-template possible-name})
      mustache)))

(defn create-partial-meta [mustache]
  (let [is-partial? (fn [mustache]
                      (= "partial" (::path-string mustache)))]
    (if (is-partial? mustache)
      (assoc mustache ::meta {::type "partial"})
      mustache)
    ))

(defn create-helper-meta [mustache]
  (let [is-helper? (fn [mustache]
                      (contains? ember-helper-paths
                                 (::path-string mustache)))]
    (if (is-helper? mustache)
      (assoc mustache ::meta {::type "helper"})
      mustache)
    ))

(defn extract-ast-info
  "pulls out mustaches, blocks, and path expressions"
  [str module-name]
  (let [base (base-entry str module-name)
        ast (parse? str)]
    {::mustaches (extract-hbs-mustaches ast)
     ::path-nodes (all-nodes-of-type "PathExpression" ast)}))

;;TODO: What about sub expressions?
(defn process-mustaches [entry registry]
  (let [mustaches (::mustaches entry)
        processed-mustaches (->> mustaches
                                 (map create-partial-meta)
                                 (map create-helper-meta)
                                 (map (partial create-invocation-meta registry)))]
    (assoc entry ::mustaches processed-mustaches)))

(defn invocations
  "returns the component invocations for an entry"
  [entry]
  (filter #(= (get-in % [::meta ::type]) "invocation")
          (::mustaches entry)))

(defn invoked-template-names
  "returns the list of templates this entry invokes, either as components or partials"
  [entry]
  (map #(get-in % [::meta ::invoked-templates])
       (invocations entry)))

(defn create-template-entry
  "returns a map of meta info for a given template"
  [src module-name registry]
  (-> (extract-ast-info src module-name)
      (process-mustaches registry)))

(def test-hbs-file "<div> Welcome!</div>
{{bound.path}}
{{#some-component foo=bar as |stuff|}}
  There's {{stuff}} here.
{{/some-component}}
{{partial \"foo-bar\"}}

<button {{action \"clicked\"}}>Click me</button>
{{another-component
  name=\"bob\"
  clicked=(action \"clicked\")}}

{{#each items as |item|}}
  {{item.name}}
{{/each}}")

#_(def test-registry {"component:another-component" "/foo/component"
                    "component:some-component" "/foo/component"})

#_(process-mustaches
   (extract-ast-info test-hbs-file
                              "template:components/foo")
   {"component:another-component" "/foo/component"
    "component:some-component" "/foo/component"})

