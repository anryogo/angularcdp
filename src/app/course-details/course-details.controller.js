define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('CourseDetails')
    .controller("CourseDetailsController", CourseDetailsController);

  CourseDetailsController.$inject = ['$rootScope', '$scope', '$routeParams', '$location', '$uibModal', 'CoursesService'];

  function CourseDetailsController($rootScope, $scope, $routeParams, $location, $uibModal, CoursesService) {
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
          $scope.allAuthors = _.difference($scope.allAuthors, $scope.course.authors);
        });
    }

    $scope.$watch('course.title', function(value) {
      $rootScope.currentCourseTitle = value;
    });

    $scope.addAuthors = function(authors) {
      $scope.course.authors = $scope.course.authors.concat(authors);
      $scope.allAuthors = _.difference($scope.allAuthors, authors);
    };

    $scope.removeAuthors = function(authors) {
      $scope.course.authors = _.difference($scope.course.authors, authors);
      $scope.allAuthors = $scope.allAuthors.concat(authors);
    };

    $scope.submit = function(courseDetailsForm) {
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
        createOrUpdateCourse();
      }
    };

    $scope.returnBack = function() {
      $location.url('/courses');
    };

    function createOrUpdateCourse() {
      var method = $scope.course.id ? 'save' : 'create';
      CoursesService[method]($scope.course)
        .$promise
        .then($scope.returnBack);
    }
  }
  
});
