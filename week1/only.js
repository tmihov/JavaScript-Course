'use strict';

var only = function(type, arr) {
  return arr.every(function(i) {
    return type === typeof(i);
  });
};

exports.only = only;
