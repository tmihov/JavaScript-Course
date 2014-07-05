"use strict";

var sum_of_min_and_max = function(arr) {
  if(arr.length === 0)
    return 0;

  var min = Math.min.apply(Math, arr);
  var max = Math.max.apply(Math, arr);

  return min + max;
};


exports.sum_of_min_and_max = sum_of_min_and_max;
