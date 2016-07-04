module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'src/css/main.css': 'src/scss/main.scss'
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

  grunt.registerTask('default', ['sass', 'connect', 'watch']);
};
