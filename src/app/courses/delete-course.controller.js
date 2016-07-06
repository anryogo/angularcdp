define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .controller("DeleteCourseController", DeleteCourseController);

  DeleteCourseController.$inject = ['$scope', '$uibModalInstance'];

  function DeleteCourseController($scope, $uibModalInstance) {
    $scope.ok = function() {
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
  
});
