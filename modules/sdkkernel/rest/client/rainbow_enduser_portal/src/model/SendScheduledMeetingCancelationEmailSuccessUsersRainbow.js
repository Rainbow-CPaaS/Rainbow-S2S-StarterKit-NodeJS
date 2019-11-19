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
    root.RainbowEnduserPortal.SendScheduledMeetingCancelationEmailSuccessUsersRainbow = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SendScheduledMeetingCancelationEmailSuccessUsersRainbow model module.
   * @module model/SendScheduledMeetingCancelationEmailSuccessUsersRainbow
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>SendScheduledMeetingCancelationEmailSuccessUsersRainbow</code>.
   * @alias module:model/SendScheduledMeetingCancelationEmailSuccessUsersRainbow
   * @class
   * @param id {Array.<Object>} Unique identifier of the Rainbow user invited to the conference.
   * @param loginEmail {Array.<Object>} loginEmail of the Rainbow user invited to the conference.
   * @param jidIm {Array.<Object>} jid_im of the Rainbow user invited to the conference.
   * @param lastName {Array.<Object>} lastName of the Rainbow user invited to the conference.
   * @param firstName {Array.<Object>} firstName of the Rainbow user invited to the conference.
   * @param language {Array.<Object>} language of the Rainbow user invited to the conference.
   * @param country {Array.<Object>} country of the Rainbow user invited to the conference.
   * @param displayName {Array.<Object>} displayName of the Rainbow user invited to the conference.
   */
  var exports = function(id, loginEmail, jidIm, lastName, firstName, language, country, displayName) {
    var _this = this;

    _this['id'] = id;
    _this['loginEmail'] = loginEmail;
    _this['jid_im'] = jidIm;
    _this['lastName'] = lastName;
    _this['firstName'] = firstName;
    _this['language'] = language;
    _this['country'] = country;
    _this['displayName'] = displayName;
  };

  /**
   * Constructs a <code>SendScheduledMeetingCancelationEmailSuccessUsersRainbow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendScheduledMeetingCancelationEmailSuccessUsersRainbow} obj Optional instance to populate.
   * @return {module:model/SendScheduledMeetingCancelationEmailSuccessUsersRainbow} The populated <code>SendScheduledMeetingCancelationEmailSuccessUsersRainbow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], [Object]);
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], [Object]);
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], [Object]);
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], [Object]);
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], [Object]);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], [Object]);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], [Object]);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], [Object]);
      }
    }
    return obj;
  }

  /**
   * Unique identifier of the Rainbow user invited to the conference.
   * @member {Array.<Object>} id
   */
  exports.prototype['id'] = undefined;
  /**
   * loginEmail of the Rainbow user invited to the conference.
   * @member {Array.<Object>} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * jid_im of the Rainbow user invited to the conference.
   * @member {Array.<Object>} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * lastName of the Rainbow user invited to the conference.
   * @member {Array.<Object>} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * firstName of the Rainbow user invited to the conference.
   * @member {Array.<Object>} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * language of the Rainbow user invited to the conference.
   * @member {Array.<Object>} language
   */
  exports.prototype['language'] = undefined;
  /**
   * country of the Rainbow user invited to the conference.
   * @member {Array.<Object>} country
   */
  exports.prototype['country'] = undefined;
  /**
   * displayName of the Rainbow user invited to the conference.
   * @member {Array.<Object>} displayName
   */
  exports.prototype['displayName'] = undefined;



  return exports;
}));


