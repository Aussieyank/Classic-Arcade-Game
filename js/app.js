
// Enemies our player must avoid
let Enemy = function (x, y) {
   // Variables applied to each of our instances go here,
   // we've provided one for you to get started

   // The image/sprite for our enemies, this uses
   // a helper we've provided to easily load images
   this.sprite = 'images/enemy-bug.png';
   this.x = x;
   this.y = y;
   //this.speed = Math.random() * 5;
   this.speed = getRandomInt(10);
   this.scoreID = document.getElementById('score');
   this.score = 0;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
   this.spritePlayer = document.getElementById(charObj.selectedChar);
   // You should multiply any movement by the dt parameter
   // which will ensure the game runs at the same speed for
   // all computers.
   if (this.x < 600) {
      this.x += this.speed;
   } else {
      this.x = -100;
   }

   // has collided code here
   if (player.x < this.x + 60 &&
      player.x + 37 > this.x &&
      player.y < this.y + 25 &&
      30 + player.y > this.y) {
      player.x = 200;
      player.y = 380;
      //this.score.innerText = 0;
   } else {
      if (player.y < 0) {
         this.addScore(10000);
         // console.log(numberWithCommas(this.getScore()));
         // console.log(JSON.stringify(this.getScore(), null, 4));
         this.scoreID.innerHTML = numberWithCommas(this.getScore());
         // console.log(JSON.stringify(this.score.innerHTML, null, 4));
         player.x = 200;
         player.y = 380;
      }
   }
};


Enemy.prototype.addScore = function (points = 0) {
   this.score += points;
};

Enemy.prototype.getScore = function () {
   return this.score;
};

//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numberWithCommas = (x) => {
   let parts = x.toString().split('.');
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   return parts.join('.');
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

   constructor(x = 100, y = 100, src) {
      this.x = x;
      this.y = y;
      this.sprite = new Image();
      this.sprite.src = src;
   }

   update() {
      this.sprite.src = 'images/' + charObj.selectedChar + '.png';
      ctx.drawImage(this.sprite, this.x, this.y);
   }

   render() {
      ctx.drawImage(this.sprite, this.x, this.y);
   }

   handleInput(keyCode) {
      switch (keyCode) {
         case 'up':
            this.y -= (this.y > 0) ? 85 : 0;
            break;
         case 'down':
            this.y += (this.y < 300) ? 85 : 0;
            break;
         case 'right':
            this.x += (this.x < 400) ? 100 : 0;
            break;
         default:
            this.x -= (this.x > 0) ? 100 : 0;
      }
   }
}

/**
 * @description object with character data to determine which player
 * @type {{selectedChar: string, isInitialized: boolean}}
 */
const charObj = {
   selectedChar: '',
   isInitialized: false
};


/**
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Start game here <<<<<<<<<<<<<<<<<<<<<<<<<
 *
 */
const setupCharacterSelect = new Modal('select-character');
charObj.selectedChar = setupCharacterSelect.selectCharacterModal(charObj);
setupCharacterSelect.show();


if (false === charObj.isInitialized) {
   charObj.selectedChar = 'char-horn-girl';
   // document.getElementById('selected-char').innerHTML = charObj.selectedChar;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(200, 305, 'images/' + charObj.selectedChar + '.png');
let allEnemies = [];

for (let k = 0; k < 3; k++) {
   //                   x,   (     y     )
   let bug = new Enemy(-100, 60 + (85 * k));
   allEnemies.push(bug);
}

for (let k = 1; k < 3; k++) {
   //                   x,   (     y     )
   let bug = new Enemy(-100, 60 + (85 * k));
   allEnemies.push(bug);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
   let allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
   };

   player.handleInput(allowedKeys[e.keyCode]);
});
