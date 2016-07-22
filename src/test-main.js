var tests = [];
Object.keys(window.__karma__.files).forEach(function(file) {
  if (/\.spec\.js$/.test(file)) {
    tests.push(file);
  }
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app',

  paths: {
    'lodash': '../bower_components/lodash/dist/lodash.min',
    'angular': '../bower_components/angular/angular.min',
    'angular-resource': '../bower_components/angular-resource/angular-resource.min',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    'angular-local-storage': '../bower_components/angular-local-storage/dist/angular-local-storage.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',

    // application entry point
    'app': 'app.module'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-resource': ['angular'],
    'angular-mocks': ['angular'],
    'angular-bootstrap': ['angular'],
    'angular-local-storage': ['angular'],
    'angular-ui-router': ['angular']
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
