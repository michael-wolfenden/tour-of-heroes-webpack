/* global __dirname */

'use strict';

var path = require('path');

var nodeModulesDir = path.join(__dirname, 'node_modules');
var srcDir = path.join(__dirname, 'src');
var buildDir = path.join(__dirname, 'build');
var appDir = path.join(srcDir, 'app');
var entryFile = path.join(appDir, 'bootstrap.ts');
var index = path.join(srcDir, 'index.html');

var configuration = {

    paths: {
        nodeModulesDir: nodeModulesDir,
        entryFile: entryFile,
        buildDir: buildDir,
        index: index
    },

    vendorsToBundleSeperately: [
        'es6-shim',
        'reflect-metadata',
        'zone.js',
        'angular2/angular2'
    ],

    chunkManifest: {
        filename: 'manifest.json',
        globalVariable: 'webpackManifest'
    }
};

module.exports = configuration;
