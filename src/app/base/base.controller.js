define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Base')
    .controller("BaseController", BaseController);

  BaseController.$inject = ['$rootScope', '$scope', '$location', 'loginService'];

  function BaseController($rootScope, $scope, $location, loginService) {
    $rootScope.currentUser = loginService.getLogin();

    // bind listeners on events
    $rootScope.$on('$locationChangeStart', clearBreadcrumbs);

    $rootScope.$watch('currentUser', function(value) {
      $scope.isLogged = !_.isEmpty(value);
    });

    $scope.logout = function() {
      loginService.logout().then(function() {
        $rootScope.currentUser = {};
        $location.url('/login');
      });
    };

    function clearBreadcrumbs() {
      $rootScope.breadcrumbTitle = null;
    }
  }

});
