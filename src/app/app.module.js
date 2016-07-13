define([
  'angular',
  'angular-resource',
  'angular-mocks',
  'angular-bootstrap',
  'angular-local-storage',
  'angular-ui-router'
], function(angular) {
  'use strict';

  angular
    .module("App", [
      'ngResource',
      'ngMockE2E',

      'Base',
      'Login',
      'Courses',
      'CourseDetails',

      'ui.bootstrap',
      'ui.router',
      'LocalStorageModule'
    ]);

});
