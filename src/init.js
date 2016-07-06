define([
  'require',
  'angular'
], function(require, angular) {
  'use strict';

  // Load main module
  require([
    'app',
    'app.config',
    'app.route',
    'app.run'
  ], function() {
    require([
      // Load services
      'services/login.service',
      'services/courses.service',

      // Load nested modules
      'base/base.module',
      'login/login.module',
      'courses/courses.module',
      'course-details/course-details.module'
    ], function() {
      require([
        // Load components structure
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
