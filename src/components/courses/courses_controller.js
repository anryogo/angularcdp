'use strict';

AngularCDP.controller("CoursesController", function($scope, $uibModal, CoursesService) {
  $scope.sortOrder = '-createdDate';
  $scope.courses = CoursesService.get();

  $scope.addCourse = function() {

  };

  $scope.editCourse = function(course) {

  };

  $scope.removeCourse = function(course) {
    $uibModal.open({
      templateUrl: 'deleteModalContent.html',
      controller: 'DeleteCourseController',
      size: 'sm'
    });
  };
});
