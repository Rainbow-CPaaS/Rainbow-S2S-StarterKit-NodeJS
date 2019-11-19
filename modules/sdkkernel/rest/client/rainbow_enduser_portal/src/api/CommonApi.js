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
    define(['ApiClient', 'model/DeleteMetricsSuccess', 'model/GetApiRainbowEnduserV10AboutSuccess', 'model/GetApiRainbowPingSuccess', 'model/GetMetricsSuccess', 'model/PutApiRainbowLogsLevels', 'model/PutApiRainbowLogsLevelsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteMetricsSuccess'), require('../model/GetApiRainbowEnduserV10AboutSuccess'), require('../model/GetApiRainbowPingSuccess'), require('../model/GetMetricsSuccess'), require('../model/PutApiRainbowLogsLevels'), require('../model/PutApiRainbowLogsLevelsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.CommonApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.DeleteMetricsSuccess, root.RainbowEnduserPortal.GetApiRainbowEnduserV10AboutSuccess, root.RainbowEnduserPortal.GetApiRainbowPingSuccess, root.RainbowEnduserPortal.GetMetricsSuccess, root.RainbowEnduserPortal.PutApiRainbowLogsLevels, root.RainbowEnduserPortal.PutApiRainbowLogsLevelsSuccess);
  }
}(this, function(ApiClient, DeleteMetricsSuccess, GetApiRainbowEnduserV10AboutSuccess, GetApiRainbowPingSuccess, GetMetricsSuccess, PutApiRainbowLogsLevels, PutApiRainbowLogsLevelsSuccess) {
  'use strict';

  /**
   * Common service.
   * @module api/CommonApi
   * @version 1.84.0
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
     * @param {String} accept application/json. Then the result is in JSON format. For other cases the result is in text format.
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Clear performance metrics
     * Clear metrics
     * @param {String} accept application/json. Then the result is in JSON format. For other cases the result is in text format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteMetricsSuccess}
     */
    this.deleteMetrics = function(accept) {
      return this.deleteMetricsWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * About enduser portal
     * Get portal information (module name, version)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetApiRainbowEnduserV10AboutSuccess} and HTTP response
     */
    this.getApiRainbowEnduserV10AboutWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getApiRainbowEnduserV10About");
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
      var returnType = GetApiRainbowEnduserV10AboutSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/about', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * About enduser portal
     * Get portal information (module name, version)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetApiRainbowEnduserV10AboutSuccess}
     */
    this.getApiRainbowEnduserV10About = function(accept) {
      return this.getApiRainbowEnduserV10AboutWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get enduser portal status report
     * This API allows to check enduser portal status.       If no XMPP connections are available and/or if no database connection is available, an error 503 Service Unavailable is returned.
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get enduser portal status report
     * This API allows to check enduser portal status.       If no XMPP connections are available and/or if no database connection is available, an error 503 Service Unavailable is returned.
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
     * Get portal performance metrics      It allows to show Node specific metrics like:   * processCpuTotal * processStartTime * osMemoryHeap * processOpenFileDescriptors * processMaxFileDescriptors * eventLoopLag * processHandles * processRequests * heapSizeAndUsed * heapSpacesSizeAndUsed * version  Node metrics probes are launched every 10 seconds.      A first custom metric is available to probe portal Rest API performance (an histogram of response time)      When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param {String} accept application/json. Then the result is in JSON format. For other cases the result is in text format.
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get performance metrics
     * Get portal performance metrics      It allows to show Node specific metrics like:   * processCpuTotal * processStartTime * osMemoryHeap * processOpenFileDescriptors * processMaxFileDescriptors * eventLoopLag * processHandles * processRequests * heapSizeAndUsed * heapSpacesSizeAndUsed * version  Node metrics probes are launched every 10 seconds.      A first custom metric is available to probe portal Rest API performance (an histogram of response time)      When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param {String} accept application/json. Then the result is in JSON format. For other cases the result is in text format.
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
        authNames, contentTypes, accepts, returnType, null
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
