module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    buster: {
      test: {
        config: 'test/buster.js'
      },
      server: {
        port: 1111
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        strict: false,
        eqnull: true,
        browser: true,
        node: true,
        globals: {}
      },
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<%= jshint.files %>',
      tasks: 'default'
    }
  });

  // Load npm tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-buster');

  // Default task.
  grunt.registerTask('default', ['jshint', 'buster']);

};
