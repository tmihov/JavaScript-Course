"use strict";

var sum_of_divisors = require("./Sum_of_divisors").sum_of_divisors;

exports.testSum_of_divisors8 = function(test) {
  test.equal(15, sum_of_divisors(8));
  test.done();
};

exports.testSum_of_divisors7 = function(test) {
  test.equal(8, sum_of_divisors(7));
  test.done();
};

exports.testSum_of_divisors1 = function(test) {
  test.equal(1, sum_of_divisors(1));
  test.done();
};

exports.testSum_of_divisors1000 = function(test) {
  test.equal(2340, sum_of_divisors(1000));
  test.done();
};
