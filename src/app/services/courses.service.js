define([
  'lodash',
  'angular',
  'config/courses'
], function(_, angular, coursesConfig) {
  'use strict';

  angular
    .module('App')
    .factory("coursesService", coursesService);

  coursesService.$inject = ['$httpBackend', '$resource'];

  function coursesService($httpBackend, $resource) {
    var counter = 5,
        courses = coursesConfig,
        resource = $resource('/courses/:id', {id: '@id'}, {
          getAll: {method: 'GET', isArray: true},
          create: {method: 'POST', isArray: true},
          update: {method: 'PUT', isArray: true},
          remove: {method: 'DELETE', isArray: true}
        }),
        service = {
          get: getCourse,
          create: createCourse,
          save: updateCourse,
          delete: removeCourse
        };

    return service;

    function getCourse(id) {
      $httpBackend.whenGET('/courses').respond(function() {
        return [200, courses];
      });
      $httpBackend.whenGET('/courses/' + id).respond(function() {
        return [200, _.find(courses, { id: +id })];
      });
      return id ? resource.get({id: id}).$promise : resource.getAll().$promise;
    }

    function createCourse(params) {
      var course = _.clone(params);
      courses.push(_.extend(course, {
        id: counter++
      }));

      $httpBackend.whenPOST('/courses', params).respond(function() {
        return [200, courses];
      });
      return resource.create(params).$promise;
    }

    function updateCourse(course) {
      courses.every(function(item, i, source) {
        if (item.id === course.id) {
          source[i] = course;
          return false;
        }
        return true;
      });

      $httpBackend.whenPUT('/courses/' + course.id, course).respond(function() {
        return [200, courses];
      });
      return resource.update(course).$promise;
    }

    function removeCourse(id) {
      courses = _.reject(courses, function(course) {
        return course.id === +id;
      });

      $httpBackend.whenDELETE('/courses/' + id).respond(function() {
        return [200, courses];
      });
      return resource.remove({id: id}).$promise;
    }

  }

});
