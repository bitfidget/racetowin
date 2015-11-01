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
        controller: 'CreditsController',
        controllerAs: 'credits'
      })
      .otherwise({
        redirectTo: '/'
      })
  }

})();
