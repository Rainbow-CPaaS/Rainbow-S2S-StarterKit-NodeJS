"use strict";

const moment = require("moment");
const Utils = require('./../../common/utils');

/**
 * @class
 * @beta
 * @name Conversations
 * @description
 * This module is the basic module for handling conversations in Rainbow. In Rainbow, conversations are the way to get in touch with someone or something (i.e. a Rainbow contact, a external phone number, a connected thing, ...) so a conversation is the "long tail" of communication between you and someone or something else like a bubble.
 * A Rainbow conversation by default supports sending and receiving Instant Messages with a single recipient (one-to-one conversation) or with several persons (bubble). Using the FileStorage service, you can share files in conversations.
 *
 * The main methods and events proposed in that service allow to:
 *   - Create or close a Rainbow conversation (one-to-one of bubble),
 *   - Get all conversations or get a conversation by Id, bubbleID
 *   - Retrieve all information linked to that conversation,
 *
 **/
class ConversationService {

    constructor(_logger,
        _connectedUserInfo,
        _connectionInfo,
        _eventEmitter,
        _accept,
        _endUserConversationApi,
        _s2sConversationApi) {
        this._logger = _logger;
        this._connectedUserInfo = _connectedUserInfo;
        this._connectionInfo = _connectionInfo;
        this._eventEmitter = _eventEmitter;
        this._accept = _accept;
        this._endUserConversationApi = _endUserConversationApi;
        this._s2sConversationApi = _s2sConversationApi;
        //this._eventEmitter.on("rainbow_onreceipt", this._onReceipt.bind(this));
        this.conversations = [];
    }

    async start() {
        let that = this;
        that._logger.enter(this, "start");
        try {
            //this._eventEmitter.on("rainbow_onreceipt", this._onReceipt.bind(this));
            that.conversations = [];
            return true;
            resolve();
        } catch (err) {
            that._logger.exitWithError(that, "start", err);
            throw err;
        }
    }

    async stop() {
        let that = this;
        that._logger.enter(this, "stop");
        try {
            //that._eventEmitter.removeListener("rainbow_onreceipt", that._onReceipt.bind(this));
            return true;
        } catch (err) {
            that._logger.log("debug", LOG_ID + "(stop) _exiting_");
            throw err;
        }
    }

    /**
     * set a conversation chat state
     * @param {*} cvId 
     * @param {*} state 
     */
    async setConversationChatState(cvId, state) {
            let that = this;
            that.logger.enter(this, `setConversationChatState(${cvId},${state})`);
            var cnxId = this._connectionInfo.id;
            that.logger.info(this, "setConversationChatState:cnxId", cnxId);
            this._s2sConversationApi.conversationChatstate(cnxId, cvId, state).then(function() {
                that.logger.exit(that, 'setConversationChatState : chate state sent');
                return true;
            }, function(error) {
                throw error;
            });
        }
        /*Not implemented : need End User API ( not used in basic step)
            async getConnectedUserConversations() {
                let that = this;
                that.logger.enter(this, "getAllConversations");
                var cnxId = this._connectionInfo.id;
                that.logger.exit(that, 'getAllConversations : chate state sent');
            }
        */
}

module.exports = ConversationService;