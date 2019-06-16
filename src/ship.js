/* eslint-disable no-var */
var Util = require('./util');
var MovingObject = require('./moving_object');

var Ship = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: [0, 0],
    radius: Ship.RADIUS,
    color: Ship.COLOR,
    game: options.game
  });
};
Util.inherits(Ship, MovingObject);
Ship.RADIUS = 25;
Ship.COLOR = '#eee';

Ship.prototype.relocate = function() {
  this.game.ship.pos = this.game.randomPosition();
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

module.exports = Ship;
