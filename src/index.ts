'use strict'

import * as fs from 'fs-extra';
import Options from './options/Options';

/**
 * Takes the contents of the Gridsome build and copies them to a target destination.
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
   */
  constructor(api: any, options: Object = {}) {

    this._options = new Options(options);

    /**
     * Wait until the Gridsome build is finished to copy the files.
     */
    api.afterBuild(() => this._boot());

  }

  /**
   * Copies the files from the dist folder to the target directory.
   * 
   * @private
   */
  private _boot() {

    fs.copy(this._dist, this._options.targetDir)
      .then(() => {

        console.log(`Copied contents of ${this._dist} to ${this._options.targetDir}`);

      })
      .catch((err) => {

        throw new Error(err);

      });

  }

}

