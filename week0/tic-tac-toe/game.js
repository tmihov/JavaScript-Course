"use strict";

var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
      // this is string concatenation
      console.log(board[i].join(""));
  }
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null;

    var turns = 0;

    var player1 = prompt("Enter nickname for player1: ");
    var player2 = prompt("Enter nickname for player2: ");

  while(true) {
    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place " + player1 + " below");
    } else {
      console.log("Place " + player2 + " below");
    }
    // this is blocking prompt

    position = prompt("x y>").split(" ");
    var x = parseInt(position[0], 10);
    var y = parseInt(position[1], 10);

    if(x < 1 || x > 3 || y < 1 || y > 3) {
      continue;
    }

    if(board[x-1][y-1] === "*" && xTurn) {
        board[x-1][y-1] = "X";
    } else if(board[x-1][y-1] === "*" && !xTurn) {
      board[x-1][y-1] = "O";
    } else {
      continue;
    }

    console.log(position);

    var col1 = [board[0][0] + board[1][0] + board[2][0]];
    var col2 = [board[0][1] + board[1][1] + board[2][1]];
    var col3 = [board[0][2] + board[1][2] + board[2][2]];
    var d1 = [board[0][0] + board[1][1] + board[2][2]];
    var d2 = [board[0][2] + board[1][1] + board[2][0]];
    if(board[0].join("") === "XXX" || board[1].join("") === "XXX" || board[2].join("") === "XXX" ||
      col1.join("") === "XXX" || col2.join("") === "XXX" || col3.join("") === "XXX" ||
      d1.join("") === "XXX" || d2.join("") === "XXX") {
      console.log(player1 + " wins!");
      break;
    }
    if(board[0].join("") === "OOO" || board[1].join("") === "OOO" || board[2].join("") === "OOO" ||
      col1.join("") === "OOO" || col2.join("") === "OOO" || col3.join("") === "OOO" ||
      d1.join("") === "OOO" || d2.join("") === "OOO") {
      console.log(player2 + " wins!");
      break;
    }



    xTurn = !xTurn;
    turns++;
    if(turns === 9) {
      console.log("Tie.");
      break;
    }
  }

}

gameLoop();
