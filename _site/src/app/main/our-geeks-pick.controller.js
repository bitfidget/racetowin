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
    		odds : [12,4,5,64,6]
    	},
    	{
				name : 'Linear regression',
				index: 1,
    		horse : ['one','two','three','four','five'],
    		odds : [2,34,56,23,5]
			},
			{
				name : 'Classification via machine learning',
				index: 2,
    		horse : ['one','two','three','four','five'],
    		odds : [34,45,45,12,12]
			},
			{
				name : 'ELO',
				index: 3,
    		horse : ['one','two','three','four','five'],
    		odds : [45,25,64,75,97]
			},
			{
				name : 'Best name or gut feel',
				index : 4,
    		horse : ['awesome','grumpy dumpling','i will win','horse racing is mean','five'],
    		odds : [13,15,16,27,13]
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
    	return (200 - (num * 200/$scope.barMax()));
    }

  }
})();
