/* eslint-disable no-var */
var Util = require('./util.js');

var Bullet = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: options.vel,
    radius: Bullet.RADIUS,
    color: Bullet.COLOR,
    game: options.game
  }
};

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function() {

}