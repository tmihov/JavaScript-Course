"use strict";

var contains = function(element, arr) {
  return arr.some(function(index) {
    return element === index;
  });
};

exports.contains = contains;
