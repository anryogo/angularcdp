define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .constant("appConfig", {
      templates: {
        login: 'app/login/login.html',
        courses: 'app/courses/courses.html',
        deleteCoursePopup: 'app/courses/delete-course.html',
        details: 'app/course-details/course-details.html'
      },
      test_user: {
        login: 'test',
        password: 'test',
        username: 'Test User'
      },
      patterns:  {
        loginRegex: '[A-Za-z]+',
        passRegex: '[A-Za-z0-9]+'
      },
      errors: {
        auth: 'Wrong login or password'
      },
      sortOrder: '-createdDate'
    })
    .value("defaultCounter", 5);

});
