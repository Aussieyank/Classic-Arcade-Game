class Modal {

   constructor(modalID) {
      this.setupGame    = document.getElementById('select-character');
      this.modal        = document.getElementById(modalID);
      this.playButton   = this.modal.getElementsByClassName('play-button')[0];
      this.selectedChar = document.getElementById('selected-char');
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.setupGame.classList.add('active');
      this.setupGame.classList.remove('none');
      this.playButton.classList.remove('none');
      this.playButton.classList.add('active');
   }

   /**
    * @description Hide the modal
    */
   hide() {
      this.modal.classList.remove('active');
      this.playButton.classList.remove('active');
      this.playButton.classList.add('none');
   }


   /**
    * @description
    *
    */
   startModal(charValue) {
      let theAvatar;
      let getAvatar;
      let charBlock;

      const allAvatars = Array.from(document.querySelectorAll('.charImg'));

      for (let k = 0; k < allAvatars.length; k++) {
         let hasSent = false;
      }

      for (let k = 0; k < allAvatars.length; k++) {
         let hasSent = false;

         allAvatars[k].addEventListener('click', function (e) {
            event.preventDefault();

            theAvatar = allAvatars[k].getAttribute('data-avatar');
            getAvatar = document.getElementById(theAvatar).classList;

            charBlock = document.getElementsByClassName('character__image');
            charBlock[k].classList.remove('hide');
            charBlock[k].classList.add('active');
            charBlock[k].classList.add('animated');
            charBlock[k].classList.add('bounceIn');

            // getAvatarClassList.add('active');
            // getAvatarClassList.remove('hide');
            // alert('getAvatarClassList: ' + getAvatarClassList);

            if (false === hasSent) {
               console.log(theAvatar); // JSON.parse
               alert('theAvatar: ' + theAvatar);
               hasSent = true;
               charValue.selectedChar = theAvatar;
               if (null != charValue.selectedChar) {
                  document.getElementById( charValue.selectedChar ).innerHTML = charValue.selectedChar;
                  document.getElementById( 'selected-char' ).innerHTML = charValue.selectedChar;
               }
               return(charValue);
            }
         }, false);
      }
   }
}
