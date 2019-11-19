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
    define(['ApiClient', 'model/CreateUserBulkInvitationsSuccessErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateUserBulkInvitationsSuccessErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.CreateUserBulkInvitationsSuccessOngoing = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.CreateUserBulkInvitationsSuccessErrors);
  }
}(this, function(ApiClient, CreateUserBulkInvitationsSuccessErrors) {
  'use strict';



  /**
   * The CreateUserBulkInvitationsSuccessOngoing model module.
   * @module model/CreateUserBulkInvitationsSuccessOngoing
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>CreateUserBulkInvitationsSuccessOngoing</code>.
   * @alias module:model/CreateUserBulkInvitationsSuccessOngoing
   * @class
   * @param email {String} Email address to invite
   * @param index {Number} Position of the email address to invite in the input emails array
   * @param errors {Array.<module:model/CreateUserBulkInvitationsSuccessErrors>} Errors which has occurred during the validation of this email. Should always be empty, otherwise the email would be in the failed array.
   * @param status {String} Status of the email invitation. Should always be ongoing, as the treatment is asynchronous and there is currently no way for the client to know the progression of the bulk invitations.
   */
  var exports = function(email, index, errors, status) {
    var _this = this;

    _this['email'] = email;
    _this['index'] = index;
    _this['errors'] = errors;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>CreateUserBulkInvitationsSuccessOngoing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserBulkInvitationsSuccessOngoing} obj Optional instance to populate.
   * @return {module:model/CreateUserBulkInvitationsSuccessOngoing} The populated <code>CreateUserBulkInvitationsSuccessOngoing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [CreateUserBulkInvitationsSuccessErrors]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email address to invite
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Position of the email address to invite in the input emails array
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;
  /**
   * Errors which has occurred during the validation of this email. Should always be empty, otherwise the email would be in the failed array.
   * @member {Array.<module:model/CreateUserBulkInvitationsSuccessErrors>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Status of the email invitation. Should always be ongoing, as the treatment is asynchronous and there is currently no way for the client to know the progression of the bulk invitations.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


