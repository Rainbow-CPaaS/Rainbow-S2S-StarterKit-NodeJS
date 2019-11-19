"use strict";

const crypto = require('crypto');

class BasicAuthCredsHelper {
    constructor(options) {
        this.options = options;
    }
    genAuthParams4Header(login, password) {
        var headerAuthStr = Buffer.from(login + ':' + password).toString('base64');
        var sha256AppSecretPasswordStr = crypto.createHash('sha256').update(this.options.application.appSecret + password, 'utf8').digest('hex').toString();
        var headerRainbowAppAuthStr = Buffer.from(this.options.application.appID + ':' + sha256AppSecretPasswordStr).toString('base64').trim();
        var res = {
            'authorization': 'Basic ' + headerAuthStr,
            'xRainbowAppAuth': 'Basic ' + headerRainbowAppAuthStr,
        };
        return res;
    }
}
module.exports = BasicAuthCredsHelper;