#!/usr/bin/env node

"use strict";
const path = require('path');
var fs = require('fs-extra');
var jsonUpdater = require('json-update');

var currentDateObj = new Date();
let day = ("0" + currentDateObj.getDate()).slice(-2);
let month = ("0" + (currentDateObj.getMonth() + 1)).slice(-2);
let year = currentDateObj.getFullYear();
let hours = currentDateObj.getHours();
let minutes = currentDateObj.getMinutes();
let seconds = currentDateObj.getSeconds();

let date4filePostfix=`${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

var userPath = process.env.INIT_CWD;
var fileupdateParams = [];

var createDirectory = (destdirectory) => {
    console.log(`creating ${destdirectory}...`);
    try {
        if (!fs.existsSync(destdirectory)) {
            console.log('createDirectory', `creatig directory ${destdirectory} ...`);
            fs.mkdirSync(destdirectory);
	    return true;
        }
    } catch (e) {
        console.error('' + e);
    }
    return false;
};

var backupFile = (fullpath_filename) => {
        if(fs.existsSync(fullpath_filename)){
		let myfilename = path.basename(fullpath_filename);
		let mydirname = path.dirname(fullpath_filename);
		let backupfilename = `${mydirname}${path.sep}${date4filePostfix}-${myfilename}.backup`;
                fs.copySync(path.resolve(fullpath_filename),backupfilename);
		return backupfilename;
        }
}

var copyFile = (src, dest) => {
        if(!fs.existsSync(dest)){
                fs.copySync(path.resolve(src),dest);
        }else{
		let backupedFile = backupFile(dest);
		fileupdateParams.push({backupedfile:backupedFile,file2update:`${dest}`});
                fs.copySync(path.resolve(src),`${dest}`);
	}
}

var updateConfigs = async(src, dest) => {
        if(fs.existsSync(src) && fs.existsSync(dest)){
		//console.log(`updating file ... :src=${src} dest=${dest}`);
		if(path.extname(dest)=='.json'){
			let src_rawdata = fs.readFileSync(src);
			let src_obj = JSON.parse(src_rawdata);
			let dest_rawdata = fs.readFileSync(dest);
			let dest_obj = JSON.parse(dest_rawdata);
			jsonUpdater.update(dest,src_obj, function(err, obj) {
			  if (typeof err !== "undefined" && err !== null) {
			    console.log("Error updating json: " + err.message);
			  }else{
			    let dest_data = fs.readFileSync(dest);
			    let finalObj = JSON.parse(dest_data);
			    fs.writeFileSync(dest,JSON.stringify(finalObj,null,4));
			  }
			}).catch((error)=>{
			  console.log(error);
			});
		}
        }
}

var cleanBackups=(directoryPath) =>{
  var p=new RegExp('^'+date4filePostfix+'-.*$');
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
      if(file.indexOf('.backup')>=0){
	if(!p.test(file)){
          //console.log(`${directoryPath}${path.sep}${file} will be removed !`);
          fs.unlinkSync(`${directoryPath}${path.sep}${file}`);
	}
      }
    });
  });	
}

var copyDirectory = (src, dest) => {
    let created = createDirectory(dest);
    // copy only if directory is newly created to avoid file overwritting
    if(created){
     fs.copy(src, dest, function(err) {
        if (err) {
            console.log('An error occured while copying the folder.')
            return console.error(err)
        }
        console.log('Copy completed!');
      });
    }
};

var dir2CreateParams = [
    `${userPath}${path.sep}config`
];

var dir2CleanParams = [
    `${userPath}`,
    `${userPath}${path.sep}config`
];

var files2copyParams = [
    { src: `${__dirname}${path.sep}..${path.sep}non-nodejs-bot-loader${path.sep}config${path.sep}bot-loader-params.json`, dest: `${userPath}${path.sep}config${path.sep}bot-loader-params.json` },
    { src: `${__dirname}${path.sep}..${path.sep}config${path.sep}config.json`, dest: `${userPath}${path.sep}config${path.sep}config.json` },
    { src: `${__dirname}${path.sep}..${path.sep}config${path.sep}README.md`, dest: `${userPath}${path.sep}config${path.sep}README.md` },
    { src: `${__dirname}${path.sep}..${path.sep}config${path.sep}StarterKitConfig.json.sample`, dest: `${userPath}${path.sep}config${path.sep}StarterKitConfig.json.sample` },
    { src: `${__dirname}${path.sep}..${path.sep}non-nodejs-bot-loader${path.sep}s2s-zmq-bot-loader.js.sample`, dest: `${userPath}${path.sep}s2s-zmq-bot-loader.js.sample` },
    { src: `${__dirname}${path.sep}..${path.sep}bin${path.sep}s2snode-core-starter.js.sample`, dest: `${userPath}${path.sep}s2snode-core-starter.js.sample` }
];

for (var idx in dir2CreateParams) {
   createDirectory(dir2CreateParams[idx]);
}

for (var idx in files2copyParams) {
  copyFile(files2copyParams[idx].src, files2copyParams[idx].dest);
}

for(var idx in fileupdateParams){
  updateConfigs(fileupdateParams[idx].backupedfile,fileupdateParams[idx].file2update);
}

for (var idx in dir2CleanParams) {
  cleanBackups(dir2CleanParams[idx]);
}

