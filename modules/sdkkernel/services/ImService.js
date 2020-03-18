"use strict";
const Utils = require('./../../common/utils');
var S2SApi = require('./../rest/client/s2s/src');
const LOG_ID = "IM - ";
const _autoAcknowldgeMessage = Symbol('autoAcknowldgeMessage');
const _onMessageReceived = Symbol('onMessageReceived');
const _unbscribeFromEvents = Symbol('unbscribeFromEvents');
const _subscribeToEvents = Symbol('subscribeToEvents');
/**
 * @class
 * @name ImService
 * @description
 *      This module manages Instant Messages. It allows to send messages to a user or a bubble.
 *      <br><br>
 *      The main methods proposed in that module allow to: <br>
 *      - Send a message to a conversation ( user or room) <br>
 *      - Mark a message as read <br>
 */
class ImService {

    /**
     * constructor
     * @param {*} _eventModule the event manager module
     * @param {*} _logger the logger module
     * @param {*} _s2sMessageApi S2S messaging API
     * @param {*} _connectedUserInfo connected user info
     * @param {*} _connectionInfo connection info
     * @param {*} _options s2s options (global parameters defined in configuration file)
     */
    constructor(_eventModule,
        _logger,
        _s2sMessageApi,
        _connectedUserInfo,
        _connectionInfo,
        _options,
    ) {
        this._eventModule = _eventModule;
        this._logger = _logger;
        this._s2sMessageApi = _s2sMessageApi;
        this._connectedUserInfo = _connectedUserInfo;
        this._connectionInfo = _connectionInfo;
        this._options = _options;
    }

    [_subscribeToEvents]() {
            let that = this;
            this._logger.enter(that, '_subscribeToEvents');
            this._eventModule.on("rainbow_onmessagereceived",this[_onMessageReceived].bind(this));
            this._logger.exit(that, '_subscribeToEvents');
    }
	
    [_unbscribeFromEvents]() {
        var that = this;
        this._logger.enter(this, '_unbscribeFromEvents');
        try {
            this._eventModule.removeListener("rainbow_onmessagereceived", this[_onMessageReceived]);
        } catch (ex) {
            this._logger.exitWithError(this, '_unbscribeFromRainbowEvents', ex);
        }
    }
	
    start() {
        var that = this;
        this._logger.enter(this,'starting ImService ...');
        return new Promise(function(resolve, reject) {
            try {
                that._logger.log("debug", LOG_ID + "(start) _exiting_");
    		that[_subscribeToEvents]();
                resolve();
        	that._logger.exit(this,'ImService started !');
            } catch (err) {
                that._logger.exitWithError(this,'ImService start',err);
                reject();
            }
        });
    }

    /**
     * Stop ImService
     */
    stop() {
        var that = this;
        this._logger.log("debug", LOG_ID + "(stop) _entering_");
        return new Promise(function(resolve, reject) {
            try {
                that._logger.log("debug", LOG_ID + "(stop) _exiting_");
		that[_unbscribeFromEvents]();
                resolve();
            } catch (err) {
                that._logger.log("debug", LOG_ID + "(stop) _exiting_");
                reject();
            }
        });
    }

    /**
     * send a messaeg to peers in a conversation
     * @param {*} cvId the conversation id to send message to
     * @param {*} messageToBeSent the message to send
     * @param {*} lang the language used
     * @param {*} content 
     * @param {*} title the message subject
     */
    async sendMessage(cvId, messageToBeSent, lang, content, title) {
        var that = this;
        try {
            that._logger.enter(this, "sendMessage");
            that._logger.info(this, "sendMessage:cvId", cvId);
            that._logger.info(this, "sendMessage:content", content);
            that._logger.info(this, "sendMessage:lang", lang);
            that._logger.info(this, "sendMessage:lang", title);
            var cnxId = this._connectionInfo.id;
            that._logger.debug(this, "sendMessage:cnxId", cnxId);
            var opts = {
                'messageCreate': new S2SApi.MessageCreate() // MessageCreate | Message data
            };
            let msg = new S2SApi.MessageCreateMessage();
            msg.body = messageToBeSent;
            msg.subject = (title ? title : '');
            msg.markdown = (content ? content : '');
            msg.lang = (lang ? lang : '');
            opts.messageCreate.message = msg;
            that._logger.debug(this, "sendMessage:sending message with opts :", opts);
            await this._s2sMessageApi.messageCreate(cnxId, cvId, opts).then(function(data) {
                that._logger.debug(that, '_s2sMessageApi.messageCreate called successfully. Returned data: ', data);
                return true;
            }, function(error) {
                that._logger.exitWithError(that, "sendMessage", JSON.stringify(error, null, 4));
                return false;
            });
            that._logger.exit(this, "sendMessage");
        } catch (err) {
            that._logger.exitWithError(this, "sendMessage", err);
            throw err;
        }
    }

    /**
     * @description
     * acknowledge a message as read using its message id
     * @param {*} cvId 
     * @param {*} messageId 
     */
    acknowledgeMessageAsRead(cvId, messageId) {
        let that = this;
        that._logger.enter(this, "aknowledgeMessageAsRead");
        var cnxId = this._connectionInfo.id;
        this._s2sMessageApi.messageReadReceipt(cnxId, cvId, messageId).then(function() {
            that._logger.exit(that, `aknowledgeMessageAsRead : message ${messageId} marked as read`);
            return true;
        }, function(error) {
            that._logger.exitWithError(that, "aknowledgeMessageAsRead", JSON.stringify(error, null, 4));
            return false;
        });
    }

    /**
     * @description
     * acknowledge a message reception
     * @param {*} cvId the conversation in witch the message is exchnaged
     * @param {*} messageId the message id
     */
    acknowledgeMessageReception(cvId, messageId) {
        let that = this;
        that._logger.enter(this, "acknowledgeMessageReception");
        var cnxId = this._connectionInfo.id;
        this._s2sMessageApi.messageReceivedReceipt(cnxId, cvId, messageId).then(function() {
            that._logger.exit(that, `acknowledgeMessageReception : message ${messageId} marked as read`);
            return true;
        }, function(error) {
            that._logger.exitWithError(that, "acknowledgeMessageReception", JSON.stringify(error, null, 4));
            return false;
        });
    }

    [_autoAcknowldgeMessage](cvId, messageId){
    	if(this._options.im.sendReadReceipt==true){
		this.acknowledgeMessageReception(cvId, messageId);
	}
    }

    [_onMessageReceived](data){
	    let that = this;
            var msgEvent = Utils.getJsonData(data);
	    that._logger.enter(this,'[_onMessageReceived] :'+JSON.stringify(msgEvent,null,4));
	    that[_autoAcknowldgeMessage](msgEvent.message.conversation_id,msgEvent.message.id);
    }

    /**
     * @description
     * retreive all message from a conversation
     * @param  cvId the conversation id
     */
    async getAllMessagesFromAConversation(cvId) {
        let that = this;
        var cnxId = this._connectionInfo.id;
        try {
            await this._s2sMessageApi.messageIndex(cnxId, cvId).then(function(data) {
                var messages = Utils.getJsonData(data);
                that._logger.exit(that, 'getAllMessagesFromAConversation', messages);
                return messages;
            }, function(error) {
                that._logger.exitWithError(that, "getAllMessagesFromAConversation", JSON.stringify(error, null, 4));
                throw error;
            });
        } catch (err) {
            that._logger.exitWithError(this, "getAllMessagesFromAConversation", err);
            throw err;
        }
    }
}

module.exports = ImService
