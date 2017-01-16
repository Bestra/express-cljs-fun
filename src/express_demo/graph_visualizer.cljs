(ns express-demo.graph-visualizer
  (:require [loom.graph :refer [directed? weighted? nodes edges weight]]
            [loom.alg :refer [distinct-edges]]
            [cljs.nodejs :as nodejs]
            [loom.attr :refer [attr? attr attrs]]
            [clojure.string :refer [escape]]))

(defn dot-esc
  [s]
  (escape s {\" "\\\"" \newline "\\n"}))

(defn append-string-atom
  "replace stringbuilder-like operations with an atom"
  [sb to-add]
  (swap! sb #(.concat % to-add)))

(defn dot-attrs
  [attrs]
  (when (seq attrs)
    (let [sb (atom "[")
          append-sb (partial append-string-atom sb)]
      (doseq [[k v] attrs]
        (when (pos? (.-length (str v)))
          (when (< 1 (.-length @sb))
            (append-sb \,))
          (append-sb (str \"
                          (dot-esc (if (keyword? k) (name k) (str k)))
                          "\"=\""
                          (dot-esc (if (keyword? v) (name v) (str v)))
                          \")))
      (append-sb "]")
      @sb))))

(defn dot-str
  "Renders graph g as a DOT-format string. Calls (node-label node) and
  (edge-label n1 n2) to determine what labels to use for nodes and edges,
  if any. Weights become edge labels unless a label is specified.
  Labels also include attributes when the graph satisfies AttrGraph."
  [g & {:keys [graph-name node-label edge-label]
        :or {graph-name "graph"} :as opts }]
  (let [d? (directed? g)
        w? (weighted? g)
        a? (attr? g)
        node-label (or node-label
                       (if a?
                         #(attr g % :label)
                         (constantly nil)))
        edge-label (or edge-label
                       (cond
                         a? #(if-let [a (attr g %1 %2 :label)]
                               a
                               (if w? (weight g %1 %2)))
                         w? #(weight g %1 %2)
                         :else (constantly nil)))
        sb (atom (str (if d? "digraph \"" "graph \"") (dot-esc graph-name) "\" {\n"))
        append-sb (partial append-string-atom sb)]
    (doseq [k [:graph :node :edge]]
      (when (k opts)
        (append-sb (str "  " (name k) " " (dot-attrs (k opts))))))
    (doseq [[n1 n2] (distinct-edges g)]
      (let [n1l (str (or (node-label n1) n1))
            n2l (str (or (node-label n2) n2))
            el (edge-label n1 n2)
            eattrs (assoc (if a?
                            (attrs g n1 n2) {})
                     :label el)]
        (append-sb (str "  \""
                        (dot-esc n1l)
                        (if d? "\" -> \"" "\" -- \"")
                        (dot-esc n2l)
                        \"))
        (when (or (:label eattrs) (< 1 (count eattrs)))
          (append-sb \space)
          (append-sb (dot-attrs eattrs)))
        (append-sb "\n")))
    (doseq [n (nodes g)]
      (append-sb (str "  \""
                      (dot-esc (str (or (node-label n) n)))
                      \"))
      (when-let [nattrs (when a?
                          (dot-attrs (attrs g n)))]
        (append-sb \space)
        (append-sb nattrs))
      (append-sb "\n"))
    (append-sb "}")
    @sb))

(defn open-graph
  "use childProcess.execSync to invoke graphvis and then open"
  [g]
  (let [child-process (nodejs/require "child_process")
        fs (nodejs/require "fs")]
    (.writeFileSync fs "graph.dot" (dot-str g))
    (.execSync child-process "dot -Tsvg -O graph.dot")))
