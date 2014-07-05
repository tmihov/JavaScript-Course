"use strict";

var contains = require("./contains").contains;

exports.testContains1 = function(test) {
  test.equal(true, contains(1, [1, 2, 3]));
  test.done();
};

exports.testContains2 = function(test) {
  test.equal(false, contains(6, [1, 2, 3]));
  test.done();
};
