/**
 * S2S api
 * # Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes a list of API services that are provided by the OT Rainbow S2S portal. This portal is dedicated to S2S features, providing a full REST API for Rainbow features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP verbs GET, DELETE, POST, PUT, etc. are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according to the stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, e.g. “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.104.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
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
    if (!root.S2SApi) {
      root.S2SApi = {};
    }
    root.S2SApi.Conversation = factory(root.S2SApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Conversation model module.
   * @module model/Conversation
   * @version 1.104.0
   */

  /**
   * Constructs a new <code>Conversation</code>.
   * A conversation
   * @alias module:model/Conversation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Conversation} obj Optional instance to populate.
   * @return {module:model/Conversation} The populated <code>Conversation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('peer')) {
        obj['peer'] = ApiClient.convertToType(data['peer'], 'String');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The conversation type
   * @member {module:model/Conversation.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The peer id
   * @member {String} peer
   */
  exports.prototype['peer'] = undefined;
  /**
   * The conversation mute state
   * @member {Boolean} mute
   */
  exports.prototype['mute'] = undefined;
  /**
   * The conversation identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The creation datetime
   * @member {String} creationDate
   */
  exports.prototype['creationDate'] = undefined;


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


