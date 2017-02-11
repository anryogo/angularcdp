define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('App')
    .factory("loginService", loginService);

  loginService.$inject = ['CONFIG', '$httpBackend', '$http', 'localStorageService'];

  function loginService(CONFIG, $httpBackend, $http, localStorageService) {
    var service = {
      login: login,
      logout: logout,
      getLogin: getLogin
    };

    return service;

    function login(user) {
      $httpBackend.whenPOST('/login', _.omit(CONFIG.test_user, 'username')).respond(CONFIG.test_user);
      return $http.post('/login', user).then(onLoginSuccess);
    }

    function onLoginSuccess(response) {
      localStorageService.set('account', JSON.stringify(response.data));
      return response.data;
    }

    function logout() {
      $httpBackend.whenGET('/logout').respond(null);
      return $http.get('/logout').then(onLogoutSuccess);
    }

    function onLogoutSuccess() {
      localStorageService.remove('account');
    }

    function getLogin() {
      return localStorageService.get('account') ? JSON.parse(localStorageService.get('account')) : {};
    }

  }

});
