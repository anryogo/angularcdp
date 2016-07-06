define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .controller("ErrorModalController", function($scope, $uibModalInstance, errorMessage) {
    $scope.error = errorMessage;

    $scope.ok = function() {
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  });

});
