(ns express-demo.ember-test
  (:require [express-demo.ember :as sut]
            [cljs.test :refer-macros [deftest is are testing run-tests]]))

(deftest test-base-entry
  (is (= (sut/base-entry "foo")
         {:module-name "foo"
          :property-sets []
          :property-gets []
          :actions []})))

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

(cljs.test/run-tests 'express-demo.ember-test)
