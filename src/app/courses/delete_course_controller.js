define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .controller("DeleteCourseController", function($scope, $uibModalInstance) {
    $scope.ok = function() {
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  });
  
});
