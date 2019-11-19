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
    define(['ApiClient', 'model/AdminDeleteRainbowProfilesFeaturesSuccess', 'model/AdminDeleteRainbowProfilesSuccess', 'model/AdminGetRainbowProfileByIdSuccess', 'model/AdminPostRainbowProfiles', 'model/AdminPostRainbowProfilesFeatures', 'model/AdminPostRainbowProfilesFeaturesSuccess', 'model/AdminPostRainbowProfilesSuccess', 'model/AdminPutRainbowProfiles', 'model/AdminPutRainbowProfilesFeatures', 'model/AdminPutRainbowProfilesFeaturesSuccess', 'model/AdminPutRainbowProfilesSuccess', 'model/GetApiRainbowAdminV10ProfilesSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdminDeleteRainbowProfilesFeaturesSuccess'), require('../model/AdminDeleteRainbowProfilesSuccess'), require('../model/AdminGetRainbowProfileByIdSuccess'), require('../model/AdminPostRainbowProfiles'), require('../model/AdminPostRainbowProfilesFeatures'), require('../model/AdminPostRainbowProfilesFeaturesSuccess'), require('../model/AdminPostRainbowProfilesSuccess'), require('../model/AdminPutRainbowProfiles'), require('../model/AdminPutRainbowProfilesFeatures'), require('../model/AdminPutRainbowProfilesFeaturesSuccess'), require('../model/AdminPutRainbowProfilesSuccess'), require('../model/GetApiRainbowAdminV10ProfilesSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.RainbowProfilesApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.AdminDeleteRainbowProfilesFeaturesSuccess, root.RainbowAdminPortal.AdminDeleteRainbowProfilesSuccess, root.RainbowAdminPortal.AdminGetRainbowProfileByIdSuccess, root.RainbowAdminPortal.AdminPostRainbowProfiles, root.RainbowAdminPortal.AdminPostRainbowProfilesFeatures, root.RainbowAdminPortal.AdminPostRainbowProfilesFeaturesSuccess, root.RainbowAdminPortal.AdminPostRainbowProfilesSuccess, root.RainbowAdminPortal.AdminPutRainbowProfiles, root.RainbowAdminPortal.AdminPutRainbowProfilesFeatures, root.RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess, root.RainbowAdminPortal.AdminPutRainbowProfilesSuccess, root.RainbowAdminPortal.GetApiRainbowAdminV10ProfilesSuccess);
  }
}(this, function(ApiClient, AdminDeleteRainbowProfilesFeaturesSuccess, AdminDeleteRainbowProfilesSuccess, AdminGetRainbowProfileByIdSuccess, AdminPostRainbowProfiles, AdminPostRainbowProfilesFeatures, AdminPostRainbowProfilesFeaturesSuccess, AdminPostRainbowProfilesSuccess, AdminPutRainbowProfiles, AdminPutRainbowProfilesFeatures, AdminPutRainbowProfilesFeaturesSuccess, AdminPutRainbowProfilesSuccess, GetApiRainbowAdminV10ProfilesSuccess) {
  'use strict';

  /**
   * RainbowProfiles service.
   * @module api/RainbowProfilesApi
   * @version 1.82.0
   */

  /**
   * Constructs a new RainbowProfilesApi. 
   * @alias module:api/RainbowProfilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a profile
     * This API can be used to delete a profile.    Deletion of profile is not allowed if this profile is associated to offers or company subscriptions
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminDeleteRainbowProfilesSuccess} and HTTP response
     */
    this.adminDeleteRainbowProfilesWithHttpInfo = function(profileId, accept) {
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminDeleteRainbowProfiles");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminDeleteRainbowProfiles");
      }


      var pathParams = {
        'profileId': profileId
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
      var returnType = AdminDeleteRainbowProfilesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a profile
     * This API can be used to delete a profile.    Deletion of profile is not allowed if this profile is associated to offers or company subscriptions
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminDeleteRainbowProfilesSuccess}
     */
    this.adminDeleteRainbowProfiles = function(profileId, accept) {
      return this.adminDeleteRainbowProfilesWithHttpInfo(profileId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a feature from a profile
     * This API can be used to remove a feature from a profile.    Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to remove from the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminDeleteRainbowProfilesFeaturesSuccess} and HTTP response
     */
    this.adminDeleteRainbowProfilesFeaturesWithHttpInfo = function(featureId, profileId, accept) {
      var postBody = null;

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling adminDeleteRainbowProfilesFeatures");
      }

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminDeleteRainbowProfilesFeatures");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminDeleteRainbowProfilesFeatures");
      }


      var pathParams = {
        'featureId': featureId,
        'profileId': profileId
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
      var returnType = AdminDeleteRainbowProfilesFeaturesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a feature from a profile
     * This API can be used to remove a feature from a profile.    Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to remove from the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminDeleteRainbowProfilesFeaturesSuccess}
     */
    this.adminDeleteRainbowProfilesFeatures = function(featureId, profileId, accept) {
      return this.adminDeleteRainbowProfilesFeaturesWithHttpInfo(featureId, profileId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a profile
     * Get a profile from its id    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/profile/5745b147f0674c7c43417997
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminGetRainbowProfileByIdSuccess} and HTTP response
     */
    this.adminGetRainbowProfileByIdWithHttpInfo = function(profileId, accept) {
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminGetRainbowProfileById");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling adminGetRainbowProfileById");
      }


      var pathParams = {
        'profileId': profileId
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
      var returnType = AdminGetRainbowProfileByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a profile
     * Get a profile from its id    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/profile/5745b147f0674c7c43417997
     * @param {String} profileId Profile unique identifier.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminGetRainbowProfileByIdSuccess}
     */
    this.adminGetRainbowProfileById = function(profileId, accept) {
      return this.adminGetRainbowProfileByIdWithHttpInfo(profileId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a profile
     * This API can be used to create a profile.
     * @param {module:model/AdminPostRainbowProfiles} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPostRainbowProfilesSuccess} and HTTP response
     */
    this.adminPostRainbowProfilesWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminPostRainbowProfiles");
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
      var returnType = AdminPostRainbowProfilesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a profile
     * This API can be used to create a profile.
     * @param {module:model/AdminPostRainbowProfiles} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPostRainbowProfilesSuccess}
     */
    this.adminPostRainbowProfiles = function(body) {
      return this.adminPostRainbowProfilesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a feature to a profile
     * This API can be used to add a feature to a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to add in the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPostRainbowProfilesFeatures} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPostRainbowProfilesFeaturesSuccess} and HTTP response
     */
    this.adminPostRainbowProfilesFeaturesWithHttpInfo = function(featureId, profileId, body) {
      var postBody = body;

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling adminPostRainbowProfilesFeatures");
      }

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminPostRainbowProfilesFeatures");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminPostRainbowProfilesFeatures");
      }


      var pathParams = {
        'featureId': featureId,
        'profileId': profileId
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
      var returnType = AdminPostRainbowProfilesFeaturesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a feature to a profile
     * This API can be used to add a feature to a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to add in the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPostRainbowProfilesFeatures} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPostRainbowProfilesFeaturesSuccess}
     */
    this.adminPostRainbowProfilesFeatures = function(featureId, profileId, body) {
      return this.adminPostRainbowProfilesFeaturesWithHttpInfo(featureId, profileId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a profile
     * This API can be used to update a profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPutRainbowProfiles} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPutRainbowProfilesSuccess} and HTTP response
     */
    this.adminPutRainbowProfilesWithHttpInfo = function(profileId, body) {
      var postBody = body;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminPutRainbowProfiles");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminPutRainbowProfiles");
      }


      var pathParams = {
        'profileId': profileId
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
      var returnType = AdminPutRainbowProfilesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a profile
     * This API can be used to update a profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPutRainbowProfiles} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPutRainbowProfilesSuccess}
     */
    this.adminPutRainbowProfiles = function(profileId, body) {
      return this.adminPutRainbowProfilesWithHttpInfo(profileId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a feature in a profile
     * This API can be used to update a feature for a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to update in the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPutRainbowProfilesFeatures} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPutRainbowProfilesFeaturesSuccess} and HTTP response
     */
    this.adminPutRainbowProfilesFeaturesWithHttpInfo = function(featureId, profileId, body) {
      var postBody = body;

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling adminPutRainbowProfilesFeatures");
      }

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling adminPutRainbowProfilesFeatures");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminPutRainbowProfilesFeatures");
      }


      var pathParams = {
        'featureId': featureId,
        'profileId': profileId
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
      var returnType = AdminPutRainbowProfilesFeaturesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a feature in a profile
     * This API can be used to update a feature for a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997
     * @param {String} featureId Id of the feature to update in the profile.
     * @param {String} profileId Profile unique identifier.
     * @param {module:model/AdminPutRainbowProfilesFeatures} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPutRainbowProfilesFeaturesSuccess}
     */
    this.adminPutRainbowProfilesFeatures = function(featureId, profileId, body) {
      return this.adminPutRainbowProfilesFeaturesWithHttpInfo(featureId, profileId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all profiles
     * List available profiles which can be subscribed by companies (through offers) and assigned to users.    Marketing Rainbow offers are linked to one of these profiles.    When a subscription to an offer is done for a company, the company is linked to the related profile.    When a user is associated to one of the company subscriptions, the user is linked to the related profile.    If restrictions are defined for a feature in featuresList of the profile, these restrictions are applied when user / company try to use this feature.    Profiles with isCpaasProfile field equal to true can be linked to applications profile. The featuresList defined in the application profile will be applied to users using this application.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less profile details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description    - &#x60;full&#x60;: all profile fields
     * @param {String} opts.name Allows to filter profile list on field name.
     * @param {String} opts.isCpaasProfile Allows to filter profile list on field isCpaasProfile.    Note that app_superadmin users can only list profiles with isCpaasProfile equal to true.
     * @param {Number} opts.limit Allow to specify the number of profiles to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first profile to retrieve (first profile if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort profile list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting profile list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetApiRainbowAdminV10ProfilesSuccess} and HTTP response
     */
    this.getApiRainbowAdminV10ProfilesWithHttpInfo = function(accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getApiRainbowAdminV10Profiles");
      }


      var pathParams = {
      };
      var queryParams = {
        'format': opts['format'],
        'name': opts['name'],
        'isCpaasProfile': opts['isCpaasProfile'],
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
      var returnType = GetApiRainbowAdminV10ProfilesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/profiles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all profiles
     * List available profiles which can be subscribed by companies (through offers) and assigned to users.    Marketing Rainbow offers are linked to one of these profiles.    When a subscription to an offer is done for a company, the company is linked to the related profile.    When a user is associated to one of the company subscriptions, the user is linked to the related profile.    If restrictions are defined for a feature in featuresList of the profile, these restrictions are applied when user / company try to use this feature.    Profiles with isCpaasProfile field equal to true can be linked to applications profile. The featuresList defined in the application profile will be applied to users using this application.
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less profile details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description    - &#x60;full&#x60;: all profile fields
     * @param {String} opts.name Allows to filter profile list on field name.
     * @param {String} opts.isCpaasProfile Allows to filter profile list on field isCpaasProfile.    Note that app_superadmin users can only list profiles with isCpaasProfile equal to true.
     * @param {Number} opts.limit Allow to specify the number of profiles to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first profile to retrieve (first profile if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort profile list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting profile list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetApiRainbowAdminV10ProfilesSuccess}
     */
    this.getApiRainbowAdminV10Profiles = function(accept, opts) {
      return this.getApiRainbowAdminV10ProfilesWithHttpInfo(accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
