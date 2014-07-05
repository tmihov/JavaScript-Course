'use strict';

var find = function(predicate, arr) {
  var result = arr.filter(predicate);
  return result[0];
};

exports.find = find;
