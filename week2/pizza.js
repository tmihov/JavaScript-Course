"use strict";

function Pizza(name, cost, timeToMake) {
  if(!(this instanceof Pizza)) {
    return new Pizza(name, cost, timeToMake);
  }
  this.getName = function() {
    return name;
  };
  this.getCost = function() {
    return cost;
  };
  this.getTimeToMake = function() {
    return timeToMake;
  };
}

function PizzaOrder(pizza) {
  if(!(this instanceof PizzaOrder)) {
    return new PizzaOrder(pizza);
  }
  var id = 0;
  this.getId = function() {
    return id;
  };
  this.getTimeToMake = function() {
    return pizza.getTimeToMake();
  };
}

PizzaOrder.prototype.start = function() {
  var time = this.getTimeToMake();
  while(time > 0) {
    time = time - 1;
  }
  return true;
};

PizzaOrder.prototype.ready = function(callback) {
  if(this.start()) {
    callback();
  }
};

var pizza = new Pizza("Peperoni", 100 /*cost*/, 2000 /*timeToMake in ms = 2 seconds */);

var order = new PizzaOrder(pizza);
order.ready(function(p, o) {
  // the pizza is ready now
  o.getId(); // should return the unique id
});

order.start();
