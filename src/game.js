/* eslint-disable no-var */
// Game class - holds asteroids - define CONSTANTS DIM_X DIM_Y NUM_ASTEROIDS
var Asteroid = require('./asteroid.js');

var Game = function() {
  this.dim_x = Game.DIM_X;
  this.dim_y = Game.DIM_Y;
  this.num_asteroids = Game.NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = window.innerWidth * 0.75;
Game.DIM_Y = window.innerHeight * 0.75;
Game.NUM_ASTEROIDS = 15;
Game.prototype.addAsteroids = function() {
  // create new Asteroid Objects with a random position then pushes into the Game instance's asteroids array
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    var asteroid = new Asteroid({ pos: this.randomPosition() });
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

module.exports = Game;
