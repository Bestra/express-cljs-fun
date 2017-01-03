(ns express-demo.ember
  (:require [cljs.nodejs :as nodejs]
             [express-demo.files :as files]))

(nodejs/enable-util-print!)
(def recast (nodejs/require "recast"))
(def babel (nodejs/require "babel-core"))

(def sample-js-path "/Users/bestra/mh/tahi/client/app/pods/components/admin-role/component.js")

(defn base-entry []
  {:property-sets []
   :property-gets []
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

(defn is-get-or-set? [get-or-set a-path]
  (let [callee (aget a-path "node" "callee")
        callee-type (aget callee "object" "type")
        property-name (aget callee "property" "name")]
    (and (= callee-type "ThisExpression")
         (= property-name get-or-set))) )

(defn extract-gets [ast entry]
  (let [calls (extract-paths "CallExpression" true ast)]
    (update entry
            :property-gets
            #(apply conj % (->> calls
                                (filter (partial is-get-or-set? "get"))
                                (map node->property-get))))))

(defn node->property-get [node-path]
  (let [node (aget node-path "node")]
    {:location (location-map node)
     :key (aget node "arguments" 0 "value")}))

(defn extract-sets [ast entry]
  (let [calls (extract-paths "CallExpression" true ast)]
    (update entry
            :property-sets
            #(apply conj % (->> calls
                                (filter (partial is-get-or-set? "set"))
                                (map node->property-get))))))

(defn node->prototype-assignment [node]
  {:location (location-map node)
   :set-type "prototype-assignment"
   :key (aget node "key" "name")})

(def test-var nil)

(defn export-props [ast]
  (let [export (first (extract-paths "ExportDefaultDeclaration" false ast))
        export-args (try-get export "node" "declaration" "arguments")]
    (if (and (< 0 (aget export-args "length"))
             (aget (last export-args) "properties"))
      (or (aget (last export-args) "properties") [])
      nil)))

(defn extract-prototype-assignments [ast entry]
  (if-let [props (export-props ast)]
    (let [assignments (->> props
                          (map node->prototype-assignment)
                          (remove #(= "actions" (:key %))))]
      (update entry
              :property-sets
              #(apply conj % assignments)))
    entry))

(defn create-ember-entry [file-path]
  (let [ast (parse-js-file file-path)]
    (->> (base-entry)
         (extract-prototype-assignments ast)
         (extract-gets ast)
         (extract-sets ast))))

(defn parse-str [str]
  (.parse recast str (js-obj "esprima" babel)))

(defn parse-js-file [path]
  (parse-str (files/read-file path)))

(defn extract-paths [node-type recurse? ast]
  (let [collector #js []
        visitor-name (str "visit" node-type)
        cb (js-obj visitor-name
                   (fn [a-path] (this-as this
                                  (do (.push collector a-path)
                                      (if recurse? (.traverse this a-path) false)))))]
    (do
      (.visit recast ast cb)
      collector)))

(defn visit-imports [file-path]
  (let [foo #js []
        visitor-name (str "visit" "ImportDefaultSpecifier")
        ast (parse-js-file file-path)
        cb (js-obj visitor-name (fn [a-path]
                                  (let [out (aget a-path "node" "local" "name")]
                                    (.push foo out)
                                    false)))]
    (do (print "visiting")
        (.visit recast ast cb)
        foo)))
