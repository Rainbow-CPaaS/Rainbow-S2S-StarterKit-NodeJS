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
    define(['ApiClient', 'model/CreateUserBulkInvitationsSuccessCounters', 'model/CreateUserBulkInvitationsSuccessReport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateUserBulkInvitationsSuccessCounters'), require('./CreateUserBulkInvitationsSuccessReport'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.CreateUserBulkInvitationsSuccess = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.CreateUserBulkInvitationsSuccessCounters, root.RainbowEnduserPortal.CreateUserBulkInvitationsSuccessReport);
  }
}(this, function(ApiClient, CreateUserBulkInvitationsSuccessCounters, CreateUserBulkInvitationsSuccessReport) {
  'use strict';



  /**
   * The CreateUserBulkInvitationsSuccess model module.
   * @module model/CreateUserBulkInvitationsSuccess
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>CreateUserBulkInvitationsSuccess</code>.
   * @alias module:model/CreateUserBulkInvitationsSuccess
   * @class
   * @param status {module:model/CreateUserBulkInvitationsSuccess.StatusEnum} Status of the bulk operation.    `ongoing`: there is at least 1 email to send    `failed`: there is no email to send and errors occurred with the synchronous validation of the provided emails
   * @param report {module:model/CreateUserBulkInvitationsSuccessReport} 
   * @param counters {module:model/CreateUserBulkInvitationsSuccessCounters} 
   */
  var exports = function(status, report, counters) {
    var _this = this;

    _this['status'] = status;
    _this['report'] = report;
    _this['counters'] = counters;
  };

  /**
   * Constructs a <code>CreateUserBulkInvitationsSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserBulkInvitationsSuccess} obj Optional instance to populate.
   * @return {module:model/CreateUserBulkInvitationsSuccess} The populated <code>CreateUserBulkInvitationsSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('report')) {
        obj['report'] = CreateUserBulkInvitationsSuccessReport.constructFromObject(data['report']);
      }
      if (data.hasOwnProperty('counters')) {
        obj['counters'] = CreateUserBulkInvitationsSuccessCounters.constructFromObject(data['counters']);
      }
    }
    return obj;
  }

  /**
   * Status of the bulk operation.    `ongoing`: there is at least 1 email to send    `failed`: there is no email to send and errors occurred with the synchronous validation of the provided emails
   * @member {module:model/CreateUserBulkInvitationsSuccess.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/CreateUserBulkInvitationsSuccessReport} report
   */
  exports.prototype['report'] = undefined;
  /**
   * @member {module:model/CreateUserBulkInvitationsSuccessCounters} counters
   */
  exports.prototype['counters'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ongoing"
     * @const
     */
    "ongoing": "ongoing",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"  };


  return exports;
}));


