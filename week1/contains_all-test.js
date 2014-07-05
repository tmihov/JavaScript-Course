"use strict";

var contains_all = require("./contains_all").containsAll;

exports.testContainsAll1 = function(test) {
  test.equal(true, contains_all([1, 2], [1, 2, 3]));
  test.done();
};

exports.testContainsAll2 = function(test) {
  test.equal(true, contains_all([], [11, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  test.done();
};


exports.testContainsAll3 = function(test) {
  test.equal(false, contains_all([6, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
  test.done();
};

