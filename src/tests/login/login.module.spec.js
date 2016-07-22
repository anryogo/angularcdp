define([
  'angular',
  'app',
  'login/login.module'
], function(angular) {
  'use strict';

  describe('LoginModule', function() {
    var module;

    beforeEach(function() {
      module = angular.module('Login');
    });

    it('should be defined', function() {
      expect(module).toBeDefined();
    });

  });
});
