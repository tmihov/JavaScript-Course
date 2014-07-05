"use strict";

var is_number_balanced = require("./Is_number_balanced").is_number_balanced;

exports.testIs_number_balanced9 = function(test) {
  test.equal(true, is_number_balanced(9));
  test.done();
};

exports.testIs_number_balanced11 = function(test) {
  test.equal(true, is_number_balanced(11));
  test.done();
};

exports.testIs_number_balanced13 = function(test) {
  test.equal(false, is_number_balanced(13));
  test.done();
};

exports.testIs_number_balanced121 = function(test) {
  test.equal(true, is_number_balanced(121));
  test.done();
};

exports.testIs_number_balanced4518 = function(test) {
  test.equal(true, is_number_balanced(4518));
  test.done();
};

exports.testIs_number_balanced28471 = function(test) {
  test.equal(false, is_number_balanced(28471));
  test.done();
};

exports.testIs_number_balanced1238033 = function(test) {
  test.equal(true, is_number_balanced(1238033));
  test.done();
};
