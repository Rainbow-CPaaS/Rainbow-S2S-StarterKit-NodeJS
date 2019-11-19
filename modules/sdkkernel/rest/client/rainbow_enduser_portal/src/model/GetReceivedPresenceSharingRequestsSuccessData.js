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
    root.RainbowEnduserPortal.GetReceivedPresenceSharingRequestsSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetReceivedPresenceSharingRequestsSuccessData model module.
   * @module model/GetReceivedPresenceSharingRequestsSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetReceivedPresenceSharingRequestsSuccessData</code>.
   * @alias module:model/GetReceivedPresenceSharingRequestsSuccessData
   * @class
   * @param data {Object} 
   * @param id {String} Presence Request unique Id
   * @param fromUserId {String} Initiator of the presence request unique Rainbow Id
   * @param toUserId {String} User for which we need the presence unique Rainbow Id
   * @param requestDate {Date} Date of presence request creation
   * @param acceptationDate {Date} Date of presence request acceptation
   * @param status {String} Presence request status: one of `pending`, `accepted`* `pending`: Presence request has been sent by inviting user and not yet accepted by invited user * `accepted`: Presence request has been accepted by a Rainbow user of my network  
   */
  var exports = function(data, id, fromUserId, toUserId, requestDate, acceptationDate, status) {
    var _this = this;

    _this['data'] = data;
    _this['id'] = id;
    _this['fromUserId'] = fromUserId;
    _this['toUserId'] = toUserId;
    _this['requestDate'] = requestDate;
    _this['acceptationDate'] = acceptationDate;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>GetReceivedPresenceSharingRequestsSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetReceivedPresenceSharingRequestsSuccessData} obj Optional instance to populate.
   * @return {module:model/GetReceivedPresenceSharingRequestsSuccessData} The populated <code>GetReceivedPresenceSharingRequestsSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('fromUserId')) {
        obj['fromUserId'] = ApiClient.convertToType(data['fromUserId'], 'String');
      }
      if (data.hasOwnProperty('toUserId')) {
        obj['toUserId'] = ApiClient.convertToType(data['toUserId'], 'String');
      }
      if (data.hasOwnProperty('requestDate')) {
        obj['requestDate'] = ApiClient.convertToType(data['requestDate'], 'Date');
      }
      if (data.hasOwnProperty('acceptationDate')) {
        obj['acceptationDate'] = ApiClient.convertToType(data['acceptationDate'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Presence Request unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Initiator of the presence request unique Rainbow Id
   * @member {String} fromUserId
   */
  exports.prototype['fromUserId'] = undefined;
  /**
   * User for which we need the presence unique Rainbow Id
   * @member {String} toUserId
   */
  exports.prototype['toUserId'] = undefined;
  /**
   * Date of presence request creation
   * @member {Date} requestDate
   */
  exports.prototype['requestDate'] = undefined;
  /**
   * Date of presence request acceptation
   * @member {Date} acceptationDate
   */
  exports.prototype['acceptationDate'] = undefined;
  /**
   * Presence request status: one of `pending`, `accepted`* `pending`: Presence request has been sent by inviting user and not yet accepted by invited user * `accepted`: Presence request has been accepted by a Rainbow user of my network  
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


