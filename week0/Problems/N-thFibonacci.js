"use strict";

var nth_fibonacci = function(n) {
  if(n === 0)
    return 0;
  else if(n === 1)
    return 1;
  else
  return nth_fibonacci(n-1) + nth_fibonacci(n-2);
};

exports.nth_fibonacci = nth_fibonacci;
