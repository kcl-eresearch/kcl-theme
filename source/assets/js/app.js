import '@fortawesome/fontawesome-free/js/all';

(function () {
  'use strict'
  window.$ = window.jQuery = require('jquery')
  require('jquery-ui')
  require('bootstrap')
  require('dropzone')

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

    setTimeout(function() {
      $(".alert.auto-dismiss").alert('close');
    }, 10000);
  }

  window.setupNMSPage();

  // DataTables.
  window.dt = require('datatables.net-bs4');
  require('datatables.net-responsive-bs4');
  $('.datatable').DataTable();

  // Select 2.
  require('select2')
  $('select:not(.nos2):not(.duallistbox)').select2({'theme': 'bootstrap4'});

  // Dual List-Box.
  require('bootstrap4-duallistbox')
  $('.duallistbox').bootstrapDualListbox();

  // Waves.
  require('node-waves')
  if (window.Waves) {
      Waves.attach('.nav-menu:not(.js-waves-off) a, .btn:not(.js-waves-off):not(.btn-switch), .js-waves-on', ['waves-themed']);
      Waves.init();
  }

  // Slimscroll.
  require('jquery-slimscroll')
  $('.slimscroll').slimScroll({
  	position: 'right',
    color: '#0A2D50',
  	railVisible: true,
  	alwaysVisible: true
  });

  // Clipboard.JS.
  var ClipboardJS = require('clipboard')
  var clipboard = new ClipboardJS('.btn-clipboard');

  // Utils.
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
}())
