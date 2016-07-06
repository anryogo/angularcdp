define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('CourseDetails')
    .controller("ErrorModalController", ErrorModalController);

  ErrorModalController.$inject = ['$scope', '$uibModalInstance', 'errorMessage'];
  
  function ErrorModalController($scope, $uibModalInstance, errorMessage) {
    $scope.error = errorMessage;

    $scope.ok = function() {
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
  
});
