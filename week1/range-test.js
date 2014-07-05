'use strict';

var range = require('./range').range;

exports.testRange = function(test) {
  test.deepEqual([1, 2, 3, 4, 5, 6], range(1, 6));
  test.done();
};
