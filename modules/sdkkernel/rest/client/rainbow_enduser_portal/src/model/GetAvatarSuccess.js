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
    root.RainbowEnduserPortal.GetAvatarSuccess = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetAvatarSuccess model module.
   * @module model/GetAvatarSuccess
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetAvatarSuccess</code>.
   * @alias module:model/GetAvatarSuccess
   * @class
   * @param contentType {module:model/GetAvatarSuccess.ContentTypeEnum} Avatar content-type.
   * @param dimsCached {String} Whether or not the resize avatar file has been cached by nginx.
   * @param lastModified {Date} Last avatar update date (for user: same value than the one in user object and in user vCard).
   * @param _date {Date} Request date.
   * @param content {File} File to be received
   */
  var exports = function(contentType, dimsCached, lastModified, _date, content) {
    var _this = this;

    _this['Content-Type'] = contentType;
    _this['Dims-cached'] = dimsCached;
    _this['Last-Modified'] = lastModified;
    _this['Date'] = _date;
    _this['Content'] = content;
  };

  /**
   * Constructs a <code>GetAvatarSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAvatarSuccess} obj Optional instance to populate.
   * @return {module:model/GetAvatarSuccess} The populated <code>GetAvatarSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Content-Type')) {
        obj['Content-Type'] = ApiClient.convertToType(data['Content-Type'], 'String');
      }
      if (data.hasOwnProperty('Dims-cached')) {
        obj['Dims-cached'] = ApiClient.convertToType(data['Dims-cached'], 'String');
      }
      if (data.hasOwnProperty('Last-Modified')) {
        obj['Last-Modified'] = ApiClient.convertToType(data['Last-Modified'], 'Date');
      }
      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], File);
      }
    }
    return obj;
  }

  /**
   * Avatar content-type.
   * @member {module:model/GetAvatarSuccess.ContentTypeEnum} Content-Type
   */
  exports.prototype['Content-Type'] = undefined;
  /**
   * Whether or not the resize avatar file has been cached by nginx.
   * @member {String} Dims-cached
   */
  exports.prototype['Dims-cached'] = undefined;
  /**
   * Last avatar update date (for user: same value than the one in user object and in user vCard).
   * @member {Date} Last-Modified
   */
  exports.prototype['Last-Modified'] = undefined;
  /**
   * Request date.
   * @member {Date} Date
   */
  exports.prototype['Date'] = undefined;
  /**
   * File to be received
   * @member {File} Content
   */
  exports.prototype['Content'] = undefined;


  /**
   * Allowed values for the <code>Content-Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContentTypeEnum = {
    /**
     * value: "image/jpeg"
     * @const
     */
    "jpeg": "image/jpeg",
    /**
     * value: "image/png"
     * @const
     */
    "png": "image/png"  };


  return exports;
}));


