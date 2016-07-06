define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('Base')
    .controller("BaseController", BaseController);

  BaseController.$inject = ['$rootScope', '$location', 'loginService'];

  function BaseController($rootScope, $location, loginService) {
    var vm = this;
    vm.logout = logout;

    // bind listeners on events
    $rootScope.$watch('account', onAccountChange);
    $rootScope.$on('$locationChangeStart', clearBreadcrumbs);

    init();

    function logout() {
      loginService
        .logout()
        .then(onLogoutSuccess);
    }

    function onLogoutSuccess() {
      $rootScope.account = {};
      $location.url('/login');
    }

    function onAccountChange(value) {
      vm.isLogged = !_.isEmpty(value);
    }

    function clearBreadcrumbs() {
      $rootScope.breadcrumbTitle = null;
    }

    function init() {
      $rootScope.account = loginService.getLogin();
    }
  }

});
