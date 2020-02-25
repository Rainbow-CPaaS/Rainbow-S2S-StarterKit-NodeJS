/**
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
 *
 * OpenAPI spec version: 1.104.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeleteMetricsSuccess', 'model/GetApiRainbowAuthenticationV10AboutSuccess', 'model/GetApiRainbowPingSuccess', 'model/GetMetricsSuccess', 'model/PutApiRainbowLogsLevels', 'model/PutApiRainbowLogsLevelsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteMetricsSuccess'), require('../model/GetApiRainbowAuthenticationV10AboutSuccess'), require('../model/GetApiRainbowPingSuccess'), require('../model/GetMetricsSuccess'), require('../model/PutApiRainbowLogsLevels'), require('../model/PutApiRainbowLogsLevelsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.CommonApi = factory(root.RainbowAuthenticationPortal.ApiClient, root.RainbowAuthenticationPortal.DeleteMetricsSuccess, root.RainbowAuthenticationPortal.GetApiRainbowAuthenticationV10AboutSuccess, root.RainbowAuthenticationPortal.GetApiRainbowPingSuccess, root.RainbowAuthenticationPortal.GetMetricsSuccess, root.RainbowAuthenticationPortal.PutApiRainbowLogsLevels, root.RainbowAuthenticationPortal.PutApiRainbowLogsLevelsSuccess);
  }
}(this, function(ApiClient, DeleteMetricsSuccess, GetApiRainbowAuthenticationV10AboutSuccess, GetApiRainbowPingSuccess, GetMetricsSuccess, PutApiRainbowLogsLevels, PutApiRainbowLogsLevelsSuccess) {
  'use strict';

  /**
   * Common service.
   * @module api/CommonApi
   * @version 1.104.0
   */

  /**
   * Constructs a new CommonApi. 
   * @alias module:api/CommonApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Clear performance metrics
     * Clear metrics
     * @param {String} accept application/json.  Then the result is in JSON format. For other cases the result is in text format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteMetricsSuccess} and HTTP response
     */
    this.deleteMetricsWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteMetrics");
      }


      var pathParams = {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = DeleteMetricsSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/metrics', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear performance metrics
     * Clear metrics
     * @param {String} accept application/json.  Then the result is in JSON format. For other cases the result is in text format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteMetricsSuccess}
     */
    this.deleteMetrics = function(accept) {
      return this.deleteMetricsWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * About authentication portal
     * Get portal information (module name, version)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetApiRainbowAuthenticationV10AboutSuccess} and HTTP response
     */
    this.getApiRainbowAuthenticationV10AboutWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getApiRainbowAuthenticationV10About");
      }


      var pathParams = {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetApiRainbowAuthenticationV10AboutSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/authentication/v1.0/about', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * About authentication portal
     * Get portal information (module name, version)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetApiRainbowAuthenticationV10AboutSuccess}
     */
    this.getApiRainbowAuthenticationV10About = function(accept) {
      return this.getApiRainbowAuthenticationV10AboutWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get authentication portal status report
     * This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetApiRainbowPingSuccess} and HTTP response
     */
    this.getApiRainbowPingWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getApiRainbowPing");
      }


      var pathParams = {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetApiRainbowPingSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/ping', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get authentication portal status report
     * This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetApiRainbowPingSuccess}
     */
    this.getApiRainbowPing = function(accept) {
      return this.getApiRainbowPingWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get performance metrics
     * Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param {String} accept application/json.  Then the result is in  JSON format. For other cases the result is in text format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetMetricsSuccess} and HTTP response
     */
    this.getMetricsWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getMetrics");
      }


      var pathParams = {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = GetMetricsSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/metrics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get performance metrics
     * Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param {String} accept application/json.  Then the result is in  JSON format. For other cases the result is in text format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetMetricsSuccess}
     */
    this.getMetrics = function(accept) {
      return this.getMetricsWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change log level
     * Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)
     * @param {module:model/PutApiRainbowLogsLevels} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutApiRainbowLogsLevelsSuccess} and HTTP response
     */
    this.putApiRainbowLogsLevelsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putApiRainbowLogsLevels");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PutApiRainbowLogsLevelsSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/logs/levels', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change log level
     * Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)
     * @param {module:model/PutApiRainbowLogsLevels} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutApiRainbowLogsLevelsSuccess}
     */
    this.putApiRainbowLogsLevels = function(body) {
      return this.putApiRainbowLogsLevelsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
