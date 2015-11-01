(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('PredictionController', PredictionController);

  /** @ngInject */
  function PredictionController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"


    $scope.horses = [
        {
            name : 'Fame Game',
            odds : 3.5
        },
        {
            name : 'Preferment',
            odds : 9
        },
        {
            name : 'Trip To Paris',
            odds : 9
        },
        {
            name : 'Almoonqith',
            odds : 14
        },
        {
            name : 'The United States',
            odds : 21
        }
	  ]

    

    $scope.barMax = function() {
    	var max;
    	$.each($scope.horses, function(i, v) {
    		if ((!max) || (max < v.odds)) {
    			max = v.odds;
    		}
    	});
    	console.log(max)
    	return max;
    };

    $scope.barSize = function(num) {
        return (200 - (num * 200/$scope.barMax()));
    }

    $scope.barHeight = function(num) {
    	return (num * 200/$scope.barMax()) + 30;
    }

  }
})();
