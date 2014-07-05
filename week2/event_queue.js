"use strict";

var eventQueue = (function() {
  var _private = {
    queue : {}
  };

  return {
    on : function(eventName, callback) {
      if(!_private.queue[eventName]) {
        _private.queue[eventName] = [];
      }
      _private.queue[eventName].push(callback);
    },
    remove : function(eventName) {
      delete[_private.queue[eventName]];
      _private.queue[eventName] = [];
    },
    trigger : function(eventName) {
      _private.queue[eventName].forEach(function(x) {
        x();
      });
    }
  };
} () );

eventQueue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!");
});

eventQueue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

eventQueue.trigger("PANIC_EVENT");
