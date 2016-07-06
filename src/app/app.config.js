define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .constant("TEMPLATES", {
      login: 'app/login/login.html',
      courses: 'app/courses/courses.html',
      details: 'app/course-details/course-details.html'
    })
    .constant("TEST_USER", {
      login: 'test',
      password: 'test',
      username: 'Test User'
    })
    .value("defaultCounter", 5);

});
