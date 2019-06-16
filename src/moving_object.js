/* eslint-disable no-var */
var Util = require('./util.js');

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
  // sets position to wrap return value - if off canvas set to 0 || 'max'
  this.pos = this.game.wrap([(this.pos[0] += this.vel[0]), (this.pos[1] += this.vel[1])]);
};

MovingObject.prototype.isCollideWith = function(otherObj) {
  // Checks distances between objects to see if they collided
  var distance = Util.distance(this.pos, otherObj.pos);
  var collisionDistance = this.radius + otherObj.radius;

  return distance < collisionDistance;
};

MovingObject.prototype.collideWith = function(otherObj) {
  // // function calls to remove both objects that have collided
  // this.game.remove(this, otherObj);
  // ------------- will hold code to remove asteroids when hit by bullets -----------
};

module.exports = MovingObject;
