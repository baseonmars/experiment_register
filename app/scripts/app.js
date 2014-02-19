'use strict';

angular.module('registerExpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'AddTextByDragging',
  'experimentRegister'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
