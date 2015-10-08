(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('RaceController', RaceController);

  /** @ngInject */
  function RaceController(realtime, $location, $routeParams) {
    var vm = this;

	vm.raceName = "aaaqqqqq";
	vm.raceRooms = realtime.raceRooms;
	vm.selectedRaceRoom = $routeParams.raceName;
	console.log($routeParams);

	vm.selectRace = function(raceName){
		console.log(raceName);
		// realtime.setSelectedRace(raceName);
		$location.path('race/'+raceName);
	}


  }
})();
