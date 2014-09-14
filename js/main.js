'use strict';

/**
 * @ngdoc function
 * @name saas2App.controller:HospitalController
 * @description
 * # controllers for app
 * Controller of the saas2App
 */

var app = angular.module('saas2App');

//adds data to factory so app only loads new data
app.factory('hospitals', function($http) {
  var promise = null;

  return function() {
    if (promise) {
      return promise;
    } else {
      promise = $http.get('model/hospital.json');
      return promise;
    }
  };
});

//main controller for app
app.controller('HospitalController', function($scope, hospitals) {
  hospitals().success(function(data) {
    $scope.data = data;
  });
});

//controller to add active class to nav bar
app.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '#';
        return page === currentRoute ? 'active' : '';
    };        
}]);