'use strict';

const fs = require('fs');
const util = require('util');
var path = require('path');
const { JSONPath } = require('jsonpath-plus');
const json = require(`${__dirname}${path.sep}..${path.sep}openapi-specifications${path.sep}s2s${path.sep}openapi.json`);
let res = JSONPath('$..callbacks', json)[0];
var swaggerfilename = 'openapi-3.0.json';
//var destdirectory = `${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}webhook`;
//var destdirectory = `${__dirname}${path.sep}..${path.sep}modules${path.sep}sdkkernel${path.sep}rest${path.sep}webhook`;
var destdirectory = `${__dirname}${path.sep}..${path.sep}openapi-specifications${path.sep}webhook`;

var deleteAllSchemaFiles = (swaggerfile) => {
    try {
        if (!fs.existsSync(`${destdirectory}${path.sep}${swaggerfile}`)) {
            return;
        }
        console.log(`fs.unlinkSync(${destdirectory}${path.sep}${swaggerfile})`);
        fs.unlinkSync(`${destdirectory}${path.sep}${swaggerfile}`);
    } catch (err) {
        console.log(err);
        throw e;
    }
};

var saveSchema = (jsonSchema, filename) => {
    let fd;
    console.log(`${destdirectory}${path.sep}${filename}`);
    try {
        if (!fs.existsSync(destdirectory)) {
            console.log('saveSchema', `creatig directory ${destdirectory} ...`);
            fs.mkdirSync(destdirectory);
        }
        fd = fs.openSync(`${destdirectory}${path.sep}${filename}`, 'a');
        fs.appendFileSync(fd, JSON.stringify(jsonSchema, null, 4), 'utf8');
    } catch (e) {
        console.error('' + e);
    } finally {
        if (fd !== undefined) {
            fs.closeSync(fd);
        }
    }
};

var rewriteProperties = (savedSchema, schemaList) => {
    /*
    console.log(JSON.stringify(savedSchema,null,4));
    if(saveSchema.type ==='object'){
        saveSchema.properties
    }else{

    }
    let ref = { '$ref': `#/components/schemas/` };
    let properties = JSONPath('$.properties', savedSchema);
    console.log(properties);
    */
};

let schemas = JSONPath('$..components.schemas', json)[0];

var strSchema = JSON.stringify(schemas, null, 4);
//strSchema = strSchema.replace(/#\/components\/schemas/g, '#/definitions');
//console.log(strSchema);
schemas = JSON.parse(strSchema);

let swagger = {
    "openapi": "3.0.2",
//    "swagger": "2.0",
    info: { title: "S2S api callback", version: "1.0.0", contact: { name: "CpaaS Team" }, license: { name: "Copy Right ALE" } },
    servers: [{url:"http://localhost",description:"Webhook server"}],
//    schemes: ["http"],
//    basePath: "/",
    paths: {},
    components: {schemas:[]}
};

for (var callback_url in res) {
    console.log(callback_url);
    //console.log(res[callback_url]);
    let aPath = res[callback_url];
    let post = JSONPath('$..post', aPath)[0];
    let schema = JSONPath('$..schema', aPath)[0];
    let schemaName = ('' + callback_url).split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
    if (schema.type == 'object') {
        let operationId = schemaName.charAt(0).toLowerCase() + schemaName.slice(1);
        let ControllerName = schemaName.charAt(0).toUpperCase() + schemaName.slice(1);
        schemaName = 'Cb' + schemaName;
        let savedSchema = JSON.parse(JSON.stringify(schema));
        //delete post.requestBody.content["application/json"].schema;
        delete post.requestBody;
        post.operationId = `${operationId}NotificationReceived`;
	post["x-swagger-router-controller"] = `${ControllerName}Ctrl`;
	post["tags"] = [`${ControllerName}`];
        //post.parameters = [];
        post.requestBody={content:{}};
        post.requestBody.content["application/json"]={schema:{}};
        post.requestBody.required = true;
        var param = { in: "query",
            name: "body",
            required: true,
            schema: {}
        };
        param.schema = { '$ref': `#/components/schemas/${schemaName}` };
//        param.schema = { '$ref': `#/definitions/${schemaName}` };
        //post.parameters.push(param);
        post.requestBody.content["application/json"].schema = { '$ref': `#/components/schemas/${schemaName}` };
        let newSchema = {};
        savedSchema.title = schemaName;
        //newSchema[schemaName] = savedSchema;
        schemas[schemaName] = savedSchema;
        rewriteProperties(savedSchema);
    }
    let mypath = `callback_url/${callback_url}`;
    let obj = {};
    obj[`/${callback_url}`] = { 'post': post };
    //{ mypath: { 'post': post } }
    swagger.paths[`/${callback_url}`] = { 'post': post };
}

swagger.components.schemas = schemas;
deleteAllSchemaFiles(swaggerfilename);
saveSchema(swagger, swaggerfilename);
//console.log(JSON.stringify(swagger, null, 4));
