class Modal {

   constructor(modalID) {
      this.setupGame = document.getElementById('select-character');
      this.modal = document.getElementById(modalID);
      this.keepPlaying = this.modal.getElementsByClassName('play-button')[0];
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.setupGame.classList.add('active');
      this.setupGame.classList.remove('none');
      this.keepPlaying.classList.remove('none');
      this.keepPlaying.classList.add('active');
   }

   /**
    * @description Hide the modal
    */
   hide() {
      this.modal.classList.remove('active');
      this.keepPlaying.classList.remove('active');
      this.keepPlaying.classList.add('none');
   }


   /**
    * @description
    *
    */
   startModal() {
      let theAvatar;
      let getAvatar;
      let charBlock;

      const allAvatars = Array.from(document.querySelectorAll('.charImg'));

      for (let k = 0; k < allAvatars.length; k++) {
         let hasSent = false;

         allAvatars[k].addEventListener('click', function (e) {
            event.preventDefault();

            theAvatar = allAvatars[k].getAttribute('data-avatar');

            getAvatar = document.getElementById(theAvatar).classList;
            charBlock = document.getElementsByClassName('character__image')[0].classList;
            getAvatar.add('active');
            getAvatar.remove('hide');
            getAvatar.add('zoomIn');

            if (false === hasSent) {
               console.log(theAvatar); // JSON.parse
               hasSent = true;
            }
         }, false);
      }
   }
}
