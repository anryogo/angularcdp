'use strict';

AngularCDP.controller("LoginController", function($scope) {
  $scope.loginRegex = '[A-Za-z]+';
  $scope.passRegex = '[A-Za-z0-9]+';
  $scope.error = null;

  $scope.validate = function(e) {
    var target = e.target,
        className = target.className;

    switch (target.id) {
      case 'inputLogin':
        $scope.isLoginRequired = validateClass(className);
        $scope.isLoginInvalid = validateClass(className);
        break;
      case 'inputPassword':
        $scope.isPasswordRequired = validateClass(className);
        $scope.isPasswordInvalid = validateClass(className);
        break;
    }
  };

  $scope.login = function(user, loginForm) {
    if (loginForm.$invalid) {
      $scope.error = "Wrong login or password";
      $scope.user.password = '';
      $scope.isPasswordRequired = true;
    } else {
      console.log('You are logged');
    }
  };

  function validateClass(className) {
    return className.indexOf('ng-invalid-required') >= 0 ||
           className.indexOf('ng-invalid-pattern') >= 0;
  }
});