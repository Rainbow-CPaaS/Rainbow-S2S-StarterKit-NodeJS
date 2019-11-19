#!/usr/bin/env node
"use strict";
/*
const path = require('path');
const {
  spawnSync,
  execSync,
  execFileSync,
} = require('child_process');

const child = spawnSync('node', [`${__dirname}${path.sep}generate-webhook-swagger.js`]);
child.unref();
*/
var shell = require("shelljs");
const path = require('path');
console.log(`node ${__dirname}${path.sep}webhook-swagger-generator.js`);
var result = shell.exec(`node ${__dirname}${path.sep}webhook-swagger-generator.js`);
if (result.code != 0) {
    console.log("webhook swagger generation failed !");
}else{
    console.log("webhook swagger generation succeeded !");
}
