(defproject express-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"]]
  :plugins [[lein-cljsbuild "1.1.5"]]
  :clean-targets ^{:protect false} ["resources"]
  :main ^:skip-aot express-demo.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                [org.clojure/tools.nrepl "0.2.12"]]}
                 :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
  :cljsbuild {
    :builds [{:id "server"
              :source-paths ["src-server"]
              :compiler {
                :main express-demo.server
                :output-to "resources/public/js/server-side/server.js"
                :output-dir "resources/public/js/server-side"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
