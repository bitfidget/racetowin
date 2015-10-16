(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('SpuriousCorrelationsController', SpuriousCorrelationsController);

  /** @ngInject */
  function SpuriousCorrelationsController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    // $scope.data = {
    // 	1 : 1
    // }

    $scope.correlationSelect = 'none'

    $scope.showName = function(collection) {
    	debugger
    	return collection.key
    }

    $scope.correlations = [
    	{
    		name : 'series 1 vs series 2',
    		data1 : 
		      [{
		          "key": "Series 1",
		          "values": [ [ 2000 , 1] , [ 2001 , 2] , [ 2002 , 3] , [ 2003 , 4] , [ 2004 , 5] , [ 2005 , 6] ]
		      }],
		    data2 :
		      [{
		          "key": "Series 2",
		          "values": [ [ 2000 , 12] , [ 2001 , 12] , [ 2002 , 11] , [ 2003 , 14] , [ 2004 , 11] , [ 2005 , 14] ]
		      }]
    	},
    	{
    		name : 'series 3 vs series 4',
    		data : [
		      {
		          "key": "Series 3",
		          "area": true,
		          "values": [ [ 2000 , 12] , [ 2001 , 12] , [ 2002 , 15] , [ 2003 , 13] , [ 2004 , 5] , [ 2005 , 9] ]
		      },
		      {
		          "key": "Series 4",
		          "area": true,
		          "values": [ [ 2000 , 11] , [ 2001 , 11] , [ 2002 , 13] , [ 2003 , 12] , [ 2004 , 4] , [ 2005 , 8] ]
		      }
		    ]
    	}
    ]




  }
})();
