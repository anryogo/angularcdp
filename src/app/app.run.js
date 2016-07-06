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

  run.$inject = ['TEMPLATES', '$httpBackend', '$rootScope', '$route', '$location', 'loginService'];

  function run(TEMPLATES, $httpBackend, $rootScope, $route, $location, loginService) {
    // routes mocks
    $httpBackend.whenGET(TEMPLATES.login).passThrough();
    $httpBackend.whenGET(TEMPLATES.courses).passThrough();
    $httpBackend.whenGET(TEMPLATES.details).passThrough();

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
