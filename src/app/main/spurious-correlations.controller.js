(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('SpuriousCorrelationsController', SpuriousCorrelationsController);

  /** @ngInject */
  function SpuriousCorrelationsController($scope, $rootScope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    $scope.showName = function(collection) {
    	return collection.key
    }

    $scope.minMax = function(data) {
    	var min, max;
    	$.each(data, function(i, v) {
    		if ((!min) || (min > v[1])) {
    			min = v[1];
    		}
    		if ((!max) || (max < v[1])) {
    			max = v[1];
    		}
    	});
    	return [min, max];
    }

    $scope.correlations = [
    	{
				name : 'Please select...',
				index: 0
			},
    	{
				name : 'Pork consumed & Horse carry weight',
				index: 1,
				score: 79,
				data1 : 
					[{
						"key": "Pork Consumed",
						"values": [ [2005, 390], [2006, 383], [2007, 385], [2008, 345], [2009, 324], [2010, 339], [2011, 344], [2012, 352], [2013, 360], [2014, 362]],
						"color": "#DB536A"
					}],
				data2 :
					[{
						"key": "Winning horse carry weight",
						"values": [ [2005, 58], [2006, 56], [2007, 54.5], [2008, 53], [2009, 51], [2010, 54.5], [2011, 54.5], [2012, 53.5], [2013, 55], [2014, 56.5]],
			      "color": "#FFB600"
					}]
			},
			{
				name : 'Unemployment Rate & Field size',
				index: 2,
				score: 77,
				data1 : 
					[{
						"key": "Unemployment Rate",
						"values": [ [2005, 5.1], [2006, 4.9], [2007, 4.4], [2008, 4.2], [2009, 5.6], [2010, 5.1], [2011, 5.1], [2012, 5.2], [2013, 5.7]],
						"color": "#DB536A"
					
					}],
				data2 :
					[{
						"key": "Field size",
						"values": [ [2005, 24], [2006, 23], [2007, 21], [2008, 22], [2009, 23], [2010, 23], [2011, 23], [2012, 24], [2013, 24]],
						"color": "#FFB600"
					}]
			},
			{
				name : 'Current Account Balance & Cup Attendance',
				index: 3,
				score: 73,
				data1 : 
					[{
						"key": "Current Account Balance",
						"values": [ [2005, 4209], [2006, 4256], [2007, 2740], [2008, 4230], [2009, 4285], [2010, 5378], [2011, 4368], [2012, 3708], [2013, 3928]],
						"color": "#DB536A"
					
					}],
				data2 :
					[{
						"key": "Cup Attendance",
						"values": [ [2005, 106479], [2006, 106691], [2007, 102411], [2008, 107280], [2009, 102161], [2010, 110223], [2011, 105979], [2012, 106162], [2013, 104169]],
						"color": "#FFB600"
					}]
			},
			{
				name : 'Total spirits consumed & Characters in winners name',
				index: 4,
				score: -80,
				data1 : 
					[{
						"key": "Total spirits consumed",
						"values": [ [2005, 34996], [2006, 35493], [2007, 37477], [2008, 38841], [2009, 35912], [2010, 35825], [2011, 36847], [2012, 35572], [2013, 36162]],
						"color": "#DB536A"
					}],
				data2 :
					[{
						"key": "Characters in winners name",
						"values": [ [2005, 11], [2006, 11], [2007, 9], [2008, 6], [2009, 8], [2010, 9], [2011, 7], [2012, 10], [2013, 8]],
						"color": "#FFB600"
					}]
			}
    ]

    $scope.correlationSelect = $scope.correlations[0]

  }
})();
