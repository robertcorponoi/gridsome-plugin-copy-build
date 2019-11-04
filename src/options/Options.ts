'use strict'

/**
 * Defines the options available to be passed to an instance of gridsome-plugin-copy-build and their default
 * values if any exist.
 */
export default class Options {

  /**
   * The directory to copy the build files to.
   * 
   * @property {string}
   * 
   * @default process.cwd()
   */
  targetDir: string = process.cwd();

  /**
   * @param {Object} options The initialization options passed to the plugin.
   */
  constructor(options: Object) {

    Object.assign(this, options);

  }

};