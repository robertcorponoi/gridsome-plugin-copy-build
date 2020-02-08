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
   * Indicates whether info logs should be output to the console or not.
   * 
   * @property {boolean}
   * 
   * @default false
   */
  verbose: boolean = false;

  /**
   * @param {Object} options The initialization options passed to the plugin.
   */
  constructor(options: Object) {
    Object.assign(this, options);
  }
}
