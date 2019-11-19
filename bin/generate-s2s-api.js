#!/usr/bin/env node

"use strict";
var shell = require("shelljs");
const path = require('path');
var result = shell.exec(`openapi-generator generate --additional-properties useES6=false -i ${__dirname}${path.sep}..${path.sep}openapi-specifications${path.sep}s2s${path.sep}openapi.json -g javascript -o ${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}client${path.sep}s2s  -c ${__dirname}${path.sep}config.json`);
if (result.code != 0) {
    console.log("s2s api generation failed !");
}
