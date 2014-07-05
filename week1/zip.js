'use strict';

var zip = function() {
  var result = [];
  var input = arguments;
  Object.keys(input).forEach(function(key) {
    //input[key] - [1, 2, 3], [4, 5, 6]
    input[key].forEach(function(x) {
      if(typeof result[input[key].indexOf(x)] === 'undefined') {
        result.push([]);
      }
      result[input[key].indexOf(x)].push(x);
    });
    //[1, 4], [2, 4], [3, 6]
  });
  return result;
};

console.log(zip([1, 2, 3], [4, 5, 6]));

exports.zip = zip;
