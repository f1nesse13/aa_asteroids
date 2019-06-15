/* eslint-disable no-var */
var Util = require('./util.js');

var Ship = function(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: Util.randomVec(0),
    radius: Ship.RADIUS,
    color: Ship.COLOR,
    game: options.game
  });

  Util.inherits(Ship, MovingObject);
  Ship.RADIUS = 25;
  Ship.COLOR = '#ddd';
};
