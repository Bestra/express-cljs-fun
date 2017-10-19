(ns express-demo.server
  (:require [cljs.nodejs :as nodejs]
            [express-demo.parser :as parser]
            [express-demo.app :as app]
            [express-demo.entry :as entry]
            [express-demo.property-graph :as property-graph]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))
(def fs (nodejs/require "fs"))

(def all-source-paths (atom #{}))

(defn say-hello! [req res]
  (.send res "Hello world!"))

(defn extract-loc [req]
  (let [query (.-query req)
        path (.-path query)
        line (.-line query)
        column (.-column query)]
    {:path path :line line :column column}))

(defn get-entry-item [req res]
  (let [query (.-query req)
        path (.-path query)
        line (.-line query)
        column (.-column query)
        item (entry/lookup-position (express-demo.registry/find-entry path)
                                    line
                                    column)]
    (println "looking for " path ":" line ":" column)
    (println (count item))
    (.send res (clj->js item))))

(defn get-prop-node [req res]
  (let [query (.-query req)
        path (.-path query)
        line (.-line query)
        column (.-column query)
        entry (express-demo.registry/find-entry path)
        item (entry/lookup-position entry
                                    line
                                    column)
        prop-node (property-graph/entry-item->prop-node entry item)]
    (println "looking for " path ":" line ":" column)
    (.send res (clj->js prop-node))))

(defn get-parents [req res]
  (let [query (.-query req)
        path (.-path query)
        line (.-line query)
        column (.-column query)
        entry (express-demo.registry/find-entry path)
        item (entry/lookup-position entry
                                    line
                                    column)
        parents (property-graph/predecessors entry item)]
    (println "looking for " path ":" line ":" column)
    (.send res (clj->js parents))))

(defn -main [path-name]
  (let [server (express)]
    (app/start-app)
    (.get server "/" say-hello!)
    (.get server "/entry" get-entry-item)
    (.get server "/prop_node" get-prop-node)
    (.get server "/parents" get-parents)
    (.listen server 5300 (fn []
                        (do (println "there are " (count @all-source-paths) "files to parse")
                            (println "Server started on port 5300"))))))

(set! *main-cli-fn* -main)

(defn test-fn []
  (let [p "/Users/bestra/mh/tahi/client/app/pods/components/paper-sidebar/template.hbs"
        l 38
        c 16
        entry (express-demo.registry/find-entry p)
        item (entry/lookup-position entry l c)
        node (property-graph/entry-item->prop-node entry item)]
    (println node)
    node))

(loom.graph/predecessors (:graph @property-graph/property-graph) (test-fn))

