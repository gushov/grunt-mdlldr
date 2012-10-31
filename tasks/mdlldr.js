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
    var target = this.target;
    var data = this.data;

    grunt.helper('mdlldr', data, function (err, js) {

      if (err) {
        grunt.log.error(err);
        done(false);
      } else {
        grunt.log.writeln('Writing ' + data.src + ' to ' + data.dest);
        grunt.file.write(data.dest, js);
        done(true);
      }

    });

  });

  grunt.registerHelper('mdlldr', function(data, done) {

    var root = data.root;
    var src = data.src;
    var overrides = data.overrides;

    mdlldr(src, root, overrides, function (err, js) {
      return done(err, js);
    });

  });

};
