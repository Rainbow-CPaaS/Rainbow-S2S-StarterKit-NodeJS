'use strict';

var utils = require('../../rest/server/utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.allReceiptNotificationReceived = function allReceiptNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.allReceiptNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.chatStateNotificationReceived = function chatStateNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.chatStateNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.connectionNotificationReceived = function connectionNotificationReceived(req, res, next) {
    console.log(JSON.stringify(req, null, 4));
    var body = req.swagger.params['body'].value;
    console.log(JSON.stringify(body, null, 4));
    Default.connectionNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.conversationNotificationReceived = function conversationNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.conversationNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.messageNotificationReceived = function messageNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.messageNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.presenceNotificationReceived = function presenceNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.presenceNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.receiptNotificationReceived = function receiptNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.receiptNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.roomInviteNotificationReceived = function roomInviteNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.roomInviteNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.roomMemberNotificationReceived = function roomMemberNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.roomMemberNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.roomStateNotificationReceived = function roomStateNotificationReceived(req, res, next) {
    var body = req.swagger.params['body'].value;
    Default.roomStateNotificationReceived(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
