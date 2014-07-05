"use strict";

var is_prime = function(n) {
  var sum = 0;
  for(var i = 0; i <= n; i++) {
    if(n % i === 0)
      sum += i;
  }
  return sum === n + 1;
};

exports.is_prime = is_prime;
