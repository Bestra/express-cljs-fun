(ns express-demo.app
  (:require [express-demo.files :as files]
            [express-demo.config :as config]
            [express-demo.registry :as registry]
            [express-demo.hbs :as hbs]
            [express-demo.ember :as ember]
            [express-demo.template-graph :as template-graph]
            [cljs.nodejs :as nodejs]))
(nodejs/enable-util-print!)

(defn create-template-entries [reg]
  (doseq [module-name (filter #(.includes % "template:") (keys reg))]
    (let [file-path (get reg module-name)
          src (files/read-file file-path)
          entry (hbs/create-template-entry src module-name reg)]
      (swap! registry/path-to-entry #(assoc % file-path entry)))))

(defn create-ember-entries [reg]
  (doseq [module-name (remove #(.includes % "template:") (keys reg))]
    (let [file-path (get reg module-name)
          entry (ember/create-ember-entry file-path)]
      (swap! registry/path-to-entry #(assoc % file-path entry)))))

(defn start-app []
  (reset! registry/path-to-module {})
  (println "Registering paths")
  (doseq [root @config/app-roots
          src-file (files/get-source-files root)]
    (registry/register-path src-file))
  (println "Creating template entries")
  (create-template-entries @registry/module-to-path)
  (println "Creating ember entries")
  (create-ember-entries @registry/module-to-path)
  (println "Creating template graph")
  (swap! template-graph/template-graph
         #(template-graph/init-templates (vals @registry/path-to-entry))))

