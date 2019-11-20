#!/usr/bin/env node
'use strict'

const yaml = require('js-yaml');
const fs = require('fs');
const sm = require('sitemap');
const path = require('path');
const hostname = 'https://@hub_fqdn@';
const pathPrefix = '/#/documentation/';

let docDir = `${__dirname}${path.sep}..${path.sep}doc${path.sep}sdk${path.sep}s2s-starterkit-nodejs`;

let appendUrl = function (obj, stack, cb) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] === 'object') {
                appendUrl(obj[property], stack + '.' + property, cb);
            } else {
                cb(obj[property]);
            }
        }
    }
};

try {
    let args = process
        .argv
        .slice(2);

    const index = yaml.safeLoad(fs.readFileSync(docDir+'/index.yml', 'utf8'));

    let sitemap = sm.createSitemap({
        hostname: (args.length && args[0])
            ? args[0]
            : hostname
    });

    appendUrl(index, '', (value) => {
        sitemap.add({
            url: value.replace(/(ref:)?(.*).md/g,pathPrefix + '$2')
        });
    });

    sitemap.toXML(function (err, xml) {
        if (!err) {
            fs.writeFileSync(docDir+'/sitemap.xml', xml);
        }
        else
        {
          console.log('sitemap.toXML FAILED:' + err);
        }
    });
} catch (e) {
    console.log(e);
}
