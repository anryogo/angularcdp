'use strict';

AngularCDP.filter("durations", function() {
  return function(duration) {
    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;
    return hours + ' h ' + minutes + ' min';
  };
});
