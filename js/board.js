 var Board = function(){
    this.player1Boxes = [];
    this.player2Boxes = [];
    this.cells = $('.box');
    this.turnCounter = 0;
    this.gameMoves = [];
 };


 var Player = function(team, cellID, playerScore){
    this.team = team;
    this.cellID = cellID;
    this.playerScore = 0;
 };


 Board.prototype.makeMove = function(boxClicked){
     if(this.turnCounter%2 === 0){
       boxClicked.html('<p>' + player1.cellID + '</p>');
       $('.turn').html('<span>' + player2.team + '</span>');
       this.player1Boxes.push(boxClicked);
     } else if (this.turnCounter%2 !== 0){
       boxClicked.html('<p>' + player2.cellID + '</p>');
       $('.turn').html('<span>' + player1.team + '</span>');
       this.player2Boxes.push(boxClicked);
     } this.turnCounter += 1;
       this.gameMoves.push(boxClicked);
   };

 Board.prototype.resetBoard = function(){
  this.cells = $('.box');
  this.player1Boxes = [];
  this.player2Boxes = [];
  this.turnCounter = 0;
  for (var i = 0; i < ($('.box')).length; i++) {
    ($('.box:eq(' + i + ')')).html('');
  }
 };

 Board.prototype.checkBox= function(boxClicked){
  for (var i = 0; i < this.gameMoves.length; i++) {
    if ($.inArray(parseInt(boxClicked[0].id), parseInt(this.gameMoves[i][0]))){
      return true;
    } else {
      return false;
    }
   }
  };
