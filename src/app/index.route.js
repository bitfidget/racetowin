-(function() {
  'use strict';

  angular
    .module('melbournecup')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/race/', {
        templateUrl: 'app/race/race.html',
        controller: 'RaceController',
        controllerAs: 'race'
      })
      .when('/race/:raceName', {
        templateUrl: 'app/race/race_user_selector.html',
        controller: 'RaceUserSelectorController',
        controllerAs: 'userSelection'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
