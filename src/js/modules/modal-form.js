const btnForm = document.querySelector('.form_input');

body.addEventListener('click', (event) => {
  
  let target = event.target;
  
  if (target.closest('.hero__btn')) {
    btnForm.classList.toggle('open-form'); 
    logo.classList.toggle('burger-open');   
    body.classList.toggle('lock');
  } else if (target.closest('.form__btn')) {
    burger.classList.remove('burger-open');
    logo.classList.remove('burger-open');
    menuNav.classList.remove('burger-open');
    btnForm.classList.remove('open-form'); 
    body.classList.remove('lock');
  } else {
    return;
  }  
});
