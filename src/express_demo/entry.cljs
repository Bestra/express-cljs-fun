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

;; (defn try-get
;;   (reduce (fn [obj k]
;;             (if obj (aget obj k) nil))
;;           x
;;           key-list))

(defn get-js-keys [ns x key-list]
  (into {} (for [k key-list]
             [(keyword ns k) (aget x k)])))

(defn contains-position?
  "returns true if the position is between the parent's start and end"
  [{parent-start :start parent-end :end} position]
  (cond
    (< (:line position) (:line parent-start)) false
    (> (:line position) (:line parent-end)) false
    (and (= (:line position) (:line parent-start))
         (< (:column position) (:column parent-start))) false
    (and (= (:line position) (:line parent-end))
         (> (:column position) (:column parent-end))) false
    :else true))

(defn lookup-position [entry line column]
  (let [position {:line line :column column}
        possible-parents (mapcat #(get entry % [])
                                 [:property-sets
                                  :property-gets
                                  :bindings
                                  :actions
                                  :invocations
                                  :partials
                                  :block-params])
        containing-parents (filter #(contains-position? (:location %) position)
                                   possible-parents)]
    containing-parents))

#_(lookup-position
 (express-demo.registry/find-entry "template:components/authors-task")
 23
 40)

