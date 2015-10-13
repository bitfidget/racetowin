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
      .when('/our-prediction', {
        templateUrl: 'app/main/our-prediction.html',
        controller: 'OurPredictionController',
        controllerAs: 'ourPrediction'
      })
      .when('/winning-profile', {
        templateUrl: 'app/main/winning-profile.html',
        controller: 'WinningProfileController',
        controllerAs: 'winningProfile'
      })
      .when('/social', {
        templateUrl: 'app/main/social.html',
        controller: 'SocialController',
        controllerAs: 'social'
      })
      .when('/the-form', {
        templateUrl: 'app/main/the-form.html',
        controller: 'TheFormController',
        controllerAs: 'theForm'
      })
      .when('/credits', {
        templateUrl: 'app/main/credits.html',
        controller: 'CreditsController',
        controllerAs: 'credits'
      })
      .when('/race-to-win/', {
        templateUrl: 'app/race/race-home.html',
        controller: 'RaceHomeController',
        controllerAs: 'raceHome'
      })
      .when('/race-to-win/race/', {
        templateUrl: 'app/race/race.html',
        controller: 'RaceController',
        controllerAs: 'race'
      })
      .when('/race-to-win/leaderboard/', {
        templateUrl: 'app/race/leaderboard.html',
        controller: 'LeaderboardController',
        controllerAs: 'leaderboard'
      })
      .when('/race-to-win/race/:raceName', {
        templateUrl: 'app/race/race_user_selector.html',
        controller: 'RaceUserSelectorController',
        controllerAs: 'userSelection'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
