define([
  'lodash',
  'angular'
], function(_, angular) {
  'use strict';

  angular
    .module('App')
    .factory("CoursesService", function($httpBackend, $resource) {
    var courses = [
      {
        id: 1,
        title: 'Course #1',
        createdDate: new Date("2016-07-02"),
        duration: 32442,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
        authors: [
          'Sidorov',
          'Petrov',
          'Ivanov'
        ]
      },
      {
        id: 2,
        title: 'New favorite #2',
        createdDate: new Date("2016-07-03"),
        duration: 123,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
        authors: [
          'Sidorov',
          'Petrov',
          'Ivanov'
        ]
      },
      {
        id: 3,
        title: 'TESTTEST #3',
        createdDate: new Date("2016-07-04"),
        duration: 333,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
        authors: [
          'Sidorov',
          'Petrov',
          'Ivanov'
        ]
      },
      {
        id: 4,
        title: 'The best test #4',
        createdDate: new Date("2016-07-05"),
        duration: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque cum debitis deserunt dolor dolorem doloribus eos, est, eveniet fuga id ipsa labore nemo, nihil nisi nobis officiis qui quisquam.',
        authors: [
          'Sidorov',
          'Petrov',
          'Ivanov'
        ]
      }
    ];

    var resource = $resource('/courses/:id', {id: '@id'}, {
      getAll: {method: 'GET', isArray: true},
      create: {method: 'POST', isArray: true},
      update: {method: 'PUT', isArray: true},
      remove: {method: 'DELETE', isArray: true}
    });

    var counter = 5;

    return {
      get: function(id) {
        $httpBackend.whenGET('/courses').respond(function() {
          return [200, courses];
        });
        $httpBackend.whenGET('/courses/' + id).respond(function() {
          return [200, _.find(courses, {id: +id})];
        });
        return id ? resource.get({id: id}) : resource.getAll();
      },

      create: function(params) {
        var course = _.extend(params, {id: counter++});
        courses.push(course);

        // small fix
        delete params.id;

        $httpBackend.whenPOST('/courses', params).respond(function() {
          return [200, courses];
        });
        return resource.create(params);
      },

      save: function(course) {
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
        return resource.update(course);
      },

      delete: function(id) {
        courses = _.reject(courses, function(course) {
          return course.id === +id;
        });

        $httpBackend.whenDELETE('/courses/' + id).respond(function() {
          return [200, courses];
        });
        return resource.remove({id: id});
      }
    };
  });
  
});
