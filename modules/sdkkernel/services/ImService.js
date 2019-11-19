"use strict";
const Utils = require('./../../common/utils');
var S2SApi = require('./../rest/client/s2s/src');
const LOG_ID = "IM - ";

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

    constructor(_eventEmitter,
        _logger,
        _s2sMessageApi,
        _connectedUserInfo,
        _connectionInfo,
    ) {
        this.eventEmitter = _eventEmitter;
        this.logger = _logger;
        this._s2sMessageApi = _s2sMessageApi;
        this._connectedUserInfo = _connectedUserInfo;
        this._connectionInfo = _connectionInfo;
    }

    start() {
        var that = this;
        this.logger.log("debug", LOG_ID + "(start) _entering_");
        return new Promise(function(resolve, reject) {
            try {
                that.logger.log("debug", LOG_ID + "(start) _exiting_");
                resolve();
            } catch (err) {
                that.logger.log("debug", LOG_ID + "(start) _exiting_");
                reject();
            }
        });
    }

    stop() {
        var that = this;
        this.logger.log("debug", LOG_ID + "(stop) _entering_");
        return new Promise(function(resolve, reject) {
            try {
                that.logger.log("debug", LOG_ID + "(stop) _exiting_");
                resolve();
            } catch (err) {
                that.logger.log("debug", LOG_ID + "(stop) _exiting_");
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
            that.logger.enter(this, "sendMessage");
            that.logger.info(this, "sendMessage:cvId", cvId);
            that.logger.info(this, "sendMessage:content", content);
            that.logger.info(this, "sendMessage:lang", lang);
            that.logger.info(this, "sendMessage:lang", title);
            var cnxId = this._connectionInfo.id;
            that.logger.debug(this, "sendMessage:cnxId", cnxId);
            var opts = {
                'messageCreate': new S2SApi.MessageCreate() // MessageCreate | Message data
            };
            let msg = new S2SApi.MessageCreateMessage();
            msg.body = messageToBeSent;
            msg.subject = (title ? title : '');
            msg.markdown = (content ? content : '');
            msg.lang = (lang ? lang : '');
            opts.messageCreate.message = msg;
            that.logger.debug(this, "sendMessage:sending message with opts :", opts);
            await this._s2sMessageApi.messageCreate(cnxId, cvId, opts).then(function(data) {
                that.logger.debug(that, '_s2sMessageApi.messageCreate called successfully. Returned data: ', data);
                return true;
            }, function(error) {
                that.logger.exitWithError(that, "sendMessage", JSON.stringify(error, null, 4));
                return false;
            });
            that.logger.exit(this, "sendMessage");
        } catch (err) {
            that.logger.exitWithError(this, "sendMessage", err);
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
        that.logger.enter(this, "aknowledgeMessageAsRead");
        var cnxId = this._connectionInfo.id;
        this._s2sMessageApi.messageReadReceipt(cnxId, cvId, messageId).then(function() {
            that.logger.exit(that, `aknowledgeMessageAsRead : message ${messageId} marked as read`);
            return true;
        }, function(error) {
            that.logger.exitWithError(that, "aknowledgeMessageAsRead", JSON.stringify(error, null, 4));
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
        that.logger.enter(this, "acknowledgeMessageReception");
        var cnxId = this._connectionInfo.id;
        this._s2sMessageApi.messageReceivedReceipt(cnxId, cvId, messageId).then(function() {
            that.logger.exit(that, `acknowledgeMessageReception : message ${messageId} marked as read`);
            return true;
        }, function(error) {
            that.logger.exitWithError(that, "acknowledgeMessageReception", JSON.stringify(error, null, 4));
            return false;
        });
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
                that.logger.exit(that, 'getAllMessagesFromAConversation', messages);
                return messages;
            }, function(error) {
                that.logger.exitWithError(that, "getAllMessagesFromAConversation", JSON.stringify(error, null, 4));
                throw error;
            });
        } catch (err) {
            that.logger.exitWithError(this, "getAllMessagesFromAConversation", err);
            throw err;
        }
    }
}

module.exports = ImService