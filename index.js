'use-strict';
const Logger = require('./modules/common/logger');
const SdkEngine = require('./modules/sdkkernel');
const sdkInfo = require('./package.json');
const Events = require('./modules/common/events');
const StateManager = require('./modules/common/state-manager');

class S2sStarterkit {

    constructor(options) {
        var that = this;
        this._sdkInfo = sdkInfo;
        this.options = options;
        if (options.rainbow_notification_service.endpoint === 'ngrok') {
            this.options.ngrok = {
                port: options.rainbow_notification_service.ngrok.port,
                protocol: options.rainbow_notification_service.ngrok.protocol
            };
        } else if (options.rainbow_notification_service.endpoint === 'reverse_proxy') {
            this.options.reverse_proxy = options.rainbow_notification_service.reverse_proxy;
        } else {
            // use default ngrok config if no proxy is set
            this.options.ngrok = require('./config/ngrok.json');
        }
        this._logger = new Logger(this.options).log;
        this._botsjid = [];
        this._eventsModule = new Events(this._logger, this.options, (jid) => {
            return that._botsjid.includes(jid);
        });
        this._stateManager = new StateManager(this._eventsModule, this._logger);
        this._sdkEngine = new SdkEngine(this.options, this._logger, this._sdkInfo, this._eventsModule, this._stateManager);
    }

    async start() {
        var that = this;
        // Initialize the Events Emitter
        process.on('uncaughtException', (err) => {
            that._logger.info('WARNING rainbow-s2s-starterkit-nodejs  uncaughtException:' + JSON.stringify(err, null, 4));
        });
        process.on('warning', (err) => {
            that._logger.info('WARNING rainbow-s2s-starterkit-nodejs  warning:' + JSON.stringify(err, null, 4));
        });
        process.on('unhandledRejection', (err) => {
            that._logger.info('WARNING rainbow-s2s-starterkit-nodejs  unhandledRejection:' + JSON.stringify(err, null, 4));
        });
        try {
            let data = await that._sdkEngine.start().catch((ex) => {
                that._logger.error(that, "Sdk engine start has error :", ex);
            });
            if (data === false) {
                return false;
            }
            if (data && data.hasOwnProperty('botsjids')) {
                this._botsjid = data.botsjids;
            }
            that._logger.info("Sdk engine returns ", JSON.stringify(data, null, 4));
            return data;
        } catch (e) {
            that._logger.error('rainbow-s2s-starterkit-nodejs :' + JSON.stringify(e));
            throw e;
        }
    }

    async stop() {
        var that = this;
        try {
            let stopped = await this._sdkEngine.stop();
            that._logger.debug('Sdk stopped !');
            return stopped;
        } catch (e) {
            that._logger.error('rainbow-s2s-starterkit-nodejs :' + JSON.stringify(e));
            throw e;
        }
    }

    async restart() {
        var that = this;
        let stopped = await this.stop();
        if (stopped) {
            await that.start();
            return true;
        }
        return false;
    }

    get events() {
        return this._sdkEngine.eventsModule;
    }
    get state() {
        return this._stateManager.state;
    }

    get version() {
        return sdkInfo.version;
    }

    get connectedUser() {
        return this._sdkEngine.connectedUser;
    }

    get connectionInfo() {
        return this._sdkEngine.connectionInfo;
    }

    get logger() {
        return this._sdkEngine.loggerModule;
    }

    /**
     * Services Parts: a service provides an application functionality poosed to a module that brings an API function or data
     */
    get ImService() {
        return this._sdkEngine.ImService;
    }

    get PresenceService() {
        return this._sdkEngine.PresenceService;
    }

    get BubbleService() {
        return this._sdkEngine.BubbleService;
    }

    get Conversationservice() {
        return this._sdkEngine.Conversationservice;
    }
}
module.exports = S2sStarterkit;