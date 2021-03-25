import '@fortawesome/fontawesome-free/js/all';
import Bloodhound from "typeahead.js/dist/bloodhound";
global.Bloodhound = Bloodhound;

(function () {
  'use strict'
  window.$ = window.jQuery = require('jquery')
  require('jquery-ui')
  require('bootstrap')
  require('select2')
  require('bootstrap4-duallistbox')
  require('node-waves')
  require('jquery-slimscroll')
  require('typeahead.js/dist/typeahead.jquery')
  global.ClipboardJS = require('clipboard')

  require('./common.js?1616683094')
  require('./animate.js?1616683094')

  $(document).ready(function() {
    // Quill.
    if ($('.quill-editor').length > 0) {
      console.log("You should include the full version of the KCL theme JS for Quill support.");
    }

    // Datatables.
    if ($('.datatable').length > 0) {
      console.log("You should include the full version of the KCL theme JS for Datatables support.");
    }
  });
}())
