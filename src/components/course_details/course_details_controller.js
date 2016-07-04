'use strict';

AngularCDP.controller("CourseDetailsController", function($rootScope, $scope, $routeParams, $uibModal, CoursesService) {
  $scope.allAuthors = [
    'Ivanov',
    'Petrov',
    'Sidorov',
    'Lermontov'
  ];
  $scope.course = {};
  $scope.course.authors = [];

  if ($routeParams.id) {
    CoursesService.get($routeParams.id)
      .$promise
      .then(function(response) {
        $scope.course = response;
        console.log(response);
      });
  }

  $rootScope.currentCourseTitle = $scope.course.title;

  $scope.addAuthors = function(authors) {
    $scope.course.authors = $scope.course.authors.concat(authors);
    $scope.allAuthors = _.difference($scope.allAuthors, authors);
  };

  $scope.removeAuthors = function(authors) {
    $scope.course.authors = _.difference($scope.course.authors, authors);
    $scope.allAuthors = $scope.allAuthors.concat(authors);
  };

  $scope.submit = function(course, courseDetailsForm) {
    if (courseDetailsForm.$invalid) {
      $uibModal.open({
        templateUrl: 'errorContent.html',
        controller: 'ErrorModalController',
        resolve: {
          errorMessage: function() {
            return "Form's fields are filled incorrect";
          }
        }
      });
    } else {
      console.log('Your course is added or updated');
    }
  };
});
