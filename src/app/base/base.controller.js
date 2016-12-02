import _ from 'lodash';

export class BaseController {
  constructor($rootScope, $state, loginService) {
    'ngInject';
    this.$state = $state;
    this.loginService = loginService;
    this.$rootScope = $rootScope;

    // bind listeners on events
    $rootScope.$watch('account', this.onAccountChange);
    $rootScope.$on('$stateChangeSuccess', this.clearBreadcrumbs);

    this.init();
  }

  onAccountChange(value) {
    this.isLogged = !_.isEmpty(value);
  }

  clearBreadcrumbs() {
    this.$rootScope.breadcrumbTitle = null;
  }

  init() {
    this.$rootScope.account = this.loginService.getLogin();
  }

  logout() {
    this.loginService
      .logout()
      .then(this.onLogoutSuccess);
  }

  onLogoutSuccess() {
    this.$rootScope.account = {};
    this.$state.go('login');
  }
}
