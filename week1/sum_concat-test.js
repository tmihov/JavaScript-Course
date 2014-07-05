"use strict";

var sum = require("./sum_concat").sum;
var concat = require("./sum_concat").concat;

exports.testSumWithNumbers = function(test) {
  test.equal(36, sum(5, 31));
  test.done();
};

exports.testSumWithStrings = function(test) {
  test.throws(function() {
    sum("abc", "vvv");
  });
  test.done();
};

exports.testConcatWithStrings = function(test) {
  test.equal("Panda", concat("Pa", "nda"));
  test.done();
};

exports.testConcatWithNumber = function(test) {
  test.throws(function() {
    concat(1, "a");
  });
  test.done();
};
