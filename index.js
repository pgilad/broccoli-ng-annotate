'use strict';
var Filter = require('broccoli-filter');
var ngAnnotate = require('ng-annotate');

function NgAnnotateFilter(inputTree, options) {
	if (!(this instanceof NgAnnotateFilter)) {
		return new NgAnnotateFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

NgAnnotateFilter.prototype = Object.create(Filter.prototype);
NgAnnotateFilter.prototype.constructor = NgAnnotateFilter;

NgAnnotateFilter.prototype.extensions = ['js'];
NgAnnotateFilter.prototype.targetExtension = 'js';

NgAnnotateFilter.prototype.processString = function(str) {
	return ngAnnotate(str, this.options).src;
};

module.exports = NgAnnotateFilter;
