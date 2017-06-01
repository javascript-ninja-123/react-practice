(function(){

let dialog = document.querySelector('.mdl-dialog');
let showModal = document.querySelector('.home-section__header ');
let closeModal = document.querySelector('.cancel');

 showModal.addEventListener('click', function() {
    dialog.showModal();
    /* Or dialog.show(); to show the dialog without a backdrop. */
  });

  closeModal.addEventListener('click',function(){
  	dialog.close();
  })



})();