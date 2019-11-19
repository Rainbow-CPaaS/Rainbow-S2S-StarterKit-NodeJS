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
    define(['ApiClient', 'model/PostSystemsGroupsSuccessSystems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostSystemsGroupsSuccessSystems'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.PostSystemsGroupsSuccess = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.PostSystemsGroupsSuccessSystems);
  }
}(this, function(ApiClient, PostSystemsGroupsSuccessSystems) {
  'use strict';



  /**
   * The PostSystemsGroupsSuccess model module.
   * @module model/PostSystemsGroupsSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PostSystemsGroupsSuccess</code>.
   * @alias module:model/PostSystemsGroupsSuccess
   * @class
   * @param name {String} Group name describing a private network of pabx
   * @param companies {Array.<String>} List of Company unique identifier.
   * @param systems {Array.<module:model/PostSystemsGroupsSuccessSystems>} List of Objects (systemId : Systems unique identifier, pbxId : Call Control Agent (CCA) login)
   * @param id {String} SystemsGroup unique identifier
   */
  var exports = function(name, companies, systems, id) {
    var _this = this;

    _this['name'] = name;
    _this['companies'] = companies;
    _this['systems'] = systems;
    _this['id'] = id;
  };

  /**
   * Constructs a <code>PostSystemsGroupsSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostSystemsGroupsSuccess} obj Optional instance to populate.
   * @return {module:model/PostSystemsGroupsSuccess} The populated <code>PostSystemsGroupsSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('companies')) {
        obj['companies'] = ApiClient.convertToType(data['companies'], ['String']);
      }
      if (data.hasOwnProperty('systems')) {
        obj['systems'] = ApiClient.convertToType(data['systems'], [PostSystemsGroupsSuccessSystems]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Group name describing a private network of pabx
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * List of Company unique identifier.
   * @member {Array.<String>} companies
   */
  exports.prototype['companies'] = undefined;
  /**
   * List of Objects (systemId : Systems unique identifier, pbxId : Call Control Agent (CCA) login)
   * @member {Array.<module:model/PostSystemsGroupsSuccessSystems>} systems
   */
  exports.prototype['systems'] = undefined;
  /**
   * SystemsGroup unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


