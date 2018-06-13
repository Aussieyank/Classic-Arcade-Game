class Modal {

   constructor(modalID) {
      this.setupGame    = document.getElementById('select-character');
      this.modal        = document.getElementById(modalID);
      this.playButton   = this.modal.getElementsByClassName('play-button')[0];
      this.charHdr      = document.getElementById('game');
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.setupGame.classList.add('active');
      this.setupGame.classList.remove('hide');
      this.playButton.classList.remove('hide');
      this.playButton.classList.add('active');
   }

   /**
    * @description Hide the modal
    */
   hide() {
      this.modal.classList.remove('active');
      this.playButton.classList.remove('active');
      this.playButton.classList.add('hide');
      this.charHdr.classList.remove('hide');
   }

   /**
    * @description
    *
    */
   startModal(charObj) {
      let oneCharacter;
      let charClassList;
      let charBlock;

      this.show();
      const allCharacters = Array.from(document.querySelectorAll('.charImg'));
      this.charHdr.classList.add('hide');

      for (let k = 0; k < allCharacters.length; k++) {
         let hasSent = false;
      }

      for (let k = 0; k < allCharacters.length; k++) {
         let hasSent = false;

         allCharacters[k].addEventListener('click', function (e) {
            event.preventDefault();

            oneCharacter = allCharacters[k].getAttribute('data-character');
            charClassList = document.getElementById(oneCharacter).classList;

            charBlock = document.getElementsByClassName('character__image');
            charBlock[k].classList.remove('hide');
            charBlock[k].classList.add('active');
            charBlock[k].classList.add('animated');
            charBlock[k].classList.add('bounceIn');

            if (false === hasSent) {
               hasSent = true;
               charObj.selectedChar = oneCharacter;
               if (null != charObj.selectedChar) {
                  document.getElementById('selected-char').innerHTML = charObj.selectedChar;
               }
               return(charObj);
            }
         }, false);
      }
   }
}
