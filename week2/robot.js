"use strict";

var Point = require("./point");

function Robot(startPoint) {
  if(!(this instanceof Robot)) {
    return new Robot(startPoint);
  }
  this.getPosition = function() {
    return startPoint;
  };
  this.moveRight = function(value) {
    startPoint.xInc(value);
  };
  this.moveDown = function(value) {
    startPoint.yInc(value);
  };
  this.moveLeft = function(value) {
    startPoint.xDec(value);
  };
  this.moveUp = function(value) {
    startPoint.yDec(value);
  };
}

var a = new Robot(new Point(0, 0));
console.log(a.getPosition());
a.moveRight(10);
console.log(a.getPosition());
