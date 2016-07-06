define([
  'angular',
  'app',
  'app.config'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .config(config);

  config.$inject = ['TEMPLATES', '$routeProvider'];

  function config(TEMPLATES, $routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: TEMPLATES.login,
      controller: 'LoginController'
    });
    $routeProvider.when('/courses', {
      templateUrl: TEMPLATES.courses,
      controller: 'CoursesController'
    });
    $routeProvider.when('/courses/new', {
      templateUrl: TEMPLATES.details,
      controller: 'CourseDetailsController'
    });
    $routeProvider.when('/courses/:id', {
      templateUrl: TEMPLATES.details,
      controller: 'CourseDetailsController'
    });
    $routeProvider.otherwise({
      redirectTo: '/courses'
    });
  }

});
