(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('GeeksController', GeeksController);

  /** @ngInject */
  function GeeksController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"


    $scope.methods = [
    	{
    		name : 'Please select a method...',
    		index : 0,
    		horse : ['one','two','three','four','five'],
    		odds : [1,2,3,4,5]
    	},
    	{
			name : 'Linear regression',
			index: 1,
    		horse : ['one','two','three','four','five'],
    		odds : [1,2,3,4,5]
		},
		{
			name : 'Machine learning',
			index: 2,
    		horse : ['one','two','three','four','five'],
    		odds : [1,2,3,4,5]
		},
		{
			name : 'Best name or gut feel',
			index : 4,
    		horse : ['one','two','three','four','five'],
    		odds : [1,2,3,4,5]
		}
	]

    $scope.methodSelect = $scope.methods[0];

    $scope.barMax = function() {
    	var max;
    	$.each($scope.methodSelect.odds, function(i, v) {
    		if ((!max) || (max < v)) {
    			max = v;
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
