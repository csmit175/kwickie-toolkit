(function() {
  'use strict';

  angular
      .module('kwickieToolkit')
      .service('dataService', function($http) {
              this.getTopics = function() {
                return $http({
                  method: "GET",
                  url: "https://bigdev.kwickie.com/api/Topics"
                }).success(function(data){
                    return data;
                }).error(function(){
                    alert("error");
                    return null ;
                });
              }

              this.getMembers = function() {
                return $http({
                  method: "GET",
                  url: "https://bigdev.kwickie.com/api/members"
                }).success(function(data){
                    return data;
                }).error(function(){
                    alert("error");
                    return null ;
                });
              }

              this.getKwickies = function() {
                return $http({
                  method: "GET",
                  url: "https://bigdev.kwickie.com/api/Kwickies"
                }).success(function(data){
                    return data;
                }).error(function(){
                    alert("error");
                    return null ;
                });
              }

              this.getBrands = function() {
                return $http({
                  method: "GET",
                  url: "https://bigdev.kwickie.com/api/Brands"
                }).success(function(data){
                    return data;
                }).error(function(){
                    alert("error");
                    return null ;
                });
              }
       });

})();
