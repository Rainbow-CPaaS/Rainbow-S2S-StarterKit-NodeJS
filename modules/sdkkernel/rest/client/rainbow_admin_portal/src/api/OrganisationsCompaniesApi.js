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
    define(['ApiClient', 'model/DeleteOrganisationCompaniesSuccess', 'model/GetOrganisationCompaniesSuccess', 'model/PostOrganisationCompanies', 'model/PostOrganisationCompaniesSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteOrganisationCompaniesSuccess'), require('../model/GetOrganisationCompaniesSuccess'), require('../model/PostOrganisationCompanies'), require('../model/PostOrganisationCompaniesSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.OrganisationsCompaniesApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.DeleteOrganisationCompaniesSuccess, root.RainbowAdminPortal.GetOrganisationCompaniesSuccess, root.RainbowAdminPortal.PostOrganisationCompanies, root.RainbowAdminPortal.PostOrganisationCompaniesSuccess);
  }
}(this, function(ApiClient, DeleteOrganisationCompaniesSuccess, GetOrganisationCompaniesSuccess, PostOrganisationCompanies, PostOrganisationCompaniesSuccess) {
  'use strict';

  /**
   * OrganisationsCompanies service.
   * @module api/OrganisationsCompaniesApi
   * @version 1.82.0
   */

  /**
   * Constructs a new OrganisationsCompaniesApi. 
   * @alias module:api/OrganisationsCompaniesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Unlink the company to an organization
     * @param {String} companyId Company unique identifier (like 5749ab92245015fe0d36e96a)
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteOrganisationCompaniesSuccess} and HTTP response
     */
    this.deleteOrganisationCompaniesWithHttpInfo = function(companyId, organisationId, accept) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteOrganisationCompanies");
      }

      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling deleteOrganisationCompanies");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteOrganisationCompanies");
      }


      var pathParams = {
        'companyId': companyId,
        'organisationId': organisationId
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
      var returnType = DeleteOrganisationCompaniesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/organisations/{organisationId}/companies/{companyId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unlink the company to an organization
     * @param {String} companyId Company unique identifier (like 5749ab92245015fe0d36e96a)
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteOrganisationCompaniesSuccess}
     */
    this.deleteOrganisationCompanies = function(companyId, organisationId, accept) {
      return this.deleteOrganisationCompaniesWithHttpInfo(companyId, organisationId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all companies linked with this organization
     * For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api gets all companies linked with an organization.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57486e5d807a594145e510d6/companies
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name, status    - &#x60;full&#x60;: all company fields
     * @param {Number} opts.limit Allow to specify the number of companies to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort company list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting company list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOrganisationCompaniesSuccess} and HTTP response
     */
    this.getOrganisationCompaniesWithHttpInfo = function(organisationId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling getOrganisationCompanies");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getOrganisationCompanies");
      }


      var pathParams = {
        'organisationId': organisationId
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
      var returnType = GetOrganisationCompaniesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/organisations/{organisationId}/companies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all companies linked with this organization
     * For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api gets all companies linked with an organization.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57486e5d807a594145e510d6/companies
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name, status    - &#x60;full&#x60;: all company fields
     * @param {Number} opts.limit Allow to specify the number of companies to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort company list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting company list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOrganisationCompaniesSuccess}
     */
    this.getOrganisationCompanies = function(organisationId, accept, opts) {
      return this.getOrganisationCompaniesWithHttpInfo(organisationId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Link a company to an organization
     * For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api links a company with the given organization. Company&#39;s users are automatically attached to this organisation.    A company must belong to only one organisation or kept single.    When an organization is deleted, the company is automatically unlinked.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57515338c5d7b862456d60a0/companies (body \&quot;companyId\&quot;:\&quot;5749ab92245015fe0d36e96a\&quot;)
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PostOrganisationCompanies} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostOrganisationCompaniesSuccess} and HTTP response
     */
    this.postOrganisationCompaniesWithHttpInfo = function(organisationId, body) {
      var postBody = body;

      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling postOrganisationCompanies");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postOrganisationCompanies");
      }


      var pathParams = {
        'organisationId': organisationId
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
      var returnType = PostOrganisationCompaniesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/organisations/{organisationId}/companies', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Link a company to an organization
     * For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api links a company with the given organization. Company&#39;s users are automatically attached to this organisation.    A company must belong to only one organisation or kept single.    When an organization is deleted, the company is automatically unlinked.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57515338c5d7b862456d60a0/companies (body \&quot;companyId\&quot;:\&quot;5749ab92245015fe0d36e96a\&quot;)
     * @param {String} organisationId Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PostOrganisationCompanies} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostOrganisationCompaniesSuccess}
     */
    this.postOrganisationCompanies = function(organisationId, body) {
      return this.postOrganisationCompaniesWithHttpInfo(organisationId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
