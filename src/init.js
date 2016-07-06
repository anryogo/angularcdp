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
    // Load components modules
    require([
      'services/courses_service',
      'services/login_service',      
      'base/base_controller',
      'login/login_controller',
      'courses/courses_controller',
      'courses/delete_course_controller',
      'courses/durations_filter',
      'course_details/course_details_controller',
      'course_details/error_modal_contorller'
    ], function() {
      // Manual Angular initialization
      angular.bootstrap(document, ['App']);
    });
  });

});
