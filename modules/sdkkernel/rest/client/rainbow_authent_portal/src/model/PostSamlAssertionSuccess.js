/**
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
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
    define(['ApiClient', 'model/GetBasicLoginSuccessLoggedInApplication', 'model/PostSamlAssertionSuccessLoggedInUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetBasicLoginSuccessLoggedInApplication'), require('./PostSamlAssertionSuccessLoggedInUser'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.PostSamlAssertionSuccess = factory(root.RainbowAuthenticationPortal.ApiClient, root.RainbowAuthenticationPortal.GetBasicLoginSuccessLoggedInApplication, root.RainbowAuthenticationPortal.PostSamlAssertionSuccessLoggedInUser);
  }
}(this, function(ApiClient, GetBasicLoginSuccessLoggedInApplication, PostSamlAssertionSuccessLoggedInUser) {
  'use strict';



  /**
   * The PostSamlAssertionSuccess model module.
   * @module model/PostSamlAssertionSuccess
   * @version 1.104.0
   */

  /**
   * Constructs a new <code>PostSamlAssertionSuccess</code>.
   * @alias module:model/PostSamlAssertionSuccess
   * @class
   * @param country {String} Phone number country (ISO 3166-1 alpha3 format) <br/>`country` field is automatically computed using the following algorithm when creating/updating a phoneNumber entry: - If `number` is provided and is in E164 format, `country` is computed from E164 number - Else if `country` field is provided in the phoneNumber entry, this one is used - Else user `country` field is used
   * @param loggedInApplication {module:model/GetBasicLoginSuccessLoggedInApplication} 
   * @param loggedInUser {module:model/PostSamlAssertionSuccessLoggedInUser} 
   * @param token {String} JsonWebToken to use for all API requests
   */
  var exports = function(country, loggedInApplication, loggedInUser, token) {
    var _this = this;

    _this['country'] = country;
    _this['loggedInApplication'] = loggedInApplication;
    _this['loggedInUser'] = loggedInUser;
    _this['token'] = token;
  };

  /**
   * Constructs a <code>PostSamlAssertionSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostSamlAssertionSuccess} obj Optional instance to populate.
   * @return {module:model/PostSamlAssertionSuccess} The populated <code>PostSamlAssertionSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], Object);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('loggedInApplication')) {
        obj['loggedInApplication'] = GetBasicLoginSuccessLoggedInApplication.constructFromObject(data['loggedInApplication']);
      }
      if (data.hasOwnProperty('loggedInUser')) {
        obj['loggedInUser'] = PostSamlAssertionSuccessLoggedInUser.constructFromObject(data['loggedInUser']);
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Object} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * Phone number country (ISO 3166-1 alpha3 format) <br/>`country` field is automatically computed using the following algorithm when creating/updating a phoneNumber entry: - If `number` is provided and is in E164 format, `country` is computed from E164 number - Else if `country` field is provided in the phoneNumber entry, this one is used - Else user `country` field is used
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/GetBasicLoginSuccessLoggedInApplication} loggedInApplication
   */
  exports.prototype['loggedInApplication'] = undefined;
  /**
   * @member {module:model/PostSamlAssertionSuccessLoggedInUser} loggedInUser
   */
  exports.prototype['loggedInUser'] = undefined;
  /**
   * JsonWebToken to use for all API requests
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


