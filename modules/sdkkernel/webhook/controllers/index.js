'use strict';

var ConnectionCtrl = require('../controllers/ConnectionCtrl');
var AllReceiptCtrl = require('../controllers/AllReceiptCtrl');
var ChatStateCtrl = require('../controllers/ChatStateCtrl');
var MessageCtrl = require('../controllers/MessageCtrl');
var PresenceCtrl = require('../controllers/PresenceCtrl');
var ReceiptCtrl = require('../controllers/ReceiptCtrl');
var RoomInviteCtrl = require('../controllers/RoomInviteCtrl');
var RoomMemberCtrl = require('../controllers/RoomMemberCtrl');
var RoomStateCtrl = require('../controllers/RoomStateCtrl');
module.exports = (eventManager, logger) => {
    return {
        connectionNotificationReceived: function(context, req, res) {
            try {
                ConnectionCtrl.handleConnectionCreateCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('ConnectionCtrl_connectionNotificationReceived', ex);
            }
        },
        presenceNotificationReceived: function(context, req, res) {
            try {
                PresenceCtrl.handlePresenceUpdateCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('PresenceCtrl_presenceNotificationReceived', ex);
            }
        },
        receiptNotificationReceived: function(context, req, res) {
            try {
                ReceiptCtrl.handleReceiptReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('ReceiptCtrl_receiptNotificationReceived', ex);
            }
        },
        chatStateNotificationReceived: function(context, req, res) {
            try {
                ChatStateCtrl.handleChatStateUpdateCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('ChatStateCtrl_chatStateNotificationReceived', ex);
            }
        },
        messageNotificationReceived: function(context, req, res) {
            try {
                MessageCtrl.handleMessageReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('MessageCtrl_messageNotificationReceived', ex);
            }
        },
        allReceiptNotificationReceived: function(context, req, res) {
            try {
                AllReceiptCtrl.handleAllReceiptReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('AllReceiptCtrl_allReceiptNotificationReceived', ex);
            }
        },
        roomInviteNotificationReceived: function(context, req, res) {
            try {
                RoomInviteCtrl.handleRoomInviteReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('RoomInviteCtrl_roomInviteNotificationReceived', ex);
            }
        },
        roomMemberNotificationReceived: function(context, req, res) {
            try {
                RoomMemberCtrl.handleRoomMemberReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('RoomMemberCtrl_roomMemberNotificationReceived', ex);
            }
        },
        roomStateNotificationReceived: function(context, req, res) {
            try {
                RoomStateCtrl.handleRoomStateReceivedCallback(eventManager, logger, req, res, null);
            } catch (ex) {
                logger.exitWithError('RoomStateCtrl_roomStateNotificationReceived', ex);
            }
        },
    }
};