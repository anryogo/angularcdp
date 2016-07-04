'use strict';

AngularCDP.factory("LoginService", function($httpBackend, $http, localStorageService) {
  var TEST_USER = {
    login: 'test',
    password: 'test',
    username: 'Test User'
  };

  return {
    login: function(user, onSuccess, onError) {
      $httpBackend.whenPOST('/login', {login: 'test', password: 'test'}).respond(TEST_USER);
      $http.post('/login', user)
        .then(function(response) {
          localStorageService.set('user', JSON.stringify(response.data));
          onSuccess(response.data);
        })
        .catch(onError);
    },

    logout: function(onSuccess) {
      $httpBackend.whenGET('/logout').respond(null);
      $http.get('/logout')
        .then(function() {
          localStorageService.remove('user');
          onSuccess();
        })
        .catch(function() {
          console.log('Server error');
        });
    },

    getLogin: function() {
      return localStorageService.get('user') ? JSON.parse(localStorageService.get('user')) : {};
    }
  };
});
