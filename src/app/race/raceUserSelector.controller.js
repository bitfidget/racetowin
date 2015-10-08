(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('RaceUserSelectorController', RaceUserSelectorController);

  /** @ngInject */
  function RaceUserSelectorController(realtime, $location, $routeParams) {
    var vm = this;

	vm.raceName = "aaaqqqqq";
	vm.raceRoomsData = realtime.getRoomData($routeParams.raceName);
	vm.selectedRaceRoom = $routeParams.raceName;
    vm.selectedHorse = null;

    vm.selectHorse = function(horse){
        vm.selectedHorse = horse;
    }


  }
})();
