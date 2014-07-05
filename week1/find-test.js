'use strict';

var find = require('./find').find;

exports.testFind = function(test) {
  test.equal(2, find(function(x) {
    return x%2 === 0;
  }, [1,2,3,4]));
  test.done();
};
