(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('RaceController', RaceController);

  /** @ngInject */
  function RaceController($location, $routeParams, $scope) {
    var vm = this;

    //test data
    vm.raceName     = '';
    vm.jockeyName   = '';
    vm.horseName    = '';
    vm.speed        = '.8';

    vm.selectedRace = '';

    vm.state = 'PREDEFINED_RACE_SELECTION'; //OTHER STATES - "PREDEFINED_RACE_SELECTION", "RACE_SELECTION", "GAME_SCREEN"

    if($routeParams.raceName){
        vm.selectRace($routeParams.raceName);
    }



    vm.selectRace = function(race){
        vm.raceName = race;

        var _val = Math.round(Math.random()*100000);
        vm.horseName = 'H_' + _val;
        vm.jockeyName   = 'J_' + _val;
        vm.state = 'GAME_SCREEN';
        vm.speed = 0.6 + (Math.random()/2);
        $scope.$broadcast('StartGameEvent', {raceName:vm.raceName,horseName:vm.horseName,jockeyName:vm.jockeyName,speed:vm.speed});
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
