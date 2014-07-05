'use strict';

var contains = require('./contains').contains;

var without = function(exclude, arr) {
  if(exclude.length > arr.length) {
    return exclude.filter(function(x) {
      return !contains(x, arr); });
  }
  else {
    return arr.filter(function(x) {
      return !contains(x, exclude); });
  }

};

exports.without = without;
