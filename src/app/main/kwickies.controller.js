(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('KwickiesController', KwickiesController);

  /** @ngInject */
  function KwickiesController($scope, dataService) {
    $scope.topics = "null";
    dataService.getKwickies().then(function(response) {
        $scope.kwickies = response.data;
    });
  }
})();
