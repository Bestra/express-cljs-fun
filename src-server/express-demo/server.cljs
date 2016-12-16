(ns express-demo.server
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))

(defn get-files [dir, extensions]
  (walk (.resolve path dir)))

(defn say-hello! [req res]
  (.send res "Hello world!"))

(defn -main []
  (let [app (express)]
    (.get app "/" say-hello!)
    (.listen app 3000 (fn []
                        (println "Server started on port 3000")))))

(set! *main-cli-fn* -main)
