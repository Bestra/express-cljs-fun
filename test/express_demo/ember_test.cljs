(ns express-demo.ember-test
  (:require [express-demo.ember :as sut]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest test-foo (is (= true true) "it should be equal"))
(cljs.test/run-tests 'express-demo.ember-test)

