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

    vm.tempFn = function(){
        console.log("-----------");
    };

    vm.selectRace = function(race){
        console.log("-----------");
        debugger;
    };

    vm.races = {
                    'Race1':{horses:{'H1':{},'J1':{}}},
                    'Race2':{horses:{'H2':{},'J1':{}}},
                    'Race3':{horses:{'H3':{},'J1':{}}},
                    'Race4':{horses:{'H4':{},'J1':{}}},
                    'Race5':{horses:{'H5':{},'J1':{}}}
                };








  }
})();
