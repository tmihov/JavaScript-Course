"use strict";

var is_int_palindrome = function(n) {
  var reversed_list = n.toString().split("").reverse();
  return n.toString().split("").join(" ") === reversed_list.join(" ");

};

exports.is_int_palindrome = is_int_palindrome;
