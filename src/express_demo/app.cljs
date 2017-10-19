(ns express-demo.app
  (:require [express-demo.files :as files]
            [express-demo.config :as config]
            [express-demo.registry :as registry]
            [express-demo.hbs :as hbs]
            [express-demo.ember :as ember]
            [express-demo.template-graph :as template-graph]
            [express-demo.property-graph :as property-graph]
            [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn create-template-entries [reg']
  (reduce (fn [reg module-name]
            (let [file-path (get-in reg :module-to-path module-name)
                  src (files/read-file file-path)
                  entry (hbs/create-template-entry src module-name reg)]
              (update reg :path-to-entry #(assoc % file-path entry))))
          reg'
          (filter #(.includes % "template:") (keys reg'))))

(defn create-ember-entries [reg']
  (reduce (fn [reg module-name]
            (let [file-path (get-in reg :module-to-path module-name)
                  src (files/read-file file-path)
                  entry (ember/create-ember-entry src module-name)]
              (update reg :path-to-entry #(assoc % file-path entry))))
          reg'
          (remove #(.includes % "template:") (keys reg'))))

(defn register-all-paths [reg cfg]
  (let [all-files
        (for [root cfg
              src-file (files/get-source-files root)]
          src-file)]
    (reduce (fn [acc a-file]
              (registry/register-path acc a-file))
            reg
            all-files)))

(defn start-app []
  (let [cfg @config/app-roots
        reg
        (-> (registry/empty-registry)
            (register-all-paths cfg)
            create-template-entries
            create-ember-entries)
        t-graph (template-graph/init-templates reg)
        p-graph (property-graph/setup-property-graph t-graph reg)]
    {:registry reg
     :template-graph t-graph
     :property-graph p-graph}))

(defn entry-item->prop-node [entry entry-item]
  (let [property-index (:index @property-graph/property-graph)
        items (get-in property-index [(:module-name entry) (:type entry-item)])
        prop (first (filter (fn [n]
                              (= (:start n) (get-in entry-item [:location :start])))
                            items))]
    prop))

#_(let [entry (first (vals @registry/path-to-entry))
      item (first (:property-sets entry))]
  (property-graph/entry-item->prop-node entry item))
