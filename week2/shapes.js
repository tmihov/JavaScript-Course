"use strict";
function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(sideA, sideB) {
  Shape.call(this, "Rectangle");
  this.getSideA = function() {
    return sideA;
  };
  this.getSideB = function() {
    return sideB;
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.getSideA() * this.getSideB();
};

function Triangle(base, height) {
  Shape.call(this, "Triangle");
  this.getBase = function() {
    return base;
  };
  this.getHeight = function() {
    return height;
  };
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.constructor = Triangle;
Triangle.prototype.area = function() {
  return this.getBase() * this.getHeight() / 2;
};

function Circle(radius) {
  Shape.call(this, "Circle");
  this.getRadius = function() {
    return radius;
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.constructor = Circle;
Circle.prototype.area = function() {
  return (22 / 7) * this.getRadius() * this.getRadius();
};

var rec = new Rectangle(2, 3);
var tri = new Triangle(2, 3);
var cir = new Circle(2);

console.log(rec.area());
console.log(tri.area());
console.log(cir.area());
