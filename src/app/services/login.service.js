define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('App')
    .factory("loginService", loginService);

  loginService.$inject = ['TEST_USER', '$httpBackend', '$http', 'localStorageService'];

  function loginService(TEST_USER, $httpBackend, $http, localStorageService) {
    var service = {
      login: login,
      logout: logout,
      getLogin: getLogin
    };

    return service;

    function login(user) {
      $httpBackend.whenPOST('/login', _.omit(TEST_USER, 'username')).respond(TEST_USER);
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
