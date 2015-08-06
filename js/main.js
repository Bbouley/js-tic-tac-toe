


  var Player = function(team, cellID, playerScore){
    this.team = team;
    this.cellID = cellID;
    this.playerScore = 0;
  };

  var Board = function(){
    this.player1Boxes = [];
    this.player2Boxes = [];
    this.cells = $('.box');
  };

  Board.prototype.pushToArray = function(array){
    if(Game.turnCounter%2 === 0){
    this.player1Boxes.push(array);
    } else {
    this.player2Boxes.push(array);
    }
  };

  var Game = function(board, player1, player2){
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.turnCounter = 0;
    this.winner = '';
  };



  $('.box').one('click', function(event){
    if(Game.turnCounter%2 === 0){
     $(this).html('<p>' + player1.cellID + '</p>');
     $('.turn').html('<span>' + player1.team + '</span>');
     Game.turnCounter += 1;
     Board.pushToArray($(this));
     Game.checkWinner(Board.player1Boxes);
    } else {
      $(this).html('<p>' + player2.cellID + '</p>');
      $('.turn').html('<span>' + player2.team + '</span>');
     Game.turnCounter += 1;
     Board.pushToArray($(this));
     Game.checkWinner(Board.player2Boxes);
    }
  });

  Game.prototype.checkWinner = function(array){
    var playNums = [];
    for (var i = array.length - 1; i >= 0; i--) {
      playNums.push(parseInt(array[i][0].id));
      }
      if($.inArray(0, playNums) >= 0  && $.inArray(1, playNums) >= 0 && $.inArray(2, playNums) >=0){
        Game.winner = true;
      } else if ($.inArray(3, playNums) >= 0 && $.inArray(4, playNums) >= 0 && $.inArray(5, playNums) >= 0){
        Game.winner = true;
      } else if ($.inArray(6, playNums) >= 0 && $.inArray(7, playNums) && $.inArray(8, playNums)>= 0){
        Game.winner = true;
      } else if ($.inArray(0, playNums) >= 0 && $.inArray(3, playNums) && $.inArray(6, playNums) >= 0){
        Game.winner = true;
      } else if ($.inArray(1, playNums) >= 0 && $.inArray(4, playNums) && $.inArray(7, playNums) >= 0){
        Game.winner = true;
      } else if ($.inArray(2, playNums) >= 0 && $.inArray(5, playNums) && $.inArray(8, playNums) >= 0){
        Game.winner = true;
      } else if ($.inArray(0, playNums) >= 0 && $.inArray(4, playNums) && $.inArray(8, playNums) >= 0){
        Game.winner = true;
      } else if ($.inArray(2, playNums) >= 0 && $.inArray(4, playNums) && $.inArray(6, playNums) >= 0){
        Game.winner = true;
      }

  };








