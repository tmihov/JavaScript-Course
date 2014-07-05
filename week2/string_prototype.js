"use strict";

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasharize = function() {
  return this.split("_").concat("-");
};

Array.prototype.range = function(from, to) {
  var result = [];

  while(from <= to) {
    result.push(from);
    from = from + 1;
  }
  return result;
};

String.prototype.times = function(amount) {
  var that = this;
  return [].range(1, amount).map(function(_) {
    return that;
  }).join(" ");
};

String.prototype.blank = function() {
  return this.split(" ").join("").length === 0;
};
