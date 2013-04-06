/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*globals assert, refute */

var buster = require("buster");
var driver = require("../lib/driver");

buster.testCase("test mdlldr grunt plugin", {

  "should call mdlldr via driver": function (done) {

    var data = {
      src: ['test-mod.js'],
      root: './test/fixtures',
      overrides: '_',
      dest: './dist/test-mod.js'
    };

    var grunt = {
      log: { writeln: this.spy() },
      file: { write: this.spy() }
    };

    driver(grunt).call({
      data: data,
      async: function () {
        return function () {
          assert.calledOnceWith(grunt.log.writeln, 'Writing test-mod.js to ./dist/test-mod.js');
          assert.calledOnceWith(grunt.file.write, './dist/test-mod.js');
          done();
        };
      }

    });

  }

});
