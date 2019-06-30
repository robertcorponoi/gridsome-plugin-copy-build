'use strict'

const chai = require('chai');
chai.use(require('chai-fs'));

const fs = require('fs-extra');

const GridsomePluginCopyBuild = require('../index');
const GridsomeMockApi = require('./GridsomeMockApi');

let gridsomeMockApi;
let gridsomePluginCopyBuild;

describe('Copying files', () => {

  beforeEach(() => {

    gridsomeMockApi = new GridsomeMockApi();

    gridsomePluginCopyBuild = new GridsomePluginCopyBuild(gridsomeMockApi, { targetDir: 'C:\\Users\\Bob\\Documents\\test' });

  });

  afterEach(() => {

    gridsomeMockApi = null;

    gridsomePluginCopyBuild = null;

    fs.unlink('C:\\Users\\Bob\\Documents\\test\\hello.html');

  });

  it('should take the contents of our fake dist folder and copy them into the target directory', (done) => {

    setTimeout(() => {
      
      chai.expect('C:\\Users\\Bob\\Documents\\test').to.be.a.directory().and.files.have.lengthOf(1);

      done();

    }, 2000);

  });

});