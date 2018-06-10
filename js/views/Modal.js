// this.setupGame = document.getElementById('setup-game');
// this.setupGame.classList.add('active');
// this.setupGame.classList.remove('none');
// document.getElementById('setup-game').classes.add('active');
// document.getElementById('setup-game').classes.remove('none');


class Modal {

   constructor(modalID) {
      this.setupGame   = document.getElementById('setup-game');
      this.avatar      = document.querySelectorAll('.charImg');
      this.modal       = document.getElementById(modalID);
      this.keepPlaying = this.modal.getElementsByClassName('keep-playing')[0];
      this.score       = this.modal.getElementsByClassName('keep-score')[0];
      this.theAvatar   = 0;
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      //this.score[0].innerHTML = this.score;
      //this.classes.add('active');
      this.setupGame.classList.add('active');
      this.setupGame.classList.remove('none');
   }

   /**
    * @description Hide the modal
    */
   hide() {
      //setupClasses = document.getElementById('setup-game').classList;
      this.modal.classList.remove('active');
   }

   /**
    * @description Show the button to pick the avatar
    */
   showButton() {
      this.keepPlaying.classList.add('active');
      this.keepPlaying.classList.remove('none');
   }

   /**
    * @description Show the button to pick the avetar
    */
   hideButton() {
      this.keepPlaying.classList.remove('active');
   }

   pickAvatar(avatar) {
      const allAvatars = Array.from(document.querySelectorAll('.charImg'));
      let theAvatar = 0,
          getAvatar = 0;

      for ( let k = 0; k < allAvatars.length; k++ ) {
         allAvatars[k].addEventListener('click', function (e) {
            //theAvatar = JSON.stringify(allAvatars[k].getAttribute('data-avatar'), null, 4);
            theAvatar = allAvatars[k].getAttribute('data-avatar');
            alert(theAvatar);
            console.log(theAvatar); // JSON.parse
            //debugger
            let getAvatar = document.getElementById(theAvatar).classList;
            alert(getAvatar);

            document.getElementById(theAvatar).classList.add('active');
            document.getElementById(theAvatar).classList.remove('none');
            return(getAvatar);

         }, false);
      }
   }


   startModal(getAvatar) {
      document.getElementsByTagName('body')[0].addEventListener('click', function (event) {
         const allAvatars = Array.from(document.querySelectorAll('.charImg'));
         event.stopPropagation();
         let theAvatar = 0;

         // Changing the player's character.
         if (event.target.classList.contains('charImg') ||
            event.target.nodeName == 'IMG' &&
            event.target.parentNode.classList.contains('character__image')) {
            alert( 'startModal before add: ' + getAvatar );
            // document.getElementById(theAvatar).classList.add('zoomIn');
            // document.getElementById(theAvatar).classList.add('zoomIn');
            //avatar.classList.add('zoomIn');
         }
         theAvatar = setupGame.pickAvatar('char-boy');
         alert( 'startModal: ' + theAvatar );

      }.bind(this), false);
   }

   updatePlayerCharacter(target) {
      if (!(target.classList.contains('character__image') ||
         target.nodeName == 'IMG' &&
         target.parentNode.classList.contains('character__image'))) {
         return false;
      }

      let li = void 0,
         img = void 0;
      if (target.nodeName == 'IMG') {
         li = target.parentNode;
         img = target;
      } else {
         li = target;
         img = target.getElementsByTagName('img')[0];
      }

      this._modals.setup.pickAvatar(li);
      this._player.setSprite(img.getAttribute('src'),
         // this is our callback, which will run once the image is loaded.
         // we are passing the object to set `this` to our modal.
         {obj: this._modals.setup, cb: this._modals.setup.showPlayButton});

      return false;
   }


   //const setup     = new Modal('setup');
   // const wonModal = new Modal('won-game');
   // const lostModal = new Modal('lost-game');
}

setupGame = new Modal('setup-game');
//alert( 'setupGame' );
setupGame.startModal();
setupGame.show();
setupGame.showButton();

//setupGame.pickAvatar('char-boy');

// let setupClasses  = document.getElementById( 'setup-game' ).classList,
//    wonClasses  = document.getElementById( 'won-game' ).classList,
//    lostClasses = document.getElementById( 'lost-game' ).classList,
//
//    setupButton = document.getElementById( 'button__setup-game' ),
//    lostButton = document.getElementById( 'button__lost-game' ),
//    wonButton = document.getElementById( 'button__won-game' )
//    button__lost-game
//
// /**
//  * @description Open modal and give stats when user wins
//  */

//
//
// /**
//  * @description Open modal and give stats when user wins
//  */
// function closeWonModal() {
//    location.reload();
// }
//
// //wonButton.addEventListener('click', closeWonModal, false)
//
// /**
//  * @description open modal and give stats when user loses
//  */
// function closeLostModal() {
//    location.reload();
// }
//
// //lostButton.addEventListener('click', closeLostModal, false)
//
//
