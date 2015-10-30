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
            name : 'horse 1',
            odds : 10
        },
        {
            name : 'horse 2',
            odds : 10
        },
        {
            name : 'horse 3',
            odds : 10
        },
        {
            name : 'horse 4',
            odds : 10
        },
        {
            name : 'horse 5',
            odds : 10
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
        return (200 - (num * 200/$scope.barMax()) + 36);
    }

    $scope.barHeight = function(num) {
    	return (num * 200/$scope.barMax());
    }

  }
})();
