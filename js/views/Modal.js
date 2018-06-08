class Modal {

   constructor(modalID) {
      this.modal = document.getElementById(modalID);
      this.keepPlaying = this.modal.getElementsByClassName('keep-playing')[0];
      this.score = this.modal.getElementsByClassName('keep-score')[0];
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.score[0].innerHTML = this.score;
      this.classes.add('active');
   }

   /**
    * @description Hide the modal
    */
   hide() {
      //setupClasses = document.getElementById('setup-game').classList;
      this.modal.classList.remove('active');
   }

   /**
    * @description Show the button to pick the avetar
    */
   showButton() {
      this.keepPlaying.classList.add('active');
   }

   /**
    * @description Show the button to pick the avetar
    */
   hideButton() {
      this.keepPlaying.classList.remove('active');
   }

   pickAvatar(avatar) {
      const allAvatars = Array.from(document.querySelectorAll('.character__image'));
      let theAvatar;

      for (avatar of allAvatars) {

         avatar.addEventListener('click', function (e) {
            event.preventDefault();
            //setTimeout(function () {
               avatar.classList.add('bounceInDown');
               theAvatar = avatar.children[0].getAttribute('data-avatar');
               //debugger
               //alert('k: ' + theAvatar);
               avatar.classList.remove('active');
               //hide();
            //}, 600);  // timeout
         });
      }
   }

   // closeSetupGame() {
   //    event.preventDefault();
   //    setupClasses.remove( 'active' );
   //    setupClasses.add( 'none' );
   //    setupGame.hide();
   //    setupGame.hideButton();
   //    alert('in setup button');
   //    //console.log('in setupButton');
   //    //location.reload();
   // }
   //setupButton = document.getElementById( 'button__setup-game' );
   //setupGame.addEventListener('click', closeSetupGame, false);
   //setupGame = document.getElementById( 'setup-game' );

}


const setupGame = new Modal('setup-game');

setupGame.pickAvatar('char-boy');

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
