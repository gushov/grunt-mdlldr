/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var mdlldr = require('mdlldr');

module.exports = function (grunt) {

  return function () {

    var done = this.async();
    var data = this.data;
    var root = data.root;
    var src = data.src;
    var overrides = data.overrides;

    mdlldr(src, root, overrides, function (err, js) {

      if (err) {
        grunt.log.error(err);
        return done(false);
      }

      grunt.log.writeln('Writing ' + data.src + ' to ' + data.dest);
      grunt.file.write(data.dest, js);
      return done(true);

    });

  };

};