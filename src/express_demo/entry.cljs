(ns express-demo.entry
  (:require [clojure.spec.alpha :as s]))

(s/def ::line nat-int?)
(s/def ::column nat-int?)
(s/def ::position (s/keys :req [::line ::column]))
(s/def ::start ::position)
(s/def ::end ::position)
(s/def ::loc (s/keys :req [::start ::end]))
(s/def ::module-name string?)
(s/def ::path-name string?)

(defn try-get [x & key-list]
  (reduce (fn [obj k]
            (when obj (aget obj k)))
          x
          key-list))

(defn get-js-keys [ns x key-list]
  (into {} (for [k key-list]
             [(keyword ns k) (aget x k)])))

(defn compare-positions [needle haystack]
  (cond
    (< (:line needle) (:line haystack)) -1
    (> (:line needle) (:line haystack)) 1
    (< (:column needle) (:column haystack)) -1
    (> (:column needle) (:column haystack)) 1
    :else 0))

(defn contains-position?
  "returns true if the position is between the parent's start and end"
  [{parent-start :start parent-end :end} position]
  (let [start-comp (compare-positions position parent-start)
        end-comp (compare-positions position parent-end)]
    (println parent-start parent-end position ":" start-comp end-comp)
    (and (< -1 start-comp)
         (> 1 end-comp))))

(defn contains-item? [container item]
  (and (contains-position? (:location container) (get-in item [:location :start]))
       (contains-position? (:location container) (get-in item [:location :end]))))

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
    (->> containing-parents
         (sort (complement contains-item?))
         first)))
