define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('App')
    .controller("BaseController", function($rootScope, $scope, $location, LoginService) {
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
  });
  
});
