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
    $scope.ok = ok;
    $scope.cancel = cancel;

    function ok() {
      $uibModalInstance.close();
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
  
});
