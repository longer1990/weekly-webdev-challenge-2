/*$(document).ready(function() {
  $('.hamburger-icon').click(function(){
    $('.hamburger-icon__element').toggleClass('clicked');
  });
});
*/

const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerElement = document.querySelector('.hamburger-icon__element');

hamburgerIcon.addEventListener('click', function() {
    hamburgerElement.classList.toggle('clicked');
});
