(ns express-demo.app
  (:require [express-demo.files :as files]
            [express-demo.config :as config]
            [express-demo.registry :as registry]
            [express-demo.hbs-entry :as hbs]
            [express-demo.ember :as ember]
            [express-demo.template-graph :as template-graph]
            [express-demo.property-graph :as property-graph]
            [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn create-entries
  "adds an entry for each .hbs template found"
  [reg']
  (reduce (fn [reg module-name]
            (let [file-path (get-in reg :module-to-path module-name)
                  src (files/read-file file-path)
                  entry (if (.includes module-name "template:")
                          (hbs/create-template-entry src module-name reg)
                          (ember/create-ember-entry src module-name))]
              (update reg :path-to-entry #(assoc % file-path entry))))
          reg'
          (keys reg')))

(defn register-all-paths
  "given the registry and app configuration, adds all file paths to the registry"
  [reg cfg]
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
            create-entries)
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

(defn entry-for-file-path
  "Given a file system path, returns the 'entry' for that path"
  [file-path]
  nil)

(defn template-parents
  "Given a file path for a template, returns all places where that
   template is invoked, or nil if none are found"
  [file-path]
  nil)

(defn bound-path-sources
  "Takes a file path and a location. Ideally works on the following:
   - Bound paths in templates: {{foo}}
   - Properties declared in Ember Object prototypes (finds the places
     where that property is 'set'.
   - Bound paths referenced in getters: this.get('foo'))"
  [file-path {:line line :column column}]
  nil)
