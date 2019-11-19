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
    root.RainbowAdminPortal.AdminUsersPostUserProfilesSuccessProvisioningNeeded = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AdminUsersPostUserProfilesSuccessProvisioningNeeded model module.
   * @module model/AdminUsersPostUserProfilesSuccessProvisioningNeeded
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>AdminUsersPostUserProfilesSuccessProvisioningNeeded</code>.
   * @alias module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded
   * @class
   * @param providerType {module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded.ProviderTypeEnum} If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when Business Store confirms through the callback that the subscription is created).
   * @param provisioningOngoing {Boolean} Boolean indicating if the account is being provisioned on the other component. If set to false, the account has been successfully created on the component.
   * @param provisioningStartDate {String} Provisioning starting date
   */
  var exports = function(providerType, provisioningOngoing, provisioningStartDate) {
    var _this = this;

    _this['providerType'] = providerType;
    _this['provisioningOngoing'] = provisioningOngoing;
    _this['provisioningStartDate'] = provisioningStartDate;
  };

  /**
   * Constructs a <code>AdminUsersPostUserProfilesSuccessProvisioningNeeded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded} obj Optional instance to populate.
   * @return {module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded} The populated <code>AdminUsersPostUserProfilesSuccessProvisioningNeeded</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('providerType')) {
        obj['providerType'] = ApiClient.convertToType(data['providerType'], 'String');
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
      if (data.hasOwnProperty('provisioningOngoing')) {
        obj['provisioningOngoing'] = ApiClient.convertToType(data['provisioningOngoing'], 'Boolean');
      }
      if (data.hasOwnProperty('provisioningStartDate')) {
        obj['provisioningStartDate'] = ApiClient.convertToType(data['provisioningStartDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when Business Store confirms through the callback that the subscription is created).
   * @member {module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded.ProviderTypeEnum} providerType
   */
  exports.prototype['providerType'] = undefined;
  /**
   * Only set if provisioningNeeded is set and the element of the array has providerType `JANUS`. Corresponds to the media type to use when provisioning the company account on JANUS component.
   * @member {module:model/AdminUsersPostUserProfilesSuccessProvisioningNeeded.MediaTypeEnum} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * Boolean indicating if the account is being provisioned on the other component. If set to false, the account has been successfully created on the component.
   * @member {Boolean} provisioningOngoing
   */
  exports.prototype['provisioningOngoing'] = undefined;
  /**
   * Provisioning starting date
   * @member {String} provisioningStartDate
   */
  exports.prototype['provisioningStartDate'] = undefined;


  /**
   * Allowed values for the <code>providerType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProviderTypeEnum = {
    /**
     * value: "PGI"
     * @const
     */
    "PGI": "PGI",
    /**
     * value: "JANUS"
     * @const
     */
    "JANUS": "JANUS"  };

  /**
   * Allowed values for the <code>mediaType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MediaTypeEnum = {
    /**
     * value: "webrtc"
     * @const
     */
    "webrtc": "webrtc"  };


  return exports;
}));


