(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    // this will eventually come from the saved profile against your facebook profile
    $scope.profile = {
    	// matches facebook profile name
    	userName : 'Kriss Heimanis',
    	// horse profile name as saved against facebook
    	horseName : 'Sweet Sirens',
    	// settled posisition - affects how your horse races
    	horsePosition : 'middle',
    	// horses preferred track condition - affects how your horse races
    	horseCondition : 3,
    	// will load a different image according to your horses colour
    	horseColour: 'brown',
    	// general statistics
    	horseRaces : 12,
    	horseWins : 3,
    	horsePlaces : 5,
    	horseRecord : 185
    }

  }
})();
