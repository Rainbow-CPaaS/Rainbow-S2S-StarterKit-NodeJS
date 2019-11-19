#!/usr/bin/env node

"use strict";
var shell = require('shelljs');
var fs = require('fs');
const path = require('path');
var fs = require('fs-extra');

var copyDirectory = (src,dest) =>{
  fs.copy(src, dest, function (err) {
    if (err){
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

var destdirectories = [
	`${__dirname}${path.sep}..${path.sep}doc`,
	`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk`,
	`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit`,
//	`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}guides`,
//	`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}services`,
	`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}api`
];

var dir2copyParams = [
	{src:`${__dirname}${path.sep}..${path.sep}doc4hub`,dest:`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}`},
	//{src:`${__dirname}${path.sep}..${path.sep}doc4hub${path.sep}services${path.sep}*`,dest:`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}services`},
	{src:`${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}client${path.sep}s2s${path.sep}/docs`,dest:`${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-dev-kit${path.sep}api`},
];
for(var idx in destdirectories){
	createDirectory(destdirectories[idx]);
}

for(var idx in dir2copyParams){
	copyDirectory(dir2copyParams[idx].src,dir2copyParams[idx].dest);
}

