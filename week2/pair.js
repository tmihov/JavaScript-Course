"use strict";

function Pair(left, right) {
  if(!(this instanceof Pair)) {
    return new Pair(left, right);
  }
}
Pair.prototype.equals = function(pair) {
  return this.left === pair.left && this.right === pair.right;
};

Pair.prototype.toString = function() {
  return "({" + this.left.toString() + "}, " + this.right.toString() +"})";
};

Pair.prototype.toList = function() {
  return [this.left, this.right];
};

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};
