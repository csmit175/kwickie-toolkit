(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, dataService, $routeParams) {
    $scope.topics = "null";
    dataService.getTopics().then(function(response) {
        $scope.topics = response.data;
    });
  }
})();
