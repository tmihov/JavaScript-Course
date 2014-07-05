"use strict";

var sum_of_divisors = function(n) {
  var sum = 0;
  for(var i = 0; i <= n; i++) {
    if(n % i === 0)
      sum += i;
  }
  return sum;
};

exports.sum_of_divisors = sum_of_divisors;
