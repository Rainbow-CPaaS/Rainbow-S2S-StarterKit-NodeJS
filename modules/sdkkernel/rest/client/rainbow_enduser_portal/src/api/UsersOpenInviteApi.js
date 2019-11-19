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
    define(['ApiClient', 'model/BindPersonaOpenInviteWithRoomId', 'model/BindPersonaOpenInviteWithRoomIdSuccess', 'model/CreateOrResetPersonalOpenInviteSuccess', 'model/GetPersonalOpenInviteSuccess', 'model/UnbindOpenInviteWithRoomIdSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BindPersonaOpenInviteWithRoomId'), require('../model/BindPersonaOpenInviteWithRoomIdSuccess'), require('../model/CreateOrResetPersonalOpenInviteSuccess'), require('../model/GetPersonalOpenInviteSuccess'), require('../model/UnbindOpenInviteWithRoomIdSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.UsersOpenInviteApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.BindPersonaOpenInviteWithRoomId, root.RainbowEnduserPortal.BindPersonaOpenInviteWithRoomIdSuccess, root.RainbowEnduserPortal.CreateOrResetPersonalOpenInviteSuccess, root.RainbowEnduserPortal.GetPersonalOpenInviteSuccess, root.RainbowEnduserPortal.UnbindOpenInviteWithRoomIdSuccess);
  }
}(this, function(ApiClient, BindPersonaOpenInviteWithRoomId, BindPersonaOpenInviteWithRoomIdSuccess, CreateOrResetPersonalOpenInviteSuccess, GetPersonalOpenInviteSuccess, UnbindOpenInviteWithRoomIdSuccess) {
  'use strict';

  /**
   * UsersOpenInvite service.
   * @module api/UsersOpenInviteApi
   * @version 1.84.0
   */

  /**
   * Constructs a new UsersOpenInviteApi. 
   * @alias module:api/UsersOpenInviteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Bind a personal openInviteId with a roomId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {module:model/BindPersonaOpenInviteWithRoomId} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BindPersonaOpenInviteWithRoomIdSuccess} and HTTP response
     */
    this.bindPersonaOpenInviteWithRoomIdWithHttpInfo = function(userId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling bindPersonaOpenInviteWithRoomId");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bindPersonaOpenInviteWithRoomId");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BindPersonaOpenInviteWithRoomIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/open-invites/bind', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Bind a personal openInviteId with a roomId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {module:model/BindPersonaOpenInviteWithRoomId} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BindPersonaOpenInviteWithRoomIdSuccess}
     */
    this.bindPersonaOpenInviteWithRoomId = function(userId, body) {
      return this.bindPersonaOpenInviteWithRoomIdWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or Reset a personal openInviteId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateOrResetPersonalOpenInviteSuccess} and HTTP response
     */
    this.createOrResetPersonalOpenInviteWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createOrResetPersonalOpenInvite");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CreateOrResetPersonalOpenInviteSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/open-invites/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create or Reset a personal openInviteId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateOrResetPersonalOpenInviteSuccess}
     */
    this.createOrResetPersonalOpenInvite = function(userId) {
      return this.createOrResetPersonalOpenInviteWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get my personal openInviteId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPersonalOpenInviteSuccess} and HTTP response
     */
    this.getPersonalOpenInviteWithHttpInfo = function(userId, accept) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPersonalOpenInvite");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getPersonalOpenInvite");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetPersonalOpenInviteSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/open-invites', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get my personal openInviteId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPersonalOpenInviteSuccess}
     */
    this.getPersonalOpenInvite = function(userId, accept) {
      return this.getPersonalOpenInviteWithHttpInfo(userId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unbind a personal openInviteId with a roomId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnbindOpenInviteWithRoomIdSuccess} and HTTP response
     */
    this.unbindOpenInviteWithRoomIdWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unbindOpenInviteWithRoomId");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UnbindOpenInviteWithRoomIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/open-invites/unbind', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unbind a personal openInviteId with a roomId
     * use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UnbindOpenInviteWithRoomIdSuccess}
     */
    this.unbindOpenInviteWithRoomId = function(userId) {
      return this.unbindOpenInviteWithRoomIdWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
