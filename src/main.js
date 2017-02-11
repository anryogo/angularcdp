import angular from 'angular';

// Load main module
import './app/app.module';

// Load services
import './app/services/login.service';
// import './app/services/courses.service';

// Load nested modules
// import './app/base/base.module';
// import './app/login/login.module';
// import './app/courses/courses.module';
// import './app/course-details/course-details.module';

// Load components structure
// import './app/base/base.controller';
// import './app/login/login.controller';
// import './app/courses/courses.controller';
// import './app/courses/delete-modal.controller';
// import './app/courses/durations.filter';
// import './app/course-details/course-details.controller';
// import './app/course-details/error-modal.controller';

import './scss/main.scss';

// Manual Angular initialization
angular.bootstrap(document, ['App']);
