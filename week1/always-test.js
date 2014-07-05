'use strict';

var always = require('./always').always;

exports.testAlways = function(test) {
  test.equal(6, always(6)());
  test.done();
};
