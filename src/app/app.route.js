define([
  'angular',
  'app',
  'app.config'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .config(config);

  config.$inject = ['appConfig', '$routeProvider'];

  function config(CONFIG, $routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: CONFIG.templates.login,
      controller: 'LoginController',
      controllerAs: 'loginForm'
    });
    $routeProvider.when('/courses', {
      templateUrl: CONFIG.templates.courses,
      controller: 'CoursesController',
      controllerAs: 'coursesList'
    });
    $routeProvider.when('/courses/new', {
      templateUrl: CONFIG.templates.details,
      controller: 'CourseDetailsController',
      controllerAs: 'courseDetails'
    });
    $routeProvider.when('/courses/:id', {
      templateUrl: CONFIG.templates.details,
      controller: 'CourseDetailsController',
      controllerAs: 'courseDetails'
    });
    $routeProvider.otherwise({
      redirectTo: '/courses'
    });
  }

});
