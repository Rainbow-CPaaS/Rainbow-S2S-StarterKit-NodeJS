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
    root.RainbowEnduserPortal.CreateFavorite = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CreateFavorite model module.
   * @module model/CreateFavorite
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>CreateFavorite</code>.
   * @alias module:model/CreateFavorite
   * @class
   * @param peerId {String} ID of a user to add, ID of a room or ID of a bot, according to value of `type` field:   * **user ID:** id returned in user objects by GET /users and GET /search APIs (like 56d0277a0261b53142a5c000). user ID is also available in user vCard via a proprietary field name 'rainbowId'. * **room ID:** id returned in room objects using /rooms APIs. * **bot ID:** id returned in bot objects using /bots APIs.     peerId must be an existing userId / roomId / botId, otherwise a 404 Not Found is returned.
   * @param type {module:model/CreateFavorite.TypeEnum} Favorite type:   * user: User to user, * room: User to room, * bot: User to bot  
   */
  var exports = function(peerId, type) {
    var _this = this;

    _this['peerId'] = peerId;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>CreateFavorite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFavorite} obj Optional instance to populate.
   * @return {module:model/CreateFavorite} The populated <code>CreateFavorite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('peerId')) {
        obj['peerId'] = ApiClient.convertToType(data['peerId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of a user to add, ID of a room or ID of a bot, according to value of `type` field:   * **user ID:** id returned in user objects by GET /users and GET /search APIs (like 56d0277a0261b53142a5c000). user ID is also available in user vCard via a proprietary field name 'rainbowId'. * **room ID:** id returned in room objects using /rooms APIs. * **bot ID:** id returned in bot objects using /bots APIs.     peerId must be an existing userId / roomId / botId, otherwise a 404 Not Found is returned.
   * @member {String} peerId
   */
  exports.prototype['peerId'] = undefined;
  /**
   * Favorite type:   * user: User to user, * room: User to room, * bot: User to bot  
   * @member {module:model/CreateFavorite.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


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


