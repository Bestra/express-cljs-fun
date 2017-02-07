(ns express-demo.server
  (:require [cljs.nodejs :as nodejs]
            [express-demo.parser :as parser]
            [express-demo.app :as app]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))
(def fs (nodejs/require "fs"))

(def all-source-paths (atom #{}))

(defn say-hello! [req res]
  (.send res "Hello world!"))

#_(defn -main [path-name]
  (let [app (express)
        app-path (.join path path-name "app")
        all-files (add-files (get-source-files app-path))]
    (.get app "/" say-hello!)
    (.listen app 3000 (fn []
                        (do (println "there are " (count @all-source-paths) "files to parse")
                            (println "Server started on port 3000"))))))

(defn -main []
  (app/start-app))
(set! *main-cli-fn* -main)

