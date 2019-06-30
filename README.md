<p align="center">
  <img width="250" height="250" src="./curtail.png">
</p>

<h1 align="center">Gridsome Plugin Copy Build</h1>

<p align="center">A simple plugin for your Gridsome project that lets you copy the dist files to another directory after building<p>

<div align="center">
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://badge.fury.io/js/gridsome-plugin-copy-build.svg" alt="npm version" height="18"></a>
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="build" height="18"></a>
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/issues/robertcorponoi/gridsome-plugin-copy-build.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/gridsome-plugin-copy-build"><img src="https://img.shields.io/github/license/robertcorponoi/gridsome-plugin-copy-build.svg" alt="license" height="18"></a>
</div>

This Gridsome plugin lets you copy the files that are populated in the dist folder after building to another directory. I created this initially for myself because I use Gridsome to manage my
personal blog and I had to keep copying and pasting files from my Gridsome blog to the github.io blog.

## **Installation**

To download the copy build plugin through npm, simply use the following command:

```
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

## **License**

MIT