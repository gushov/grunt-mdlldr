/*
 * grunt-mdlldr
 * https://github.com/gushov/grunt-mdlldr
 *
 * Copyright (c) 2012 Gus Hovland
 * Licensed under the MIT license.
 */

var driver = require('../lib/driver');

module.exports = function(grunt) {
  grunt.registerMultiTask('mdlldr', 'Runs mdlldr via grunt', driver(grunt));
};
