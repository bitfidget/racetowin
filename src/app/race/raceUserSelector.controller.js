(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('RaceUserSelectorController', RaceUserSelectorController);

  /** @ngInject */
  function RaceUserSelectorController( $location, $routeParams) {
    var vm = this;

	vm.selectedRace = $routeParams.raceName;



  }
})();
