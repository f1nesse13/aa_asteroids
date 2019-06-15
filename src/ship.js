/* eslint-disable no-var */
var Util = require('./util');
var MovingObject = require('./moving_object');

var Ship = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: Util.randomVec(0),
    radius: Ship.RADIUS,
    color: Ship.COLOR,
    game: options.game
  });
};
Util.inherits(Ship, MovingObject);
Ship.RADIUS = 30;
Ship.COLOR = '#eee';

Ship.prototype.relocate = function() {
  this.game.ship.pos = this.game.randomPosition();
};

module.exports = Ship;
