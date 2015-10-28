(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    $scope.horses = [
    	{
    		name: "Binky",
    		number: 12,
    		weight: 45,
    		tip: 0,
    		ref: 11143,
    		more: false,
    		age: 6,
    		nationality: 'irish',
    		wins: 45,
    		place: 67,
    		track: 1,
    	},
    	{
    		name: "Blinky",
    		number: 11,
    		weight: 35,
    		tip: 2,
    		ref: 11143,
    		more: false,
    		age: 6,
    		nationality: 'greek',
    		wins: 45,
    		place: 67,
    		track: 3,
    	}
    ]

  }
})();
