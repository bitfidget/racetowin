(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('HamburgerController', HamburgerController);

    function HamburgerController($scope, $rootScope, $location) {

    	$scope.navMe = function(route) {
    		$scope.hamburgerState = !$scope.hamburgerState;
    		$location.path(route);
    	}

    }



})();

