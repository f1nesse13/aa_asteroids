/* eslint-disable no-var */
// Game class - bundles asteroids/player inside array and iterates over them to draw/move them
var Asteroid = require('./asteroid.js');
var Ship = require('./ship.js');
var Bullet = require('./bullet.js');

var Game = function() {
  this.dim_x = Game.DIM_X;
  this.dim_y = Game.DIM_Y;
  this.num_asteroids = Game.NUM_ASTEROIDS;
  this.asteroids = [];
  this.ship = new Ship({ pos: this.randomPosition(), game: this });
  this.addAsteroids();
  this.bullets = [];
};

Game.DIM_X = window.innerWidth * 0.75;
Game.DIM_Y = window.innerHeight * 0.75;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function() {
  // create new Asteroid Objects with a random position then pushes into the Game     instance's asteroids array
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    var asteroid = new Asteroid({ pos: this.randomPosition(), game: this });
    this.asteroids.push(asteroid);
  }
};

Game.prototype.allObjects = function() {
  return [].concat(this.asteroids, this.ship, this.bullets);
};

Game.prototype.randomPosition = function() {
  // Creates a random X and Y axis based off of the size of the canvas
  posX = Math.floor(Math.random() * Game.DIM_X);
  posY = Math.floor(Math.random() * Game.DIM_Y);
  return [posX, posY];
};

Game.prototype.draw = function(ctx) {
  // clears canvas
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  // redraws all asteroids inside array
  for (let i = 0; i < this.allObjects().length; i++) {
    this.allObjects()[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(ctx) {
  // simulates movement of objects on canvas
  for (let i = 0; i < this.allObjects().length; i++) {
    this.allObjects()[i].move(ctx);
  }
  this.draw(ctx);
};

Game.prototype.wrap = function(pos) {
  var posX = pos[0];
  var posY = pos[1];
  if (posX < -5) {
    posX = window.innerWidth * 0.75 + 5;
  }
  if (posX > window.innerWidth * 0.75 + 5) {
    posX = 0;
  }
  if (posY < -5) {
    posY = window.innerHeight * 0.75;
  }
  if (posY > window.innerHeight * 0.75 + 5) {
    posY = 0;
  }
  return [posX, posY];
};

Game.prototype.checkCollision = function() {
  for (let i = 0; i < this.allObjects().length; i++) {
    for (let y = 0; y < this.allObjects().length; y++) {
      if (i !== y && this.allObjects()[i].isCollideWith(this.allObjects()[y])) {
        this.allObjects()[i].collideWith(this.allObjects()[y], this.allObjects()[i]);
      }
    }
  }
};

Game.prototype.step = function(ctx) {
  this.moveObjects(ctx);
  this.checkCollision();
};
Game.prototype.remove = function(obj, otherObj) {
  this.asteroids.splice(this.allObjects().indexOf(obj), 1);
  this.asteroids.splice(this.allObjects().indexOf(otherObj), 1);
};

Game.prototype.add = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  }
  if (obj instanceof Bullet) {
    this.bullets.push(obj);
  }
};

Game.prototype.remove = function(obj) {
  if (obj instanceof Asteroid) {
    var asteroidIndex = this.asteroids.indexOf(obj);
    this.asteroids.splice(asteroidIndex, 1);
  }
};

module.exports = Game;
