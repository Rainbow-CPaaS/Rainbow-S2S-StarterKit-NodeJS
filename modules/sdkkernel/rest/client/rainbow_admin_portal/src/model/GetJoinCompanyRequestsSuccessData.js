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
    define(['ApiClient', 'model/GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.GetJoinCompanyRequestsSuccessData = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin);
  }
}(this, function(ApiClient, GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin) {
  'use strict';



  /**
   * The GetJoinCompanyRequestsSuccessData model module.
   * @module model/GetJoinCompanyRequestsSuccessData
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetJoinCompanyRequestsSuccessData</code>.
   * @alias module:model/GetJoinCompanyRequestsSuccessData
   * @class
   * @param id {String} Join company request unique Id
   * @param requestingUserId {String} Requesting user unique Rainbow Id
   * @param requestingUserLoginEmail {String} Requesting user email
   * @param requestedCompanyId {String} Unique Id of the company the requesting user wants to join
   * @param requestedCompanyName {String} Name of the company the requesting user wants to join
   * @param status {String} Request status: one of `pending`, `accepted`, `declined`, `canceled`
   * @param requestingDate {Date} Date the request was created
   * @param requestedNotificationLanguage {String} Requested notification language to use if language of company admin is not defined (used to re-send email request in that language)
   * @param lastNotificationDate {Date} Date when the last email notification was sent
   * @param requestedCompanyInvitationId {String} If the request was sent using a JoinCompanyInvite id, this field is set with this Id
   */
  var exports = function(id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, requestedCompanyName, status, requestingDate, requestedNotificationLanguage, lastNotificationDate, requestedCompanyInvitationId) {
    var _this = this;

    _this['id'] = id;
    _this['requestingUserId'] = requestingUserId;
    _this['requestingUserLoginEmail'] = requestingUserLoginEmail;
    _this['requestedCompanyId'] = requestedCompanyId;
    _this['requestedCompanyName'] = requestedCompanyName;
    _this['status'] = status;
    _this['requestingDate'] = requestingDate;
    _this['requestedNotificationLanguage'] = requestedNotificationLanguage;
    _this['lastNotificationDate'] = lastNotificationDate;
    _this['requestedCompanyInvitationId'] = requestedCompanyInvitationId;
  };

  /**
   * Constructs a <code>GetJoinCompanyRequestsSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetJoinCompanyRequestsSuccessData} obj Optional instance to populate.
   * @return {module:model/GetJoinCompanyRequestsSuccessData} The populated <code>GetJoinCompanyRequestsSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('requestingUserId')) {
        obj['requestingUserId'] = ApiClient.convertToType(data['requestingUserId'], 'String');
      }
      if (data.hasOwnProperty('requestingUserLoginEmail')) {
        obj['requestingUserLoginEmail'] = ApiClient.convertToType(data['requestingUserLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('requestedCompanyId')) {
        obj['requestedCompanyId'] = ApiClient.convertToType(data['requestedCompanyId'], 'String');
      }
      if (data.hasOwnProperty('requestedCompanyName')) {
        obj['requestedCompanyName'] = ApiClient.convertToType(data['requestedCompanyName'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('requestingDate')) {
        obj['requestingDate'] = ApiClient.convertToType(data['requestingDate'], 'Date');
      }
      if (data.hasOwnProperty('requestedNotificationLanguage')) {
        obj['requestedNotificationLanguage'] = ApiClient.convertToType(data['requestedNotificationLanguage'], 'String');
      }
      if (data.hasOwnProperty('lastNotificationDate')) {
        obj['lastNotificationDate'] = ApiClient.convertToType(data['lastNotificationDate'], 'Date');
      }
      if (data.hasOwnProperty('requestedToCompanyAdmin')) {
        obj['requestedToCompanyAdmin'] = GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin.constructFromObject(data['requestedToCompanyAdmin']);
      }
      if (data.hasOwnProperty('requestedCompanyInvitationId')) {
        obj['requestedCompanyInvitationId'] = ApiClient.convertToType(data['requestedCompanyInvitationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Join company request unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Requesting user unique Rainbow Id
   * @member {String} requestingUserId
   */
  exports.prototype['requestingUserId'] = undefined;
  /**
   * Requesting user email
   * @member {String} requestingUserLoginEmail
   */
  exports.prototype['requestingUserLoginEmail'] = undefined;
  /**
   * Unique Id of the company the requesting user wants to join
   * @member {String} requestedCompanyId
   */
  exports.prototype['requestedCompanyId'] = undefined;
  /**
   * Name of the company the requesting user wants to join
   * @member {String} requestedCompanyName
   */
  exports.prototype['requestedCompanyName'] = undefined;
  /**
   * Request status: one of `pending`, `accepted`, `declined`, `canceled`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date the request was created
   * @member {Date} requestingDate
   */
  exports.prototype['requestingDate'] = undefined;
  /**
   * Requested notification language to use if language of company admin is not defined (used to re-send email request in that language)
   * @member {String} requestedNotificationLanguage
   */
  exports.prototype['requestedNotificationLanguage'] = undefined;
  /**
   * Date when the last email notification was sent
   * @member {Date} lastNotificationDate
   */
  exports.prototype['lastNotificationDate'] = undefined;
  /**
   * @member {module:model/GetJoinCompanyRequestByIdSuccessRequestedToCompanyAdmin} requestedToCompanyAdmin
   */
  exports.prototype['requestedToCompanyAdmin'] = undefined;
  /**
   * If the request was sent using a JoinCompanyInvite id, this field is set with this Id
   * @member {String} requestedCompanyInvitationId
   */
  exports.prototype['requestedCompanyInvitationId'] = undefined;



  return exports;
}));


