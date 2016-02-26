(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('BrandsDetailsController', BrandsDetailsController);

  /** @ngInject */
  function BrandsDetailsController($scope, dataService, $routeParams, $http) {

    $scope.topicId = $routeParams.sessionsId;

    $http.get('https://bigdev.kwickie.com/api/Topics/' + $routeParams.brandsId).success(function(data) {
      $scope.brandDetails = data;
    });
  }
})();
