'use strict';

var AngularCDP = angular.module("AngularCDP", [
  'ui.bootstrap',
  'ngRoute',
  'ngResource',
  'ngMockE2E',
  'LocalStorageModule'
]);

AngularCDP.config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
  });
  $routeProvider.when('/courses', {
    templateUrl: 'components/courses/courses.html',
    controller: 'CoursesController'
  });
  $routeProvider.when('/courses/new', {
    templateUrl: 'components/course_details/course_details.html',
    controller: 'CourseDetailsController'
  });
  $routeProvider.when('/courses/:id', {
    templateUrl: 'components/course_details/course_details.html',
    controller: 'CourseDetailsController'
  });
  $routeProvider.otherwise({
    redirectTo: '/login'
  });
});

AngularCDP.run(function($httpBackend) {
  $httpBackend.whenGET('components/login/login.html').passThrough();
  $httpBackend.whenGET('components/courses/courses.html').passThrough();
  $httpBackend.whenGET('components/course_details/course_details.html').passThrough();
});
