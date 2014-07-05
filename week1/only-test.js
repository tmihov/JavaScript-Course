'use strict';

var only = require('./only').only;

exports.testOnly1 = function(test) {
  test.equal(false, only('string', [1,2,3,4]));
  test.done();
};

exports.testOnly1 = function(test) {
  test.equal(true, only('number', [1,2,3,4]));
  test.done();
};
