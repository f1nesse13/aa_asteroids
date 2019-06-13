const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

var Asteroid = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: Util.randomVec(Asteroid.RADIUS),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR,
    game: options.game
  });
};

Util.inherits(Asteroid, MovingObject);

Asteroid.RADIUS = 40;
Asteroid.COLOR = '#a33';

module.exports = Asteroid;
