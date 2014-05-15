/* global afterEach,describe,it */
'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

describe('broccoli-ng-annotate', function() {
	afterEach(function() {
		rimraf.sync('temp');
	});

	it('should annotate file', function() {
		assert.equal(
			fs.readFileSync('temp/fixture.js', 'utf8').trim(),
			fs.readFileSync('fixture/expected.js', 'utf8').trim()
		);
	});
});
