(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('KwickiesDetailsController', KwickiesDetailsController);

  /** @ngInject */
  function KwickiesDetailsController($scope, dataService, $routeParams, $http) {

    $scope.topicId = $routeParams.sessionsId;

    $http.get('https://bigdev.kwickie.com/api/Topics/' + $routeParams.kwickiesId).success(function(data) {
      $scope.kwickieDetails = data;
    });
  }
})();
