(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('MembersController', MembersController);

  /** @ngInject */
  function MembersController($scope, dataService) {
    $scope.topics = "null";
    dataService.getMembers().then(function(response) {
        $scope.members = response.data;
    });
  }
})();
