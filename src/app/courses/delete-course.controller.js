define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .controller("DeleteCourseController", DeleteCourseController);

  DeleteCourseController.$inject = ['$scope', '$uibModalInstance'];

  function DeleteCourseController($scope, $uibModalInstance) {
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
