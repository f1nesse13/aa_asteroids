var Util = {
  // sets up inheritance between a child and parent class
  inherits(child, parent) {
    const Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  },
  // returns a randomly generated vector given a length
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  // calculate the distance between the two objects
  distance(pos1, pos2) {
    return Math.sqrt(((pos1[0] - pos2[0]) ** 2) + ((pos1[1] - pos2[1]) ** 2));
  }
};

module.exports = Util;
