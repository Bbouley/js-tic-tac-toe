 var Board = function(){
    this.player1Boxes = [];
    this.player2Boxes = [];
    this.cells = $('.box');
    this.turnCounter = 0;
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

 // Board.prototype.nullArray = function(){
 //  this.player1Boxes = [];
 //  this.player2Boxes = [];
 // };
