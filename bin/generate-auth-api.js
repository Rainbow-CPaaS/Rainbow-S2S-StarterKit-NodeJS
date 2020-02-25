#!/usr/bin/env node

"use strict";
var shell = require("shelljs");
const path = require('path');
var result = shell.exec(`openapi-generator generate --additional-properties useES6=false -i ${__dirname}${path.sep}..${path.sep}openapi-specifications${path.sep}rainbow_authent_portal${path.sep}swagger.json -g javascript -o ${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}client${path.sep}rainbow_authent_portal  -c ${__dirname}${path.sep}config.json`);
if (result.code != 0) {
    console.log("rainbow_authent_portal api generation failed !");
}
