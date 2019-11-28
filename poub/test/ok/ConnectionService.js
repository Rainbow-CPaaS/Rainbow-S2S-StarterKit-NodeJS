"use stricts";
const Utils = require('./../../common/utils');

/**
 * @class
 * @beta
 * @name ConnectionService
 * @description
 * This module is the basic module for handling connections in Rainbow.
 *
 * The main methods and events proposed in that service allow to:
 *   - Create or close a Rainbow connections,
 *   - Get all connections or get a connection by its Id
 *   - Retrieve all information linked to that connection,
 *
 **/
class ConnectionService {

    constructor(_logger,
        _eventEmitter,
        _accept,
        _s2sConnectionApi) {
        this._logger = _logger;
        this._eventEmitter = _eventEmitter;
        this._accept = _accept;
        this._s2sConnectionApi = _s2sConnectionApi;
        this.connections = [];
    }

    async start() {
        let that = this;
        that._logger.enter(this, "start");
        try {
            that.connections = await that.getAllConnections();
            that._logger.info(that, that.connections);
            return true;
        } catch (err) {
            that._logger.exitWithError(that, "start", err);
            throw err;
        }
    }

    async stop() {
        let that = this;
        that._logger.enter(this, "stop");
        try {
            var foundConnections = that.getAllConnections();
            for (aConnection in foundConnections) {
                await this.deleteConnection(aConnection.id);
            }
            return true;
        } catch (err) {
            that._logger.exitWithError(that, "stop", err);
            throw err;
        }
    }

    /**
     * Creates a connection givven a ressource name and a callback url
     * @param {String} ressource the connection ressource name
     * @param {String} callbackurl the webhoock callback url on whitch the events will be received
     */
    async createConnection(ressource, callbackurl) {
        let that = this;
        that._logger.enter(this, `createConnection(${ressource}, ${callbackurl})`);
        let connection = S2SApi.ConnectionCreateConnection.constructFromObject({ ressource: ressource, peecallbackurlr: callbackurl });
        var opts = {
            'connectionCreate': new S2SApi.ConnectionCreate() // ConnectionCreate | Connection creation data
        };
        opts.connectionCreate.connection = connection;
        await that._s2sConnectionApi.connectionCreate(opts).then(function(data) {
            that._logger.info(that, data);
            return data;
        }, (error) => {
            that._logger.exitWithError(that, "stop", error);
        }).catch((error) => {
            that._logger.exitWithError(that, 'createConnection :', error);
            throw error;
        });
    }

    /**
     * Delete a connection  givven its Id
     * @param {String} id 
     */
    async deleteConnection(id) {
        let that = this;
        that._logger.enter(this, `deleteConnection(${id})`);
        await that._s2sConnectionApi.connectionDelete(id).then(() => {
            that._logger.info(this, `deleteConnection(${id}) : connection deleted`);
            return true;
        }, (error) => {
            console.error(error);
        }).catch((error) => {
            that._logger.exitWithError(that, 'deleteConnection :', error);
            throw error;
        });
    }


    /**
     * Get all connection of the connected user
     * @returns a list of connections
     */
    async getAllConnections() {
        let that = this;
        that._logger.enter(this, 'getAllConnections');
        await that._s2sConnectionApi.connectionIndex().then((data) => {
            that._logger.info(this, "getAllConnections:cnxId", data);
            that.connections = data;
            return that.connections;
        }, (error) => {
            that._logger.exitWithError(that, 'getAllConnections :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'getAllConnections :', error);
            throw error;
        });
    }

    /**
     * Get a connection data givven its Id
     * @param {String} convId 
     */
    async getConnection(conId) {
        let that = this;
        that._logger.enter(this, `getConnection(${conId})`);
        if (that.connections.length > 0) {
            that.connections.map()
            var conv = that.connections.filter(conv, { 'id': conId });
            if (conv) {
                that._logger.info(this, "getConnection: connection found in cache", conv);
                return conv;
            }
        }
        await that._s2sConnectionApi.connectionShow(conId).then((data) => {
            that._logger.info(this, `getConnection(${conId})`, data);
            return data;
        }, (error) => {
            that._logger.exitWithError(that, 'getConnection :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'getConnection :', error);
            throw error;
        });
    }
}
module.exports = ConnectionService;