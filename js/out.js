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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
(function webpackMissingModule() { throw new Error("Cannot find module \"start\""); }());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var self;
function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

 function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {

    var self = this;
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.board = document.querySelectorAll("#board  div");
    this.scoreStrong = document.querySelector("#score>div>strong");
    
    this.index = function(x,y) {
        return x + (y * 10);
    }

    this.showFurry = function() {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry");
   };

   this.showCoin = function() {
       this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin");
   };

   this.moveFurry = function(){
    
    if (this.furry.direction === "right") {
        this.furry.x++;
     } else if (this.furry.direction === "left") {
        this.furry.x--;
     } else if (this.furry.direction === "up") {
        this.furry.y--;
     } else if (this.furry.direction === "down") {
        this.furry.y++;
    }

    this.showFurry();
    this.checkCoinCollision();
    this.gameOver();
    }

    this.startGame = function() {
            setInterval( function () {
            self.moveFurry();
            // console.log("huraaa")
        }, 250);
    };

    this.hideVisibleFurry = function() {
        for (var i=0; i<this.board.length; i++) {
            this.board[i].classList.remove("furry");
        }
    };

    this.turnFurry = function() {
        switch (event.which) {
            case 37:
            this.furry.direction = 'left';
            break;
            case 39:
            this.furry.direction = 'right';
            break;
            case 38:
            this.furry.direction = 'up';
            break;
            case 40:
            this.furry.direction = 'down';
            break;
        };
    };

    this.checkCoinCollision = function() {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y ) {
        document.querySelector('.coin').classList.remove('coin');
          this.score++;
          this.scoreStrong.innerText = this.score;
          this.coin = new Coin();
          this.showCoin();
        }
    };

    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.x < 0 || this.furry.x > 9) {
            this.hideVisibleFurry();
            
            document.querySelector('.fullScreen').classList.add("gameOver")
            document.querySelector('.fullScreen').innerHTML =`
            <div>GAME OVER</div>
            <div>YOUR SCORE IS</div>
            <div>${this.score}</div>
            ` 
            
        }
    };
};

var game = new Game();

game.showFurry();
game.showCoin();
game.startGame();
document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});


/***/ })
/******/ ]);