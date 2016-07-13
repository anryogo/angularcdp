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

  run.$inject = ['appConfig', '$httpBackend', '$rootScope', '$state', 'loginService'];

  function run(CONFIG, $httpBackend, $rootScope, $state, loginService) {
    // routes mocks
    $httpBackend.whenGET(CONFIG.templates.login).passThrough();
    $httpBackend.whenGET(CONFIG.templates.courses).passThrough();
    $httpBackend.whenGET(CONFIG.templates.details).passThrough();
    $httpBackend.whenGET(CONFIG.templates.deleteCoursePopup).passThrough();
    $httpBackend.whenGET(CONFIG.templates.errorCoursePopup).passThrough();

    // bind listeners on events
    $rootScope.$on('$stateChangeSuccess', checkAuth);

    function checkAuth(event, toState, toParams, fromState, fromParams) {
      var state = toState.name,
          isLoginState = state == 'login',
          isNotLogged = _.isEmpty(loginService.getLogin());

      if (isNotLogged) {
        $state.go('login');
      } else if (isLoginState) {
        $state.go('courses');
      }
    }
  }

});
