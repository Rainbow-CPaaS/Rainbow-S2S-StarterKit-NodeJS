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
    root.RainbowAuthenticationPortal.DeleteOAuthTokenSuccessData = factory(root.RainbowAuthenticationPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeleteOAuthTokenSuccessData model module.
   * @module model/DeleteOAuthTokenSuccessData
   * @version 1.104.0
   */

  /**
   * Constructs a new <code>DeleteOAuthTokenSuccessData</code>.
   * @alias module:model/DeleteOAuthTokenSuccessData
   * @class
   * @param refreshTokenExpiresAt {Date} Date when the refresh token expires.
   * @param accessTokenExpiresAt {Date} Date when the access token expires.
   * @param accessTokenIssuedAt {Date} Date of the last access token generation. Access token is requested by the application and has a short expiration time, therefore it can be considered as an indicator of the application activity for the user/application associated to this OAuth token.
   * @param appName {String} Name of the Application for which the OAuth token has been generated.
   * @param appId {String} Unique identifier of the Application for which the OAuth token has been generated.
   * @param scope {module:model/DeleteOAuthTokenSuccessData.ScopeEnum} Scope granted to the application.
   * @param id {String} OAuth token unique identifier.
   * @param creationDate {Date} Date when the OAuth token has been created. <br/> Corresponds to the first time the user gave his consent so that the application can use Rainbow APIs in his name (delegation).
   * @param userId {String} Unique identifier of the user for which the OAuth token has been generated.
   * @param refreshTokenIssuedAt {Date} Date of the last refresh token generation.
   */
  var exports = function(refreshTokenExpiresAt, accessTokenExpiresAt, accessTokenIssuedAt, appName, appId, scope, id, creationDate, userId, refreshTokenIssuedAt) {
    var _this = this;

    _this['refreshTokenExpiresAt'] = refreshTokenExpiresAt;
    _this['accessTokenExpiresAt'] = accessTokenExpiresAt;
    _this['accessTokenIssuedAt'] = accessTokenIssuedAt;
    _this['appName'] = appName;
    _this['appId'] = appId;
    _this['scope'] = scope;
    _this['id'] = id;
    _this['creationDate'] = creationDate;
    _this['userId'] = userId;
    _this['refreshTokenIssuedAt'] = refreshTokenIssuedAt;
  };

  /**
   * Constructs a <code>DeleteOAuthTokenSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteOAuthTokenSuccessData} obj Optional instance to populate.
   * @return {module:model/DeleteOAuthTokenSuccessData} The populated <code>DeleteOAuthTokenSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('refreshTokenExpiresAt')) {
        obj['refreshTokenExpiresAt'] = ApiClient.convertToType(data['refreshTokenExpiresAt'], 'Date');
      }
      if (data.hasOwnProperty('accessTokenExpiresAt')) {
        obj['accessTokenExpiresAt'] = ApiClient.convertToType(data['accessTokenExpiresAt'], 'Date');
      }
      if (data.hasOwnProperty('accessTokenIssuedAt')) {
        obj['accessTokenIssuedAt'] = ApiClient.convertToType(data['accessTokenIssuedAt'], 'Date');
      }
      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('refreshTokenIssuedAt')) {
        obj['refreshTokenIssuedAt'] = ApiClient.convertToType(data['refreshTokenIssuedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Date when the refresh token expires.
   * @member {Date} refreshTokenExpiresAt
   */
  exports.prototype['refreshTokenExpiresAt'] = undefined;
  /**
   * Date when the access token expires.
   * @member {Date} accessTokenExpiresAt
   */
  exports.prototype['accessTokenExpiresAt'] = undefined;
  /**
   * Date of the last access token generation. Access token is requested by the application and has a short expiration time, therefore it can be considered as an indicator of the application activity for the user/application associated to this OAuth token.
   * @member {Date} accessTokenIssuedAt
   */
  exports.prototype['accessTokenIssuedAt'] = undefined;
  /**
   * Name of the Application for which the OAuth token has been generated.
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;
  /**
   * Unique identifier of the Application for which the OAuth token has been generated.
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * Scope granted to the application.
   * @member {module:model/DeleteOAuthTokenSuccessData.ScopeEnum} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * OAuth token unique identifier.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date when the OAuth token has been created. <br/> Corresponds to the first time the user gave his consent so that the application can use Rainbow APIs in his name (delegation).
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Unique identifier of the user for which the OAuth token has been generated.
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Date of the last refresh token generation.
   * @member {Date} refreshTokenIssuedAt
   */
  exports.prototype['refreshTokenIssuedAt'] = undefined;


  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "{all}"
     * @const
     */
    "{all}": "{all}"  };


  return exports;
}));


