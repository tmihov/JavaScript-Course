'use strict';

var group_by = require('./group_by').groupBy;

var countBy = function(countingFunction, arr) {

  var result = group_by(countingFunction, arr);
  Object.keys(result).forEach(function(key) {
    result[key] = result[key].length;
  });

return result;
};

exports.countBy = countBy;
