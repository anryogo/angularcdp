'use strict';

AngularCDP.controller("CourseDetailsController", function($scope, $uibModal) {
  $scope.allAuthors = [
    'Ivanov',
    'Petrov',
    'Sidorov',
    'Lermontov'
  ];
  $scope.course = {};
  $scope.course.authors = [];

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
