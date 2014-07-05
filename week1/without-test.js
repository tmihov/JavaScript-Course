'use strict';

var without = require('./without').without;

exports.testWithout1 = function(test) {
  test.deepEqual([1, 2, 3, 4], without([5, 6], [1, 2, 3, 4, 5, 6]));
  test.done();
};

exports.testWithout = function(test) {
  test.deepEqual([1, 2, 3, 4], without([5, 6, 10, 100, 36], [1, 2, 3, 4, 5, 6]));
  test.done();
};
