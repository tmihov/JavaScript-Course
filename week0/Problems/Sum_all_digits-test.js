"use strict";

var sum_all_digits = require("./Sum_all_digits").sum_of_digits;

exports.testsum_all_digits1 = function(test) {
  test.equal(43, sum_all_digits(1325132435356));
  test.done();
};

exports.testsum_all_digits2 = function(test) {
  test.equal(6, sum_all_digits(123));
  test.done();
};

exports.testsum_all_digits3 = function(test) {
  test.equal(6, sum_all_digits(6));
  test.done();
};

exports.testsum_all_digits4 = function(test) {
  test.equal(1, sum_all_digits(-10));
  test.done();
};
