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
    root.RainbowEnduserPortal.UpdateConversationSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UpdateConversationSuccessData model module.
   * @module model/UpdateConversationSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>UpdateConversationSuccessData</code>.
   * @alias module:model/UpdateConversationSuccessData
   * @class
   * @param peerId {String} userId or roomId of the peer involved in the conversation.
   * @param mute {Boolean} true if conversation is muted, false otherwise
   * @param id {String} Conversation unique identifier.
   * @param creationDate {Date} Conversation creation date.
   * @param type {module:model/UpdateConversationSuccessData.TypeEnum} Type of the conversation peer:   * `user` for User to User conversation type, * `room` for User to Room conversation type. * `bot` for User to Bot service conversation type.  
   * @param isFavorite {Boolean} Is conversation flagged as favorite.
   */
  var exports = function(peerId, mute, id, creationDate, type, isFavorite) {
    var _this = this;

    _this['peerId'] = peerId;
    _this['mute'] = mute;
    _this['id'] = id;
    _this['creationDate'] = creationDate;
    _this['type'] = type;
    _this['isFavorite'] = isFavorite;
  };

  /**
   * Constructs a <code>UpdateConversationSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateConversationSuccessData} obj Optional instance to populate.
   * @return {module:model/UpdateConversationSuccessData} The populated <code>UpdateConversationSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('peerId')) {
        obj['peerId'] = ApiClient.convertToType(data['peerId'], 'String');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('isFavorite')) {
        obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * userId or roomId of the peer involved in the conversation.
   * @member {String} peerId
   */
  exports.prototype['peerId'] = undefined;
  /**
   * true if conversation is muted, false otherwise
   * @member {Boolean} mute
   * @default false
   */
  exports.prototype['mute'] = false;
  /**
   * Conversation unique identifier.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Conversation creation date.
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Type of the conversation peer:   * `user` for User to User conversation type, * `room` for User to Room conversation type. * `bot` for User to Bot service conversation type.  
   * @member {module:model/UpdateConversationSuccessData.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Is conversation flagged as favorite.
   * @member {Boolean} isFavorite
   * @default false
   */
  exports.prototype['isFavorite'] = false;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "room"
     * @const
     */
    "room": "room",
    /**
     * value: "bot"
     * @const
     */
    "bot": "bot"  };


  return exports;
}));


