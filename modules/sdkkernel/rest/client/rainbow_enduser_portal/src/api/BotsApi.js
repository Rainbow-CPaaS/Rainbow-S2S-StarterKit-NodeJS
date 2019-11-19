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
    define(['ApiClient', 'model/GetBotByIdSuccess', 'model/GetBotsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetBotByIdSuccess'), require('../model/GetBotsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.BotsApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.GetBotByIdSuccess, root.RainbowEnduserPortal.GetBotsSuccess);
  }
}(this, function(ApiClient, GetBotByIdSuccess, GetBotsSuccess) {
  'use strict';

  /**
   * Bots service.
   * @module api/BotsApi
   * @version 1.84.0
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
     * Get a bot service data.
     * @param {String} botId Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBotByIdSuccess} and HTTP response
     */
    this.getBotByIdWithHttpInfo = function(botId, accept) {
      var postBody = null;

      // verify the required parameter 'botId' is set
      if (botId === undefined || botId === null) {
        throw new Error("Missing the required parameter 'botId' when calling getBotById");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getBotById");
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
      var returnType = GetBotByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/bots/{botId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a bot service data.
     * @param {String} botId Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBotByIdSuccess}
     */
    this.getBotById = function(botId, accept) {
      return this.getBotByIdWithHttpInfo(botId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all bot services.
     * This API can be used to retrieve the list of bot services.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less bot services details in response.    - &#x60;small&#x60;: id, name, jid    - &#x60;medium&#x60;: id, name, jid    - &#x60;full&#x60;: id, name, jid, createdByUserId, createdByLoginEmail
     * @param {Number} opts.limit Allow to specify the number of bot services to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort bots list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting bots list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBotsSuccess} and HTTP response
     */
    this.getBotsWithHttpInfo = function(accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getBots");
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
      var returnType = GetBotsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/bots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all bot services.
     * This API can be used to retrieve the list of bot services.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less bot services details in response.    - &#x60;small&#x60;: id, name, jid    - &#x60;medium&#x60;: id, name, jid    - &#x60;full&#x60;: id, name, jid, createdByUserId, createdByLoginEmail
     * @param {Number} opts.limit Allow to specify the number of bot services to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort bots list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting bots list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBotsSuccess}
     */
    this.getBots = function(accept, opts) {
      return this.getBotsWithHttpInfo(accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
