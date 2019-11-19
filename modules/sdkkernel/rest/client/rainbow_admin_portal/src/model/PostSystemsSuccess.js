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
    define(['ApiClient', 'model/PostSystemsSuccessPbxNumberingTranslator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostSystemsSuccessPbxNumberingTranslator'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.PostSystemsSuccess = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.PostSystemsSuccessPbxNumberingTranslator);
  }
}(this, function(ApiClient, PostSystemsSuccessPbxNumberingTranslator) {
  'use strict';



  /**
   * The PostSystemsSuccess model module.
   * @module model/PostSystemsSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PostSystemsSuccess</code>.
   * @alias module:model/PostSystemsSuccess
   * @class
   * @param id {String} System unique identifier
   * @param name {String} System name/description
   * @param pbxId {String} Call Control Agent (CCA) login.
   * @param siteId {Array.<String>} Site from which the system is linked with.
   * @param type {String} CCA type
   * @param country {String} System country (ISO 3166-1 alpha3 format)
   * @param version {String} CCA software version
   * @param jidPbxagent {String} CCA Jabber Id
   * @param jidPbxagentPassword {String} CCA Jabber Id access code. The value of this field is depending on status field. > - `created, activating`: This is the public access code. The code must be used by the CCA for the first connection. > - `activated`: This is an Hash code of the private access code, reduced to the last eight digits
   * @param jidPbxpcg {String} PCG Jabber Id for this system
   * @param jidPbxpcgPassword {String} PCG CCA Jabber Id password for this system
   * @param status {module:model/PostSystemsSuccess.StatusEnum} CCA status report. (read only) > - `created`: CCA uses a public access code to join rainbow infrastructure (see jid_pbxagent_password field) > - `activating`: Rainbow infrastructure has proposed a private access code to replace the former public access code > - `activated`: CCA has accepted the new access code, that will be used for the next initialization.
   * @param serverPingTimeout {String} CCA config data
   * @param pbxMainBundlePrefix {Array.<String>} CCA config data
   * @param pbxNumberingTranslator {Array.<module:model/PostSystemsSuccessPbxNumberingTranslator>} list of several regular expressions used to validate internal or external phone numbers. Up to 100 regular expressions are allowed. (64 max char by regexp). To reset the list, use []
   * @param pbxNationalPrefix {String} National prefix
   * @param pbxInternationalPrefix {String} International prefix
   * @param creationDate {Date} System creation date (Read only)
   * @param statusUpdatedDate {Date} Date of last system status update (Read only)
   * @param searchResultOrder {Array.<String>} List of directory types to order search results
   * @param isShared {Boolean} Indicates if the system is **multi-company** (shared across multiple companies)
   * @param isCentrex {Boolean} Indicates if the system is one tenant or **multi-tenant (OXE - OTEC-S)**
   * @param bpId {String} Identifier which links the system to the corresponding Business partner company. Obligatory when a BP admin creates a isCentrex or isShared system not yet used by a company
   */
  var exports = function(id, name, pbxId, siteId, type, country, version, jidPbxagent, jidPbxagentPassword, jidPbxpcg, jidPbxpcgPassword, status, serverPingTimeout, pbxMainBundlePrefix, pbxNumberingTranslator, pbxNationalPrefix, pbxInternationalPrefix, creationDate, statusUpdatedDate, searchResultOrder, isShared, isCentrex, bpId) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['pbxId'] = pbxId;
    _this['siteId'] = siteId;
    _this['type'] = type;
    _this['country'] = country;
    _this['version'] = version;
    _this['jid_pbxagent'] = jidPbxagent;
    _this['jid_pbxagent_password'] = jidPbxagentPassword;
    _this['jid_pbxpcg'] = jidPbxpcg;
    _this['jid_pbxpcg_password'] = jidPbxpcgPassword;
    _this['status'] = status;
    _this['serverPingTimeout'] = serverPingTimeout;
    _this['pbxMainBundlePrefix'] = pbxMainBundlePrefix;
    _this['pbxNumberingTranslator'] = pbxNumberingTranslator;
    _this['pbxNationalPrefix'] = pbxNationalPrefix;
    _this['pbxInternationalPrefix'] = pbxInternationalPrefix;
    _this['creationDate'] = creationDate;
    _this['statusUpdatedDate'] = statusUpdatedDate;
    _this['searchResultOrder'] = searchResultOrder;
    _this['isShared'] = isShared;
    _this['isCentrex'] = isCentrex;
    _this['bpId'] = bpId;
  };

  /**
   * Constructs a <code>PostSystemsSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostSystemsSuccess} obj Optional instance to populate.
   * @return {module:model/PostSystemsSuccess} The populated <code>PostSystemsSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pbxId')) {
        obj['pbxId'] = ApiClient.convertToType(data['pbxId'], 'String');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('jid_pbxagent')) {
        obj['jid_pbxagent'] = ApiClient.convertToType(data['jid_pbxagent'], 'String');
      }
      if (data.hasOwnProperty('jid_pbxagent_password')) {
        obj['jid_pbxagent_password'] = ApiClient.convertToType(data['jid_pbxagent_password'], 'String');
      }
      if (data.hasOwnProperty('jid_pbxpcg')) {
        obj['jid_pbxpcg'] = ApiClient.convertToType(data['jid_pbxpcg'], 'String');
      }
      if (data.hasOwnProperty('jid_pbxpcg_password')) {
        obj['jid_pbxpcg_password'] = ApiClient.convertToType(data['jid_pbxpcg_password'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('serverPingTimeout')) {
        obj['serverPingTimeout'] = ApiClient.convertToType(data['serverPingTimeout'], 'String');
      }
      if (data.hasOwnProperty('pbxMainBundlePrefix')) {
        obj['pbxMainBundlePrefix'] = ApiClient.convertToType(data['pbxMainBundlePrefix'], ['String']);
      }
      if (data.hasOwnProperty('pbxNumberingTranslator')) {
        obj['pbxNumberingTranslator'] = ApiClient.convertToType(data['pbxNumberingTranslator'], [PostSystemsSuccessPbxNumberingTranslator]);
      }
      if (data.hasOwnProperty('pbxNationalPrefix')) {
        obj['pbxNationalPrefix'] = ApiClient.convertToType(data['pbxNationalPrefix'], 'String');
      }
      if (data.hasOwnProperty('pbxInternationalPrefix')) {
        obj['pbxInternationalPrefix'] = ApiClient.convertToType(data['pbxInternationalPrefix'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('statusUpdatedDate')) {
        obj['statusUpdatedDate'] = ApiClient.convertToType(data['statusUpdatedDate'], 'Date');
      }
      if (data.hasOwnProperty('searchResultOrder')) {
        obj['searchResultOrder'] = ApiClient.convertToType(data['searchResultOrder'], ['String']);
      }
      if (data.hasOwnProperty('isShared')) {
        obj['isShared'] = ApiClient.convertToType(data['isShared'], 'Boolean');
      }
      if (data.hasOwnProperty('isCentrex')) {
        obj['isCentrex'] = ApiClient.convertToType(data['isCentrex'], 'Boolean');
      }
      if (data.hasOwnProperty('bpId')) {
        obj['bpId'] = ApiClient.convertToType(data['bpId'], 'String');
      }
    }
    return obj;
  }

  /**
   * System unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * System name/description
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Call Control Agent (CCA) login.
   * @member {String} pbxId
   */
  exports.prototype['pbxId'] = undefined;
  /**
   * Site from which the system is linked with.
   * @member {Array.<String>} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * CCA type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * System country (ISO 3166-1 alpha3 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * CCA software version
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * CCA Jabber Id
   * @member {String} jid_pbxagent
   */
  exports.prototype['jid_pbxagent'] = undefined;
  /**
   * CCA Jabber Id access code. The value of this field is depending on status field. > - `created, activating`: This is the public access code. The code must be used by the CCA for the first connection. > - `activated`: This is an Hash code of the private access code, reduced to the last eight digits
   * @member {String} jid_pbxagent_password
   */
  exports.prototype['jid_pbxagent_password'] = undefined;
  /**
   * PCG Jabber Id for this system
   * @member {String} jid_pbxpcg
   */
  exports.prototype['jid_pbxpcg'] = undefined;
  /**
   * PCG CCA Jabber Id password for this system
   * @member {String} jid_pbxpcg_password
   */
  exports.prototype['jid_pbxpcg_password'] = undefined;
  /**
   * CCA status report. (read only) > - `created`: CCA uses a public access code to join rainbow infrastructure (see jid_pbxagent_password field) > - `activating`: Rainbow infrastructure has proposed a private access code to replace the former public access code > - `activated`: CCA has accepted the new access code, that will be used for the next initialization.
   * @member {module:model/PostSystemsSuccess.StatusEnum} status
   * @default 'created'
   */
  exports.prototype['status'] = 'created';
  /**
   * CCA config data
   * @member {String} serverPingTimeout
   */
  exports.prototype['serverPingTimeout'] = undefined;
  /**
   * CCA config data
   * @member {Array.<String>} pbxMainBundlePrefix
   */
  exports.prototype['pbxMainBundlePrefix'] = undefined;
  /**
   * list of several regular expressions used to validate internal or external phone numbers. Up to 100 regular expressions are allowed. (64 max char by regexp). To reset the list, use []
   * @member {Array.<module:model/PostSystemsSuccessPbxNumberingTranslator>} pbxNumberingTranslator
   */
  exports.prototype['pbxNumberingTranslator'] = undefined;
  /**
   * National prefix
   * @member {String} pbxNationalPrefix
   */
  exports.prototype['pbxNationalPrefix'] = undefined;
  /**
   * International prefix
   * @member {String} pbxInternationalPrefix
   */
  exports.prototype['pbxInternationalPrefix'] = undefined;
  /**
   * System creation date (Read only)
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Date of last system status update (Read only)
   * @member {Date} statusUpdatedDate
   */
  exports.prototype['statusUpdatedDate'] = undefined;
  /**
   * List of directory types to order search results
   * @member {Array.<String>} searchResultOrder
   */
  exports.prototype['searchResultOrder'] = undefined;
  /**
   * Indicates if the system is **multi-company** (shared across multiple companies)
   * @member {Boolean} isShared
   */
  exports.prototype['isShared'] = undefined;
  /**
   * Indicates if the system is one tenant or **multi-tenant (OXE - OTEC-S)**
   * @member {Boolean} isCentrex
   */
  exports.prototype['isCentrex'] = undefined;
  /**
   * Identifier which links the system to the corresponding Business partner company. Obligatory when a BP admin creates a isCentrex or isShared system not yet used by a company
   * @member {String} bpId
   * @default 'null'
   */
  exports.prototype['bpId'] = 'null';


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "created"
     * @const
     */
    "created": "created",
    /**
     * value: "activating"
     * @const
     */
    "activating": "activating",
    /**
     * value: "activated"
     * @const
     */
    "activated": "activated"  };


  return exports;
}));


