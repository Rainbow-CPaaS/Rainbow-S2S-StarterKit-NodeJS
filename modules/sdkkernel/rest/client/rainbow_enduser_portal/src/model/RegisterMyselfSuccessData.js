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
    define(['ApiClient', 'model/RegisterMyselfSuccessEmails', 'model/RegisterMyselfSuccessPhoneNumbers', 'model/UpdateUserSuccessDataCreatedByAdmin', 'model/UpdateUserSuccessDataInvitedBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RegisterMyselfSuccessEmails'), require('./RegisterMyselfSuccessPhoneNumbers'), require('./UpdateUserSuccessDataCreatedByAdmin'), require('./UpdateUserSuccessDataInvitedBy'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.RegisterMyselfSuccessData = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.RegisterMyselfSuccessEmails, root.RainbowEnduserPortal.RegisterMyselfSuccessPhoneNumbers, root.RainbowEnduserPortal.UpdateUserSuccessDataCreatedByAdmin, root.RainbowEnduserPortal.UpdateUserSuccessDataInvitedBy);
  }
}(this, function(ApiClient, RegisterMyselfSuccessEmails, RegisterMyselfSuccessPhoneNumbers, UpdateUserSuccessDataCreatedByAdmin, UpdateUserSuccessDataInvitedBy) {
  'use strict';



  /**
   * The RegisterMyselfSuccessData model module.
   * @module model/RegisterMyselfSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>RegisterMyselfSuccessData</code>.
   * @alias module:model/RegisterMyselfSuccessData
   * @class
   * @param lastName {String} User last name
   * @param country {String} User country (ISO 3166-1 alpha3 format)
   * @param createdByAdmin {module:model/UpdateUserSuccessDataCreatedByAdmin} 
   * @param initializationDate {Date} User initialization date
   * @param organisationId {String} In addition to User companyId, optional identifier to indicate the user belongs also to an organization
   * @param invitedBy {module:model/UpdateUserSuccessDataInvitedBy} 
   * @param isTerminated {Boolean} Indicates if the Rainbow account of this user has been deleted
   * @param displayName {String} User display name (firstName + lastName concatenated on server side)
   * @param timezone {String} User timezone name
   * @param jidIm {String} User Jabber IM identifier
   * @param lastUpdateDate {Date} Date of last user update (whatever the field updated)
   * @param jobTitle {String} User job title
   * @param roles {Array.<String>} List of user roles (Array of String)    Note: `company_support` role is only used for support redirection. If a user writes a #support ticket and have the role `company_support`, the ticket will be sent to ALE's support (otherwise the ticket is sent to user's company's `supportEmail` address is set, ALE otherwise).
   * @param companyName {String} User company name
   * @param isInitialized {Boolean} Is user initialized
   * @param language {String} User language (ISO 639-1 code format, with possibility of regional variation. Ex: both 'en' and 'en-US' are supported)
   * @param lastLoginDate {Date} Date of last user login (defined even if user is logged out)
   * @param title {String} User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...)
   * @param isActive {Boolean} Is user active
   * @param firstLoginDate {Date} Date of first user login (only set the first time user logs in, null if user never logged in)
   * @param phoneNumbers {Array.<module:model/RegisterMyselfSuccessPhoneNumbers>} Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).  
   * @param jidTel {String} User Jabber TEL identifier
   * @param loginEmail {String} User email address (used for login)
   * @param emails {Array.<module:model/RegisterMyselfSuccessEmails>} Array of user emails addresses objects
   * @param timeToLive {Number} Duration in second to wait before automatically starting a user deletion from the creation date.    Once the timeToLive has been reached, the user won't be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment.    Value -1 means timeToLive is disable (i.e. user account will not expire).
   * @param createdBySelfRegister {Boolean} true if user has been created using self register
   * @param guestMode {Boolean} Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @param id {String} User unique identifier
   * @param adminType {String} In case of user's is 'admin', define the subtype (organisation_admin, company_admin, site_admin (default undefined)
   * @param nickName {String} User nickName
   * @param loggedSince {Date} Date of last user login (null if user is logged out)
   * @param creationDate {Date} User creation date
   * @param tags {Array.<String>} An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    `tags` can only be set by users who have administrator rights on the user. The user can't modify the tags.    The tags are visible by the user and all users belonging to his organisation/company, and can be used with the search API to search the user based on his tags.
   * @param jidPassword {String} User Jabber IM and TEL password
   * @param firstName {String} User first name
   * @param companyId {String} User company unique identifier
   * @param siteId {String} In addition to User companyId, optional identifier to indicate the user belongs also to a site
   * @param authenticationType {String} User authentication type (if not set company default authentication will be used)
   * @param activationDate {Date} User activation date
   * @param lastAvatarUpdateDate {Date} Date of last user avatar create/update, null if no avatar
   */
  var exports = function(lastName, country, createdByAdmin, initializationDate, organisationId, invitedBy, isTerminated, displayName, timezone, jidIm, lastUpdateDate, jobTitle, roles, companyName, isInitialized, language, lastLoginDate, title, isActive, firstLoginDate, phoneNumbers, jidTel, loginEmail, emails, timeToLive, createdBySelfRegister, guestMode, id, adminType, nickName, loggedSince, creationDate, tags, jidPassword, firstName, companyId, siteId, authenticationType, activationDate, lastAvatarUpdateDate) {
    var _this = this;

    _this['lastName'] = lastName;
    _this['country'] = country;
    _this['createdByAdmin'] = createdByAdmin;
    _this['initializationDate'] = initializationDate;
    _this['organisationId'] = organisationId;
    _this['invitedBy'] = invitedBy;
    _this['isTerminated'] = isTerminated;
    _this['displayName'] = displayName;
    _this['timezone'] = timezone;
    _this['jid_im'] = jidIm;
    _this['lastUpdateDate'] = lastUpdateDate;
    _this['jobTitle'] = jobTitle;
    _this['roles'] = roles;
    _this['companyName'] = companyName;
    _this['isInitialized'] = isInitialized;
    _this['language'] = language;
    _this['lastLoginDate'] = lastLoginDate;
    _this['title'] = title;
    _this['isActive'] = isActive;
    _this['firstLoginDate'] = firstLoginDate;
    _this['phoneNumbers'] = phoneNumbers;
    _this['jid_tel'] = jidTel;
    _this['loginEmail'] = loginEmail;
    _this['emails'] = emails;
    _this['timeToLive'] = timeToLive;
    _this['createdBySelfRegister'] = createdBySelfRegister;
    _this['guestMode'] = guestMode;
    _this['id'] = id;
    _this['adminType'] = adminType;
    _this['nickName'] = nickName;
    _this['loggedSince'] = loggedSince;
    _this['creationDate'] = creationDate;
    _this['tags'] = tags;
    _this['jid_password'] = jidPassword;
    _this['firstName'] = firstName;
    _this['companyId'] = companyId;
    _this['siteId'] = siteId;
    _this['authenticationType'] = authenticationType;
    _this['activationDate'] = activationDate;
    _this['lastAvatarUpdateDate'] = lastAvatarUpdateDate;
  };

  /**
   * Constructs a <code>RegisterMyselfSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegisterMyselfSuccessData} obj Optional instance to populate.
   * @return {module:model/RegisterMyselfSuccessData} The populated <code>RegisterMyselfSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('createdByAdmin')) {
        obj['createdByAdmin'] = UpdateUserSuccessDataCreatedByAdmin.constructFromObject(data['createdByAdmin']);
      }
      if (data.hasOwnProperty('initializationDate')) {
        obj['initializationDate'] = ApiClient.convertToType(data['initializationDate'], 'Date');
      }
      if (data.hasOwnProperty('organisationId')) {
        obj['organisationId'] = ApiClient.convertToType(data['organisationId'], 'String');
      }
      if (data.hasOwnProperty('invitedBy')) {
        obj['invitedBy'] = UpdateUserSuccessDataInvitedBy.constructFromObject(data['invitedBy']);
      }
      if (data.hasOwnProperty('isTerminated')) {
        obj['isTerminated'] = ApiClient.convertToType(data['isTerminated'], 'Boolean');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('isInitialized')) {
        obj['isInitialized'] = ApiClient.convertToType(data['isInitialized'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('lastLoginDate')) {
        obj['lastLoginDate'] = ApiClient.convertToType(data['lastLoginDate'], 'Date');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('firstLoginDate')) {
        obj['firstLoginDate'] = ApiClient.convertToType(data['firstLoginDate'], 'Date');
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [RegisterMyselfSuccessPhoneNumbers]);
      }
      if (data.hasOwnProperty('jid_tel')) {
        obj['jid_tel'] = ApiClient.convertToType(data['jid_tel'], 'String');
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [RegisterMyselfSuccessEmails]);
      }
      if (data.hasOwnProperty('timeToLive')) {
        obj['timeToLive'] = ApiClient.convertToType(data['timeToLive'], 'Number');
      }
      if (data.hasOwnProperty('createdBySelfRegister')) {
        obj['createdBySelfRegister'] = ApiClient.convertToType(data['createdBySelfRegister'], 'Boolean');
      }
      if (data.hasOwnProperty('guestMode')) {
        obj['guestMode'] = ApiClient.convertToType(data['guestMode'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('adminType')) {
        obj['adminType'] = ApiClient.convertToType(data['adminType'], 'String');
      }
      if (data.hasOwnProperty('nickName')) {
        obj['nickName'] = ApiClient.convertToType(data['nickName'], 'String');
      }
      if (data.hasOwnProperty('loggedSince')) {
        obj['loggedSince'] = ApiClient.convertToType(data['loggedSince'], 'Date');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('jid_password')) {
        obj['jid_password'] = ApiClient.convertToType(data['jid_password'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
      }
      if (data.hasOwnProperty('activationDate')) {
        obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
      }
      if (data.hasOwnProperty('lastAvatarUpdateDate')) {
        obj['lastAvatarUpdateDate'] = ApiClient.convertToType(data['lastAvatarUpdateDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * User last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * User country (ISO 3166-1 alpha3 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/UpdateUserSuccessDataCreatedByAdmin} createdByAdmin
   */
  exports.prototype['createdByAdmin'] = undefined;
  /**
   * User initialization date
   * @member {Date} initializationDate
   */
  exports.prototype['initializationDate'] = undefined;
  /**
   * In addition to User companyId, optional identifier to indicate the user belongs also to an organization
   * @member {String} organisationId
   */
  exports.prototype['organisationId'] = undefined;
  /**
   * @member {module:model/UpdateUserSuccessDataInvitedBy} invitedBy
   */
  exports.prototype['invitedBy'] = undefined;
  /**
   * Indicates if the Rainbow account of this user has been deleted
   * @member {Boolean} isTerminated
   */
  exports.prototype['isTerminated'] = undefined;
  /**
   * User display name (firstName + lastName concatenated on server side)
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * User timezone name
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * User Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * Date of last user update (whatever the field updated)
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * User job title
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * List of user roles (Array of String)    Note: `company_support` role is only used for support redirection. If a user writes a #support ticket and have the role `company_support`, the ticket will be sent to ALE's support (otherwise the ticket is sent to user's company's `supportEmail` address is set, ALE otherwise).
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * User company name
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Is user initialized
   * @member {Boolean} isInitialized
   */
  exports.prototype['isInitialized'] = undefined;
  /**
   * User language (ISO 639-1 code format, with possibility of regional variation. Ex: both 'en' and 'en-US' are supported)
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Date of last user login (defined even if user is logged out)
   * @member {Date} lastLoginDate
   */
  exports.prototype['lastLoginDate'] = undefined;
  /**
   * User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...)
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Is user active
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * Date of first user login (only set the first time user logs in, null if user never logged in)
   * @member {Date} firstLoginDate
   */
  exports.prototype['firstLoginDate'] = undefined;
  /**
   * Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).  
   * @member {Array.<module:model/RegisterMyselfSuccessPhoneNumbers>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * User Jabber TEL identifier
   * @member {String} jid_tel
   */
  exports.prototype['jid_tel'] = undefined;
  /**
   * User email address (used for login)
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * Array of user emails addresses objects
   * @member {Array.<module:model/RegisterMyselfSuccessEmails>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Duration in second to wait before automatically starting a user deletion from the creation date.    Once the timeToLive has been reached, the user won't be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment.    Value -1 means timeToLive is disable (i.e. user account will not expire).
   * @member {Number} timeToLive
   */
  exports.prototype['timeToLive'] = undefined;
  /**
   * true if user has been created using self register
   * @member {Boolean} createdBySelfRegister
   */
  exports.prototype['createdBySelfRegister'] = undefined;
  /**
   * Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @member {Boolean} guestMode
   */
  exports.prototype['guestMode'] = undefined;
  /**
   * User unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * When country is 'USA' or 'CAN', a state can be defined. Else it is not managed.
   * @member {module:model/RegisterMyselfSuccessData.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * In case of user's is 'admin', define the subtype (organisation_admin, company_admin, site_admin (default undefined)
   * @member {String} adminType
   */
  exports.prototype['adminType'] = undefined;
  /**
   * User nickName
   * @member {String} nickName
   */
  exports.prototype['nickName'] = undefined;
  /**
   * Date of last user login (null if user is logged out)
   * @member {Date} loggedSince
   */
  exports.prototype['loggedSince'] = undefined;
  /**
   * User creation date
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    `tags` can only be set by users who have administrator rights on the user. The user can't modify the tags.    The tags are visible by the user and all users belonging to his organisation/company, and can be used with the search API to search the user based on his tags.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * User Jabber IM and TEL password
   * @member {String} jid_password
   */
  exports.prototype['jid_password'] = undefined;
  /**
   * User first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * User company unique identifier
   * @member {String} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * In addition to User companyId, optional identifier to indicate the user belongs also to a site
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * User authentication type (if not set company default authentication will be used)
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
  /**
   * User activation date
   * @member {Date} activationDate
   */
  exports.prototype['activationDate'] = undefined;
  /**
   * Date of last user avatar create/update, null if no avatar
   * @member {Date} lastAvatarUpdateDate
   */
  exports.prototype['lastAvatarUpdateDate'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "AK"
     * @const
     */
    "AK": "AK",
    /**
     * value: "AL"
     * @const
     */
    "AL": "AL",
    /**
     * value: "...."
     * @const
     */
    "....": "....",
    /**
     * value: "NY"
     * @const
     */
    "NY": "NY",
    /**
     * value: "WY"
     * @const
     */
    "WY": "WY"  };


  return exports;
}));


