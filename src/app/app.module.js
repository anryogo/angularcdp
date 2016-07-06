define([
  'angular',
  'angular-route',
  'angular-resource',
  'angular-mocks',
  'angular-bootstrap',
  'angular-local-storage'
], function(angular) {
  'use strict';

  angular
    .module("App", [
      'ngRoute',
      'ngResource',
      'ngMockE2E',
      'ui.bootstrap',
      'LocalStorageModule'
    ]);

});
