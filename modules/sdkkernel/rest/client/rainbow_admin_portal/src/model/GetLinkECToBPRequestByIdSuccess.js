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
    root.RainbowAdminPortal.GetLinkECToBPRequestByIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetLinkECToBPRequestByIdSuccess model module.
   * @module model/GetLinkECToBPRequestByIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetLinkECToBPRequestByIdSuccess</code>.
   * @alias module:model/GetLinkECToBPRequestByIdSuccess
   * @class
   * @param id {String} Link End customer to BP request unique Id
   * @param requestingCompanyId {String} Id of the EC company for which the link request is sent
   * @param requestingCompanyName {String} Name of the EC company for which the request is sent (not updated if company name change after request creation)
   * @param requestedCompanyId {String} Unique Id of the BP company requested to be linked to EC company
   * @param requestedCompanyName {String} Name of the BP company requested to be linked to EC company
   * @param requestedToBeBpIr {Boolean} Boolean indicating if request was sent to become BP IR company
   * @param requestingAdminId {String} Requesting company admin unique Rainbow Id
   * @param requestingAdminLoginEmail {String} Requesting company admin loginEmail
   * @param requestDate {Date} Date the request was created
   * @param lastNotificationDate {Date} Date when the last email notification was sent
   * @param requestedNotificationLanguage {String} Requested notification language (used to re-send email request in that language)
   * @param status {String} Request status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @param acceptationDate {Date} Date when the request has been accepted by the bp_admin
   * @param declinationDate {Date} Date when the request has been declined by the bp_admin
   */
  var exports = function(id, requestingCompanyId, requestingCompanyName, requestedCompanyId, requestedCompanyName, requestedToBeBpIr, requestingAdminId, requestingAdminLoginEmail, requestDate, lastNotificationDate, requestedNotificationLanguage, status, acceptationDate, declinationDate) {
    var _this = this;

    _this['id'] = id;
    _this['requestingCompanyId'] = requestingCompanyId;
    _this['requestingCompanyName'] = requestingCompanyName;
    _this['requestedCompanyId'] = requestedCompanyId;
    _this['requestedCompanyName'] = requestedCompanyName;
    _this['requestedToBeBpIr'] = requestedToBeBpIr;
    _this['requestingAdminId'] = requestingAdminId;
    _this['requestingAdminLoginEmail'] = requestingAdminLoginEmail;
    _this['requestDate'] = requestDate;
    _this['lastNotificationDate'] = lastNotificationDate;
    _this['requestedNotificationLanguage'] = requestedNotificationLanguage;
    _this['status'] = status;
    _this['acceptationDate'] = acceptationDate;
    _this['declinationDate'] = declinationDate;
  };

  /**
   * Constructs a <code>GetLinkECToBPRequestByIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLinkECToBPRequestByIdSuccess} obj Optional instance to populate.
   * @return {module:model/GetLinkECToBPRequestByIdSuccess} The populated <code>GetLinkECToBPRequestByIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('requestingCompanyId')) {
        obj['requestingCompanyId'] = ApiClient.convertToType(data['requestingCompanyId'], 'String');
      }
      if (data.hasOwnProperty('requestingCompanyName')) {
        obj['requestingCompanyName'] = ApiClient.convertToType(data['requestingCompanyName'], 'String');
      }
      if (data.hasOwnProperty('requestedCompanyId')) {
        obj['requestedCompanyId'] = ApiClient.convertToType(data['requestedCompanyId'], 'String');
      }
      if (data.hasOwnProperty('requestedCompanyName')) {
        obj['requestedCompanyName'] = ApiClient.convertToType(data['requestedCompanyName'], 'String');
      }
      if (data.hasOwnProperty('requestedToBeBpIr')) {
        obj['requestedToBeBpIr'] = ApiClient.convertToType(data['requestedToBeBpIr'], 'Boolean');
      }
      if (data.hasOwnProperty('requestingAdminId')) {
        obj['requestingAdminId'] = ApiClient.convertToType(data['requestingAdminId'], 'String');
      }
      if (data.hasOwnProperty('requestingAdminLoginEmail')) {
        obj['requestingAdminLoginEmail'] = ApiClient.convertToType(data['requestingAdminLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('requestDate')) {
        obj['requestDate'] = ApiClient.convertToType(data['requestDate'], 'Date');
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
   * Link End customer to BP request unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of the EC company for which the link request is sent
   * @member {String} requestingCompanyId
   */
  exports.prototype['requestingCompanyId'] = undefined;
  /**
   * Name of the EC company for which the request is sent (not updated if company name change after request creation)
   * @member {String} requestingCompanyName
   */
  exports.prototype['requestingCompanyName'] = undefined;
  /**
   * Unique Id of the BP company requested to be linked to EC company
   * @member {String} requestedCompanyId
   */
  exports.prototype['requestedCompanyId'] = undefined;
  /**
   * Name of the BP company requested to be linked to EC company
   * @member {String} requestedCompanyName
   */
  exports.prototype['requestedCompanyName'] = undefined;
  /**
   * Boolean indicating if request was sent to become BP IR company
   * @member {Boolean} requestedToBeBpIr
   */
  exports.prototype['requestedToBeBpIr'] = undefined;
  /**
   * Requesting company admin unique Rainbow Id
   * @member {String} requestingAdminId
   */
  exports.prototype['requestingAdminId'] = undefined;
  /**
   * Requesting company admin loginEmail
   * @member {String} requestingAdminLoginEmail
   */
  exports.prototype['requestingAdminLoginEmail'] = undefined;
  /**
   * Date the request was created
   * @member {Date} requestDate
   */
  exports.prototype['requestDate'] = undefined;
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
   * Request status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date when the request has been accepted by the bp_admin
   * @member {Date} acceptationDate
   */
  exports.prototype['acceptationDate'] = undefined;
  /**
   * Date when the request has been declined by the bp_admin
   * @member {Date} declinationDate
   */
  exports.prototype['declinationDate'] = undefined;



  return exports;
}));


