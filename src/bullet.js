/* eslint-disable no-var */
var Util = require('./util.js');
var MovingObject = require('./moving_object.js');
var Asteroid = require('./asteroid.js');

var Bullet = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: options.vel,
    radius: Bullet.RADIUS,
    color: Bullet.COLOR,
    game: options.game
  });
};

Util.inherits(Bullet, MovingObject);
Bullet.RADIUS = 5;
Bullet.COLOR = '#000';

Bullet.prototype.collideWith = function(otherObj) {
  if (this.game.asteroids.includes(otherObj)) {
    this.game.remove(otherObj);
    this.game.bullets.splice(this.game.bullets.indexOf(this), 1);
  }
};

module.exports = Bullet;
