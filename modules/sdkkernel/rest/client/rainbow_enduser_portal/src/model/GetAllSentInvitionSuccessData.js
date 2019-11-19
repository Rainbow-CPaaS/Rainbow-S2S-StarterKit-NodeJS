/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.84.0
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
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.GetAllSentInvitionSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetAllSentInvitionSuccessData model module.
   * @module model/GetAllSentInvitionSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetAllSentInvitionSuccessData</code>.
   * @alias module:model/GetAllSentInvitionSuccessData
   * @class
   * @param id {String} Invitation unique Id
   * @param invitingUserId {String} Inviting user unique Rainbow Id
   * @param invitingUserEmail {String} Inviting user loginEmail
   * @param requestedNotificationLanguage {String} Requested notification language (used to re-send email request in that language)
   * @param invitingDate {Date} Date the invitation was created
   * @param lastNotificationDate {Date} Date when the last email notification was sent
   * @param status {String} Invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`* `pending`: invitation has been sent by inviting user and not yet accepted by invited user * `accepted`: invitation has been accepted by invited user * `auto-accepted`: invitation has been auto-accepted (case of users in same company) * `declined`: invitation has been declined by invited user. Only invited user can see that he has declined an invitation. Inviting user still see the invitation as `pending` * `canceled`: invitation has been canceled by inviting user. If invited user does not have an account in Rainbow, he can still use this invitationId received by email to create his Rainbow account, but he will not be added to inviting user roster. * `failed`: invitation email failed to be sent to invited user (determined by parsing SMTP server logs). It can be the case if the provided invited email address does not exists.  
   * @param type {String} Invitation type:   * `visibility` (invited user exists in Rainbow), * `registration` (invited user did not exist in Rainbow when invitation was sent)  
   */
  var exports = function(id, invitingUserId, invitingUserEmail, requestedNotificationLanguage, invitingDate, lastNotificationDate, status, type) {
    var _this = this;

    _this['id'] = id;
    _this['invitingUserId'] = invitingUserId;
    _this['invitingUserEmail'] = invitingUserEmail;
    _this['requestedNotificationLanguage'] = requestedNotificationLanguage;
    _this['invitingDate'] = invitingDate;
    _this['lastNotificationDate'] = lastNotificationDate;
    _this['status'] = status;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>GetAllSentInvitionSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllSentInvitionSuccessData} obj Optional instance to populate.
   * @return {module:model/GetAllSentInvitionSuccessData} The populated <code>GetAllSentInvitionSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authorizedReSendInvitationDate')) {
        obj['authorizedReSendInvitationDate'] = ApiClient.convertToType(data['authorizedReSendInvitationDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('invitedUserId')) {
        obj['invitedUserId'] = ApiClient.convertToType(data['invitedUserId'], 'String');
      }
      if (data.hasOwnProperty('invitedPhoneNumber')) {
        obj['invitedPhoneNumber'] = ApiClient.convertToType(data['invitedPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('invitedUserEmail')) {
        obj['invitedUserEmail'] = ApiClient.convertToType(data['invitedUserEmail'], 'String');
      }
      if (data.hasOwnProperty('invitingUserId')) {
        obj['invitingUserId'] = ApiClient.convertToType(data['invitingUserId'], 'String');
      }
      if (data.hasOwnProperty('invitingUserEmail')) {
        obj['invitingUserEmail'] = ApiClient.convertToType(data['invitingUserEmail'], 'String');
      }
      if (data.hasOwnProperty('requestedNotificationLanguage')) {
        obj['requestedNotificationLanguage'] = ApiClient.convertToType(data['requestedNotificationLanguage'], 'String');
      }
      if (data.hasOwnProperty('invitingDate')) {
        obj['invitingDate'] = ApiClient.convertToType(data['invitingDate'], 'Date');
      }
      if (data.hasOwnProperty('lastNotificationDate')) {
        obj['lastNotificationDate'] = ApiClient.convertToType(data['lastNotificationDate'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date when the inviting user will be allowed to resend again the invitation to the invited user.    authorizedReSendInvitationDate is only set if invitation still have the status pending.
   * @member {Date} authorizedReSendInvitationDate
   */
  exports.prototype['authorizedReSendInvitationDate'] = undefined;
  /**
   * Invitation unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Invited user unique Rainbow Id.    Only available for the inviting user if the invited user has been invited from his userId (parameter invitedUserId in API POST /api/rainbow/enduser/v1.0/users/:userId/invitations) or if the invitation has been accepted.
   * @member {String} invitedUserId
   */
  exports.prototype['invitedUserId'] = undefined;
  /**
   * Invited user phoneNumber
   * @member {String} invitedPhoneNumber
   */
  exports.prototype['invitedPhoneNumber'] = undefined;
  /**
   * Invited user email
   * @member {String} invitedUserEmail
   */
  exports.prototype['invitedUserEmail'] = undefined;
  /**
   * Inviting user unique Rainbow Id
   * @member {String} invitingUserId
   */
  exports.prototype['invitingUserId'] = undefined;
  /**
   * Inviting user loginEmail
   * @member {String} invitingUserEmail
   */
  exports.prototype['invitingUserEmail'] = undefined;
  /**
   * Requested notification language (used to re-send email request in that language)
   * @member {String} requestedNotificationLanguage
   */
  exports.prototype['requestedNotificationLanguage'] = undefined;
  /**
   * Date the invitation was created
   * @member {Date} invitingDate
   */
  exports.prototype['invitingDate'] = undefined;
  /**
   * Date when the last email notification was sent
   * @member {Date} lastNotificationDate
   */
  exports.prototype['lastNotificationDate'] = undefined;
  /**
   * Invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`* `pending`: invitation has been sent by inviting user and not yet accepted by invited user * `accepted`: invitation has been accepted by invited user * `auto-accepted`: invitation has been auto-accepted (case of users in same company) * `declined`: invitation has been declined by invited user. Only invited user can see that he has declined an invitation. Inviting user still see the invitation as `pending` * `canceled`: invitation has been canceled by inviting user. If invited user does not have an account in Rainbow, he can still use this invitationId received by email to create his Rainbow account, but he will not be added to inviting user roster. * `failed`: invitation email failed to be sent to invited user (determined by parsing SMTP server logs). It can be the case if the provided invited email address does not exists.  
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Invitation type:   * `visibility` (invited user exists in Rainbow), * `registration` (invited user did not exist in Rainbow when invitation was sent)  
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


