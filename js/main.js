/*$(document).ready(function() {
  $('.hamburger-icon').click(function(){
    $('.hamburger-icon__element').toggleClass('clicked');
  });
});
*/


window.onload = function() {

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
      el.addEventListener('click', function(event){
        nav.classList.remove('navigation__list--slide');
        hamburgerElement.classList.toggle('clicked');
      });
    })

    var menuColor = function() {
      const menu = document.querySelector('.navigation');
      if (window.scrollY >= menu.offsetHeight)  {
        menu.style.backgroundColor = 'rgba(249, 248, 251, 1)';
        menu.style.height = '70px';
      }
      else {
        menu.style.backgroundColor = 'rgba(249, 248, 251, 0)';
        menu.style.height = '145px';
      }
    };
    window.addEventListener('scroll', menuColor);

}
