'use strict';

const ngrok = require('ngrok');
let fs = require('fs');
const path = require('path');

class NgrokService {

    constructor(options, eventCore, logger) {
        this._eventEmitter = eventCore;
        this._logger = logger;
        this._options = options;
        this._logger.enter("constructor()");
        this.started = false;
        this.url = '';
        this._logger.exit("constructor()");
    }

    async start() {
        let that = this;
        try {
            //return (async function() {
            that._logger.enter('starting ngrok ...');
            if (!that._started) {
                that._logger.enter('connecting ngrok using settings -> ' + JSON.stringify(that._options.ngrok));
                const url = await ngrok.connect(that._options.ngrok);
                that._started = true;
                that._logger.exit('ngrok is exposing web local server to plublic fqdn :' + url);
                that._url = url;
                return that._url;
            } else {
                that._logger.exit('ngrok is already exporting local web server to plublic fqdn :' + url);
            }
        } catch (ex) {
            that._started = false;
            that._logger.exitWithError('ngrok start', ex);
            throw ex;
        }
        //})();
    }

    async stop() {
        let that = this;
        //return (async function() {
        try {
            if (that._started) {
                that._logger.enter('stopping ngrok ...');
                await ngrok.disconnect(); // stops all
                await ngrok.kill(); // kills ngrok process
                that._logger.exit('ngrok is stopped !');
                that._started = false;
            } else {
                that._logger.enter('ngrok and http server already stopped !');
            }
        } catch (ex) {
            that._logger.exitWithError('ngrok stop', ex);
            that._started = false;
            throw ex;
        }
        //})();
    }
}
module.exports = NgrokService;