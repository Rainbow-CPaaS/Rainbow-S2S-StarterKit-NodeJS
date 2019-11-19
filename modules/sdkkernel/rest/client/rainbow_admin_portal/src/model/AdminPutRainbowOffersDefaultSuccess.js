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
    define(['ApiClient', 'model/AdminPutRainbowOffersDefaultSuccessProvisioningNeeded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdminPutRainbowOffersDefaultSuccessProvisioningNeeded'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.AdminPutRainbowOffersDefaultSuccess = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.AdminPutRainbowOffersDefaultSuccessProvisioningNeeded);
  }
}(this, function(ApiClient, AdminPutRainbowOffersDefaultSuccessProvisioningNeeded) {
  'use strict';



  /**
   * The AdminPutRainbowOffersDefaultSuccess model module.
   * @module model/AdminPutRainbowOffersDefaultSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>AdminPutRainbowOffersDefaultSuccess</code>.
   * @alias module:model/AdminPutRainbowOffersDefaultSuccess
   * @class
   * @param id {String} Offer unique identifier
   * @param name {String} Offer name
   * @param description {String} Offer description
   * @param technicalDescription {String} Offer technical description
   * @param isDefault {Boolean} Indicates if it is the default Rainbow offer. Only one offer can be the default one (i.e. Essential)    Default offer is the offer which related profile is automatically assigned to newly created companies and users.
   * @param creationDate {Date} Offer creation date
   * @param profileId {String} Id of the profile linked to this offer
   * @param canBeSold {Boolean} Indicates if the offer can be sold to customers.    Some offers will not be sold (Essential, Beta, ...).    If canBeSold is true, zuoraOfferId, zuoraProductRatePlanId and zuoraProductRatePlanChargeId have to be set.
   * @param businessModel {module:model/AdminPutRainbowOffersDefaultSuccess.BusinessModelEnum} Indicates the business model associated to this offer (number of users, usage, flat fee...)   * `nb_users`: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * `usage`: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * `flat_fee`: Offers having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). This should be the business model for some specific business offers like HDS. * `none`: no business model. Should be used for offers which are not sold (like Essential, Beta, ...).  
   * @param autoSubscribe {Boolean} Indicates if the offer has to be automatically subscribed at company creation.
   * @param isExclusive {Boolean} Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won't be possible to assign a second exclusive offer).    Used on GUI side to know if the offer has to be displayed as a radio button or as a check box.
   * @param isPrepaid {Boolean} Indicates if the offer is a prepaid offer
   * @param prepaidDuration {Number} Prepaid offer duration (in month).    Only set if `isPrepaid` is true.
   * @param zuoraOfferId {String} ID of the related offer in Zuora (if offer can be sold)
   * @param zuoraProductRatePlanId {String} ID of the ProductRatePlanId to use when creating a subscription for the related offer in Zuora (if offer can be sold)
   * @param zuoraProductRatePlanChargeId {String} ID of the ProductRatePlanChargeId to use when creating a subscription for the related offer in Zuora (if offer can be sold)
   * @param hasConference {Boolean} Indicates if the offer contains conference services
   * @param isDemo {Boolean} Indicates if the offer is a demo offer
   */
  var exports = function(id, name, description, technicalDescription, isDefault, creationDate, profileId, canBeSold, businessModel, autoSubscribe, isExclusive, isPrepaid, prepaidDuration, zuoraOfferId, zuoraProductRatePlanId, zuoraProductRatePlanChargeId, hasConference, isDemo) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['description'] = description;
    _this['technicalDescription'] = technicalDescription;
    _this['isDefault'] = isDefault;
    _this['creationDate'] = creationDate;
    _this['profileId'] = profileId;
    _this['canBeSold'] = canBeSold;
    _this['businessModel'] = businessModel;
    _this['autoSubscribe'] = autoSubscribe;
    _this['isExclusive'] = isExclusive;
    _this['isPrepaid'] = isPrepaid;
    _this['prepaidDuration'] = prepaidDuration;
    _this['zuoraOfferId'] = zuoraOfferId;
    _this['zuoraProductRatePlanId'] = zuoraProductRatePlanId;
    _this['zuoraProductRatePlanChargeId'] = zuoraProductRatePlanChargeId;
    _this['hasConference'] = hasConference;
    _this['isDemo'] = isDemo;
  };

  /**
   * Constructs a <code>AdminPutRainbowOffersDefaultSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminPutRainbowOffersDefaultSuccess} obj Optional instance to populate.
   * @return {module:model/AdminPutRainbowOffersDefaultSuccess} The populated <code>AdminPutRainbowOffersDefaultSuccess</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('technicalDescription')) {
        obj['technicalDescription'] = ApiClient.convertToType(data['technicalDescription'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('canBeSold')) {
        obj['canBeSold'] = ApiClient.convertToType(data['canBeSold'], 'Boolean');
      }
      if (data.hasOwnProperty('businessModel')) {
        obj['businessModel'] = ApiClient.convertToType(data['businessModel'], 'String');
      }
      if (data.hasOwnProperty('businessSpecific')) {
        obj['businessSpecific'] = ApiClient.convertToType(data['businessSpecific'], ['String']);
      }
      if (data.hasOwnProperty('autoSubscribe')) {
        obj['autoSubscribe'] = ApiClient.convertToType(data['autoSubscribe'], 'Boolean');
      }
      if (data.hasOwnProperty('isExclusive')) {
        obj['isExclusive'] = ApiClient.convertToType(data['isExclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('isPrepaid')) {
        obj['isPrepaid'] = ApiClient.convertToType(data['isPrepaid'], 'Boolean');
      }
      if (data.hasOwnProperty('prepaidDuration')) {
        obj['prepaidDuration'] = ApiClient.convertToType(data['prepaidDuration'], 'Number');
      }
      if (data.hasOwnProperty('provisioningNeeded')) {
        obj['provisioningNeeded'] = ApiClient.convertToType(data['provisioningNeeded'], [AdminPutRainbowOffersDefaultSuccessProvisioningNeeded]);
      }
      if (data.hasOwnProperty('zuoraOfferId')) {
        obj['zuoraOfferId'] = ApiClient.convertToType(data['zuoraOfferId'], 'String');
      }
      if (data.hasOwnProperty('zuoraProductRatePlanId')) {
        obj['zuoraProductRatePlanId'] = ApiClient.convertToType(data['zuoraProductRatePlanId'], 'String');
      }
      if (data.hasOwnProperty('zuoraProductRatePlanChargeId')) {
        obj['zuoraProductRatePlanChargeId'] = ApiClient.convertToType(data['zuoraProductRatePlanChargeId'], 'String');
      }
      if (data.hasOwnProperty('hasConference')) {
        obj['hasConference'] = ApiClient.convertToType(data['hasConference'], 'Boolean');
      }
      if (data.hasOwnProperty('isDemo')) {
        obj['isDemo'] = ApiClient.convertToType(data['isDemo'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Offer unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Offer name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Offer description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Offer technical description
   * @member {String} technicalDescription
   */
  exports.prototype['technicalDescription'] = undefined;
  /**
   * Indicates if it is the default Rainbow offer. Only one offer can be the default one (i.e. Essential)    Default offer is the offer which related profile is automatically assigned to newly created companies and users.
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Offer creation date
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Id of the profile linked to this offer
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * Indicates if the offer can be sold to customers.    Some offers will not be sold (Essential, Beta, ...).    If canBeSold is true, zuoraOfferId, zuoraProductRatePlanId and zuoraProductRatePlanChargeId have to be set.
   * @member {Boolean} canBeSold
   */
  exports.prototype['canBeSold'] = undefined;
  /**
   * Indicates the business model associated to this offer (number of users, usage, flat fee...)   * `nb_users`: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * `usage`: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * `flat_fee`: Offers having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). This should be the business model for some specific business offers like HDS. * `none`: no business model. Should be used for offers which are not sold (like Essential, Beta, ...).  
   * @member {module:model/AdminPutRainbowOffersDefaultSuccess.BusinessModelEnum} businessModel
   */
  exports.prototype['businessModel'] = undefined;
  /**
   * Indicates if the offer is related to specific(s) business (for verticals like HDS)   * `NONE`: This offer can be used if the company does not have a businessSpecific field. * `HDS`: This offer can only used if the company have a businessSpecific HDS (HealthCare). * If offer has no businessSpecific field (existing offers, as no migration scripts has been written), the offer is considered like if it has businessSpecific equal to [\"NONE\"].  
   * @member {Array.<String>} businessSpecific
   */
  exports.prototype['businessSpecific'] = undefined;
  /**
   * Indicates if the offer has to be automatically subscribed at company creation.
   * @member {Boolean} autoSubscribe
   */
  exports.prototype['autoSubscribe'] = undefined;
  /**
   * Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won't be possible to assign a second exclusive offer).    Used on GUI side to know if the offer has to be displayed as a radio button or as a check box.
   * @member {Boolean} isExclusive
   */
  exports.prototype['isExclusive'] = undefined;
  /**
   * Indicates if the offer is a prepaid offer
   * @member {Boolean} isPrepaid
   */
  exports.prototype['isPrepaid'] = undefined;
  /**
   * Prepaid offer duration (in month).    Only set if `isPrepaid` is true.
   * @member {Number} prepaidDuration
   */
  exports.prototype['prepaidDuration'] = undefined;
  /**
   * Array of Objects which indicates if account must be provisioned on other components when subscribing to this offer.
   * @member {Array.<module:model/AdminPutRainbowOffersDefaultSuccessProvisioningNeeded>} provisioningNeeded
   */
  exports.prototype['provisioningNeeded'] = undefined;
  /**
   * ID of the related offer in Zuora (if offer can be sold)
   * @member {String} zuoraOfferId
   */
  exports.prototype['zuoraOfferId'] = undefined;
  /**
   * ID of the ProductRatePlanId to use when creating a subscription for the related offer in Zuora (if offer can be sold)
   * @member {String} zuoraProductRatePlanId
   */
  exports.prototype['zuoraProductRatePlanId'] = undefined;
  /**
   * ID of the ProductRatePlanChargeId to use when creating a subscription for the related offer in Zuora (if offer can be sold)
   * @member {String} zuoraProductRatePlanChargeId
   */
  exports.prototype['zuoraProductRatePlanChargeId'] = undefined;
  /**
   * Indicates if the offer contains conference services
   * @member {Boolean} hasConference
   */
  exports.prototype['hasConference'] = undefined;
  /**
   * Indicates if the offer is a demo offer
   * @member {Boolean} isDemo
   */
  exports.prototype['isDemo'] = undefined;


  /**
   * Allowed values for the <code>businessModel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessModelEnum = {
    /**
     * value: "nb_users"
     * @const
     */
    "nb_users": "nb_users",
    /**
     * value: "usage"
     * @const
     */
    "usage": "usage",
    /**
     * value: "flat_fee"
     * @const
     */
    "flat_fee": "flat_fee",
    /**
     * value: "none"
     * @const
     */
    "none": "none"  };


  return exports;
}));


