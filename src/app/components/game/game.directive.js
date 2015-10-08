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
          room:'=',
          horse:'='
      },
      controller: GameController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function GameController(realtime) {
      var vm = this;

	  vm.realtime = realtime;
	  vm.position = 0;

	  vm.increaseSpeed = function(speed){
		 vm.position += speed;

	  }
    }
  }

})();
