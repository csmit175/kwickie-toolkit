(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider

      .when('/sessions', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/sessions/:sessionsId', {
        templateUrl: 'app/main/main-details.html',
        controller: 'MainDetailsController',
        controllerAs: 'main'
      })

      .when('/members', {
        templateUrl: 'app/main/members.html',
        controller: 'MembersController',
        controllerAs: 'members'
      })
      .when('/members/:membersId', {
        templateUrl: 'app/main/members-details.html',
        controller: 'MembersDetailsController',
        controllerAs: 'members'
      })

      .when('/kwickies', {
        templateUrl: 'app/main/kwickies.html',
        controller: 'KwickiesController',
        controllerAs: 'kwickies'
      })
      .when('/kwickies/:kwickiesId', {
        templateUrl: 'app/main/kwickies-details.html',
        controller: 'KwickiesDetailsController',
        controllerAs: 'kwickies'
      })

      .when('/brands', {
        templateUrl: 'app/main/brands.html',
        controller: 'BrandsController',
        controllerAs: 'brands'
      })
      .when('/brands/:brandsId', {
        templateUrl: 'app/main/brands-details.html',
        controller: 'BrandsDetailsController',
        controllerAs: 'brands'
      })
      .otherwise({
        redirectTo: '/sessions'
      });
  }

})();
