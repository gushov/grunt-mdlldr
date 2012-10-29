var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test mdlldr grunt plugin'] = {

  setUp: function(done) {
    // setup here
    done();
  },

  "helper should call": function (test) {

    test.expect(3);

    var target = 'bundle.js';
    var modules = ['test-mod'];
    var config = {
      staticPath: 'test/out',
      modulePath: 'test/fixtures',
      overrides: '_'
    };

    grunt.helper('mdlldr', config, target, modules, function (err, mount, js) {
      test.ifError(err);
      test.equal(mount, 'test/out/bundle.js');
      test.equal(js.length, 111);
      test.done();
    });
  }

};
