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
    define(['ApiClient', 'model/AdminBotsDeleteBotsSuccess', 'model/AdminBotsGetBotIdSuccess', 'model/AdminBotsGetBotsSuccess', 'model/AdminBotsPostBots', 'model/AdminBotsPostBotsSuccess', 'model/AdminBotsPutBots', 'model/AdminBotsPutBotsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdminBotsDeleteBotsSuccess'), require('../model/AdminBotsGetBotIdSuccess'), require('../model/AdminBotsGetBotsSuccess'), require('../model/AdminBotsPostBots'), require('../model/AdminBotsPostBotsSuccess'), require('../model/AdminBotsPutBots'), require('../model/AdminBotsPutBotsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.BotsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.AdminBotsDeleteBotsSuccess, root.RainbowAdminPortal.AdminBotsGetBotIdSuccess, root.RainbowAdminPortal.AdminBotsGetBotsSuccess, root.RainbowAdminPortal.AdminBotsPostBots, root.RainbowAdminPortal.AdminBotsPostBotsSuccess, root.RainbowAdminPortal.AdminBotsPutBots, root.RainbowAdminPortal.AdminBotsPutBotsSuccess);
  }
}(this, function(ApiClient, AdminBotsDeleteBotsSuccess, AdminBotsGetBotIdSuccess, AdminBotsGetBotsSuccess, AdminBotsPostBots, AdminBotsPostBotsSuccess, AdminBotsPutBots, AdminBotsPutBotsSuccess) {
  'use strict';

  /**
   * Bots service.
   * @module api/BotsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new BotsApi. 
   * @alias module:api/BotsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a bot service.
     * @param {String} botId Bot service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminBotsDeleteBotsSuccess} and HTTP response
     */
    this.adminBotsDeleteBotsWithHttpInfo = function(botId, accept) {
      var postBody = null;

      // verify the required parameter 'botId' is set
      if (botId === undefined || botId === null) {
        throw new Error("Missing the required parameter 'botId' when calling adminBotsDeleteBots");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminBotsDeleteBots");
      }


      var pathParams = {
        'botId': botId
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
      var returnType = AdminBotsDeleteBotsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/bots/{botId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a bot service.
     * @param {String} botId Bot service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminBotsDeleteBotsSuccess}
     */
    this.adminBotsDeleteBots = function(botId, accept) {
      return this.adminBotsDeleteBotsWithHttpInfo(botId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a bot service data.
     * @param {String} botId Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminBotsGetBotIdSuccess} and HTTP response
     */
    this.adminBotsGetBotIdWithHttpInfo = function(botId, accept) {
      var postBody = null;

      // verify the required parameter 'botId' is set
      if (botId === undefined || botId === null) {
        throw new Error("Missing the required parameter 'botId' when calling adminBotsGetBotId");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminBotsGetBotId");
      }


      var pathParams = {
        'botId': botId
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
      var returnType = AdminBotsGetBotIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/bots/{botId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a bot service data.
     * @param {String} botId Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminBotsGetBotIdSuccess}
     */
    this.adminBotsGetBotId = function(botId, accept) {
      return this.adminBotsGetBotIdWithHttpInfo(botId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all bot services.
     * This API can be used to retrieve the list of bot services whatever the service owner.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less bot services details in response.    - &#x60;small&#x60;: id, name, jid    - &#x60;medium&#x60;: id, name, jid    - &#x60;full&#x60;: id, name, jid, createdByUserId, createdByLoginEmail
     * @param {Number} opts.limit Allow to specify the number of bot services to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort bots list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting bots list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminBotsGetBotsSuccess} and HTTP response
     */
    this.adminBotsGetBotsWithHttpInfo = function(accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminBotsGetBots");
      }


      var pathParams = {
      };
      var queryParams = {
        'format': opts['format'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortField': opts['sortField'],
        'sortOrder': opts['sortOrder'],
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
      var returnType = AdminBotsGetBotsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/bots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all bot services.
     * This API can be used to retrieve the list of bot services whatever the service owner.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less bot services details in response.    - &#x60;small&#x60;: id, name, jid    - &#x60;medium&#x60;: id, name, jid    - &#x60;full&#x60;: id, name, jid, createdByUserId, createdByLoginEmail
     * @param {Number} opts.limit Allow to specify the number of bot services to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort bots list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting bots list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminBotsGetBotsSuccess}
     */
    this.adminBotsGetBots = function(accept, opts) {
      return this.adminBotsGetBotsWithHttpInfo(accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a bot service.
     * Rainbow superadmin can create/delete bot services. [todo - TBC]
     * @param {module:model/AdminBotsPostBots} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminBotsPostBotsSuccess} and HTTP response
     */
    this.adminBotsPostBotsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminBotsPostBots");
      }


      var pathParams = {
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
      var returnType = AdminBotsPostBotsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/bots', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a bot service.
     * Rainbow superadmin can create/delete bot services. [todo - TBC]
     * @param {module:model/AdminBotsPostBots} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminBotsPostBotsSuccess}
     */
    this.adminBotsPostBots = function(body) {
      return this.adminBotsPostBotsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a bot service.
     * @param {String} botId Bot service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {module:model/AdminBotsPutBots} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminBotsPutBotsSuccess} and HTTP response
     */
    this.adminBotsPutBotsWithHttpInfo = function(botId, body) {
      var postBody = body;

      // verify the required parameter 'botId' is set
      if (botId === undefined || botId === null) {
        throw new Error("Missing the required parameter 'botId' when calling adminBotsPutBots");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminBotsPutBots");
      }


      var pathParams = {
        'botId': botId
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
      var returnType = AdminBotsPutBotsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/bots/{botId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a bot service.
     * @param {String} botId Bot service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {module:model/AdminBotsPutBots} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminBotsPutBotsSuccess}
     */
    this.adminBotsPutBots = function(botId, body) {
      return this.adminBotsPutBotsWithHttpInfo(botId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
