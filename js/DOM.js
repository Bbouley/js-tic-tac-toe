  var board = new Board();

  var player1Name = prompt('Whats your team name?');
  var player1ID = prompt('What box ID do you want?');
  var player2Name = prompt('Whats your team name?');
  var player2ID = prompt('What box ID do you want?');


  var player1 = new Player(player1Name, player1ID);
  var player2 = new Player(player2Name, player2ID);

  var game = new Game(board, player1, player2);



$(document).ready(function(){

  $('.turn').html('<span>' + player1.team + '</span>');

  var printScore = function(){
    $('.player1').html('<span>' + player1.team + ' : ' + game.player1Score +'</span>');
    $('.player2').html('<span>' + player2.team + ' : ' + game.player2Score +'</span>');
    };

  $('.reset').on('click', function(){
    game.reset();
    printScore();
  });


  $('.box').on('click', function(event){
    game.board.makeMove($(this));
    if(board.turnCounter % 2 !== 0){
      game.checkWinner(game.player1, game.board.player1Boxes);
        if (game.winning === true){
          game.player1Score += 1;
          alert('player 1 won');
          printScore();
          game.winning = false;
          game.board.resetBoard();
        }
    } else if (board.turnCounter % 2 === 0){
      game.checkWinner(game.player2, game.board.player2Boxes);
        if(game.winning === true){
          game.player2Score += 1;
          alert('player 2 won');
          printScore();
          game.winning = false;
          game.board.resetBoard();
        }
      }
  });

});
