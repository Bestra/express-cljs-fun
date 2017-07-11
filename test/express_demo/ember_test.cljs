(ns express-demo.ember-test
  (:require [express-demo.ember :as sut]
            [cljs.test :refer-macros [deftest is are testing run-tests]]))

(defn array-to-ast [a]
  (-> (clojure.string/join "\n" a)
      sut/parse-str))

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

(deftest extract-prototype-assignments
  (are [x y] (= (->> {:property-sets []}
                     (sut/extract-prototype-assignments (array-to-ast x))
                     :property-sets
                     (map :path))
                y)
    ["export default Foo.extend({"
     "  a: 'a property',"
     "  b(x) { return x + 1},"
     "  c: Ember.computed('bar', function() {}),"
     "  actions: {"
     "    doStuff() {}"
     "  }"
     "})"]
    ["a" "b" "c"]
    ))

(deftest extract-gets
  (are [x y] (= (->> {:property-gets []}
                     (sut/extract-gets (array-to-ast x)))
                y)
    ["export default Foo.extend({"
     "  c: Ember.computed('bar', function() { this.get('bar'), that.get('baz')}),"
     "  actions: {"
     "    doStuff() { this.get('foo')}"
     "  }"
     "})"]
    ["foo" "bar"]
    ))

;; (deftest extract-sets)

(cljs.test/run-tests 'express-demo.ember-test)

(->> ["export default Foo.extend({"
      "  c: Ember.computed('bar', function() { this.get('bar'), that.get('baz')}),"
      "  actions: {"
      "    doStuff() { this.get('foo')}"
      "  }"
      "})"]
     array-to-ast
     sut/extract-gets-sets
     (filter (partial sut/is-get-or-set? "get")))

