"use strict";

var contains = function(element, arr) {
  return arr.some(function(index) {
    return element === index;
  });
};

var containsAll = function(elements, arr) {
  return elements.every(function(i) {
    return contains(i, arr);
  });

};

exports.containsAll = containsAll;
