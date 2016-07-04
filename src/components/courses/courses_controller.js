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
    var modalInstance = $uibModal.open({
      templateUrl: 'deleteModalContent.html',
      controller: 'DeleteCourseController',
      size: 'sm'
    });

    modalInstance.result.then(function() {
      CoursesService.delete(course.id)
        .$promise
        .then(function(response) {
          $scope.courses = response;
        });
    }, function () {
      // console.log('Modal dismissed');
    });
  };
});
