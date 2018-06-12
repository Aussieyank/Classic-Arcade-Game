// let setupClasses  = document.getElementById( 'select-character' ).classList,
//       wonClasses  = document.getElementById( 'won-game' ).classList,
//       lostClasses = document.getElementById( 'lost-game' ).classList,
//
//       setupButton = document.getElementById( 'button__select-character' ),
//        lostButton = document.getElementById( 'button__lost-game' ),
//         wonButton = document.getElementById( 'button__won-game' )

//modals = {setupGame: {}, wonModal: {}, lostModal: {}};


// Enemies our player must avoid
let Enemy = function () {
   // Variables applied to each of our instances go here,
   // we've provided one for you to get started

   // The image/sprite for our enemies, this uses
   // a helper we've provided to easily load images
   this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
   // You should multiply any movement by the dt parameter
   // which will ensure the game runs at the same speed for
   // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

   update() {

   }

   render() {

   }

   handleInput() {

   }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player();
let allEnemies = [];

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

setupGame = new Modal('select-character');
setupGame.startModal();
setupGame.show();



