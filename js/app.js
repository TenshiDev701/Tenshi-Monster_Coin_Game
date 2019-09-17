// const furry = require("./furry.js");
// const coin = require("./coin.js");

import Furry from "./furry.js";
import Coin from "./coin.js"

class Game {

    constructor() {
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.board = $("#board  div");
        this.scoreStrong = $("#score>div>strong");
      }
   
    index(x,y) {
        return x + (y * 10);
    }

    showFurry() {
        hideVisibleFurry();
        this.board[this.index(this.furry.x,this.furry.y)].addClass.add("furry");
   };

    showCoin() {
        this.board[this.index(this.coin.x,this.coin.y)].addClass.add("coin");
    };

    moveFurry() {
    
    if (this.furry.direction === "right") {
        this.furry.x++;
     } else if (this.furry.direction === "left") {
        this.furry.x--;
     } else if (this.furry.direction === "up") {
        this.furry.y--;
     } else if (this.furry.direction === "down") {
        this.furry.y++;
    }

    showFurry();
    checkCoinCollision();
    gameOver();
    }

    startGame = function() {
            setInterval( () => this.moveFurry(), 250);
    };

    hideVisibleFurry = function() {
        this.board.forEach(el => {
            el.removeClass("furry");
        });
    };

    turnFurry() {
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

    checkCoinCollision() {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y ) {
        $('.coin').removeClass('coin');
          this.score++;
          this.scoreStrong.innerText = this.score;
          this.coin = new Coin();
          showCoin();
        }
    };

    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.x < 0 || this.furry.x > 9) {
            hideVisibleFurry();
            
            $('.fullScreen').addClass("gameOver")
            $('.fullScreen').innerHTML =`
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
document.on('keydown',(event) => game.turnFurry(event));




// var self;
// function Furry() {
//     this.x = 0;
//     this.y = 0;
//     this.direction = "right";
// }

//  function Coin() {
//     this.x = Math.floor(Math.random() * 10);
//     this.y = Math.floor(Math.random() * 10);
// }

// function Game() {

//     var self = this;
//     this.furry = new Furry();
//     this.coin = new Coin();
//     this.score = 0;
//     this.board = document.querySelectorAll("#board  div");
//     this.scoreStrong = document.querySelector("#score>div>strong");
    
//     this.index = function(x,y) {
//         return x + (y * 10);
//     }

//     this.showFurry = function() {
//         this.hideVisibleFurry();
//         this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry");
//    };

//    this.showCoin = function() {
//        this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin");
//    };

//    this.moveFurry = function(){
    
//     if (this.furry.direction === "right") {
//         this.furry.x++;
//      } else if (this.furry.direction === "left") {
//         this.furry.x--;
//      } else if (this.furry.direction === "up") {
//         this.furry.y--;
//      } else if (this.furry.direction === "down") {
//         this.furry.y++;
//     }

//     this.showFurry();
//     this.checkCoinCollision();
//     this.gameOver();
//     }

//     this.startGame = function() {
//             setInterval( function () {
//             self.moveFurry();
//             // console.log("huraaa")
//         }, 250);
//     };

//     this.hideVisibleFurry = function() {
//         for (var i=0; i<this.board.length; i++) {
//             this.board[i].classList.remove("furry");
//         }
//     };

//     this.turnFurry = function() {
//         switch (event.which) {
//             case 37:
//             this.furry.direction = 'left';
//             break;
//             case 39:
//             this.furry.direction = 'right';
//             break;
//             case 38:
//             this.furry.direction = 'up';
//             break;
//             case 40:
//             this.furry.direction = 'down';
//             break;
//         };
//     };

//     this.checkCoinCollision = function() {
//         if (this.furry.x === this.coin.x && this.furry.y === this.coin.y ) {
//         document.querySelector('.coin').classList.remove('coin');
//           this.score++;
//           this.scoreStrong.innerText = this.score;
//           this.coin = new Coin();
//           this.showCoin();
//         }
//     };

//     this.gameOver = function() {
//         if (this.furry.x < 0 || this.furry.x > 9 || this.furry.x < 0 || this.furry.x > 9) {
//             this.hideVisibleFurry();
            
//             document.querySelector('.fullScreen').classList.add("gameOver")
//             document.querySelector('.fullScreen').innerHTML =`
//             <div>GAME OVER</div>
//             <div>YOUR SCORE IS</div>
//             <div>${this.score}</div>
//             ` 
            
//         }
//     };
// };

// var game = new Game();

// game.showFurry();
// game.showCoin();
// game.startGame();
// document.addEventListener('keydown', function(event){
//     game.turnFurry(event);
// });

// [ai:2026-07-29] // TODO: add error handling for API fetch calls
