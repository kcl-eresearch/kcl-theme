import '@fortawesome/fontawesome-free/js/all';
import Bloodhound from "typeahead.js/dist/bloodhound";
global.Bloodhound = Bloodhound;

(function () {
  'use strict'
  window.$ = window.jQuery = require('jquery')
  require('jquery-ui')
  require('bootstrap')
  require('dropzone')
  window.dt = require('datatables.net-bs4');
  require('datatables.net-responsive-bs4');
  require('select2')
  require('bootstrap4-duallistbox')
  require('node-waves')
  require('jquery-slimscroll')
  require('typeahead.js/dist/typeahead.jquery')
  global.ClipboardJS = require('clipboard')
  global.Quill = require('quill')

  $.urlParam = function(name){
  	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results && results.length > 0) {
      	return results[1];
      }

      return 0;
  }

  // Utils.
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

  // Actual document ready event.
  $(document).ready(function() {
    // Quill.
    if ($('.quill-editor').length > 0) {
      var editor = new Quill('.quill-editor', {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],

            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']
          ],
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
          }
        },
        theme: 'snow'
      });
    }

    // DataTables.
    $('.datatable').DataTable();

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

    window.setupNMSPage();
  });
}())
