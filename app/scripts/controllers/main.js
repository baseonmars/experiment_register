'use strict';

angular.module('registerExpApp')
  .controller('MainCtrl', function ($scope, experiments) {

    $scope.experiments = experiments.getAll();

  });
