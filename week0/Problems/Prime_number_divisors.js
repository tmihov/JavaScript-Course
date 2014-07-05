"use strict";

var is_prime = function(n) {
  var sum = 0;
  for(var i = 0; i <= n; i++) {
    if(n % i === 0)
      sum += i;
  }
  return sum === n + 1;
};

var number_of_divisors = function(n) {
  var number = 0;
  for(var i = 0; i <= n; i++) {
    if(n % i === 0)
      number += 1;
  }
  return number;
};

var prime_number_of_divisors = function(n) {
  var number = number_of_divisors(n);
  return is_prime(number);
};

exports.prime_number_of_divisors = prime_number_of_divisors;
