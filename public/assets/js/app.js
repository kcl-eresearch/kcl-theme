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
  require('chart.js')

  require('./common.js?1616421362')
  require('./animate.js?1616421362')
  require('./chartjs-ext.js?1616421362')

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
  });
}())
