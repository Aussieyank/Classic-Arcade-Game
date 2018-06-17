class Modal {
   /**
    * @description
    * @param modalID
    */
   constructor(modalID) {
      this.setupCharacterSelect  = document.getElementById('select-character');
      this.modal                 = document.getElementById(modalID);
      this.playButton            = this.modal.getElementsByClassName('play-button')[0];
      this.charHdr               = document.getElementById('game');
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.setupCharacterSelect.classList.add('active');
      this.setupCharacterSelect.classList.remove('hide');
      this.playButton.classList.remove('hide');
      this.playButton.classList.add('active');
      this.playButton.classList.remove('none');
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
    * @param charObj
    */
   selectCharacterModal(charObj) {
      let oneCharacter;
      let charClassList;
      let charBlock;

      this.show();
      const allCharacters = Array.from(document.querySelectorAll('.charImg'));
      // Hide game page header
      this.charHdr.classList.add('hide');

      // start with a clean slate, no characters set
      for (let k = 0; k < allCharacters.length; k++) {
         charObj.isInitialized = false;
      }

      // loop to find the first selected character
      for (let k = 0; k < allCharacters.length; k++) {
         charObj.isInitialized = false;

         // loop through characters and find first clicked character
         allCharacters[k].addEventListener('click', function (e) {
            //event.preventDefault();
            //event.stopPropagation();

            // html data attribute is used to parse the name of the character
            oneCharacter = allCharacters[k].getAttribute('data-character');
            charClassList = document.getElementById(oneCharacter).classList;

            // charBlock is a unordered list item, aka li
            charBlock = document.getElementsByClassName('character__image');
            charBlock[k].classList.remove('hide');
            charBlock[k].classList.add('active');
            charBlock[k].classList.add('animated');
            charBlock[k].classList.add('bounceIn');
            if (false === charObj.isInitialized) {

               charObj.isInitialized = true;
               charObj.selectedChar = oneCharacter;
               if (null != charObj.selectedChar) {
                  // document.getElementById('selected-char').innerHTML = charObj.selectedChar;
               } else { // set a default and update it later, remember async
                  charObj.selectedChar = 'char-horn-girl';
                  // document.getElementById('selected-char').innerHTML = charObj.selectedChar;
               }
               return(charObj);
            }
         }, false);
      }
   }
}
