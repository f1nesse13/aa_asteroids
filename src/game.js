/* eslint-disable no-var */
// Game class - bundles asteroids/player inside array and iterates over them to draw/move them
const Asteroid = require('./asteroid.js');

var Game = function() {
  this.dim_x = Game.DIM_X;
  this.dim_y = Game.DIM_Y;
  this.num_asteroids = Game.NUM_ASTEROIDS;
  this.asteroids = [];
  this.ship = new Ship({ pos: this.randomPosition(), game: this });
  this.addAsteroids();
};

Game.DIM_X = window.innerWidth * 0.75;
Game.DIM_Y = window.innerHeight * 0.75;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
  // create new Asteroid Objects with a random position then pushes into the Game instance's asteroids array
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    const asteroid = new Asteroid({ pos: this.randomPosition(), game: this });
    this.asteroids.push(asteroid);
  }
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
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(ctx) {
  // simulates movement of objects on canvas
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move(ctx);
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
  for (let i = 0; i < this.asteroids.length; i++) {
    for (let y = 0; y < this.asteroids.length; y++) {
      if (i !== y && this.asteroids[i].isCollideWith(this.asteroids[y])) {
        this.asteroids[i].collideWith(this.asteroids[y], this.asteroids[i]);
      }
    }
  }
};

Game.prototype.step = function(ctx) {
  this.moveObjects(ctx);
  this.checkCollision();
};
Game.prototype.remove = function(obj, otherObj) {
  this.asteroids.splice(this.asteroids.indexOf(obj), 1);
  this.asteroids.splice(this.asteroids.indexOf(otherObj), 1);
};

module.exports = Game;
