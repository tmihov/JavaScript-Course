"use strict";
Array.prototype.first = function() {
  if(this.length === 0) throw new Error ("Size = 0");
  else return this[0];
};

Array.prototype.range = function(from, to) {
  var result = [];

  while(from <= to) {
    result.push(from);
    from = from + 1;
  }
  return result;
};

Array.prototype.sum = function() {
  var result = 0;
  this.forEach(function(x) {
    result = result + x;
  });
  return result;
};

Array.prototype.average = function() {
  return this.sum()/this.length;
};
/*
console.log([].first());
*/
