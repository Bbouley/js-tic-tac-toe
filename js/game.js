var Game = function(board, player1, player2){
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.winning = false;
    this.player1Score = 0;
    this.player2Score = 0;
 };

Game.prototype.winner = function(){
  if (player1.winning === true){
    this.winner = player1.team;
    this.player1Score += 1;
  } else if (player2.winning === true){
    this.winner = player2.team;
    this.player2Score += 1;
  }
};

Game.prototype.checkWinner = function(player, playerBoxesArray){
    var playNums = [];
    for (var i = 0; i < playerBoxesArray.length; i++) {
      playNums.push(parseInt(playerBoxesArray[i][0].id));
      }
      if($.inArray(0, playNums) >= 0  && $.inArray(1, playNums) >= 0 && $.inArray(2, playNums) >=0){
        this.winning = true;
      } else if ($.inArray(3, playNums) >= 0 && $.inArray(4, playNums) >= 0 && $.inArray(5, playNums) >= 0){
        this.winning = true;
      } else if ($.inArray(6, playNums) >= 0 && $.inArray(7, playNums) >= 0 && $.inArray(8, playNums)>= 0){
        this.winning = true;
      } else if ($.inArray(0, playNums) >= 0 && $.inArray(3, playNums) >= 0 && $.inArray(6, playNums) >= 0){
        this.winning = true;
      } else if ($.inArray(1, playNums) >= 0 && $.inArray(4, playNums) >= 0 && $.inArray(7, playNums) >= 0){
        this.winning = true;
      } else if ($.inArray(2, playNums) >= 0 && $.inArray(5, playNums) >= 0 && $.inArray(8, playNums) >= 0){
        this.winning = true;
      } else if ($.inArray(0, playNums) >= 0 && $.inArray(4, playNums) >= 0 && $.inArray(8, playNums) >= 0){
        this.winning = true;
      } else if ($.inArray(2, playNums) >= 0 && $.inArray(4, playNums) >= 0 && $.inArray(6, playNums) >= 0){
        this.winning = true;
      }
 };

Game.prototype.reset = function(){
  this.player1Score = 0;
  this.player2Score = 0;
};

Game.prototype.init = function(){

};
