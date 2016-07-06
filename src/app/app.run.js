define([
  'lodash',
  'angular',
  'app',
  'app.config'
], function(_, angular) {
  'use strict';

  angular
    .module('App')
    .run(run);

  run.$inject = ['appConfig', '$httpBackend', '$rootScope', '$route', '$location', 'loginService'];

  function run(CONFIG, $httpBackend, $rootScope, $route, $location, loginService) {
    // routes mocks
    $httpBackend.whenGET(CONFIG.templates.login).passThrough();
    $httpBackend.whenGET(CONFIG.templates.courses).passThrough();
    $httpBackend.whenGET(CONFIG.templates.deleteCoursePopup).passThrough();
    $httpBackend.whenGET(CONFIG.templates.details).passThrough();

    // bind listeners on events
    $rootScope.$on('$locationChangeStart', checkAuth);

    function checkAuth() {
      var isNotLogged = _.isEmpty(loginService.getLogin()),
          route = $location.path().replace(/\d+/g, ':id'),
          isAvailableRoute = $route.routes[route] && route !== '/login';

      if (isNotLogged) {
        $location.url('/login');
      } else if (!isAvailableRoute) {
        $location.url('/courses');
      }
    }
  }

});
