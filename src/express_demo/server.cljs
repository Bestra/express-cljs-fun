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

(defn get-entry-item [req res]
  (.send res (.-query req)))

(defn -main [path-name]
  (let [server (express)]
    (app/start-app)
    (.get server "/" say-hello!)
    (.get server "/entry" get-entry-item)
    (.listen server 3000 (fn []
                        (do (println "there are " (count @all-source-paths) "files to parse")
                            (println "Server started on port 3000"))))))

(set! *main-cli-fn* -main)

