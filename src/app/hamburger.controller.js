(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('HamburgerController', HamburgerController);

    function HamburgerController($scope, $rootScope, $location) {

        if ($location.path() == '/') {
            $rootScope.bodyClass = 'home';
        }

    	$scope.navMe = function(route) {
    		$scope.hamburgerState = !$scope.hamburgerState;
    		$location.path(route);
    	}

        $rootScope.contHeight = ($(window).innerHeight() - 60);

    }



})();

