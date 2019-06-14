const Game = require('./game.js');
// Keeps track of the objects inside the game's canvas and binds key handlers for players ship

const GameView = function(ctx) {
  this.ctx = ctx;
  this.currentGame = new Game();
};

GameView.prototype.start = function() {
  game = this.currentGame;
  context = this.ctx;
  setInterval(function() {
    game.draw(context);
    game.step(context);
  }, 150);
};

module.exports = GameView;
