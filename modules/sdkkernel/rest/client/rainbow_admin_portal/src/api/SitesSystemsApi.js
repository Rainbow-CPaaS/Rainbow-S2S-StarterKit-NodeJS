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
    define(['ApiClient', 'model/DeleteSiteSystemsSuccess', 'model/GetSiteSystemsSuccess', 'model/PostSiteSystems', 'model/PostSiteSystemsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteSiteSystemsSuccess'), require('../model/GetSiteSystemsSuccess'), require('../model/PostSiteSystems'), require('../model/PostSiteSystemsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.SitesSystemsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.DeleteSiteSystemsSuccess, root.RainbowAdminPortal.GetSiteSystemsSuccess, root.RainbowAdminPortal.PostSiteSystems, root.RainbowAdminPortal.PostSiteSystemsSuccess);
  }
}(this, function(ApiClient, DeleteSiteSystemsSuccess, GetSiteSystemsSuccess, PostSiteSystems, PostSiteSystemsSuccess) {
  'use strict';

  /**
   * SitesSystems service.
   * @module api/SitesSystemsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new SitesSystemsApi. 
   * @alias module:api/SitesSystemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Unlink a system to a site
     * This API allows administrator to delete a link between a system and a site       &#x60;superadmin&#x60; and &#x60;support&#x60; can unlink any systems from any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only unlink systems being linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company from sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only unlink systems being linked to sites of companies under their organisation from sites of companies under their organisation.    &#x60;company_admin&#x60; can only unlink systems being linked to sites of their company from sites of their company.    Access is denied for &#x60;site_admin&#x60;.    A system could be shared by several sites.    Last site can be detached from a system only if it is multi-company or multi-tenant (&#x60;isShared&#x60;&#x3D;true or &#x60;isCentrex&#x60;&#x3D;true)
     * @param {String} siteId Site unique identifier
     * @param {String} systemId System unique identifier
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteSiteSystemsSuccess} and HTTP response
     */
    this.deleteSiteSystemsWithHttpInfo = function(siteId, systemId, accept) {
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling deleteSiteSystems");
      }

      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling deleteSiteSystems");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteSiteSystems");
      }


      var pathParams = {
        'siteId': siteId,
        'systemId': systemId
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
      var returnType = DeleteSiteSystemsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/sites/{siteId}/systems/{systemId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unlink a system to a site
     * This API allows administrator to delete a link between a system and a site       &#x60;superadmin&#x60; and &#x60;support&#x60; can unlink any systems from any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only unlink systems being linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company from sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only unlink systems being linked to sites of companies under their organisation from sites of companies under their organisation.    &#x60;company_admin&#x60; can only unlink systems being linked to sites of their company from sites of their company.    Access is denied for &#x60;site_admin&#x60;.    A system could be shared by several sites.    Last site can be detached from a system only if it is multi-company or multi-tenant (&#x60;isShared&#x60;&#x3D;true or &#x60;isCentrex&#x60;&#x3D;true)
     * @param {String} siteId Site unique identifier
     * @param {String} systemId System unique identifier
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteSiteSystemsSuccess}
     */
    this.deleteSiteSystems = function(siteId, systemId, accept) {
      return this.deleteSiteSystemsWithHttpInfo(siteId, systemId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all systems linked with this site
     * This API allows administrator to retrieve systems linked to a given site       &#x60;superadmin&#x60; and &#x60;support&#x60; can get systems linked to all companies existing in Rainbow.    &#x60;bp_admin&#x60; can only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only get systems linked to sites of their company.    &#x60;site_admin&#x60; can only get the systems linked to the site they administrate.
     * @param {String} siteId Site unique identifier
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less system details in response.    - &#x60;small&#x60;: id pbxId version    - &#x60;medium&#x60;: id name pbxId serialNumber version status    - &#x60;full&#x60;: all system fields
     * @param {Number} opts.limit Allow to specify the number of systems to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort system list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting pbx list.
     * @param {String} opts.name Allows to filter systems list on field name.       The filtering is case insensitive and on partial name match: all systems **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _oxe1_, systems with the following names are match the filter &#39;OXE1&#39;, &#39;Oxe1&#39;, &#39;My oxe1&#39;, &#39;oxe12&#39;, &#39;My OXE12&#39;, ...
     * @param {String} opts.type Allows to filter systems list on the provided type(s)
     * @param {String} opts.status Allows to filter systems list on the provided status(es)
     * @param {String} opts.siteId2 Allows to filter systems list on the siteIds provided in this option.
     * @param {String} opts.companyId Allows to filter systems list on the siteIds linked to companyIds provided in this option.
     * @param {String} opts.bpId Allows to filter systems list on the bpIds provided in this option.    Only &#x60;superadmin&#x60;, &#x60;support&#x60; and &#x60;bp_admin&#x60; users can use bpId filter.    &#x60;bp_admin&#x60; users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation).
     * @param {Boolean} opts.isShared Allows to filter systems list by the status isShared.
     * @param {Boolean} opts.isCentrex Allows to filter systems list by the status isCentrex.
     * @param {Boolean} opts.isSharedOrCentrex Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex&#x3D;true, only systems having isShared&#x3D;true or isCentrex&#x3D;true are returned. * If isSharedOrCentrex&#x3D;false, only systems having isShared&#x3D;false and isCentrex&#x3D;false are returned.  
     * @param {Date} opts.fromCreationDate Allows to filter systems list from provided date (ISO 8601 format).
     * @param {Date} opts.toCreationDate Allows to filter systems list until provided date (ISO 8601 format).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSiteSystemsSuccess} and HTTP response
     */
    this.getSiteSystemsWithHttpInfo = function(siteId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling getSiteSystems");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getSiteSystems");
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'format': opts['format'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortField': opts['sortField'],
        'sortOrder': opts['sortOrder'],
        'name': opts['name'],
        'type': opts['type'],
        'status': opts['status'],
        'siteId': opts['siteId2'],
        'companyId': opts['companyId'],
        'bpId': opts['bpId'],
        'isShared': opts['isShared'],
        'isCentrex': opts['isCentrex'],
        'isSharedOrCentrex': opts['isSharedOrCentrex'],
        'fromCreationDate': opts['fromCreationDate'],
        'toCreationDate': opts['toCreationDate'],
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
      var returnType = GetSiteSystemsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/sites/{siteId}/systems', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all systems linked with this site
     * This API allows administrator to retrieve systems linked to a given site       &#x60;superadmin&#x60; and &#x60;support&#x60; can get systems linked to all companies existing in Rainbow.    &#x60;bp_admin&#x60; can only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only get systems linked to sites of their company.    &#x60;site_admin&#x60; can only get the systems linked to the site they administrate.
     * @param {String} siteId Site unique identifier
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less system details in response.    - &#x60;small&#x60;: id pbxId version    - &#x60;medium&#x60;: id name pbxId serialNumber version status    - &#x60;full&#x60;: all system fields
     * @param {Number} opts.limit Allow to specify the number of systems to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort system list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting pbx list.
     * @param {String} opts.name Allows to filter systems list on field name.       The filtering is case insensitive and on partial name match: all systems **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _oxe1_, systems with the following names are match the filter &#39;OXE1&#39;, &#39;Oxe1&#39;, &#39;My oxe1&#39;, &#39;oxe12&#39;, &#39;My OXE12&#39;, ...
     * @param {String} opts.type Allows to filter systems list on the provided type(s)
     * @param {String} opts.status Allows to filter systems list on the provided status(es)
     * @param {String} opts.siteId2 Allows to filter systems list on the siteIds provided in this option.
     * @param {String} opts.companyId Allows to filter systems list on the siteIds linked to companyIds provided in this option.
     * @param {String} opts.bpId Allows to filter systems list on the bpIds provided in this option.    Only &#x60;superadmin&#x60;, &#x60;support&#x60; and &#x60;bp_admin&#x60; users can use bpId filter.    &#x60;bp_admin&#x60; users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation).
     * @param {Boolean} opts.isShared Allows to filter systems list by the status isShared.
     * @param {Boolean} opts.isCentrex Allows to filter systems list by the status isCentrex.
     * @param {Boolean} opts.isSharedOrCentrex Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex&#x3D;true, only systems having isShared&#x3D;true or isCentrex&#x3D;true are returned. * If isSharedOrCentrex&#x3D;false, only systems having isShared&#x3D;false and isCentrex&#x3D;false are returned.  
     * @param {Date} opts.fromCreationDate Allows to filter systems list from provided date (ISO 8601 format).
     * @param {Date} opts.toCreationDate Allows to filter systems list until provided date (ISO 8601 format).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSiteSystemsSuccess}
     */
    this.getSiteSystems = function(siteId, accept, opts) {
      return this.getSiteSystemsWithHttpInfo(siteId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Link a system to a site
     * This API allows administrator to link a system to a given site       A PABX can be multi tenant.    When a PABX is shared, that means in our data model: &#39;A system is shared between several sites&#39;.    This API makes possible to add a link between a system and a site that belongs to the same company or not.    If the link still exists, no error is thrown.       &#x60;superadmin&#x60; and &#x60;support&#x60; can link any systems to any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only link systems being already linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only link systems being already linked to sites of companies under their organisation to sites of companies under their organisation.    &#x60;company_admin&#x60; can only link systems being already linked to sites of their company to sites of their company.    Access is denied for &#x60;site_admin&#x60;.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A company in this environment can only have a single site. It has automatically the flag isCentrex &#x3D; true   Only one sytem having the flag isCentrex &#x3D; true can be linked with a site having the same flag value.   A system having the flag isCentrex &#x3D; true can be shared by several sites having the same flag value.   A specific error \&quot;Inconsistent link. A multi-tenant system must be shared by a multi-tenant company only\&quot; 43709 is thrown when we try to link an incompatible system to a site.    When set during the system creation, isCentrex flag is readonly.
     * @param {String} siteId Site unique identifier
     * @param {module:model/PostSiteSystems} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostSiteSystemsSuccess} and HTTP response
     */
    this.postSiteSystemsWithHttpInfo = function(siteId, body) {
      var postBody = body;

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling postSiteSystems");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postSiteSystems");
      }


      var pathParams = {
        'siteId': siteId
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
      var returnType = PostSiteSystemsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/sites/{siteId}/systems', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Link a system to a site
     * This API allows administrator to link a system to a given site       A PABX can be multi tenant.    When a PABX is shared, that means in our data model: &#39;A system is shared between several sites&#39;.    This API makes possible to add a link between a system and a site that belongs to the same company or not.    If the link still exists, no error is thrown.       &#x60;superadmin&#x60; and &#x60;support&#x60; can link any systems to any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only link systems being already linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only link systems being already linked to sites of companies under their organisation to sites of companies under their organisation.    &#x60;company_admin&#x60; can only link systems being already linked to sites of their company to sites of their company.    Access is denied for &#x60;site_admin&#x60;.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A company in this environment can only have a single site. It has automatically the flag isCentrex &#x3D; true   Only one sytem having the flag isCentrex &#x3D; true can be linked with a site having the same flag value.   A system having the flag isCentrex &#x3D; true can be shared by several sites having the same flag value.   A specific error \&quot;Inconsistent link. A multi-tenant system must be shared by a multi-tenant company only\&quot; 43709 is thrown when we try to link an incompatible system to a site.    When set during the system creation, isCentrex flag is readonly.
     * @param {String} siteId Site unique identifier
     * @param {module:model/PostSiteSystems} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostSiteSystemsSuccess}
     */
    this.postSiteSystems = function(siteId, body) {
      return this.postSiteSystemsWithHttpInfo(siteId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
