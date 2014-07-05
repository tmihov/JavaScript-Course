"use strict";

var nth_fibonacci = require("./N-thFibonacci").nth_fibonacci;

exports.testnth_fibonacciForOne = function(test) {
  test.equal(1, nth_fibonacci(1));
  test.done();
};

exports.testnth_fibonacciForTwo = function(test) {
  test.equal(1, nth_fibonacci(2));
  test.done();
};

exports.testnth_fibonacciForThree = function(test) {
  test.equal(2, nth_fibonacci(3));
  test.done();
};
exports.testnth_fibonacciForTen = function(test) {
  test.equal(55, nth_fibonacci(10));
  test.done();
};
