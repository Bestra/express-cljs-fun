(ns express-demo.property-graph
  (:require [cljs.nodejs :as nodejs]
            [express-demo.template-graph :as template-graph]
            [loom.graph :as graph]
            [express-demo.registry :as registry]
            [cljs.core.match :refer-macros [match]]
            [express-demo.graph-visualizer :as vis]))



;;for each template node:
;; add a binding:node for each binding
;; "nodeType|propName|moduleName|startLine|startColumn"
;;
;; "binding|someVar|template:components/my-template|12|25"
;; "invocation|some-component|someVar|template:components/my-template|12|25"
;; "set|someVar|controller:my-controller|12|25"
