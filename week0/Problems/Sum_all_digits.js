"use strict";

var sum_of_digits = function(n) {
/*  var arr_of_numbers = n.split("")...;
  return n.reduce(function(a, b) {return a + b; });*/
  var sum = 0;
  if(n < 0)
    n = Math.abs(n);
  while(n !== 0) {
    sum += n%10;
    n = parseInt(n/10, 10);
  }
  return sum;
};

exports.sum_of_digits = sum_of_digits;
