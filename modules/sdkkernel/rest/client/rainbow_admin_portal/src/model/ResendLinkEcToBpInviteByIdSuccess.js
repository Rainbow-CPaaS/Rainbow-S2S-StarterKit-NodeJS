/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.82.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.ResendLinkEcToBpInviteByIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ResendLinkEcToBpInviteByIdSuccess model module.
   * @module model/ResendLinkEcToBpInviteByIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>ResendLinkEcToBpInviteByIdSuccess</code>.
   * @alias module:model/ResendLinkEcToBpInviteByIdSuccess
   * @class
   * @param id {String} Link End customer to BP invitation unique Id
   * @param invitingCompanyId {String} Id of the BP company for which the link invitation is sent
   * @param invitingCompanyName {String} Name of the BP company for which the invitation is sent (not updated if company name change after invitation creation)
   * @param invitedCompanyId {String} Unique Id of the End customer company invited to be linked to BP company
   * @param invitedCompanyName {String} Name of the End customer company invited to be linked to BP company
   * @param invitedToBeBpIr {Boolean} Boolean indicating if invitation was sent to invite EC company to become BP IR company
   * @param invitingAdminId {String} Inviting company admin unique Rainbow Id
   * @param invitingAdminLoginEmail {String} Inviting company admin loginEmail
   * @param invitationDate {Date} Date the invitation was created
   * @param lastNotificationDate {Date} Date when the last email notification was sent
   * @param requestedNotificationLanguage {String} Requested notification language (used to re-send email request in that language)
   * @param status {String} Invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @param acceptationDate {Date} Date when the invitation has been accepted by the end customer company_admin
   * @param declinationDate {Date} Date when the invitation has been declined by the end customer company_admin
   */
  var exports = function(id, invitingCompanyId, invitingCompanyName, invitedCompanyId, invitedCompanyName, invitedToBeBpIr, invitingAdminId, invitingAdminLoginEmail, invitationDate, lastNotificationDate, requestedNotificationLanguage, status, acceptationDate, declinationDate) {
    var _this = this;

    _this['id'] = id;
    _this['invitingCompanyId'] = invitingCompanyId;
    _this['invitingCompanyName'] = invitingCompanyName;
    _this['invitedCompanyId'] = invitedCompanyId;
    _this['invitedCompanyName'] = invitedCompanyName;
    _this['invitedToBeBpIr'] = invitedToBeBpIr;
    _this['invitingAdminId'] = invitingAdminId;
    _this['invitingAdminLoginEmail'] = invitingAdminLoginEmail;
    _this['invitationDate'] = invitationDate;
    _this['lastNotificationDate'] = lastNotificationDate;
    _this['requestedNotificationLanguage'] = requestedNotificationLanguage;
    _this['status'] = status;
    _this['acceptationDate'] = acceptationDate;
    _this['declinationDate'] = declinationDate;
  };

  /**
   * Constructs a <code>ResendLinkEcToBpInviteByIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResendLinkEcToBpInviteByIdSuccess} obj Optional instance to populate.
   * @return {module:model/ResendLinkEcToBpInviteByIdSuccess} The populated <code>ResendLinkEcToBpInviteByIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('invitingCompanyId')) {
        obj['invitingCompanyId'] = ApiClient.convertToType(data['invitingCompanyId'], 'String');
      }
      if (data.hasOwnProperty('invitingCompanyName')) {
        obj['invitingCompanyName'] = ApiClient.convertToType(data['invitingCompanyName'], 'String');
      }
      if (data.hasOwnProperty('invitedCompanyId')) {
        obj['invitedCompanyId'] = ApiClient.convertToType(data['invitedCompanyId'], 'String');
      }
      if (data.hasOwnProperty('invitedCompanyName')) {
        obj['invitedCompanyName'] = ApiClient.convertToType(data['invitedCompanyName'], 'String');
      }
      if (data.hasOwnProperty('invitedToBeBpIr')) {
        obj['invitedToBeBpIr'] = ApiClient.convertToType(data['invitedToBeBpIr'], 'Boolean');
      }
      if (data.hasOwnProperty('invitingAdminId')) {
        obj['invitingAdminId'] = ApiClient.convertToType(data['invitingAdminId'], 'String');
      }
      if (data.hasOwnProperty('invitingAdminLoginEmail')) {
        obj['invitingAdminLoginEmail'] = ApiClient.convertToType(data['invitingAdminLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('invitationDate')) {
        obj['invitationDate'] = ApiClient.convertToType(data['invitationDate'], 'Date');
      }
      if (data.hasOwnProperty('lastNotificationDate')) {
        obj['lastNotificationDate'] = ApiClient.convertToType(data['lastNotificationDate'], 'Date');
      }
      if (data.hasOwnProperty('requestedNotificationLanguage')) {
        obj['requestedNotificationLanguage'] = ApiClient.convertToType(data['requestedNotificationLanguage'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('acceptationDate')) {
        obj['acceptationDate'] = ApiClient.convertToType(data['acceptationDate'], 'Date');
      }
      if (data.hasOwnProperty('declinationDate')) {
        obj['declinationDate'] = ApiClient.convertToType(data['declinationDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Link End customer to BP invitation unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of the BP company for which the link invitation is sent
   * @member {String} invitingCompanyId
   */
  exports.prototype['invitingCompanyId'] = undefined;
  /**
   * Name of the BP company for which the invitation is sent (not updated if company name change after invitation creation)
   * @member {String} invitingCompanyName
   */
  exports.prototype['invitingCompanyName'] = undefined;
  /**
   * Unique Id of the End customer company invited to be linked to BP company
   * @member {String} invitedCompanyId
   */
  exports.prototype['invitedCompanyId'] = undefined;
  /**
   * Name of the End customer company invited to be linked to BP company
   * @member {String} invitedCompanyName
   */
  exports.prototype['invitedCompanyName'] = undefined;
  /**
   * Boolean indicating if invitation was sent to invite EC company to become BP IR company
   * @member {Boolean} invitedToBeBpIr
   */
  exports.prototype['invitedToBeBpIr'] = undefined;
  /**
   * Inviting company admin unique Rainbow Id
   * @member {String} invitingAdminId
   */
  exports.prototype['invitingAdminId'] = undefined;
  /**
   * Inviting company admin loginEmail
   * @member {String} invitingAdminLoginEmail
   */
  exports.prototype['invitingAdminLoginEmail'] = undefined;
  /**
   * Date the invitation was created
   * @member {Date} invitationDate
   */
  exports.prototype['invitationDate'] = undefined;
  /**
   * Date when the last email notification was sent
   * @member {Date} lastNotificationDate
   */
  exports.prototype['lastNotificationDate'] = undefined;
  /**
   * Requested notification language (used to re-send email request in that language)
   * @member {String} requestedNotificationLanguage
   */
  exports.prototype['requestedNotificationLanguage'] = undefined;
  /**
   * Invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date when the invitation has been accepted by the end customer company_admin
   * @member {Date} acceptationDate
   */
  exports.prototype['acceptationDate'] = undefined;
  /**
   * Date when the invitation has been declined by the end customer company_admin
   * @member {Date} declinationDate
   */
  exports.prototype['declinationDate'] = undefined;



  return exports;
}));


