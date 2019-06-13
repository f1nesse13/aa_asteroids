// TEMPORARY - testing purposes
const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid.js');

window.addEventListener('DOMContentLoaded', function(e) {
  const context = document.getElementById('game_canvas');
  context.height = window.innerHeight * 0.75;
  context.width = window.innerWidth * 0.75;
  const ctx = context.getContext('2d');
  // TEMPORARY - testing purposes
  // const options = { pos: [50, 50], vel: [100, 100], radius: 30, color: '#a00' };
  // const a = new Asteroid({ pos: [50, 50] });
  // a.draw(ctx);
  // setInterval(() => {
  //   a.move(ctx);
  // }, 200);
});

// temporary
window.Asteroid = Asteroid;
