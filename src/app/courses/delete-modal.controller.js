define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .controller("DeleteModalController", DeleteModalController);

  DeleteModalController.$inject = ['$uibModalInstance'];

  function DeleteModalController($uibModalInstance) {
    var vm = this;
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
