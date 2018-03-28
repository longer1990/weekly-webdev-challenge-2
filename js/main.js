/*$(document).ready(function() {
  $('.hamburger-icon').click(function(){
    $('.hamburger-icon__element').toggleClass('clicked');
  });
});
*/


window.addEventListener('load', function() {

    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const hamburgerElement = document.querySelector('.hamburger-btn__element');
    const nav = document.querySelector('.navigation__list');
    const navLink = document.querySelectorAll('.navigation__link');

    hamburgerBtn.addEventListener('click', function() {
        hamburgerElement.classList.toggle('clicked');
        nav.classList.toggle('navigation__list--slide')
    });

/*
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function() {
            nav.classList.remove('navigation__list--slide');
            hamburgerElement.classList.toggle('clicked');
        });
    }; */

    navLink.forEach(function(el){
      el.addEventListener('click', function(){
        nav.classList.remove('navigation__list--slide');
        hamburgerElement.classList.toggle('clicked');
      });
    })

})
