const Game = require('./game.js');
// Keeps track of the objects inside the game's canvas and binds key handlers for players ship

const GameView = function(ctx) {
  this.ctx = ctx;
  this.currentGame = new Game();
};

GameView.prototype.start = function() {
  game = this.currentGame;
  context = this.ctx;
  this.bindKeyHandlers();
  setInterval(function() {
    game.draw(context);
    game.step(context);
  }, 150);
};

GameView.prototype.bindKeyHandlers = function() {
  key('w', function() {
    game.ship.power([0, -1]);
  });
  key('a', function() {
    game.ship.power([-1, 0]);
  });
  key('s', function() {
    game.ship.power([0, 1]);
  });
  key('d', function() {
    game.ship.power([1, 0]);
  });
  key('shift', function() {
    game.ship.fire();
  });
};

module.exports = GameView;
