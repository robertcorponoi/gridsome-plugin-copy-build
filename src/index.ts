'use strict'

import * as fs from 'fs-extra';
import Options from './options/Options';

/**
 * A plugin for your Gridsome project that lets you copy the files from the dist directory to another directory of your choosing after running a build.
 */
module.exports = class GridsomePluginCopyBuild {
  /**
   * A reference to the options for this instance.
   * 
   * @private
   * 
   * @property {Options}
   */
  private _options: Options;

  /**
   * The dist folder of the application using this plugin.
   * 
   * @private
   * 
   * @property {string}
   */
  private _dist: string = `${process.cwd()}/dist`;

  /**
   * @param {Object} options
   * @param {string} options.targetDir The directory to copy the build files to.
   * @param {boolean} [options.verbose=false] Indicates whether info logs should be output to the console or not.
   */
  constructor(api: any, options: Object = {}) {
    this._options = new Options(options);

    if (!this._options.targetDir) throw new Error('A target directory must be specified');

    api.afterBuild(() => this._boot());
  }

  /**
   * Copies the files from the dist folder to the target directory.
   * 
   * @private
   */
  private _boot() {
    if (this._options.verbose) {
      console.info('Gridsome Plugin Copy Build - Starting');
      console.info(`Gridsome Plugin Copy Build - Copying build directory to ${this._options.targetDir}...`);
    }

    fs.copy(this._dist, this._options.targetDir)
      .then(() => {

        if (this._options.verbose) console.info(`Gridsome Plugin Copy Build - Finished copying contents of ${this._dist} to ${this._options.targetDir}`);
        else console.info('Gridsome Plugin Copy Build - Finished');

      })
      .catch((err) => { throw err; });
  }
}
