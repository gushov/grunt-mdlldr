/*
 * grunt-mdlldr
 * https://github.com/gushov/grunt-mdlldr
 *
 * Copyright (c) 2012 Gus Hovland
 * Licensed under the MIT license.
 */

var path = require('path');
var mdlldr = require('mdlldr');

module.exports = function(grunt) {

  grunt.registerMultiTask('mdlldr', 'Your task description goes here.', function () {

    var done = this.async();
    var task = grunt.config('mdlldr');
    var config = task.config;

    if (this.target !== 'config' && this.data.length) {

      grunt.helper('mdlldr', config, this.target, this.data, function (err) {

        if (err) {

          grunt.log.error(err);
          done(false);

        } else {
          done(true);
        }

      });

    } else {
      done(true);
    }

  });

  grunt.registerHelper('mdlldr', function(config, target, data, done) {

    var mount = path.join(config.staticPath, target);

    var modules = data.map(function (module) {
      return path.join(config.modulePath, module);
    });

    grunt.log.writeln('Writing ' + modules + ' to ' + mount);

    mdlldr.run(modules, config.modulePath, config.overrides, function (err, js) {

      if (err) { done(err); }
      mdlldr.write(mount, js, done);

    });

  });

};
