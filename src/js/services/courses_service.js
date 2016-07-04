'use strict';

AngularCDP.factory("CoursesService", function($httpBackend, $resource) {
  var courses = [
    {
      id: 1,
      title: 'Course #1',
      createdDate: Date.now(),
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
      createdDate: Date.now() + 1,
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
      createdDate: Date.now() + 2,
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
      title: 'The best #4',
      createdDate: Date.now() + 3,
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
    update: {method: 'PUT'}
  });

  var counter = 5;

  return {
    get: function(id) {
      $httpBackend.whenGET('/courses').respond(courses);
      $httpBackend.whenGET('/courses/' + id).respond(_.find(courses, {id: id}));
      return id ? resource.get({id: id}) : resource.getAll();
    },

    create: function(params) {
      $httpBackend.whenPOST('/courses', params).respond(function() {
        var course = _.extend(params, {id: counter++});
        courses.push(course);
        return course;
      });
      return resource.save(params);
    },

    save: function(params) {
      $httpBackend.whenPUT('/courses/' + params.id, params).respond(function() {
        var course = _.find(courses, {id: params.id});
        return params;
      });
      return resource.update(params);
    },

    delete: function(id) {
      $httpBackend.whenDELETE('/courses/' + id).respond(function() {
        courses = _.reject(courses, function(course) {
          return course.id === id;
        });
        return {};
      });
      return resource.remove({id: id});
    }
  };
});
