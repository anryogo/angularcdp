import angular from 'angular';
import { BaseController } from './base.controller';

export const BaseModule = angular
  .module('Base', [])
  .controller('BaseController', BaseController)
  .name;
