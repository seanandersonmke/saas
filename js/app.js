'use strict';

/**
 * @ngdoc overview
 * @name saas2App
 * @description
 * # saas2App
 *
 * Main module of the application.
 */
angular
  .module('saas2App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/doctorsone.html',
        controller: 'HospitalController'
      })
      .when('/doctorstwo', {
        templateUrl: 'views/doctorstwo.html',
        controller: 'HospitalController'
      })
      
  });
