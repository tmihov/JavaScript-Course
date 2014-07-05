"use strict";

var groupBy = function(groupingFunction, arr) {
  var result = {};
  var func = groupingFunction;
  arr.forEach(function(i) {
  if(!result[func(i)]) {
    result[func(i)] = [];
  }
    result[func(i)].push(i);
  });
  return result;
};

exports.groupBy = groupBy;
