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
        details: 'app/course-details/course-details.html',
        deleteCoursePopup: 'app/courses/delete-modal.html',
        errorCoursePopup: 'app/course-details/error-modal.html'
      },
      test_user: {
        login: 'test',
        password: 'test',
        username: 'Test User'
      },
      defaultAuthors: [
        'Ivanov',
        'Petrov',
        'Sidorov',
        'Lermontov'
      ],
      patterns:  {
        loginRegex: '[A-Za-z]+',
        passRegex: '[A-Za-z0-9]+'
      },
      errors: {
        auth: "Wrong login or password",
        courseInvalid: "Form's fields are filled incorrect"
      },
      sortOrder: '-createdDate'
    })
    .value("defaultCounter", 5);

});
