define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .controller("CoursesController", CoursesController);

  CoursesController.$inject = ['appConfig', '$location', '$uibModal', 'coursesService'];

  function CoursesController(CONFIG, $location, $uibModal, coursesService) {
    var vm = this;
    vm.sortOrder = CONFIG.sortOrder;
    vm.addCourse = addCourse;
    vm.editCourse = editCourse;
    vm.removeCourse = removeCourse;
    vm.courses = [];

    init();

    function init() {
      coursesService
        .get()
        .then(onGetCoursesSuccess);
    }

    function onGetCoursesSuccess(response) {
      vm.courses = response;
    }

    function addCourse() {
      $location.url('/courses/new');
    }

    function editCourse(course) {
      $location.url('/courses/' + course.id);
    }

    function removeCourse(course) {
      $uibModal
        .open({
          templateUrl: CONFIG.templates.deleteCoursePopup,
          controller: 'DeleteModalController',
          size: 'sm'
        })
        .result
        .then(onModalSuccess.bind(null, course.id));
    }

    function onModalSuccess(id) {
      coursesService
        .delete(id)
        .then(onDeleteCourseSuccess);
    }

    function onDeleteCourseSuccess(response) {
      vm.courses = response;
    }

  }

});
