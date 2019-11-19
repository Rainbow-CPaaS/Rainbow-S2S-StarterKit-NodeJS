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
    root.RainbowAdminPortal.PostSystemsGroups = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PostSystemsGroups model module.
   * @module model/PostSystemsGroups
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PostSystemsGroups</code>.
   * @alias module:model/PostSystemsGroups
   * @class
   * @param name {String} Group name describing a private network of pabx
   * @param companies {Array.<String>} List of Company unique identifier. A least one Id. This field is wanted to classify SystemsGroups inside the rainbow infrastructure.
   */
  var exports = function(name, companies) {
    var _this = this;

    _this['name'] = name;
    _this['companies'] = companies;
  };

  /**
   * Constructs a <code>PostSystemsGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostSystemsGroups} obj Optional instance to populate.
   * @return {module:model/PostSystemsGroups} The populated <code>PostSystemsGroups</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('companies')) {
        obj['companies'] = ApiClient.convertToType(data['companies'], ['String']);
      }
      if (data.hasOwnProperty('systems')) {
        obj['systems'] = ApiClient.convertToType(data['systems'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Group name describing a private network of pabx
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * List of Company unique identifier. A least one Id. This field is wanted to classify SystemsGroups inside the rainbow infrastructure.
   * @member {Array.<String>} companies
   */
  exports.prototype['companies'] = undefined;
  /**
   * List of Systems unique identifier. May be empty. Several checks were done. Possible error cases are: (404 not found), (409 conflict - Systems already belongs to another group), (403 forbidden - one of the systems mustn't be administrated by the administrator)
   * @member {Array.<String>} systems
   */
  exports.prototype['systems'] = undefined;



  return exports;
}));


