(ns express-demo.registry
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec :as s]
            [express-demo.config :as config]
            [cljs.core.match :refer-macros [match]]))

(nodejs/enable-util-print!)
(def path (nodejs/require "path"))


(def all-paths
  "all file paths known to the app"
  (atom #{}))

(def path-to-module
  "a mapping of paths to module names"
  (atom {}))

(def module-to-path
  "a  mapping of module names to paths"
  (atom {}))

(def path-to-entry
  "maps absolute paths to actual entries"
  (atom {}))

(defn reset-all! []
  (reset! all-paths #{})
  (reset! path-to-module {})
  (reset! module-to-path {})
  (reset! path-to-entry {}))

(defn singularize [name]
  (.substring name 0 (dec  (.-length name))))

(defn make-classic-module-name [type dirs]
  (let [[classic-path _] (.split (clojure.string/join "/" dirs) ".")]
    [type (str type ":" classic-path)]))

(defn make-pod-module-name [dirs component?]
  (let [[module-type _] (.split (last dirs) ".")
        pod-path (clojure.string/join "/" (drop-last 1 dirs))]
    (match [component? module-type]
           [true "template"] ["template" (str "template:components/" pod-path)]
           :else [module-type (str module-type ":" pod-path)])))

(defn find-app-root [abs-path]
  (first (filter #(re-find (re-pattern %1) abs-path)
                 @config/app-roots)))

(defn app-path [abs-path]
  "expects an absolute path"
  (let [splitter (find-app-root abs-path)
        [_ s] (.split abs-path splitter)]
    s))

(defn template-module->rendering-context
  "given template:foo/bar go to controller:foo/bar,
   and given template:components/foo/bar go to component:foo/bar"
  [template-module]
  (let [segments (clojure.string/split template-module #"[:/]")]
    (match [segments]
           [["template" "components" & paths]]
           (str "component:"
                (clojure.string/join "/" paths))
           [["template" & paths]]
           (str "controller:"
                (clojure.string/join "/" paths)))))

(defn rendering-context->template-module
  "given controller:foo/bar go to template:foo/bar,
   and given component:foo/bar go to template:components/foo/bar"
  [context-module]
  (let [segments (clojure.string/split context-module #"[:]")]
    (match [segments]
           [["component" & paths]]
           (str "template:components/" (clojure.string/join "/" paths))
           [["controller" & paths]]
           (str "template:" (clojure.string/join "/" paths)))))

(defn import-path->file-path
  "given something like 'my-app/models/foo' where 'my-app' is the
   application name, translate that path into '/path/to/my-app/app/models/foo'"
  [import-path app-name possible-paths]
  (let [[name & rest] (.split import-path "/")
        p (clojure.string/join "/" (concat '("app") rest))
        found #(< -1 (.indexOf % p))]
    (if (= name app-name)
      (first (filter found possible-paths)))))

(defn module-name [absolute-path]
  (let [segments (clojure.string/split (app-path absolute-path) #"/")]
    (match [segments]
           [["" "pods" "components" & dirs]] (make-pod-module-name dirs true)
           [["" "pods" & dirs ]] (make-pod-module-name dirs false)
           [["" module-dir & dirs]] (make-classic-module-name (singularize module-dir) dirs)
           :else ["unknown" nil])))

(def found-module-types (atom #{}))
(def valid-module-types
  "the module types ember's resolver recognizes"
  #{"route" "controller" "template" "component"
    "view" "model" "adapter" "serializer"
    "mixin" "helper"})

(defn register-path
  "add the path to the global set of known paths.
  add a two-way mapping between the module name and the file path"
  [absolute-path]
  (let [[module-type m] (module-name absolute-path)]
    (swap! all-paths #(conj % absolute-path))
    (if (contains? valid-module-types module-type)
      (do
        (swap! found-module-types #(conj % module-type))
        (swap! path-to-module #(assoc % absolute-path m))
        (swap! module-to-path #(assoc % m absolute-path))))))
