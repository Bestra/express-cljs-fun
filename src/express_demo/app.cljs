(ns express-demo.app
  (:require [express-demo.files :as files]
            [express-demo.config :as config]
            [express-demo.registry :as registry]
            [express-demo.hbs :as hbs]
            [cljs.nodejs :as nodejs]))
(nodejs/enable-util-print!)

(defn create-template-entries [reg]
  (doseq [module-name (filter #(.includes % "template:") (keys reg))]
    (let [file-path (get reg module-name)
          src (files/read-file file-path)
          entry (hbs/create-template-entry src file-path reg)]
      (swap! registry/path-to-entry #(assoc % file-path entry)))))

(defn start-app []
  (reset! registry/path-to-module {})
  (doseq [root @config/app-roots
          src-file (files/get-source-files root)]
    (registry/register-path src-file))
  (create-template-entries @registry/module-to-path))
