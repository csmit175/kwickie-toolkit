(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('BrandsController', BrandsController);

  /** @ngInject */
  function BrandsController($scope, dataService) {
    $scope.topics = "null";
    dataService.getBrands().then(function(response) {
        $scope.topics = response.data;
    });
  }
})();
