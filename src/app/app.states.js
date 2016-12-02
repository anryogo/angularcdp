export class States {
  constructor(CONFIG, $stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: CONFIG.templates.login,
        controller: 'LoginController',
        controllerAs: 'loginForm'
      })
      .state('courses', {
        url: '/courses',
        templateUrl: CONFIG.templates.courses,
        controller: 'CoursesController',
        controllerAs: 'coursesList'
      })
      .state('newCourse', {
        url: '/courses/new',
        templateUrl: CONFIG.templates.details,
        controller: 'CourseDetailsController',
        controllerAs: 'courseDetails'
      })
      .state('editCourse', {
        url: '/courses/:id',
        templateUrl: CONFIG.templates.details,
        controller: 'CourseDetailsController',
        controllerAs: 'courseDetails'
      });

    $urlRouterProvider.otherwise('/courses');
  }
}
