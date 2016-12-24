(ns express-demo.server
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))
(def htmlbars (nodejs/require "htmlbars/dist/cjs/htmlbars-syntax"))
(def fs (nodejs/require "fs"))

(defn parse-hbs-file [path]
  (let [src (.readFileSync fs path "utf8")]
    (.parse htmlbars src)))

(defn get-source-files [dir]
  (let [all-files (walk (.normalize path dir))
        file-types #{".hbs" ".js"}]
    (filter
     #(contains? file-types (.extname path %1) )
     all-files)))

(defn say-hello! [req res]
  (.send res "Hello world!"))

(defn -main []
  (let [app (express)]
    (.get app "/" say-hello!)
    (.listen app 3000 (fn []
                        (println "Server started on port 3000")))))

(set! *main-cli-fn* -main)
