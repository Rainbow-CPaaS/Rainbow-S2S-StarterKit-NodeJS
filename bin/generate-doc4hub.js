#!/usr/bin/env node

"use strict";
var shell = require('shelljs');
var fs = require('fs');
const path = require('path');
var fs = require('fs-extra');

var copyDirectory = (src, dest) => {
    fs.copy(src, dest, function(err) {
        if (err) {
            console.log('An error occured while copying the folder.')
            return console.error(err)
        }
        console.log('Copy completed!');
    });
};

var createDirectory = (destdirectory) => {
    console.log(`creating ${destdirectory}...`);
    try {
        if (!fs.existsSync(destdirectory)) {
            console.log('createDirectory', `creatig directory ${destdirectory} ...`);
            fs.mkdirSync(destdirectory);
        }
    } catch (e) {
        console.error('' + e);
    }
};

var generateServicesDocs = (directoryPath, destPath) => {

    var exceptionFiles = ['BubbleService.js', 'PeerType.js', 'basicauthcredshelper.js', 'ngrok-service.js'];
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function(file) {
            // Do whatever you want to do with the file
            if (!exceptionFiles.includes(file)) {
                let mdFile = file;
                mdFile = mdFile.replace('.js', '') + '.md';
                //var result = shell.exec(`node ${__dirname}${path.sep}..${path.sep}node_modules${path.sep}.bin${path.sep}jsdoc2md --heading-depth 3 ${directoryPath}${path.sep}${file} >${destPath }${path.sep}${mdFile}`);
                var result = shell.exec(`node ${__dirname}${path.sep}..${path.sep}node_modules${path.sep}.bin${path.sep}jsdoc2md ${directoryPath}${path.sep}${file} >${destPath }${path.sep}${mdFile}`);
                //console.log(file);
            }
        });
    });
};

var sericesDirPath = `${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}services`;
var destPath = `${__dirname}${path.sep}..${path.sep}doc4hub${path.sep}services`;
generateServicesDocs(sericesDirPath, destPath);

var destdirectories = [
    `${__dirname}${path.sep}..${path.sep}doc`,
    `${__dirname}${path.sep}..${ path.sep}doc${path.sep}sdk`,
    `${__dirname}${path.sep}..${ path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs`,
    //`${__dirname}${path.sep}..${ path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs${path.sep}api`
];

var dir2copyParams = [
    { src: `${__dirname}${path.sep}..${path.sep}doc4hub`, dest: `${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs${path.sep}` },
    //{ src: `${__dirname}${path.sep}..${path.sep}doc4hub${path.sep}services`, dest: `${__dirname}${path.sep}..${path.sep}doc${path.sep }sdk${path.sep}s2s-starterkit-nodejs${path.sep}` },
    //{ src: `${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}client${path.sep}s2s${ path.sep }docs`, dest: `${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs${path.sep}api` },
];
for (var idx in destdirectories) {
    createDirectory(destdirectories[idx]);
}

for (var idx in dir2copyParams) {
    copyDirectory(dir2copyParams[idx].src, dir2copyParams[idx].dest);
}
