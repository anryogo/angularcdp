define([
  'angular'
], function(angular) {
  'use strict';

  angular
    .module('Courses')
    .filter("durations", durations);

  function durations() {
    return function(duration) {
      var hours = Math.floor(duration / 60);
      var minutes = duration % 60;

      if (hours && minutes) {
        return hours + ' h ' + minutes + ' min';
      }
      if (hours && !minutes) {
        return hours + ' h';
      }
      if (!hours && minutes) {
        return minutes + ' min';
      }
    };
  }

});
