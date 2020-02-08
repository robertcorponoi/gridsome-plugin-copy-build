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

    fs.unlink('C:\\Users\\Bob\\Documents\\test\\hello.html').catch(err => console.log(err));
  });

  it('should take the contents of our fake dist folder and copy them into the target directory', function (done) {
    this.timeout(10000);

    setTimeout(() => {
      chai.expect('C:\\Users\\Bob\\Documents\\test').to.be.a.directory().and.files.have.lengthOf(1);

      done();
    }, 2000);
  });

  it('should output more information with the verbose option', function (done) {
    this.timeout(10000);

    gridsomePluginCopyBuild = new GridsomePluginCopyBuild(gridsomeMockApi, { targetDir: 'C:\\Users\\Bob\\Documents\\test', verbose: true });

    setTimeout(() => {
      chai.expect('C:\\Users\\Bob\\Documents\\test').to.be.a.directory().and.files.have.lengthOf(1);

      done();
    }, 2000);
  });
});
