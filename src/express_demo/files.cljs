(ns express-demo.files
  (:require [cljs.nodejs :as nodejs]))

(def walk (nodejs/require "walk-sync"))
(def path (nodejs/require "path"))
(def fs (nodejs/require "fs"))

(defn get-source-files [dir]
  "recursively walks dir and returns absolute paths for all hbs and js files"
  (let [all-files (walk (.normalize path dir))
        file-types #{".hbs" ".js"}]
    (js->clj (->> all-files
                  (filter #(contains? file-types (.extname path %)))
                  (map #(.join path dir %))))))

(defn read-file [file-path]
  (.readFileSync fs file-path "utf8"))
