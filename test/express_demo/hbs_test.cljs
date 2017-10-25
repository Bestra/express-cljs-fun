(ns express-demo.hbs-test
  (:require [express-demo.hbs :as sut]
            [pjstadig.humane-test-output]
            [cljs.test :refer-macros [deftest is are testing run-tests]]))

(defn array-to-ast [a]
  (-> (clojure.string/join "\n" a)
      sut/parse?))

(deftest test-base-entry
  (is (= (sut/base-entry "foo")
         {:module-name "foo"
          :property-sets []
          :property-gets []
          :actions []})))

(def test-hbs-file "<div> Welcome!</div>
{{bound.path}}
{{#some-component foo=bar as |stuff|}}
  There's {{stuff}} here.
{{/some-component}}
{{partial \"foo-bar\"}}

<button {{action \"clicked\"}}>Click me</button>
{{another-component
  name=\"bob\"
  clicked=(action \"clicked\")}}

{{#each items as |item|}}
  {{item.name}}
{{/each}}")

(deftest module-info
  (let [arr-to-info (fn [arr]
                      (-> (clojure.string/join "\n" arr)
                          sut/parse-str
                          (sut/create-module-info {})))]
    (are [x y] (= (arr-to-info x) y)
      ["import Ember from 'ember';"
       "export default Ember.Component.extend({});"]
      {:constructor-name "Ember.Component"
       :is-ember-subclass? true
       :superclass-path  nil
       :mixin-paths []}
      ["import Super from 'my-app/components/super';"
       "import Foo from 'my-app/foo';"
       "import Bar from 'my-app/bar';"
       "export default Super.extend(Foo, Bar, {});"]
      {:constructor-name "Super"
       :is-ember-subclass? false
       :superclass-path  {:app "my-app/components/super"}
       :mixin-paths [{:app "my-app/foo"} {:app "my-app/bar"}]})))



(defn -main []
  (cljs.test/run-tests 'express-demo.hbs-test))

(set! *main-cli-fn* -main)
