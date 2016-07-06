define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .run(run);

  run.$inject = ['$httpBackend', '$rootScope', '$route', '$location', 'LoginService'];

  function run($httpBackend, $rootScope, $route, $location, LoginService) {
    $httpBackend.whenGET('app/login/login.html').passThrough();
    $httpBackend.whenGET('app/courses/courses.html').passThrough();
    $httpBackend.whenGET('app/course_details/course_details.html').passThrough();

    $rootScope.$on('$locationChangeStart', checkAuth);

    function checkAuth() {
      var currentUser = LoginService.getLogin(),
        path = $location.path().replace(/\d+/g, ":id"),
        isAvailableRoute = $route.routes[path] && path !== '/login';

      $rootScope.currentCourseTitle = null;

      if (_.isEmpty(currentUser)) {
        $location.url('/login');
      } else if (!isAvailableRoute) {
        $location.url('/courses');
      }
    }
  }

});
