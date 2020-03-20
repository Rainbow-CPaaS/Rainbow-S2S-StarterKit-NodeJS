#!/usr/bin/env node
'use strict'

const yaml = require('js-yaml');
const sm = require('sitemap');
const path = require('path');
const hostname = 'https://hub_fqdn';
const pathPrefix = '/#/documentation/';
const replaceInFile = require('replace-in-file');

var fs  = require('fs');
const { createReadStream,createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

let docDir = `${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs`;

let writeUrlFromIndexYmlObjectToSitemapWriteStream = function (obj, stack, cb) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] === 'object') {
                writeUrlFromIndexYmlObjectToSitemapWriteStream(obj[property], stack + '.' + property, cb);
            } else {
                cb(obj[property]);
            }
        }
    }
};

try {
   let args = process.argv.slice(2);

   let myhostname=(args.length > 0 && args[0])?args[0]:hostname;
   const sitemap = new SitemapStream({ hostname: myhostname });
   const writeStream = createWriteStream(`${docDir}/sitemap.xml`);
   sitemap.pipe(writeStream);
	
   const indexYmlObject = yaml.safeLoad(fs.readFileSync(`${docDir}/index.yml`, 'utf8'));

   writeUrlFromIndexYmlObjectToSitemapWriteStream(indexYmlObject, '', (value) => {
       sitemap.write({
           url: value.replace(/(ref:)?(.*).md/g,pathPrefix + '$2')
       });
   });
   sitemap.end();
   (async()=>{
   await new Promise(resolve => setTimeout(resolve, 10000));	
   const result = replaceInFile.sync({
	   files: `${docDir}/sitemap.xml`,
	   encoding: 'utf8',
	   from: /\bhub_fqdn\b/g,
	   to: '@hub_fqdn@',
	   countMatches: true,
   }); 
   console.log(result);
   })();
} catch (e) {
    console.log(e);
}
