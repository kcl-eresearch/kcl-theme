
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results && results.length > 0) {
    	return results[1];
    }

    return 0;
}

// Utils.
window.setupERPage = function() {
  $('[data-toggle="hoverover"]').popover({
      trigger: 'hover',
      boundary: 'window',
      container: 'body'
  });

  $('[data-toggle="popover"]').popover({
      trigger: 'focus',
      boundary: 'window',
      container: 'body',
      delay: {
        "show": 0,
        "hide": 2000
      }
  });

  $('[data-toggle="tooltip"]').tooltip();

  setTimeout(function() {
    $(".alert.auto-dismiss").alert('close');
  }, 10000);
}

// Actual document ready event.
$(document).ready(function() {
  // Clipboard.JS.
  if ($('.btn-clipboard').length > 0) {
    var clipboard = new ClipboardJS('.btn-clipboard');
  }

  // Select 2.
  $('select:not(.nos2):not(.duallistbox):visible').select2({'theme': 'bootstrap4'});

  // Dual List-Box.
  $('.duallistbox').bootstrapDualListbox();

  // Slimscroll.
  $('.slimscroll').slimScroll({
    position: 'right',
    color: '#0A2D50',
    railVisible: true,
    alwaysVisible: true
  });

  // Waves.
  var wavesSelect = '.nav-menu:not(.js-waves-off) a, .btn:not(.js-waves-off):not(.btn-switch), .js-waves-on';
  if ($(wavesSelect).length > 0) {
    Waves.attach(wavesSelect, ['waves-themed']);
    Waves.init();
  }

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

  window.setupERPage();
});
