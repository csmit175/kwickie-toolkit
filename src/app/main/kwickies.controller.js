(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('KwickiesController', KwickiesController);

  /** @ngInject */
  function KwickiesController($scope, $http) {

    $scope.submit = function() {

      $scope.list = this.formDetails;

      console.log($scope.list);

      $http.get('https://bigdev.kwickie.com/api/kwickies' + '?filter=' + '%7B%22where%22%3A%7B%22answered%22%3A%22' + $scope.list.answered + '%22%7D%7D').success(function(data) {

        $scope.kwickies = data;

      });

    };

  }
})();
