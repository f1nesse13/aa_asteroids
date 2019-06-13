const Util = {
  inherits: function inherits(child, parent) {
    const Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  }
};

module.exports = Util;
