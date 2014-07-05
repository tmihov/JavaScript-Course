'use strict';

var contains = require('./contains').contains;
var symbols = ['.', '?', '!', ',', '-', '_', ':', ';', '(', ')', '[', ']', '{', '}' ];

var wordsHistogram = function(string) {
  var result = {};
  var str = string.toLowerCase().split('');
  str.filter(contains(symbols, str));
  console.log(str);
/*  str.forEach(function(x) {
    if(contains(x, symbols) ) {
      result = str.slice(str.indexOf(x), str.indexOf(x)+1);

    }
  });
*/


  //.join('').split(' ');
 // console.log(result);

  //return result;
};
var str = 'A function, is a, function with, a very functional function!';
console.log(wordsHistogram(str));
exports.wordsHistogram = wordsHistogram;
