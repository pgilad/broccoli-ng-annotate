'use strict';
var Filter = require('broccoli-filter');
var ngAnnotate = require('ng-annotate');

function NgAnnotateFilter(inputTree, options) {
  options = options || {};
  if (!(this instanceof NgAnnotateFilter)) {
    return new NgAnnotateFilter(inputTree, options);
  }

  Filter.call(this, inputTree);
  this.options = options;
}

NgAnnotateFilter.prototype = Object.create(Filter.prototype);
NgAnnotateFilter.prototype.constructor = NgAnnotateFilter;

NgAnnotateFilter.prototype.extensions = ['js'];
NgAnnotateFilter.prototype.targetExtension = 'js';

NgAnnotateFilter.prototype.processString = function(str) {
  var result = ngAnnotate(str, this.options);
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  }
  return result.src;
};

module.exports = NgAnnotateFilter;
