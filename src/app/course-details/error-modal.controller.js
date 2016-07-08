define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('CourseDetails')
    .controller("ErrorModalController", ErrorModalController);

  ErrorModalController.$inject = ['$uibModalInstance', 'errorMessage'];

  function ErrorModalController($uibModalInstance, errorMessage) {
    var vm = this;
    vm.error = errorMessage;
    vm.ok = ok;
    vm.cancel = cancel;

    function ok() {
      $uibModalInstance.close();
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }

});
