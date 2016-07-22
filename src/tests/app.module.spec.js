define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  describe('AppModule', function() {
    var module;

    beforeEach(function() {
      module = angular.module('App');
    });

    it('should be defined', function() {
      expect(module).toBeDefined();
    });

  });
});
