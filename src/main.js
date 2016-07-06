requirejs.config({
  baseUrl: 'app',

  paths: {
    'lodash': '../bower_components/lodash/dist/lodash.min',
    'angular': '../bower_components/angular/angular.min',
    'angular-route': '../bower_components/angular-route/angular-route.min',
    'angular-resource': '../bower_components/angular-resource/angular-resource.min',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    'angular-local-storage': '../bower_components/angular-local-storage/dist/angular-local-storage.min',

    // application entry point
    'app': 'app.module',
    'appRoute': 'app.route',
    'appRun': 'app.run'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': ['angular'],
    'angular-resource': ['angular'],
    'angular-mocks': ['angular'],
    'angular-bootstrap': ['angular'],
    'angular-local-storage': ['angular']
  },

  deps: ['../init']
});
