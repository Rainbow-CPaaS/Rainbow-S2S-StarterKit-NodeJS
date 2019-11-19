"use strict";

const Utils = require('./../../common/utils');
const LOG_ID = "BOTS - ";

/**
 * @class
 * @name Bot
 * @description
 * This service is used to get all available bots information.
 */
class BotService {

    constructor(_connectionInfo,
        _connectecUserInfo,
        _eventEmitter,
        _logger,
        _accept,
        _botsApi) {
        this._connectecUserInfo = _connectecUserInfo;
        this._connectionInfo = _connectionInfo;
        this._eventEmitter = _eventEmitter;
        this._logger = _logger;
        this._accept = _accept;
        this._botsApi = _botsApi;
        this.bots = [];
    }

    async start() {
        let that = this;
        try {
            that._logger.enter(this, 'Bots start');
            var opts = { 'format': "small" };
            await this._botsApi.getBots(this._accept, opts).then(function(responseData) {
                that.bots = Utils.getJsonData(responseData)
                that._logger.enter(that, 'API called successfully. Returned data: ' + JSON.stringify(responseData, null, 4));
            }, function(error) {
                that._logger.exit(this, "Bots start", error);
            });
        } catch (ex) {
            that._logger.exitWithError(this, "Bots start", ex);
        }
        return true;
    }

    async stop() {
        return true;
    }

    /**
     * @public
     * @method getAll
     * @instance
     * @return {bot[]} the list available bots
     * @memberof Bot
     * @description
     *  Return the list of bots
     */
    getAll() {
        return this.bots;
    }
}

module.exports = BotService;