define([
  'require',
  'angular'
], function(require, angular) {
  'use strict';

  // Load main module
  require([
    'app',
    'appRoute',
    'appRun'
  ], function() {
    // Load application modules
    require([
      'services/courses.service',
      'services/login.service',
      'base/base.module',
      'login/login.module',
      'courses/courses.module',
      'course-details/course-details.module'
    ], function() {
      // Load components structure
      require([
        'base/base.controller',
        'login/login.controller',
        'courses/courses.controller',
        'courses/delete-course.controller',
        'courses/durations.filter',
        'course-details/course-details.controller',
        'course-details/error-modal.contorller'
      ], function() {
        // Manual Angular initialization
        angular.bootstrap(document, ['App']);
      });
    });
  });

});
