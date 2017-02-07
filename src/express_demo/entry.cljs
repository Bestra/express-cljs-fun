(ns express-demo.entry
  (:require [clojure.spec :as s]))

(s/def ::line nat-int?)
(s/def ::column nat-int?)
(s/def ::position (s/keys :req [::line ::column]))
(s/def ::start ::position)
(s/def ::end ::position)
(s/def ::loc (s/keys :req [::start ::end]))
(s/def ::module-name string?)
(s/def ::path-name string?)

(defn try-get
  (reduce (fn [obj k]
            (if obj (aget obj k) nil))
          x
          key-list))

(defn get-js-keys [ns x key-list]
  (into {} (for [k key-list]
             [(keyword ns k) (aget x k)])))
