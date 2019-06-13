/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var MovingObject = require('./moving_object');
var Asteroid = require('./asteroid.js');
var Game = require('./game.js');
var GameView = require('./gameview.js');

window.addEventListener('DOMContentLoaded', function(e) {
  var context = document.getElementById('game_canvas');
  context.height = window.innerHeight * 0.75;
  context.width = window.innerWidth * 0.75;
  var ctx = context.getContext('2d');
  // GameView grabs the canvas and starts to draw/move the objects
  var newGame = new GameView(ctx);
  newGame.start();
});
