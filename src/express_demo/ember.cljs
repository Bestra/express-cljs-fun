(ns express-demo.ember
  (:require [cljs.nodejs :as nodejs]
             [express-demo.files :as files]))

(nodejs/enable-util-print!)
(def recast (nodejs/require "recast"))
(def babel (nodejs/require "babel-core"))


(defn base-entry [m]
  {:module-name m
   :property-sets []
   :property-gets []
   :actions []
   })

(defn try-get [x & key-list]
  (reduce (fn [obj k]
            (if obj (aget obj k) nil))
          x
          key-list))

(defn get-keys [x key-list]
  (into {} (for [k key-list]
             [(keyword k) (aget x k)])))

(defn location-map [node]
  (let [get-loc (fn [pos]
                  (let [loc (aget node "loc" pos)]
                    (get-keys loc ["line" "column"])))]
    {:start (get-loc "start")
     :end (get-loc "end")}))

(defn parse-str [str]
  (.parse recast str (js-obj "esprima" babel)))

(defn parse-js-file [path]
  (parse-str (files/read-file path)))

(defn extract-all-node-paths
  "extracts all NodePath objects of a given type from the ast"
  [node-type recurse? ast]
  (extract-node-paths node-type recurse? #(identity true) ast))

(defn extract-node-paths
  "extracts all NodePath objects of a given type that pass the filter-fn from the ast"
  [node-type recurse? filter-fn ast]
  (let [collector #js []
        visitor-name (str "visit" node-type)
        cb (js-obj visitor-name
                   (fn [a-path] (this-as this
                                  (do (if (filter-fn a-path) (.push collector a-path))
                                      (if recurse? (.traverse this a-path) false)))))]
    (do
      (.visit recast ast cb)
      collector)))

(defn is-get-or-set? [get-or-set a-path]
  (let [callee (aget a-path "node" "callee")
        callee-type (aget callee "object" "type")
        property-name (aget callee "property" "name")]
    (and (= callee-type "ThisExpression")
         (= property-name get-or-set))))

(defn extract-gets-sets
  "extract NodePaths objects that wrap the proper CallExpression"
  [ast]
  (extract-node-paths "CallExpression"
                      true
                      #(= "MemberExpression"
                          (aget % "node" "callee" "type"))
                      ast))

(defn extract-gets [ast entry]
  (let [calls (extract-gets-sets ast)]
    (update entry
            :property-gets
            #(apply conj % (->> calls
                                (filter (partial is-get-or-set? "get"))
                                (map (partial node->property-get-or-set "get")))))))

(defn node->property-get-or-set
  "creates nodes whose :type is either ember-get or ember-set"
  [kwd node-path]
  (let [node (aget node-path "node")]
    {:location (location-map node)
     :type (str "ember-" kwd)
     :path (aget node "arguments" 0 "value")}))

(defn extract-sets [ast entry]
  (let [calls (extract-gets-sets ast)]
    (update entry
            :property-sets
            #(apply conj % (->> calls
                                (filter (partial is-get-or-set? "set"))
                                (map (partial node->property-get-or-set "set")))))))

(defn node->prototype-assignment [node]
  {:location (location-map node)
   :type "prototype-assignment"
   :path (aget node "key" "name")})

(def test-var nil)

(defn export-props [ast]
  (let [export (first (extract-all-node-paths "ExportDefaultDeclaration" false ast))]
    (if-let [export-args (try-get export "node" "declaration" "arguments")]
      (if (and (< 0 (aget export-args "length"))
               (aget (last export-args) "properties"))
        (or (aget (last export-args) "properties") [])
        nil))))

;; TODO: this method skips over instances where the defualt export is not an
;; Ember.Something.extend({}) literal
(defn extract-prototype-assignments [ast entry]
  (if-let [props (export-props ast)]
    (let [all-assignments (->> props
                          (map node->prototype-assignment))
          assignments (remove #(= "actions" (:path %)) all-assignments)]
      (update entry
              :property-sets
              #(apply conj % assignments)))
    entry))

(defn create-ember-entry [file-path module-name]
  (let [ast (parse-js-file file-path)]
    (->> (base-entry module-name)
         (extract-prototype-assignments ast)
         (extract-gets ast)
         (extract-sets ast))))

(def sample-js-path "/Users/bestra/mh/tahi/client/app/pods/components/paper-version-picker/component.js")
(create-ember-entry sample-js-path "component:paper-version-picker")
