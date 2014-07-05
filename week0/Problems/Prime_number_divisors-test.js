"use strict";

var prime_number_of_divisors = require("./Prime_number_divisors").prime_number_of_divisors;

exports.testPrime_number_of_divisors7 = function(test) {
  test.equal(true, prime_number_of_divisors(7));
  test.done();
};

exports.testPrime_number_of_divisors8 = function(test) {
  test.equal(false, prime_number_of_divisors(8));
  test.done();
};

exports.testPrime_number_of_divisors9 = function(test) {
  test.equal(true, prime_number_of_divisors(9));
  test.done();
};
