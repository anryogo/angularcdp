define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .controller("DeleteModalController", DeleteModalController);

  DeleteModalController.$inject = ['$scope', '$uibModalInstance'];

  function DeleteModalController($scope, $uibModalInstance) {
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
