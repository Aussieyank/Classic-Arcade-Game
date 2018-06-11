class Modal {

   constructor(modalID) {
      this.modal         = document.getElementById(modalID);
      this.avatarModalId = document.getElementById('avatar-modal-Id');
      this.playButton    = document.getElementsByClassName('play-button')[0];
      this.score         = this.modal.getElementsByClassName('score');
   }

   /**
    * @description  Show the modal, and display the score if it is in this view
    * @param keepScore
    */
   show(keepScore = 0) {
      this.avatarModalId.classList.add('active');
      this.avatarModalId.classList.remove('none');
      this.playButton.classList.add('active');
      this.playButton.classList.remove('none');
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
   getAvatar() {
      let oneAvatar;
      let getAvatarClassList;

      const allAvatars = Array.from(document.querySelectorAll('.charImg'));
      const charBlock  = document.getElementsByClassName('character__image');

      for (let k = 0; k < allAvatars.length; k++) {
         charBlock[k].classList.remove('active');
      }

      for (let k = 0; k < allAvatars.length; k++) {
         let hasSent = false;

         allAvatars[k].addEventListener('click', function (e) {
            event.preventDefault();

            oneAvatar = allAvatars[k].getAttribute('data-avatar');
            getAvatarClassList = document.getElementById(oneAvatar).classList;

            const charBlock = document.getElementsByClassName('character__image');
            charBlock[k].classList.remove('hide');
            charBlock[k].classList.add('active');
            charBlock[k].classList.add('animated');
            charBlock[k].classList.add('rubberBand');

            getAvatarClassList.add('active');
            getAvatarClassList.remove('hide');
            //alert('getAvatarClassList: ' + getAvatarClassList);


            if (false === hasSent) {
               console.log(oneAvatar); // JSON.parse
               hasSent = true;
               alert('oneAvatar: ' + oneAvatar);
               return(oneAvatar);
            }
         }, false);
      }
   }
}
