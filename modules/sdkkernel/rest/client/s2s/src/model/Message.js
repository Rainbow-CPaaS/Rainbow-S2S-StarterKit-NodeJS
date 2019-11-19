/**
 * S2S api
 * # Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow S2S portal. This portal is dedicated to s2s features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.86.0
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
    if (!root.S2SApi) {
      root.S2SApi = {};
    }
    root.S2SApi.Message = factory(root.S2SApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Message model module.
   * @module model/Message
   * @version 1.86.0
   */

  /**
   * Constructs a new <code>Message</code>.
   * A message
   * @alias module:model/Message
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message} obj Optional instance to populate.
   * @return {module:model/Message} The populated <code>Message</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('markdown')) {
        obj['markdown'] = ApiClient.convertToType(data['markdown'], 'String');
      }
      if (data.hasOwnProperty('lang')) {
        obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('datetime')) {
        obj['datetime'] = ApiClient.convertToType(data['datetime'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('attachments')) {
        obj['attachments'] = ApiClient.convertToType(data['attachments'], Object);
      }
    }
    return obj;
  }

  /**
   * The subject
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * ##The markdown content
   * @member {String} markdown
   */
  exports.prototype['markdown'] = undefined;
  /**
   * en
   * @member {String} lang
   */
  exports.prototype['lang'] = undefined;
  /**
   * The identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The message sender
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * The creation datetime
   * @member {String} datetime
   */
  exports.prototype['datetime'] = undefined;
  /**
   * The body
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The attachments
   * @member {Object} attachments
   */
  exports.prototype['attachments'] = undefined;



  return exports;
}));


