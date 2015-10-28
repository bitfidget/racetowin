  (function() {
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
      .when('/our-prediction', {
        templateUrl: 'app/main/our-prediction.html',
        controller: 'PredictionController',
        controllerAs: 'main'
      })
      .when('/our-geeks-pick', {
        templateUrl: 'app/main/our-geeks-pick.html',
        controller: 'GeeksController',
        controllerAs: 'geek'
      })
      .when('/spurious-correlations', {
        templateUrl: 'app/main/spurious-correlations.html',
        controller: 'SpuriousCorrelationsController',
        controllerAs: 'scc'
      })
      .when('/social', {
        templateUrl: 'app/main/social.html',
        controller: 'SocialController',
        controllerAs: 'sc'
      })
      .when('/the-form', {
        templateUrl: 'app/main/the-form.html',
        controller: 'FormController',
        controllerAs: 'form'
      })
      .when('/your-horsey-name', {
        templateUrl: 'app/main/your-horsey-name.html',
        controller: 'NameController',
        controllerAs: 'name'
      })
      .when('/credits', {
        templateUrl: 'app/main/credits.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/race-to-win/', {
        templateUrl: 'app/race/race-home.html',
        controller: 'RaceHomeController',
        controllerAs: 'raceHome'
      })
    //   .when('/race-to-win/race/', {
    //     templateUrl: 'app/race/race.html',
    //     controller: 'RaceController',
    //     controllerAs: 'race'
    //   })
      .when('/race-to-win/leaderboard/', {
        templateUrl: 'app/race/leaderboard.html',
        controller: 'LeaderboardController',
        controllerAs: 'leaderboard'
      })
      .when('/race-to-win/race', {
        templateUrl: 'app/race/race.html',
        controller: 'RaceController',
        controllerAs: 'race'
      })
      .when('/race-to-win/race/:raceName', {
        templateUrl: 'app/race/race.html',
        controller: 'RaceController',
        controllerAs: 'race'
      })
      .otherwise({
        redirectTo: '/'
      })
  }

})();
