$(document).ready(function() {
  "use strict";
  var c = document.getElementById("pong");
  var ctx = c.getContext("2d");
  var canvasWidth = document.getElementById("pong").width;
  var canvasHeight = document.getElementById("pong").height;

  var pong = (function(ctx) {
    var drawField = function() {
      //center line
      ctx.beginPath();
      ctx.moveTo(canvasWidth / 2, 0);
      ctx.lineTo(canvasWidth / 2, canvasHeight);
      ctx.stroke();

      //center circle
      ctx.beginPath();
      ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 10, 0, 2 * Math.PI, false);
      ctx.lineWidth = 1;
      ctx.stroke();

      //left paddle line
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(10, canvasHeight);
      ctx.stroke();

      //right paddle line
      ctx.beginPath();
      ctx.moveTo(canvasWidth - 10, 0);
      ctx.lineTo(canvasWidth - 10, canvasHeight);
      ctx.stroke();
    };

    return {
      drawField: drawField,
    };
  }(ctx));

  var paddle = function(ctx, color, x, y) {
    var width = canvasHeight / 5;
    var x = x;
    var y = y - width / 2;

    var draw = function() {
      ctx.beginPath();
      ctx.rect(x, y, 10, width);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.fill();
      ctx.stroke();
    }

    return {
      draw: draw,
    };
  };

  var ball = (function(ctx) {
    var color = "orange";
    var draw = function() {
      ctx.beginPath();
      ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 40, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    return {
      draw: draw,
    };
  }(ctx))

  var left = paddle(ctx, "red", 5, canvasHeight / 2);
  var right = paddle(ctx, "blue", canvasWidth - 15, canvasHeight / 2);

  c.addEventListener("keydown", left.move, true);

  pong.drawField();
  ball.draw();
  left.draw();
  right.draw();

});
