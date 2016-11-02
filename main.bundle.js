/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(1);
	var Cars = __webpack_require__(2);


	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var frog = new Frog((canvas.width-25)/2, (canvas.height-30), 25, 25)

	var carArray = [];
	carArray.push(new Cars(0, 70, 50, 50));
	carArray.push(new Cars(550, 120, 50, 50));
	carArray.push(new Cars(0, 170, 50, 50));
	carArray.push(new Cars(550, 220, 50, 50));
	carArray.push(new Cars(0, 270, 50, 50));
	carArray.push(new Cars(550, 320, 50, 50));

	carArray.push(new Cars(0, 470, 50, 50));
	carArray.push(new Cars(550, 520, 50, 50));
	carArray.push(new Cars(0, 570, 50, 50));
	carArray.push(new Cars(550, 620, 50, 50));
	carArray.push(new Cars(0, 670, 50, 50));


	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;



	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(event) {
	  if (event.keyCode === 39) {
	    rightPressed = true;
	  } else if (event.keyCode === 37) {
	    leftPressed = true;
	  } else if (event.keyCode === 38) {
	    upPressed = true;
	  } else if (event.keyCode === 40) {
	    downPressed = true;
	  }
	}

	function keyUpHandler(event) {
	  if (event.keyCode === 39) {
	    rightPressed = false;
	  } else if (event.keyCode === 37) {
	    leftPressed = false;
	  } else if (event.keyCode === 38) {
	    upPressed = false;
	  } else if (event.keyCode === 40) {
	    downPressed = false;
	  }
	}

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  frog.drawFrog(context);
	  carArray.forEach(function(car) {
	    car.draw(context)
	});
	  frog.moveFrog(canvas, rightPressed, leftPressed, upPressed, downPressed);
	  requestAnimationFrame(gameLoop);
	});


	// setInterval(drawFrog, 10);


/***/ },
/* 1 */
/***/ function(module, exports) {

	

	function Frog(x, y, width, height){
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	}

	Frog.prototype.drawFrog = function(context) {
	  context.fillRect(this.x, this.y, this.width, this.height);
	  context.fillStyle = "turquoise";
	}


	Frog.prototype.moveFrog = function(canvas, rightPressed, leftPressed, upPressed, downPressed) {
	  if (rightPressed) {
	    this.x += 5;
	  } else if (leftPressed && this.x > 0) {
	    this.x -= 5;
	  } else if (upPressed && this.y > 0) {
	    this.y -= 5;
	  } else if (downPressed && this.y < canvas.height-this.height) {
	    this.y += 5;
	  }
	}

	module.exports = Frog;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Index = __webpack_require__(1)

	function Cars (x, y, width, height){
	 this.x = x;
	 this.y = y;
	 this.width = width;
	 this.height = height;
	}

	Cars.prototype.draw = function(context) {
	context.fillRect(this.x, this.y, this.width, this.height);
	return this;
	};







	//
	// var firstCar = new Cars(50, 50, 10, 10);
	// firstCar.draw();

	// requestAnimationFrame(function gameLoop() {
	//   context.clearRect(0, 0, canvas.width, canvas.height);
	//   drawFrog();
	//   firstCar.draw();
	//   requestAnimationFrame(gameLoop);
	// });

	module.exports = Cars;


/***/ }
/******/ ]);