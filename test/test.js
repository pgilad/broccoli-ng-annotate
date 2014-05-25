/* global afterEach,describe,it */
'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

describe('broccoli-ng-annotate', function() {
	afterEach(function(done) {
		rimraf('temp', done);
	});

	it('should annotate file', function() {
		assert.equal(
			fs.readFileSync('temp/fixture.js', 'utf8').trim(),
			fs.readFileSync('test/expected/expected.js', 'utf8').trim()
		);
	});
});
