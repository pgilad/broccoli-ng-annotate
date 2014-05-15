# [broccoli](https://github.com/joliss/broccoli)-ng-annotate
[![Build Status](https://travis-ci.org/pgilad/broccoli-ng-annotate.svg?branch=master)](https://travis-ci.org/pgilad/broccoli-ng-annotate)

[![NPM version](http://img.shields.io/npm/v/broccoli-ng-annotate.svg)](https://www.npmjs.org/package/broccoli-ng-annotate)
[![NPM Downloads](http://img.shields.io/npm/dm/broccoli-ng-annotate.svg)](https://www.npmjs.org/package/broccoli-ng-annotate)
[![Build Status](http://img.shields.io/travis/pgilad/broccoli-ng-annotate/master.svg)](https://travis-ci.org/pgilad/broccoli-ng-annotate)

> Add, remove and rebuild AngularJS dependency injection annotations.

*Issues with the output should be reported on the ng-annotate [issue tracker](https://github.com/olov/ng-annotate/issues).*

## Install

```shell
$ npm install --save broccoli-ng-annotate
```

## Usage

```js
var ngAnnotate = require('broccoli-ng-annotate');
tree = ngAnnotate(tree, options);
```

## API

### ngAnnotate(tree, options)

#### options

See the ng-annotate [options](https://github.com/olov/ng-annotate).

In addition you can pass in `options.data` to use as the ng-annotate options.

## License

[MIT](http://opensource.org/licenses/MIT) © Gilad Peleg
