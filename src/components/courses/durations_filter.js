'use strict';

AngularCDP.filter("durations", function() {
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
});
