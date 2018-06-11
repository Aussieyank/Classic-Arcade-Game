/**
 * @description
 * @param el
 * @returns {number}
 */
   //https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin
   //function getAbsoluteHeight(el) {
   //   // Get the DOM Node if you pass in a string
   //   el = (typeof el === 'string') ? document.querySelector(el) : el;
   //
   //   let styles = window.getComputedStyle(el);
   //   let margin = parseFloat(styles['marginTop']) +
   //      parseFloat(styles['marginBottom']);
   //
   //   return Math.ceil(el.offsetHeight + margin);
   //}

   // https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
   //document.addEventListener('DOMContentLoaded', function () {

   // https://stackoverflow.com/questions/34772957/how-to-make-canvas-responsive
   //    $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top-Math.abs( $("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
   //    $("#h-input").val($("#canvas").outerHeight());
   //    $("#w-input").val($("#canvas").outerWidth());
   //    $("#set-size").click(function(){
   //       $("#canvas").outerHeight($("#h-input").val());
   //       $("#main-content").width($("#w-input").val());
   //       $("#canvas").outerWidth($("#main-content").width());
   //    });
   //});

let setupClasses = document.getElementById('avatar-modal-Id').classList,
   wonClasses    = document.getElementById('won-game').classList,
   lostClasses   = document.getElementById('lost-game').classList,

   setupButton = document.getElementById('button__avatar-modal-Id'),
   lostButton  = document.getElementById('button__lost-game'),
   wonButton   = document.getElementById('button__won-game');

/**
 * @description Open modal and give stats when user wins
 */
function closeSetupModal() {
   event.preventDefault();
   setTimeout(function () {

      //setupClasses.remove( 'active' )
      //setupClasses.add( 'none' )
      setupClasses.add('bounceInDown');
      avatarModalId.hide();
      //avatarModalId.hideButton();
      //alert('in setup button');
      //console.log('in setupButton');
      //location.reload();
   }, 600);  // timeout
}

//let setupModal;
setupButton.addEventListener('click', closeSetupModal, false)


/**
 * @description Open modal and give stats when user wins
 */
function closeWonModal() {
   location.reload();
}

wonButton.addEventListener('click', closeWonModal, false)

/**
 * @description open modal and give stats when user loses
 */
function closeLostModal() {
   location.reload();
}

lostButton.addEventListener('click', closeLostModal, false)

