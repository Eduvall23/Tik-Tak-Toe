var board = document.querySelector(".board")
var currentPlayer = document.querySelector(".current-player")


board.addEventListener("click",function(event) {
        var cell = event.target.closest(".space")
    updateCell(cell)
})
var winner = false
var playersTurn
var player1 = 
{
    name:"Gojo",
    team: "X",
    moves: ""
}
var player2 = {
    name:"Geto",
    team: "O",
    moves: ""
}
var winngingCombos = [
    ["abc"],
    ["def"],
    ["ghi"],
    ["adg"],
    ["beh"],
    ["cfi"],
    ["aei"],
    ["ceg"],
]
var playerSwap = false
playersTurn = player1
function changeTurns(){
    if(playerSwap){
    playersTurn = player1
    }else{
    playersTurn = player2
    }
    currentPlayer.innerHTML = `It's ${playersTurn.name}'s turn`
    playerSwap = !playerSwap

}
function updateCell(cell){
    if(!cell.innerHTML){
        playersTurn.moves += cell.id
        cell.innerHTML = playersTurn.team
        console.log("player one " + player1.moves)
        console.log("player two " +player2.moves)
        checkWin()
        changeTurns() 
    }
}
function sortMoves(){
    return playersTurn.moves.split("").sort().join("");
}
function checkWin (){
    for(var i = 0; i < winngingCombos.length; i++){
        var sortedMoves = sortMoves()
        if(sortedMoves.includes(winngingCombos[i])){
            
        }

    }
    
}
