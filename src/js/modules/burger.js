const burger = document.querySelector('.burger');
const logo = document.querySelector('.logo');
const menuNav = document.querySelector('.wrapper-burger-menu');
const button = document.querySelector('.header__menu-button');
const body = document.querySelector('body');

const anchors = document.querySelectorAll('a[href*="#"]')

body.addEventListener('click', (event) => {
  
  let target = event.target;
  
  if (target.closest('.burger')) {
    burger.classList.toggle('burger-open');
    logo.classList.toggle('burger-open');
    menuNav.classList.toggle('burger-open');
    button.classList.toggle('burger-open');
    body.classList.toggle('lock');
  } else if (target.closest('.header__menu-button')) {
    burger.classList.remove('burger-open');
    logo.classList.remove('burger-open');
    menuNav.classList.remove('burger-open');
    body.classList.remove('lock');      
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }  
  } else {
    return;
  }  
});

var closeBurger = function (mediaQuery) {
  if (mediaQuery.matches) {
    burger.classList.remove('burger-open');
    logo.classList.remove('burger-open');
    menuNav.classList.remove('burger-open');
    body.classList.remove('lock'); 
  } else {
    burger.classList.remove('burger-open');
    logo.classList.remove('burger-open');
    menuNav.classList.remove('burger-open');
    body.classList.remove('lock'); 
  }
},
media = window.matchMedia('all and (max-width: 1279px)');

closeBurger(media);
media.addListener(closeBurger);
