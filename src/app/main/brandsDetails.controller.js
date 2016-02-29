(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('BrandsDetailsController', BrandsDetailsController);

  /** @ngInject */
  function BrandsDetailsController($scope, dataService, $routeParams, $http) {

    $scope.topicId = $routeParams.brandsId;

    $http.get('https://bigdev.kwickie.com/api/Brands/' + '?filter=' + '%7B%22where%22%3A%7B%22id%22%3A%22' + $routeParams.brandsId + '%22%7D%7D').success(function(data) {

      $scope.TopicDetails = data;

      $scope.formDetails = {
          'BrandName': data[0].name,
          'LogoUrl': data[0].logo,
          'WebUrl': data[0].url,
          'Color': data[0].color,
          //'BrandCoverImage': data.startDate,
          //'BMCInviteLink': data.endDate
      };

    });

    $scope.submit = function() {

        $scope.list = this.formDetails;

        var dataobj = {
          'name': $scope.list.BrandName,
          'logo': $scope.list.LogoUrl,
          'url': $scope.list.WebUrl,
          'color': $scope.list.Color,
          //'image': $scope.list.BrandCoverImage,
          //'': $scope.list.BMCInviteLink
        };

        //$scope.memberPreview.push();

        console.log(dataobj);

        $http.put('https://bigdev.kwickie.com/api/Brands/' + $routeParams.brandsId, dataobj).success(function(data) {

        console.log(data);

        });

    };
  }
})();
