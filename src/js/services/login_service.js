'use strict';

AngularCDP.factory("LoginService", function($httpBackend, $http, localStorageService) {
  var TEST_USER = {
    login: 'test',
    password: 'test'
  };

  return {
    login: function(user, onError) {
      $httpBackend.whenPOST('/login', TEST_USER).respond(TEST_USER);
      $http.post('/login', user)
        .then(function(response) {
          localStorageService.set('user', JSON.stringify(response.data));
        })
        .catch(onError);
    },

    logout: function() {
      $httpBackend.whenGET('/logout').respond(null);
      $http.get('/logout')
        .then(function() {
          localStorageService.remove('user');
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
