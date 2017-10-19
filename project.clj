(defproject express-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.671"]
                 [org.clojure/test.check "0.9.0"]
                 [org.clojars.cemerick/loom "0.6.1-SNAPSHOT"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [pjstadig/humane-test-output "0.8.3"]]
  :plugins [[lein-cljsbuild "1.1.5"]]
  :clean-targets ^{:protect false} ["resources"]
  :main ^:skip-aot express-demo.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                [org.clojure/tools.nrepl "0.2.13"]]}
                 :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
  :cljsbuild {
    :builds [{:id "server"
              :source-paths ["src"]
              :compiler {
                :main express-demo.server
                :output-to "resources/public/js/server-side/server.js"
                :output-dir "resources/public/js/server-side"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
