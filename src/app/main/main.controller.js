(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"


  }
})();
