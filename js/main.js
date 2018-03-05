/*$(document).ready(function() {
  $('.hamburger-icon').click(function(){
    $('.hamburger-icon__element').toggleClass('clicked');
  });
});
*/


window.addEventListener('load', function(){
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const hamburgerElement = document.querySelector('.hamburger-btn__element');
  const nav = document.querySelector('.navigation__list');

  hamburgerBtn.addEventListener('click', function() {
      hamburgerElement.classList.toggle('clicked');
      nav.classList.toggle('navigation__list--slide')
});
}) 
