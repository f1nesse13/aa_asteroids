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

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nvar Asteroid = function(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: Util.randomVec(Asteroid.RADIUS),\n    radius: Asteroid.RADIUS,\n    color: Asteroid.COLOR\n  });\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.RADIUS = 35;\nAsteroid.COLOR = '#a33';\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-var */\n// Game class - holds asteroids - define CONSTANTS DIM_X DIM_Y NUM_ASTEROIDS\nvar Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nvar Game = function() {\n  this.dim_x = Game.DIM_X;\n  this.dim_y = Game.DIM_Y;\n  this.num_asteroids = Game.NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.addAsteroids();\n};\n\nGame.DIM_X = window.innerWidth * 0.75;\nGame.DIM_Y = window.innerHeight * 0.75;\nGame.NUM_ASTEROIDS = 15;\nGame.prototype.addAsteroids = function() {\n  // create new Asteroid Objects with a random position then pushes into the Game instance's asteroids array\n  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    var asteroid = new Asteroid({ pos: this.randomPosition() });\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  // Creates a random X and Y axis based off of the size of the canvas\n  posX = Math.floor(Math.random() * Game.DIM_X);\n  posY = Math.floor(Math.random() * Game.DIM_Y);\n  return [posX, posY];\n};\n\nGame.prototype.draw = function(ctx) {\n  // clears canvas\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  // redraws all asteroids inside array\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function(ctx) {\n  // simulates movement of objects on canvas\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move(ctx);\n  }\n  this.draw(ctx);\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TEMPORARY - testing purposes\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.addEventListener('DOMContentLoaded', function(e) {\n  const context = document.getElementById('game_canvas');\n  context.height = window.innerHeight * 0.75;\n  context.width = window.innerWidth * 0.75;\n  const ctx = context.getContext('2d');\n  const a = new Game();\n  a.draw(ctx);\n  // TEMPORARY - testing purposes\n  // const options = { pos: [50, 50], vel: [100, 100], radius: 30, color: '#a00' };\n  // const a = new Asteroid({ pos: [50, 50] });\n  // a.draw(ctx);\n  setInterval(() => {\n    a.moveObjects(ctx);\n  }, 200);\n});\n\n// temporary\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\nMovingObject.prototype.move = function(ctx) {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-var */\nvar Util = {\n  // sets up inheritance between a child and parent class\n  inherits(child, parent) {\n    const Surrogate = function() {};\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n  },\n  // returns a randomly generated vector given a length\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });