(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('RaceController', RaceController);

  /** @ngInject */
  function RaceController($location, $routeParams) {
    var vm = this;

    //test data
    vm.raceName     = 'r10';
    vm.jockeyName   = 'j1';
    vm.horseName    = 'h1';
    vm.speed        = '.8';

	vm.selectedRace = $routeParams.raceName;
	console.log($routeParams);



  }
})();
