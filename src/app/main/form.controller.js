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
    		name: "Horse 1",
    		number: 1,
    		weight: 1,
    		tip: 1,
    		previous: '1 1 1',
    		more: false,
    		age: 1,
    		nationality: 'One',
    		wins: 1,
    		place: 1,
    		track: 1,
    	}
    ]

  }
})();
