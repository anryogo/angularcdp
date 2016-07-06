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
    .constant("PATTERNS", {
      loginRegex: '[A-Za-z]+',
      passRegex: '[A-Za-z0-9]+'
    })
    .constant("ERRORS", {
      auth: 'Wrong login or password'
    })
    .value("defaultCounter", 5);

});
