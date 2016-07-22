define([
  'angular',
  'app',
  'login/login.module',
  'login/login.controller'
], function(angular) {
  'use strict';

  describe('LoginController', function() {
    var $scope, appConfig, loginService;

    beforeEach(function() {
      angular.module('Login');
    });

    beforeEach(function() {
      inject(function($rootScope, $controller) {
        // console.log($state);
        appConfig = loginService = {};
        $scope = $rootScope.$new();

        // $controller('LoginController', {
        //   appConfig: appConfig,
        //   $rootScope: $rootScope,
        //   $state: $state,
        //   loginService: loginService
        // });
      });
    });

    it('should be defined', function() {
      // console.log($scope);
    });

  });
});
