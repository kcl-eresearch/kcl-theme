import 'jquery';
import 'jquery-ui';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

window.$ = window.jQuery = require('jquery');

$(document).on('scroll', function () {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

$(document).on('click', 'a.scroll-to-top', function (e) {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 1000, 'swing');
  e.preventDefault();
});
