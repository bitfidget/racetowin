(function() {
  'use strict';

  angular
    .module('melbournecup')
    .directive('game', game);

  /** @ngInject */
  function game() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/game/game.html',
      scope: {
          race:'@',
          horse:'@',
          jockey:'@',
          speed:'@'
      },
      controller: GameController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function GameController(gameRealtime) {
      var vm = this;



      vm.state = "JOINING"; //all states - "JOINING", "JOINED", "WAITING", "COUNTDOWN", "PLAYING", "RESULT"

	  vm.realtime = gameRealtime.raceData;

      vm.joinRace = function(){
         gameRealtime.joinRace(vm.race,vm.jockey, vm.horse, vm.speed);
      }

      vm.updateDistance = function(){
          gameRealtime.updateDistance();
      }

      vm.setSpeed= function(speed){
         gameRealtime.setSpeed(speed);
      }

      vm.horses = function(){
          //return [1,2,3,4];
          if(gameRealtime["raceData"]){
              return gameRealtime["raceData"]["horses"];
          }else{
              return [];
          }
      }

      vm.startTest = function(){
          //start test
          gameRealtime.startRace();
      }



    }
  }

})();
