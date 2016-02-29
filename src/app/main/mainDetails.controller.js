(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .controller('MainDetailsController', MainDetailsController);

  /** @ngInject */
  function MainDetailsController($scope, dataService, $routeParams, $http) {

    $scope.topicId = $routeParams.sessionsId;

    $http.get('https://bigdev.kwickie.com/api/Topics/' + $routeParams.sessionsId).success(function(data) {

      $scope.TopicDetails = data;

      $scope.formDetails = {
          'BrandId': data.brandId,
          //'Member': data.members.firstName,
          'Title': data.text,
          'Description': data.description,
          'StartDate': data.startDate,
          'EndDate': data.endDate,
          'SessionImage': data.image,
          //'SessionVideo': data.image,
          'QuestionAutoApproved': data.questionAutoApproved,
          //'KwickiesAutoApproved': data.answerAutoApproved,
          'Featured': data.featured
      };

    });

    $scope.submit = function() {

        $scope.list = this.formDetails;

        var dataobj = {
          'brandId': $scope.list.BrandId,
          //'Members'
          'text': $scope.list.Title,
          'description': $scope.list.Description,
          'startDate': $scope.list.StartDate,
          'endDate': $scope.list.EndDate,
          'image': $scope.list.SessionImage,
          //'video'
          'questionAutoApproved': $scope.list.QuestionAutoApproved,
          //'answerAutoApproved': $scope.list.KwickiesAutoApproved,
          'featured': $scope.list.Featured,
        };

        //$scope.memberPreview.push();

        console.log(dataobj);

        $http.put('https://bigdev.kwickie.com/api/Topics/' + $routeParams.sessionsId, dataobj).success(function(data) {

        console.log(data);

        });

    };


  }
})();
