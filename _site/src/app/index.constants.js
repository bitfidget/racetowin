/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('melbournecup')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('firebaseBasePath', 'https://racetowin.firebaseio.com/');

})();
