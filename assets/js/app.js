import 'jquery';
import 'jquery-ui';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

require(['jquery', 'bootstrap'], function($, b) {
  window.$ = window.jQuery = $;

  $.urlParam = function(name){
  	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results && results.length > 0) {
      	return results[1];
      }

      return 0;
  }

  function setupPage() {
    $('[data-toggle="hoverover"]').popover({
        trigger: 'hover'
    });

    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });
  }

  setupPage();

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
}
