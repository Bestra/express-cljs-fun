(ns express-demo.server.parser
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)
(def fs (nodejs/require "fs"))
(def path (nodejs/require "path"))
(def htmlbars (nodejs/require "htmlbars/dist/cjs/htmlbars-syntax"))
(def recast (nodejs/require "recast"))
(def babel (nodejs/require "babel-core"))

(defn parse-hbs-file [path]
  (let [src (.readFileSync fs path "utf8")]
    (.parse htmlbars src)))

(defn parse-js-file [path]
  (let [src (.readFileSync fs path "utf8")]
    (.parse recast src (js-obj "esprima" babel))))

(def sample-path "/Users/bestra/mh/tahi/client/app/pods/components/admin-role/component.js")


(defn visit-imports [path]
  (let [foo #js []
        ast (parse-js-file path)
        cb #js {:visitImportDefaultSpecifier (fn [a-path]
                                               (let [out (aget a-path "node" "local" "name")]
                                                 (do (.push foo out))))}]
    (do (print "visiting")
        (.visit recast ast cb)
        foo)))

(visit-imports sample-path)
