"use strict";

var sum_min_max = require("./Sum_min_max").sum_of_min_and_max;

exports.testsum_min_max1 = function(test) {
  test.equal(10, sum_min_max([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.testsum_min_max2 = function(test) {
  test.equal(90, sum_min_max([-10,5,10,100]));
  test.done();
};


exports.testsum_min_max3 = function(test) {
  test.equal(2, sum_min_max([1]));
  test.done();
};

