var board = document.querySelector(".board");
var currentPlayer = document.querySelector(".current-player");
var p1Wins = document.querySelector("#p1wins");
var p2wins = document.querySelector("#p2wins");
var spaces = document.getElementsByClassName("space");

board.addEventListener("click", function (event) {
  var cell = event.target.closest(".space");
  updateCell(cell);
});

addEventListener("load", loadPage);

var winner = false;
var turns = 0;
var playersTurn;

var player1 = {
  name: "Gojo",
  team: "X",
  moves: "",
  wins: 0,
};

var player2 = {
  name: "Geto",
  team: "O",
  moves: "",
  wins: 0,
};

var winngingCombos = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["a", "d", "g"],
  ["b", "e", "h"],
  ["c", "f", "i"],
  ["a", "e", "i"],
  ["c", "e", "g"],
];
var startingPlayer = player1;
var playerSwap = false;

function changeTurns() {
  if (playerSwap) {
    playersTurn = player1;
  } else {
    playersTurn = player2;
  }
  playerSwap = !playerSwap;
  currentPlayer.innerHTML = `It's ${playersTurn.name}'s turn`;
  turns++
}

function updateCell(cell) {
  if (!cell.innerHTML) {
    playersTurn.moves += cell.id;
    cell.innerHTML = playersTurn.team;
    checkWin();
    checkDraw();
  }
}

function sortMoves() {
  return playersTurn.moves.split("").sort().join(" ");
}

function checkWin() {
  for (var i = 0; i < winngingCombos.length; i++) {
    if (checkWinningCombo(winngingCombos[i])) {
      currentPlayer.innerHTML = `${playersTurn.name} won!`;
      increaseWins();
      updateHtml();
      resetGame();
      return;
    }
  }
}

function resetGame() {
  setTimeout(function () {
    winner = false;
    clearBoard();
    updatePlayer();
    decideStartingPlayer();
  }, 1000);
}

function loadPage() {
  playersTurn = player1;
  p1Wins.innerHTML = 0;
  p2wins.innerHTML = 0;
}

function clearBoard() {
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].innerHTML = ``;
  }
}
function updatePlayer() {
  player1.moves = "";
  player2.moves = "";
  turns = 0;
}
function updateHtml() {
  p1Wins.innerHTML = player1.wins;
  p2wins.innerHTML = player2.wins;
}
function checkWinningCombo(winningCombo) {
  for (var i = 0; i < winningCombo.length; i++) {
    if (!playersTurn.moves.includes(winningCombo[i])) {
      return false;
    }
  }
  return true;
}
function decideStartingPlayer() {
  console.log(startingPlayer);
  if (startingPlayer === player1) {
    playersTurn = player2;
    startingPlayer = player2;
    playerSwap = false;
  } else {
    playersTurn = player1;
    startingPlayer = player1;
    playerSwap = true;
  }
  currentPlayer.innerHTML = `It's ${playersTurn.name}'s turn`;
}
function increaseWins() {
  playersTurn.wins++;
}
function checkDraw(){
    if (turns === 8) {
        currentPlayer.innerHTML = `It's a draw!`;
        updateHtml();
        resetGame();
        return
      }
changeTurns()
}