
const btnForm = document.querySelector('.form_input');

body.addEventListener('click', (event) => {
  
  let target = event.target;
  
  if (target.closest('.hero__btn')) {

    $('form').append('<a href="#" id="close-form" title="Вверх"></a>');

    btnForm.classList.toggle('open-form'); 
    logo.classList.toggle('burger-open');   
    body.classList.toggle('lock');
  } else if (target.closest('.form__btn, #close-form')) {
    burger.classList.remove('burger-open');
    logo.classList.remove('burger-open');
    menuNav.classList.remove('burger-open');
    body.classList.remove('lock');
    setTimeout(() => {
      $('#close-form').remove();
      btnForm.classList.remove('open-form'); 
      $(function() {
        $('#go-top').scrollToTop();
       });
    }, 300);
  } else {
    return;
  }  
});
