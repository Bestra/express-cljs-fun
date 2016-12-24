(ns express-demo.server
  (:require [cljs.nodejs :as nodejs]
            [express-demo.parser :as parser]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))
(def fs (nodejs/require "fs"))

(def all-source-paths (atom #{}))

(defn add-files [path-arr]
  (swap! all-source-paths #(apply conj %1 path-arr)))

(defn get-source-files [dir]
  (let [all-files (walk (.normalize path dir))
        file-types #{".hbs" ".js"}]
    (js->clj (filter
              #(contains? file-types (.extname path %1) )
              all-files))))

(defn say-hello! [req res]
  (.send res "Hello world!"))


(defn -main [path-name]
  (let [app (express)
        app-path (.join path path-name "app")
        all-files (add-files (get-source-files app-path))]
    (.get app "/" say-hello!)
    (.listen app 3000 (fn []
                        (do (println "there are " (count @all-source-paths) "files to parse")
                            (println "Server started on port 3000"))))))

(set! *main-cli-fn* -main)

