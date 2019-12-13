'use strict'

/**
 * Mocks the functionality of the Gridsome api in order to create tests for the plugin.
 */
module.exports = class GridsomeMockApi {
  
  afterBuild(fn) {
    fn();
  }
}