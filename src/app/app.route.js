define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    });
    $routeProvider.when('/courses', {
      templateUrl: 'app/courses/courses.html',
      controller: 'CoursesController'
    });
    $routeProvider.when('/courses/new', {
      templateUrl: 'app/course_details/course_details.html',
      controller: 'CourseDetailsController'
    });
    $routeProvider.when('/courses/:id', {
      templateUrl: 'app/course_details/course_details.html',
      controller: 'CourseDetailsController'
    });
    $routeProvider.otherwise({
      redirectTo: '/login'
    });
  }

});
