"use strict";

var sum = function(a, b) {
  if(typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new TypeError("a and/or b are not numbers");
};

var concat = function(a, b) {
  if(!(typeof a === "string" && typeof b === "string")) {
      throw new TypeError("a and/or b are not strings");
  }
  return a + b;
};

exports.sum = sum;
exports.concat = concat;
