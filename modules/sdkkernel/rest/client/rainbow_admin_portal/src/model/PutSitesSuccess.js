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
    define(['ApiClient', 'model/PutSitesSuccessSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PutSitesSuccessSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.PutSitesSuccess = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.PutSitesSuccessSettings);
  }
}(this, function(ApiClient, PutSitesSuccessSettings) {
  'use strict';



  /**
   * The PutSitesSuccess model module.
   * @module model/PutSitesSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PutSitesSuccess</code>.
   * @alias module:model/PutSitesSuccess
   * @class
   * @param name {String} Company name
   * @param settings {module:model/PutSitesSuccessSettings} 
   * @param id {String} Company unique identifier
   * @param status {String} Company status
   * @param creationDate {Date} Company creation date (Read only)
   * @param statusUpdatedDate {Date} Date of last site status update (Read only)
   */
  var exports = function(name, settings, id, status, creationDate, statusUpdatedDate) {
    var _this = this;

    _this['name'] = name;
    _this['settings'] = settings;
    _this['id'] = id;
    _this['status'] = status;
    _this['creationDate'] = creationDate;
    _this['statusUpdatedDate'] = statusUpdatedDate;
  };

  /**
   * Constructs a <code>PutSitesSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSitesSuccess} obj Optional instance to populate.
   * @return {module:model/PutSitesSuccess} The populated <code>PutSitesSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = PutSitesSuccessSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('statusUpdatedDate')) {
        obj['statusUpdatedDate'] = ApiClient.convertToType(data['statusUpdatedDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Company name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PutSitesSuccessSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * Company unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Company status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Company creation date (Read only)
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Date of last site status update (Read only)
   * @member {Date} statusUpdatedDate
   */
  exports.prototype['statusUpdatedDate'] = undefined;



  return exports;
}));


