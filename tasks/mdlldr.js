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

  grunt.registerMultiTask('mdlldr', 'Runs mdlldr via grunt', function () {

    var done = this.async();
    var task = grunt.config('mdlldr');
    var config = task.config;
    var target = this.target;
    var data = this.data;

    if (target !== 'config' && data.length) {

      grunt.helper('mdlldr', config, target, data, function (err, mount, js) {

        if (err) {
          grunt.log.error(err);
          done(false);
        } else {
          grunt.file.write(mount, js);
          done(true);
        }

      });

    } else {
      done(false);
    }

  });

  grunt.registerHelper('mdlldr', function(config, target, modules, done) {

    var mount = path.join(config.staticPath, target);
    var modulePath = config.modulePath;
    var overrides = config.overrides;

    grunt.log.writeln('Writing ' + modules + ' to ' + mount);

    mdlldr(modules, modulePath, overrides, function (err, js) {
      return done(err, mount, js);
    });

  });

};
