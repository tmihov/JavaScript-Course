"use strict";

var queue = {
  arr : [],
  push : function(item) {
    this.arr.push(item);
  },
  pop : function() {
    return this.arr.pop();
  },
  isEmpty : function() {
    return this.arr.length === 0;
  }
};

var a = Object.create(queue);

console.log(a.isEmpty());
a.push(1);
a.push(2);
console.log(a.isEmpty());
console.log(a.pop());
console.log(a.pop());
