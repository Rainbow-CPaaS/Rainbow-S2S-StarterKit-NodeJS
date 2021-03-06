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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.OAuthAuthorizeSuccess = factory(root.RainbowAuthenticationPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OAuthAuthorizeSuccess model module.
   * @module model/OAuthAuthorizeSuccess
   * @version 1.104.0
   */

  /**
   * Constructs a new <code>OAuthAuthorizeSuccess</code>.
   * @alias module:model/OAuthAuthorizeSuccess
   * @class
   * @param code {String} The authorization code generated by Rainbow authentication server. <br/> Only returned if ```Authorization Code``` grant is used.
   * @param state {String} The state provided by the application to GET /api/rainbow/authentication/v1.0/oauth/authorize endpoint. <br/> Only returned if ```Authorization Code``` grant is used. <br/> <br/> To be exchanged against an access token and a refresh token using /oauth/token endpoint (see related <a href=\"#api-OAuth_Authentication-OAuthToken\">documentation</a>). <br/> Authorization code lifetime is 10 minutes and it can be used only once.
   */
  var exports = function(code, state) {
    var _this = this;

    _this['code'] = code;
    _this['state'] = state;
  };

  /**
   * Constructs a <code>OAuthAuthorizeSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthAuthorizeSuccess} obj Optional instance to populate.
   * @return {module:model/OAuthAuthorizeSuccess} The populated <code>OAuthAuthorizeSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The access token generated by Rainbow authentication server. <br/> Only returned if ```Implicit``` grant is used. <br/> <br/> The access token can be used by the application to use Rainbow APIs.
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * The authorization code generated by Rainbow authentication server. <br/> Only returned if ```Authorization Code``` grant is used.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Lifetime in seconds of the access token. <br/> Only returned if ```Implicit``` grant is used. <br/> <br/> Once the access token has expired, the application can no longer use it to use Rainbow APIs (it has to request again user authorization with Implicit grant to retrieve a new access token)
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * The state provided by the application to GET /api/rainbow/authentication/v1.0/oauth/authorize endpoint. <br/> Only returned if ```Authorization Code``` grant is used. <br/> <br/> To be exchanged against an access token and a refresh token using /oauth/token endpoint (see related <a href=\"#api-OAuth_Authentication-OAuthToken\">documentation</a>). <br/> Authorization code lifetime is 10 minutes and it can be used only once.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Type of the token returned by Rainbow authentication server. <br/> Only returned if ```Implicit``` grant is used. <br/> <br/> It will always be \"access_token\" for Implicit grant. (it has to request again user authorization with Implicit grant to retrieve a new access token)
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));


