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
    root.RainbowAdminPortal.GetPcgPbxPhoneNbSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetPcgPbxPhoneNbSuccess model module.
   * @module model/GetPcgPbxPhoneNbSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetPcgPbxPhoneNbSuccess</code>.
   * @alias module:model/GetPcgPbxPhoneNbSuccess
   * @class
   * @param country {String} Phone number country (ISO 3166-1 alpha2 format)
   * @param id {String} Phone number unique identifier
   * @param shortNumber {String} Short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX.
   * @param internalNumber {String} Internal phone number.    Usable within a PBX group.
   * @param voiceMailNumber {String} Voice mail phone number
   * @param _number {String} DDI phone number
   * @param numberE164 {String} E.164 phone number (computed by server if number is set)
   * @param pbxUserId {String} Pbx's user Id
   * @param userId {String} Rainbow userId to which the phone number is linked
   * @param jidIm {String} jid_im of the Rainbow user to which the phone number is linked
   * @param jidTel {String} jid_tel of the Rainbow user to which the phone number is linked
   * @param jidPassword {String} jid_password of the Rainbow user to which the phone number is linked
   * @param type {String} Phone number type, one of `home`, `work`, `other`
   * @param deviceType {String} Phone number device type, one of `landline`, `mobile`, `fax`, `other`
   * @param isFromSystem {String} Boolean indicating if the phoneNumber is linked to a system (pbx)
   * @param pbxId {String} pbx unique identifier
   * @param firstName {String} firstname
   * @param lastName {String} lastname
   * @param deviceName {String} devicename
   * @param systemId {String} System unique identifier
   * @param isMonitored {Boolean} Specifies if the PhoneNumber is monitored by agent (i.e. telephony events are notified to Rainbow user through XMPP)
   * @param isNomadic {Boolean} Specifies if Nomadic set is selected.
   */
  var exports = function(country, id, shortNumber, internalNumber, voiceMailNumber, _number, numberE164, pbxUserId, userId, jidIm, jidTel, jidPassword, type, deviceType, isFromSystem, pbxId, firstName, lastName, deviceName, systemId, isMonitored, isNomadic) {
    var _this = this;

    _this['country'] = country;
    _this['id'] = id;
    _this['shortNumber'] = shortNumber;
    _this['internalNumber'] = internalNumber;
    _this['voiceMailNumber'] = voiceMailNumber;
    _this['number'] = _number;
    _this['numberE164'] = numberE164;
    _this['pbxUserId'] = pbxUserId;
    _this['userId'] = userId;
    _this['jid_im'] = jidIm;
    _this['jid_tel'] = jidTel;
    _this['jid_password'] = jidPassword;
    _this['type'] = type;
    _this['deviceType'] = deviceType;
    _this['isFromSystem'] = isFromSystem;
    _this['pbxId'] = pbxId;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['deviceName'] = deviceName;
    _this['systemId'] = systemId;
    _this['isMonitored'] = isMonitored;
    _this['isNomadic'] = isNomadic;
  };

  /**
   * Constructs a <code>GetPcgPbxPhoneNbSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPcgPbxPhoneNbSuccess} obj Optional instance to populate.
   * @return {module:model/GetPcgPbxPhoneNbSuccess} The populated <code>GetPcgPbxPhoneNbSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('shortNumber')) {
        obj['shortNumber'] = ApiClient.convertToType(data['shortNumber'], 'String');
      }
      if (data.hasOwnProperty('internalNumber')) {
        obj['internalNumber'] = ApiClient.convertToType(data['internalNumber'], 'String');
      }
      if (data.hasOwnProperty('voiceMailNumber')) {
        obj['voiceMailNumber'] = ApiClient.convertToType(data['voiceMailNumber'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('numberE164')) {
        obj['numberE164'] = ApiClient.convertToType(data['numberE164'], 'String');
      }
      if (data.hasOwnProperty('pbxUserId')) {
        obj['pbxUserId'] = ApiClient.convertToType(data['pbxUserId'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('jid_tel')) {
        obj['jid_tel'] = ApiClient.convertToType(data['jid_tel'], 'String');
      }
      if (data.hasOwnProperty('jid_password')) {
        obj['jid_password'] = ApiClient.convertToType(data['jid_password'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('isFromSystem')) {
        obj['isFromSystem'] = ApiClient.convertToType(data['isFromSystem'], 'String');
      }
      if (data.hasOwnProperty('pbxId')) {
        obj['pbxId'] = ApiClient.convertToType(data['pbxId'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('systemId')) {
        obj['systemId'] = ApiClient.convertToType(data['systemId'], 'String');
      }
      if (data.hasOwnProperty('isMonitored')) {
        obj['isMonitored'] = ApiClient.convertToType(data['isMonitored'], 'Boolean');
      }
      if (data.hasOwnProperty('isNomadic')) {
        obj['isNomadic'] = ApiClient.convertToType(data['isNomadic'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Phone number country (ISO 3166-1 alpha2 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Phone number unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX.
   * @member {String} shortNumber
   */
  exports.prototype['shortNumber'] = undefined;
  /**
   * Internal phone number.    Usable within a PBX group.
   * @member {String} internalNumber
   */
  exports.prototype['internalNumber'] = undefined;
  /**
   * Voice mail phone number
   * @member {String} voiceMailNumber
   */
  exports.prototype['voiceMailNumber'] = undefined;
  /**
   * DDI phone number
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * E.164 phone number (computed by server if number is set)
   * @member {String} numberE164
   */
  exports.prototype['numberE164'] = undefined;
  /**
   * Pbx's user Id
   * @member {String} pbxUserId
   */
  exports.prototype['pbxUserId'] = undefined;
  /**
   * Rainbow userId to which the phone number is linked
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * jid_im of the Rainbow user to which the phone number is linked
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * jid_tel of the Rainbow user to which the phone number is linked
   * @member {String} jid_tel
   */
  exports.prototype['jid_tel'] = undefined;
  /**
   * jid_password of the Rainbow user to which the phone number is linked
   * @member {String} jid_password
   */
  exports.prototype['jid_password'] = undefined;
  /**
   * Phone number type, one of `home`, `work`, `other`
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Phone number device type, one of `landline`, `mobile`, `fax`, `other`
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * Boolean indicating if the phoneNumber is linked to a system (pbx)
   * @member {String} isFromSystem
   */
  exports.prototype['isFromSystem'] = undefined;
  /**
   * pbx unique identifier
   * @member {String} pbxId
   */
  exports.prototype['pbxId'] = undefined;
  /**
   * firstname
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * lastname
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * devicename
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;
  /**
   * System unique identifier
   * @member {String} systemId
   */
  exports.prototype['systemId'] = undefined;
  /**
   * Specifies if the PhoneNumber is monitored by agent (i.e. telephony events are notified to Rainbow user through XMPP)
   * @member {Boolean} isMonitored
   */
  exports.prototype['isMonitored'] = undefined;
  /**
   * Specifies if Nomadic set is selected.
   * @member {Boolean} isNomadic
   */
  exports.prototype['isNomadic'] = undefined;



  return exports;
}));


