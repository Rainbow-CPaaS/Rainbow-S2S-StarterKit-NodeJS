#! /usr/bin/env node

"use strict";
var shell = require("shelljs");
var cmds=[
	'gen-auth-client-api',
	'gen-admin-client-api',
	'gen-application-client-api',
	'gen-enduser-client-api',
	'gen-s2s-client-api',
	'gen-webhook-swagger'
];
var result = 0;
var res=[];
for(var i=0;i<cmds.length;i++){
	let aRes = shell.exec(`${cmds[i]}`);
	if(aRes!=0){
		++result;
		res.push(`${cmds[i]} failed !`);
	}
}
if (result.code != 0) {
    console.log("generation failed !"+res.join(' '));
}
