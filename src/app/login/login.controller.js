define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Login')
    .controller("LoginController", LoginController);

  LoginController.$inject = ['appConfig', '$rootScope', '$location', 'loginService'];

  function LoginController(CONFIG, $rootScope, $location, loginService) {
    var vm = this;
    vm.loginRegex = CONFIG.patterns.loginRegex;
    vm.passRegex = CONFIG.patterns.passRegex;
    vm.hasError = hasError;
    vm.validate = validate;
    vm.login = login;
    vm.user = {};
    
    var isLoginInvalid, isPasswordInvalid;
    
    function hasError(field) {
      var hasError;
      
      switch (field) {
        case 'login':
          hasError = isLoginInvalid || vm.isLoginRequired;
          break;
        case 'password':
          hasError = isPasswordInvalid || vm.isPasswordRequired;
          break;
      }
      
      return hasError;
    }

    function validate(event) {
      var target = event.target,
          className = target.className;

      switch (target.id) {
        case 'inputLogin':
          vm.isLoginRequired = validateClass(className);
          isLoginInvalid = validateClass(className);
          break;
        case 'inputPassword':
          vm.isPasswordRequired = validateClass(className);
          isPasswordInvalid = validateClass(className);
          break;
      }
    }

    function validateClass(className) {
      return className.indexOf('ng-invalid-required') >= 0 ||
             className.indexOf('ng-invalid-pattern') >= 0;
    }

    function login() {
      loginService
        .login(vm.user)
        .then(onLoginSuccess)
        .catch(onLoginError);
    }

    function onLoginSuccess(data) {
      $rootScope.account = data;
      $location.url('/courses');
    }

    function onLoginError() {
      vm.error = CONFIG.errors.auth;
      vm.user.password = '';
      vm.isPasswordRequired = true;
    }

  }

});
