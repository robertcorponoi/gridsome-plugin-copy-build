<h1 align="center">Gridsome Plugin Copy Build</h1>

<p align="center">A plugin for your Gridsome project that lets you copy the dist files to another directory after building<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/gridsome-plugin-copy-build.svg?style=flat)](https://www.npmjs.com/package/gridsome-plugin-copy-build)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/gridsome-plugin-copy-build/badge.svg)](https://snyk.io/test/github/robertcorponoi/gridsome-plugin-copy-build)
  [![NPM downloads](https://img.shields.io/npm/dm/gridsome-plugin-copy-build.svg?style=flat)](https://www.npmjs.com/package/gridsome-plugin-copy-build)
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/issues/robertcorponoi/gridsome-plugin-copy-build.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/license/robertcorponoi/gridsome-plugin-copy-build.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Why?**

While updating my blog, which uses Gridsome, I kept having to copy files over from the Gridsome project over to my site.github.io project. I created this plugin so that it would do it automatically when my Guidsome site was being built.

Essentially, this plugin lets you copy the files that are populated in the dist folder after building to another directory of your choosing.

## **Installation**

To install the plugin through npm, use:

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
      targetDir: path.resolve(__dirname, '/path/to/copy/target');
    }
  }
]
```

Currently `targetDir` is the only option avaialble and it is the absolute path to the where you want the build files copied to.

## **Tests**

To run the tests for this plugin, use:

```bash
$ npm run test
```

## **License**

MIT