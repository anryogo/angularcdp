module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      compile: {
        files: {
          'src/_tmp/build.css': 'src/scss/main.scss'
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'src/main.js',
          out: 'src/_tmp/build.js',
          include: [
            '../main'
          ],
          findNestedDependencies: true,
          preserveLicenseComments: false
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['requirejs']
      }
    },

    connect: {
      server: {
        options: {
          base: 'src',
          open: true
        }
      }
    }
  });

  grunt.registerTask('default', ['sass', 'requirejs', 'connect', 'watch']);
};
