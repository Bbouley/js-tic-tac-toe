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
    if(this.checkBox(boxClicked) === false){
     if(this.turnCounter%2 === 0){
       boxClicked.html('<p>' + player1.cellID + '</p>');
       $('.turn').html('<span>' + player2.team + '</span>');
       this.player1Boxes.push(boxClicked);
     } else if (this.turnCounter%2 !== 0){
       boxClicked.html('<p>' + player2.cellID + '</p>');
       $('.turn').html('<span>' + player1.team + '</span>');
       this.player2Boxes.push(boxClicked);
     } this.turnCounter += 1;
       this.gameMoves.push(boxClicked.attr('id'));
       console.log(this.gameMoves);
     } else {
      alert ('Stop Being Cheeky');
     }
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
    if($.inArray(boxClicked.attr('id'), this.gameMoves) >= 0){
      return true;
    } else {
      return false;
    }
  };
