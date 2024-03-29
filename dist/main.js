/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nvar Asteroid = function(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: Util.randomVec(Asteroid.RADIUS),\n    radius: Asteroid.RADIUS,\n    color: Asteroid.COLOR,\n    game: options.game\n  });\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.RADIUS = 30;\nAsteroid.COLOR = '#a33';\n\nAsteroid.prototype.collideWith = function(otherObj) {\n  if (otherObj instanceof Ship) {\n    this.game.ship.relocate();\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-var */\nvar Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nvar MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nvar Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nvar Bullet = function(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: options.vel,\n    radius: Bullet.RADIUS,\n    color: Bullet.COLOR,\n    game: options.game\n  });\n};\n\nUtil.inherits(Bullet, MovingObject);\nBullet.RADIUS = 5;\nBullet.COLOR = '#000';\n\nBullet.prototype.collideWith = function(otherObj) {\n  if (this.game.asteroids.includes(otherObj)) {\n    this.game.remove(otherObj);\n    this.game.bullets.splice(this.game.bullets.indexOf(this), 1);\n  }\n};\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-var */\n// Game class - bundles asteroids/player inside array and iterates over them to draw/move them\nvar Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nvar Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nvar Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nvar Game = function() {\n  this.dim_x = Game.DIM_X;\n  this.dim_y = Game.DIM_Y;\n  this.num_asteroids = Game.NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.ship = new Ship({ pos: this.randomPosition(), game: this });\n  this.addAsteroids();\n  this.bullets = [];\n};\n\nGame.DIM_X = window.innerWidth * 0.75;\nGame.DIM_Y = window.innerHeight * 0.75;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function() {\n  // create new Asteroid Objects with a random position then pushes into the Game     instance's asteroids array\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    var asteroid = new Asteroid({ pos: this.randomPosition(), game: this });\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.allObjects = function() {\n  return [].concat(this.asteroids, this.ship, this.bullets);\n};\n\nGame.prototype.randomPosition = function() {\n  // Creates a random X and Y axis based off of the size of the canvas\n  posX = Math.floor(Math.random() * Game.DIM_X);\n  posY = Math.floor(Math.random() * Game.DIM_Y);\n  return [posX, posY];\n};\n\nGame.prototype.draw = function(ctx) {\n  // clears canvas\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  // redraws all asteroids inside array\n  for (let i = 0; i < this.allObjects().length; i++) {\n    this.allObjects()[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function(ctx) {\n  // simulates movement of objects on canvas\n  for (let i = 0; i < this.allObjects().length; i++) {\n    this.allObjects()[i].move(ctx);\n  }\n  this.draw(ctx);\n};\n\nGame.prototype.wrap = function(pos) {\n  var posX = pos[0];\n  var posY = pos[1];\n  if (posX < -5) {\n    posX = window.innerWidth * 0.75 + 5;\n  }\n  if (posX > window.innerWidth * 0.75 + 5) {\n    posX = 0;\n  }\n  if (posY < -5) {\n    posY = window.innerHeight * 0.75;\n  }\n  if (posY > window.innerHeight * 0.75 + 5) {\n    posY = 0;\n  }\n  return [posX, posY];\n};\n\nGame.prototype.checkCollision = function() {\n  for (let i = 0; i < this.allObjects().length; i++) {\n    for (let y = 0; y < this.allObjects().length; y++) {\n      if (i !== y && this.allObjects()[i].isCollideWith(this.allObjects()[y])) {\n        this.allObjects()[i].collideWith(this.allObjects()[y], this.allObjects()[i]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function(ctx) {\n  this.moveObjects(ctx);\n  this.checkCollision();\n};\nGame.prototype.remove = function(obj, otherObj) {\n  this.asteroids.splice(this.allObjects().indexOf(obj), 1);\n  this.asteroids.splice(this.allObjects().indexOf(otherObj), 1);\n};\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  }\n  if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n};\n\nGame.prototype.remove = function(obj) {\n  if (obj instanceof Asteroid) {\n    var asteroidIndex = this.asteroids.indexOf(obj);\n    this.asteroids.splice(asteroidIndex, 1);\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// Keeps track of the objects inside the game's canvas and binds key handlers for players ship\n\nconst GameView = function(ctx) {\n  this.ctx = ctx;\n  this.currentGame = new Game();\n};\n\nGameView.prototype.start = function() {\n  game = this.currentGame;\n  context = this.ctx;\n  this.bindKeyHandlers();\n  setInterval(function() {\n    game.draw(context);\n    game.step(context);\n  }, 150);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  key('w', function() {\n    game.ship.power([0, -1]);\n  });\n  key('a', function() {\n    game.ship.power([-1, 0]);\n  });\n  key('s', function() {\n    game.ship.power([0, 1]);\n  });\n  key('d', function() {\n    game.ship.power([1, 0]);\n  });\n  key('l', function() {\n    game.ship.fireBullet();\n  });\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-unused-vars */\n/* eslint-disable vars-on-top */\n/* eslint-disable no-var */\nvar MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nvar Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nvar Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nvar GameView = __webpack_require__(/*! ./gameview.js */ \"./src/gameview.js\");\n\nwindow.addEventListener('DOMContentLoaded', function(e) {\n  var context = document.getElementById('game_canvas');\n  context.height = window.innerHeight * 0.75;\n  context.width = window.innerWidth * 0.75;\n  var ctx = context.getContext('2d');\n  // GameView grabs the canvas and starts to draw/move the objects\n  var newGame = new GameView(ctx);\n  newGame.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-var */\nvar Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function(ctx) {\n  // sets position to wrap return value - if off canvas set to 0 || 'max'\n  this.pos = this.game.wrap([(this.pos[0] += this.vel[0]), (this.pos[1] += this.vel[1])]);\n};\n\nMovingObject.prototype.isCollideWith = function(otherObj) {\n  // Checks distances between objects to see if they collided\n  var distance = Util.distance(this.pos, otherObj.pos);\n  var collisionDistance = this.radius + otherObj.radius;\n\n  return distance < collisionDistance;\n};\n\nMovingObject.prototype.collideWith = function(otherObj) {\n  // // function calls to remove both objects that have collided\n  // this.game.remove(this, otherObj);\n  // ------------- will hold code to remove asteroids when hit by bullets -----------\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-var */\nvar Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nvar MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nvar Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nvar Ship = function(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: [0, 0],\n    radius: Ship.RADIUS,\n    color: Ship.COLOR,\n    game: options.game\n  });\n};\nUtil.inherits(Ship, MovingObject);\nShip.RADIUS = 25;\nShip.COLOR = '#eee';\n\nShip.prototype.relocate = function() {\n  this.game.ship.pos = this.game.randomPosition();\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  velocity = [this.vel[0] - 10, this.vel[1] - 10];\n  position = [this.pos[0], this.pos[1]];\n  var bullet = new Bullet({ pos: position, vel: velocity, game: this.game });\n  this.game.add(bullet);\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Util = {\n  // sets up inheritance between a child and parent class\n  inherits(child, parent) {\n    const Surrogate = function() {};\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n  },\n  // returns a randomly generated vector given a length\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  // calculate the distance between the two objects\n  distance(pos1, pos2) {\n    return Math.sqrt(((pos1[0] - pos2[0]) ** 2) + ((pos1[1] - pos2[1]) ** 2));\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });