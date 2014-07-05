"use strict";

var is_prime = require("./Is_prime").is_prime;

exports.testIs_prime1 = function(test) {
  test.equal(false, is_prime(1));
  test.done();
};

exports.testIs_prime2 = function(test) {
  test.equal(true, is_prime(2));
  test.done();
};

exports.testIs_prime8 = function(test) {
  test.equal(false, is_prime(8));
  test.done();
};

exports.testIs_prime11 = function(test) {
  test.equal(true, is_prime(11));
  test.done();
};

exports.testIs_primeMinus10 = function(test) {
  test.equal(false, is_prime(-10));
  test.done();
};

exports.testIs_prime1 = function(test) {
  test.equal(false, is_prime(1));
  test.done();
};
