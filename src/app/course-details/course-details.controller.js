define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('CourseDetails')
    .controller("CourseDetailsController", CourseDetailsController);

  CourseDetailsController.$inject = [
    'appConfig',
    '$rootScope',
    '$scope',
    '$routeParams',
    '$location',
    '$uibModal',
    'coursesService'
  ];

  function CourseDetailsController(CONFIG, $rootScope, $scope, $routeParams, $location, $uibModal, coursesService) {
    var vm = this;
    vm.allAuthors = CONFIG.defaultAuthors;
    vm.addAuthors = addAuthors;
    vm.removeAuthors = removeAuthors;
    vm.saveCourse = saveCourse;
    vm.returnBack = returnBack;
    vm.course = {};
    vm.course.authors = [];

    // bind listeners on events
    $scope.$watch('courseDetails.course.title', onChangeCourseTitle);

    init();

    function onChangeCourseTitle(value) {
      $rootScope.breadcrumbTitle = value;
    }

    function init() {
      if ($routeParams.id) {
        coursesService
          .get($routeParams.id)
          .then(onGetCourseSuccess);
      }
    }

    function onGetCourseSuccess(response) {
      vm.course = response;
      vm.allAuthors = _.difference(vm.allAuthors, vm.course.authors);
    }

    function addAuthors(authors) {
      vm.course.authors = vm.course.authors.concat(authors);
      vm.allAuthors = _.difference(vm.allAuthors, authors);
    }

    function removeAuthors(authors) {
      vm.course.authors = _.difference(vm.course.authors, authors);
      vm.allAuthors = vm.allAuthors.concat(authors);
    }

    function saveCourse(courseDetailsForm) {
      if (courseDetailsForm.$invalid) {
        $uibModal.open({
          templateUrl: CONFIG.templates.errorCoursePopup,
          controller: 'ErrorModalController',
          controllerAs: 'modal',
          resolve: {
            errorMessage: getErrorMessage
          }
        });
      } else {
        createOrUpdateCourse();
      }
    }

    function getErrorMessage() {
      return CONFIG.errors.courseInvalid;
    }

    function createOrUpdateCourse() {
      var method = vm.course.id ? 'save' : 'create';
      coursesService
        [method](vm.course)
        .then(returnBack);
    }

    function returnBack() {
      $location.url('/courses');
    }

  }

});
