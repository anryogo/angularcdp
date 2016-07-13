define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('Base')
    .controller("BaseController", BaseController);

  BaseController.$inject = ['$rootScope', '$state', 'loginService'];

  function BaseController($rootScope, $state, loginService) {
    var vm = this;
    vm.logout = logout;

    // bind listeners on events
    $rootScope.$watch('account', onAccountChange);
    $rootScope.$on('$stateChangeSuccess', clearBreadcrumbs);

    init();

    function logout() {
      loginService
        .logout()
        .then(onLogoutSuccess);
    }

    function onLogoutSuccess() {
      $rootScope.account = {};
      $state.go('login');
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
