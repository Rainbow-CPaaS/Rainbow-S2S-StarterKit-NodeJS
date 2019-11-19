/**
 * S2S api
 * # Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow S2S portal. This portal is dedicated to s2s features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.86.0
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
    if (!root.S2SApi) {
      root.S2SApi = {};
    }
    root.S2SApi.ConversationApi = factory(root.S2SApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Conversation service.
   * @module api/ConversationApi
   * @version 1.86.0
   */

  /**
   * Constructs a new ConversationApi. 
   * @alias module:api/ConversationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Send a chat state
     * Send a conversation state
     * @param {String} cnxId Connection id
     * @param {String} cvId Conversation id
     * @param {module:model/String} state Chatstate value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.conversationChatstateWithHttpInfo = function(cnxId, cvId, state) {
      var postBody = null;

      // verify the required parameter 'cnxId' is set
      if (cnxId === undefined || cnxId === null) {
        throw new Error("Missing the required parameter 'cnxId' when calling conversationChatstate");
      }

      // verify the required parameter 'cvId' is set
      if (cvId === undefined || cvId === null) {
        throw new Error("Missing the required parameter 'cvId' when calling conversationChatstate");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling conversationChatstate");
      }


      var pathParams = {
        'cnxId': cnxId,
        'cvId': cvId,
        'state': state
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/chatstate/{state}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send a chat state
     * Send a conversation state
     * @param {String} cnxId Connection id
     * @param {String} cvId Conversation id
     * @param {module:model/String} state Chatstate value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.conversationChatstate = function(cnxId, cvId, state) {
      return this.conversationChatstateWithHttpInfo(cnxId, cvId, state)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
