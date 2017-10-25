(ns express-demo.registry
  (:require [cljs.nodejs :as nodejs]
            [clojure.spec.alpha :as s]
            [express-demo.config :as config]
            [cljs.core.match :refer-macros [match]]))

(nodejs/enable-util-print!)
(def path (nodejs/require "path"))

(defn module-type [str]
  (first (.split str ":")))

(defn empty-registry []
  {:all-paths #{}
   :path-to-module {}
   :module-to-path {}
   :path-to-entry {}})

(defn register-path
  "add the path to the global set of known paths.
  add a two-way mapping between the module name and the file path"
  [reg absolute-path]
  (let [[module-type m] (module-name absolute-path)]
    (if (contains? valid-module-types module-type)
      (-> reg
          (update :all-paths #(conj % absolute-path))
          (update :path-to-module #(assoc % absolute-path m))
          (update :module-to-path #(assoc % m absolute-path)))
      reg)))

(defn register-entry
  [reg entry]
  )
(defn find-entry
  "finds an entry in the registry based on an absolute
  path or a module name"
  [str reg]
  (if (= (first str) "/")
    (get-in reg :path-to-entry str)
    (get-in reg :path-to-entry
            (get-in reg :module-to-path str))))

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
  "given template:foo/bar returns controller:foo/bar,
   and given template:components/foo/bar returns component:foo/bar"
  [template-module-str]
  (let [segments (clojure.string/split template-module-str #"[:/]")]
    (match [segments]
           [["template" "components" & paths]]
           (str "component:"
                (clojure.string/join "/" paths))
           [["template" & paths]]
           (str "controller:"
                (clojure.string/join "/" paths)))))

(defn rendering-context->template-module
  "given controller:foo/bar returns template:foo/bar,
   and given component:foo/bar returns template:components/foo/bar"
  [context-module-str]
  (let [segments (clojure.string/split context-module-str #"[:]")]
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

(def valid-module-types
  "the module types ember's resolver recognizes"
  #{"route" "controller" "template" "component"
    "view" "model" "adapter" "serializer"
    "mixin" "helper"})

