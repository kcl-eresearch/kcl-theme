import 'jquery';
import 'jquery-ui';
import 'bootstrap';
import 'clipboard';
import 'select2';
import 'dropzone';
import 'datatables';
import './datatables-bootstrap';
import '@fortawesome/fontawesome-free/js/all';

require(['jquery', 'bootstrap', 'clipboard', 'dropzone'], function($, b, ClipboardJS, Dropzone) {
  window.$ = window.jQuery = $;

  $.urlParam = function(name){
  	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results && results.length > 0) {
      	return results[1];
      }

      return 0;
  }

  window.setupNMSPage = function() {
    $('[data-toggle="hoverover"]').popover({
        trigger: 'hover',
        boundary: 'window',
        container: 'body'
    });

    $('[data-toggle="popover"]').popover({
        trigger: 'focus',
        boundary: 'window',
        container: 'body'
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.datatable').DataTable();

    setTimeout(function() {
      $(".alert.auto-dismiss").alert('close');
    }, 10000);
  }

  window.setupNMSPage();

  $('select:not(.nos2)').select2({'theme': 'bootstrap4'});

  var clipboard = new ClipboardJS('.btn-clipboard');

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
});
