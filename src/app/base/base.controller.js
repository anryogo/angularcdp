define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Base')
    .controller("BaseController", BaseController);

  BaseController.$inject = ['$rootScope', '$scope', '$location', 'LoginService'];

  function BaseController($rootScope, $scope, $location, LoginService) {
    $rootScope.currentUser = LoginService.getLogin();

    $rootScope.$watch('currentUser', function(value) {
      $scope.isLogged = !_.isEmpty(value);
    });

    $scope.logout = function() {
      LoginService.logout(function() {
        $rootScope.currentUser = {};
        $location.url('/login');
      });
    };
  }
  
});
