(ns express-demo.template-graph
  "contains the logic for creating the DAG of routes, rendering contexts, and templates"
  (:require [cljs.nodejs :as nodejs]
            [loom.graph :as graph]
            [express-demo.hbs-entry :as hbs]
            [express-demo.registry :as registry]
            [cljs.core.match :refer-macros [match]]
            [express-demo.graph-visualizer :as vis]))

(defn context-pairs-from-invocations [template-entry]
  (let [create-pair (fn [template-module]
                      ([(registry/template-module->rendering-context template-module)
                         template-module]))
        context-pairs (->> (hbs/invoked-template-names template-entry)
                           (map create-pair))]
    context-pairs))

(defn add-template-entry
  "adds the template to the given graph.  For each invocation, check if the template and
  the rendering context exist, and connect them to the current template.
  connect any partials to the current template"
  [g t reg]
  (let [parent (:module-name t)
        possible-children (context-pairs-from-invocations t)
        module-to-path (reg :module-to-path)
        path-to-module (reg :path-to-module)
        registered-children (map (fn [child-pair]
                                   (filterv #(contains? module-to-path %) child-pair))
                                 possible-children)
        superclass-edge (if-let [sp (get-in t [:module-info :superclass-path])]
                          [[[(path-to-module sp) parent]]])
        mixin-edges (mapv (fn [p]
                            [[(path-to-module p) parent]])
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

(defn init-templates [reg]
  (let [entries (vals (reg :path-to-entry))]
    (reduce #(add-template-entry %1 %2 reg)
            (graph/digraph)
            entries)))

#_(vis/open-graph
 #_(add-template-entry (graph/digraph)
                     (registry/find-entry "template:components/journal-thumbnail")
                     @registry/module-to-path))

(def fs (nodejs/require "fs"))

(def child-process (nodejs/require "child_process"))

(defn write-statistics-file [reg g]
  (let [node-stats (fn [node]
                     (let [module-name node
                           module-type (first (.split node ":"))
                           inputs (count (graph/predecessors g node))
                           outputs (count (graph/successors g node))
                           file-path (get-in reg :module-to-path node)
                           line-count (.execSync child-process (str "wc -l " file-path " | awk '{print $1}'"))
                           ]
                       (clojure.string/join "," [module-type module-name inputs outputs line-count])))
        stats (concat "moduleType,moduleName,inputs,outputs,lineCount\n" (map node-stats (graph/nodes g)))]
    (.writeFileSync fs "template-stats.csv" (clojure.string/join "" stats))))

#_(write-statistics-file)
