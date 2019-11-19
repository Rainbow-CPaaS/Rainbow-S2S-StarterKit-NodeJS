'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.allReceiptNotificationReceived = function allReceiptNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.allReceiptNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatStateNotificationReceived = function chatStateNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.chatStateNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.connectionNotificationReceived = function connectionNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.connectionNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messageNotificationReceived = function messageNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.messageNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.presenceNotificationReceived = function presenceNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.presenceNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiptNotificationReceived = function receiptNotificationReceived (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.receiptNotificationReceived(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
