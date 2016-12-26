(ns express-demo.registry
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec :as s]
            [express-demo.config :as config]
            [cljs.core.match :refer-macros [match]]))

(nodejs/enable-util-print!)
(def path (nodejs/require "path"))


(def registry-for-path (atom {}))
(def registry-for-module-name (atom {}))

(defn singularize [name]
  (.substring name 0 (dec  (.-length name))))

(defn make-classic-module-name [type dirs]
  (let [[classic-path _] (.split (clojure.string/join "/" dirs) ".")]
    (str type ":" classic-path)))

(defn make-pod-module-name [dirs component?]
  (let [[module-type _] (.split (last dirs) ".")
        pod-path (clojure.string/join "/" (drop-last 1 dirs))]
    (match [component? module-type]
           [true "template"] (str "template:components/" pod-path)
           :else (str module-type ":" pod-path))))

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
           :else nil)))

(def sample-js-path "/Users/bestra/mh/tahi/client/app/pods/components/admin-role/component.js")
(def sample-hbs-path "/Users/bestra/mh/tahi/client/app/pods/components/admin-role/template.hbs")
(def sample-classic-path "/Users/bestra/mh/tahi/client/app/components/admin-role.js")
(def sample-js-path-2 "/Users/bestra/mh/tahi/client/app/pods/paper/index/route.js")


;; (module-name sample-classic-path)
