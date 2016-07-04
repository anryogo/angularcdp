'use strict';

AngularCDP.controller("CoursesController", function($scope, $location, $uibModal, CoursesService) {
  $scope.sortOrder = '-createdDate';
  $scope.courses = CoursesService.get();

  $scope.addCourse = function() {
    $location.url('/courses/new');
  };

  $scope.editCourse = function(course) {
    $location.url('/courses/' + course.id);
  };

  $scope.removeCourse = function(course) {
    $uibModal.open({
      templateUrl: 'deleteModalContent.html',
      controller: 'DeleteCourseController',
      size: 'sm'
    });
  };
});
