import angular from 'angular';
import ngResource from 'angular-resource';
import 'angular-mocks';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';

import { CONFIG } from './app.config';
import { States } from './app.states';
import { Run } from './app.run';

import { BaseModule } from './base/base.module';

export const AppModule = angular
  .module('App', [
    ngResource,
    // 'ngMockE2E',

    BaseModule,
    // 'Login',
    // 'Courses',
    // 'CourseDetails',

    uiBootstrap,
    uiRouter,
    LocalStorageModule
  ])
  .constant('CONFIG', CONFIG)
  // .config(new States())
  .run(Run)
  .name;
