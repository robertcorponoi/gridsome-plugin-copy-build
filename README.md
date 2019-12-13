<h1 align="center">Gridsome Plugin Copy Build</h1>

<p align="center">A plugin for your Gridsome project that lets you copy the files from the dist directory to another directory of your choosing after running a build.</p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/gridsome-plugin-copy-build.svg?style=flat)](https://www.npmjs.com/package/gridsome-plugin-copy-build)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/gridsome-plugin-copy-build/badge.svg)](https://snyk.io/test/github/robertcorponoi/gridsome-plugin-copy-build)
  ![npm](https://img.shields.io/npm/dt/gridsome-plugin-copy-build)
  [![NPM downloads](https://img.shields.io/npm/dm/gridsome-plugin-copy-build.svg?style=flat)](https://www.npmjs.com/package/gridsome-plugin-copy-build)
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/issues/robertcorponoi/gridsome-plugin-copy-build.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/license/robertcorponoi/gridsome-plugin-copy-build.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Why?**

While updating by blog powered by Gridsome, I found myself constantly having to copy over the files from the build folder over to another folder that contained by site.github.io project. To solve this problem, I created this plugin so that the files would automatically get copied over after running a build.

## **Installation**

To install this plugin, use:

```bash
$ npm install gridsome-plugin-copy-build
```

## **Usage**

To use this plugin in your Gridsome project, simply go to your `gridsome.config.js` file and under the plugins section add:

```js
plugins: [
  {
    use: 'gridsome-plugin-copy-build',
    options: {
      targetDir: path.resolve(__dirname, '/path/to/copy/target'),
      verbose: true
    }
  }
]
```

## **Options**

| param             	| type    	| description                                                         	| default 	|
|-------------------	|---------	|---------------------------------------------------------------------	|---------	|
| options           	| Object  	|                                                                     	|         	|
| options.targetDir 	| string  	| The directory to copy the build files to.                           	|         	|
| options.verbose   	| boolean 	| Indicates whether info logs should be output to the console or not. 	| false   	|

## **Tests**

To run the tests for this plugin, use:

```bash
$ npm run test
```

## **License**

MIT