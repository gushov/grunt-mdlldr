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

    test.expect(2);

    var data = {
      src: ['test-mod.js'],
      root: './test/fixtures',
      overrides: '_'
    };

    grunt.helper('mdlldr', data, function (err, js) {
      test.ifError(err);
      test.equal(js.length, 111);
      test.done();
    });
  }

};
