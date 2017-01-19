(ns express-demo.template-graph
  "contains the logic for creating the DAG of routes, rendering contexts, and templates"
  (:require [cljs.nodejs :as nodejs]
            [loom.graph :as graph]
            [express-demo.registry :as registry]
            [cljs.core.match :refer-macros [match]]
            [express-demo.graph-visualizer :as vis]))

(def template-graph
  "the stored graph of template invocations"
  (atom (graph/digraph)))

(defn template-invocations->context-pairs [t]
  (let [create-pair (fn [template-module]
                      (let [context-module (registry/template-module->rendering-context template-module)]
                        [context-module template-module]))
        context-pairs (->> t
                            :invocations
                            (map #(str "template:components/" (:name %)))
                            (map create-pair))]
    context-pairs))

(defn init-templates [entries]
  (reduce #(add-template-entry %1 %2 @registry/module-to-path)
          (graph/digraph)
          entries))

(defn add-template-entry
  "adds the template to the given graph.  For each invocation, check if the template and
  the rendering context exist, and connect them to the current template.
  connect any partials to the current template"
  [g t reg]
  (let [parent (:module-name t)
        possible-children (template-invocations->context-pairs t)
        registered-children (map (fn [child-pair]
                                   (filterv #(contains? reg %) child-pair))
                                 possible-children)
        superclass-edge (if-let [sp (get-in t [:module-info :superclass-path])]
                          [[[(@registry/path-to-module sp) parent]]])
        mixin-edges (mapv (fn [p]
                            [[(@registry/path-to-module p) parent]])
                          (get-in t [:module-info :mixin-paths]))
        partial-edges (mapv (fn [p]
                              [[parent (str "template:" p)]])
                            (set (map :name (:partials t))))
        invoked-child-edges (mapv (fn [child-pair]
                            (match [child-pair]
                                   [[c foo]] [[parent c] [c foo]]
                                   [[x]] [[parent x]]))

                                  registered-children)
        all-edges (concat partial-edges invoked-child-edges superclass-edge mixin-edges)]
    (apply graph/build-graph `[~g ~parent ~@(apply concat all-edges)])))

(vis/open-graph
 (add-template-entry (graph/digraph)
                     (registry/find-entry "template:components/journal-thumbnail")
                     @registry/module-to-path))
