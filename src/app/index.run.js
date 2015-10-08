(function() {
  'use strict';

  angular
    .module('melbournecup')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
