(function() {
  'use strict';

  angular
    .module('melbournecup')
    .directive('gameCanvas', gameCanvas);

  /** @ngInject */
  function gameCanvas() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/gameCanvas/gameCanvas.html',
      scope: {
          race:'@'
      },
      controller: gameCanvasController,
      controllerAs: 'gc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function gameCanvasController(gameRealtime) {
      var gc = this;
      gc.state = "JOINING"; //all states - "JOINING", "JOINED", "WAITING", "COUNTDOWN", "PLAYING", "RESULT"
	  gc.realtime = gameRealtime;
      //gc.speeds = [0.3, 0.5, 0.6, 0.9,1];
      gc.speeds = [1, 2, 3, 9, 12];

      gc.getPosition = function(){
          if(gameRealtime.selectedHorse){
              return gameRealtime.selectedHorse.distance;
          }else{
              return 0;
          }

      }

      gc.horses = function(){
          //return [1,2,3,4];
          if(gameRealtime["raceData"]){
              return gameRealtime["raceData"]["horses"];
          }else{
              return [];
          }
      }
    }
  }

})();
