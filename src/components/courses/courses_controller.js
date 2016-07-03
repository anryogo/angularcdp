'use strict';

AngularCDP.controller("CoursesController", function($scope, $uibModal) {
  $scope.sortOrder = '-createdDate';
  $scope.courses = [
    {
      title: 'Course #1',
      createdDate: Date.now(),
      duration: 32442,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
      authors: [
        'Sidorov',
        'Petrov',
        'Ivanov'
      ]
    },
    {
      title: 'New favorite #2',
      createdDate: Date.now() + 1,
      duration: 123,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
      authors: [
        'Sidorov',
        'Petrov',
        'Ivanov'
      ]
    },
    {
      title: 'TESTTEST #3',
      createdDate: Date.now() + 2,
      duration: 333,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
      authors: [
        'Sidorov',
        'Petrov',
        'Ivanov'
      ]
    },
    {
      title: 'The best #4',
      createdDate: Date.now() + 3,
      duration: 23,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
      authors: [
        'Sidorov',
        'Petrov',
        'Ivanov'
      ]
    }
  ];

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
