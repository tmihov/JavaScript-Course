"use strict";

var is_int_palindrome = require("./Is_int_palindrome").is_int_palindrome;

exports.testIs_int_palindrome1 = function(test) {
  test.equal(true, is_int_palindrome(1));
  test.done();
};

exports.testIs_int_palindrome42 = function(test) {
  test.equal(false, is_int_palindrome(42));
  test.done();
};

exports.testIs_int_palindrome100001 = function(test) {
  test.equal(true, is_int_palindrome(100001));
  test.done();
};

exports.testIs_int_palindrome999 = function(test) {
  test.equal(true, is_int_palindrome(999));
  test.done();
};

exports.testIs_int_palindrome123 = function(test) {
  test.equal(false, is_int_palindrome(123));
  test.done();
};
