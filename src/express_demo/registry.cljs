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

(defn register-path [absolute-path]
  "add a two-way mapping between the module name and the file path"
  (let [[module-type m] (module-name absolute-path)]
    (if (contains? valid-module-types module-type)
      (do (swap! found-module-types #(conj % module-type))
          (swap! path-to-module #(assoc % absolute-path m))
          (swap! module-to-path #(assoc % m absolute-path))))))

