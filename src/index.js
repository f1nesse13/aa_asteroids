const MovingObject = require('./moving_object');

window.addEventListener('DOMContentLoaded', function(e) {
  const context = document.getElementById('game_canvas');
  const ctx = context.getContext('2d');
  const options = { pos: [50, 50], vel: [100, 100], radius: 30, color: '#a00' };
  const a = new MovingObject(options);
  a.draw(ctx);
  setTimeout(() => {
    a.move(ctx);
  }, 2000);
});
