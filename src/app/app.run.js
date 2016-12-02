import _ from 'lodash';

export class Run {
  constructor(CONFIG, $httpBackend, $rootScope, $state, loginService) {
    'ngInject';
    this.$state = $state;
    this.loginService = loginService;

    // routes mocks
    Object.keys(CONFIG.templates).forEach((template) => {
      $httpBackend.whenGET(template).passThrough();
    });

    // bind listeners on events
    $rootScope.$on('$stateChangeSuccess', this.checkAuth);
  }

  checkAuth(event, toState, toParams, fromState, fromParams) {
    let isNotLogged = () => _.isEmpty(this.loginService.getLogin());
    let isLoginState = () => toState.name === 'login';

    if (isNotLogged()) {
      this.$state.go('login');
    } else if (isLoginState()) {
      this.$state.go('courses');
    }
  }
}
