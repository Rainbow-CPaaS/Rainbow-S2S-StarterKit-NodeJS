'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');
const OpenAPIBackend = require('openapi-backend').default;
const express = require('express');
const app = express();
var Ajv = require('ajv');

const yamlpath = path.join(__dirname, `..${path.sep}..${path.sep}..${path.sep}/openapi-specifications${path.sep}webhook${path.sep}openapi-3.0.json`);
class Router {

    constructor(options, eventCore, logger) {
        var that = this;
        this.logger = logger;
        this._started = false;
        this.protocol = "http";
        this.port = process.env.PORT || 8080;
        this._httpServer = null;
        this._options = options;
        this._eventCore = eventCore;
        var CustomController = require('./controllers')(this._eventCore, this.logger);
        this._openApiBackend = new OpenAPIBackend({
            definition: yamlpath,
            strict: true,
            validate: true,
            ajvOpts: { unknownFormats: true },
            customizeAjv: () => new Ajv(),
            handlers: CustomController,
        });
    }

    async start() {
        let that = this;
        let httpServerSettings = that._options.rainbow_notification_service.sdkrouter;
        this.port = process.env.PORT || httpServerSettings.port || this.port;
        this.protocol = process.env.SERVER_PROTO || httpServerSettings.protocol || this.protocol;
        this.logger.enter(that,'starting router service ...');
        this.logger.info(that,`webhook dynamic implementation will use ${yamlpath}`);
        return new Promise((resolve, reject) => {
            if (!that._started) {
                app.use(express.json());
                app.use((req, res) => that._openApiBackend.handleRequest(req, req, res));

                if (that.protocol === 'http') {
                    that._httpServer = http.createServer(app).listen(that.port, function() {
                        that.logger.info("Server is running at https://localhost:" + that.port);
                        resolve(true);
                    });
                } else if (that.protocol === 'https') {
                    let cert_key_path = path.resolve(that._options.rootdir, httpServerSettings.certificates.key);
                    let cert_path = path.resolve(that._options.rootdir, httpServerSettings.certificates.cert);
                    that.logger.debug(`reading cert key from : ${cert_key_path}`);
                    that.logger.debug(`reading cert file from : ${cert_path}`);

                    let key = fs.readFileSync(cert_key_path);
                    let cert = fs.readFileSync(cert_path);
                    let https_options = { key: key, cert: cert };
                    that._httpServer = https.createServer(app).listen(that.port, () => {
                        that.logger.info("App running at https://localhost:" + that.port);
                        that.logger.info('server started in https on port ' + that.port);
                        resolve(true);
                    });
                }
                that._started = true;
            }
        }).catch((e) => {
            throw e;
        });
    }

    stop() {
        let that = this;
        return (async function() {
            if (that._started) {
                that.logger.enter('stopping router service ...');
                await that._httpServer.close(() => {
                    that.logger.exit('http server stopped !');
                });
                that._started = false;
            } else {
                that.logger.enter('router service already stopped !');
            }
        })();
    }
}

module.exports = Router;
