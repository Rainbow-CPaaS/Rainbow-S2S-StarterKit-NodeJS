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
    define(['ApiClient', 'model/CreateCompany', 'model/CreateCompanySuccess', 'model/GetCompaniesSuccess', 'model/GetCompanyAdministratorsSuccess', 'model/GetCompanyByIdSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateCompany'), require('../model/CreateCompanySuccess'), require('../model/GetCompaniesSuccess'), require('../model/GetCompanyAdministratorsSuccess'), require('../model/GetCompanyByIdSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.CompaniesApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.CreateCompany, root.RainbowEnduserPortal.CreateCompanySuccess, root.RainbowEnduserPortal.GetCompaniesSuccess, root.RainbowEnduserPortal.GetCompanyAdministratorsSuccess, root.RainbowEnduserPortal.GetCompanyByIdSuccess);
  }
}(this, function(ApiClient, CreateCompany, CreateCompanySuccess, GetCompaniesSuccess, GetCompanyAdministratorsSuccess, GetCompanyByIdSuccess) {
  'use strict';

  /**
   * Companies service.
   * @module api/CompaniesApi
   * @version 1.84.0
   */

  /**
   * Constructs a new CompaniesApi. 
   * @alias module:api/CompaniesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a company
     * A user belonging to the &#39;Default&#39; company is able to create his own company.    Then he is automatically moved to it and becomes the &#39;company_admin&#39; of it.       **The company&#39;s name is checked and must be unique.    The logged in user musn&#39;t have already an admin or superadmin role**      The company is created with visibility&#x3D;&#39;public&#39; and userSelfRegisterEnabled&#x3D;false. The user, promoted to &#39;company_admin&#39;, can then update these values if we want using API [PUT /api/rainbow/admin/v1.0/companies/:companyId][0].       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allows clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60;  [0]: /admin/#api-companies-PutCompanies
     * @param {module:model/CreateCompany} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCompanySuccess} and HTTP response
     */
    this.createCompanyWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCompany");
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
      var returnType = CreateCompanySuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/companies', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a company
     * A user belonging to the &#39;Default&#39; company is able to create his own company.    Then he is automatically moved to it and becomes the &#39;company_admin&#39; of it.       **The company&#39;s name is checked and must be unique.    The logged in user musn&#39;t have already an admin or superadmin role**      The company is created with visibility&#x3D;&#39;public&#39; and userSelfRegisterEnabled&#x3D;false. The user, promoted to &#39;company_admin&#39;, can then update these values if we want using API [PUT /api/rainbow/admin/v1.0/companies/:companyId][0].       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allows clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60;  [0]: /admin/#api-companies-PutCompanies
     * @param {module:model/CreateCompany} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCompanySuccess}
     */
    this.createCompany = function(body) {
      return this.createCompanyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all companies
     * This API allows users to get all companies.       Users with &#x60;user&#x60; role can only retrieve their own company and companies they can see (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       Users with &#x60;analytics&#x60; can retrieve all companies, but only the following fields are returned: &#x60;id&#x60;, &#x60;creationDate&#x60;, &#x60;status&#x60;, &#x60;statusUpdatedDate&#x60;, &#x60;visibility&#x60;, &#x60;visibleBy&#x60;, &#x60;organisationId&#x60;   Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies?name&#x3D;My com&amp;format&#x3D;medium&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape
     * @param {String} opts.sortField Sort items list based on the given field
     * @param {Number} opts.limit Allow to specify the number of items to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {Number} opts.sortOrder Specify order when sorting items list.
     * @param {String} opts.name Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ...
     * @param {String} opts.status Allows to filter companies list on the provided status(es)
     * @param {String} opts.visibility Allows to filter companies list on the provided visibility(ies)
     * @param {String} opts.organisationId Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;
     * @param {Boolean} opts.isBP Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;.
     * @param {Boolean} opts.hasBP Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;.
     * @param {String} opts.bpType Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompaniesSuccess} and HTTP response
     */
    this.getCompaniesWithHttpInfo = function(accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getCompanies");
      }


      var pathParams = {
      };
      var queryParams = {
        'format': opts['format'],
        'sortField': opts['sortField'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortOrder': opts['sortOrder'],
        'name': opts['name'],
        'status': opts['status'],
        'visibility': opts['visibility'],
        'organisationId': opts['organisationId'],
        'isBP': opts['isBP'],
        'hasBP': opts['hasBP'],
        'bpType': opts['bpType'],
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
      var returnType = GetCompaniesSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/companies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all companies
     * This API allows users to get all companies.       Users with &#x60;user&#x60; role can only retrieve their own company and companies they can see (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       Users with &#x60;analytics&#x60; can retrieve all companies, but only the following fields are returned: &#x60;id&#x60;, &#x60;creationDate&#x60;, &#x60;status&#x60;, &#x60;statusUpdatedDate&#x60;, &#x60;visibility&#x60;, &#x60;visibleBy&#x60;, &#x60;organisationId&#x60;   Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies?name&#x3D;My com&amp;format&#x3D;medium&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape
     * @param {String} opts.sortField Sort items list based on the given field
     * @param {Number} opts.limit Allow to specify the number of items to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {Number} opts.sortOrder Specify order when sorting items list.
     * @param {String} opts.name Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ...
     * @param {String} opts.status Allows to filter companies list on the provided status(es)
     * @param {String} opts.visibility Allows to filter companies list on the provided visibility(ies)
     * @param {String} opts.organisationId Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;
     * @param {Boolean} opts.isBP Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;.
     * @param {Boolean} opts.hasBP Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;.
     * @param {String} opts.bpType Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompaniesSuccess}
     */
    this.getCompanies = function(accept, opts) {
      return this.getCompaniesWithHttpInfo(accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get company administrators
     * This API allows users to list users being administrator of a company.       **Users can only retrieve administrators of their own company and administrators of companies visible by their own company** (companies being in user&#39;s company organisation and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, and companies having user&#39;s companyId in &#x60;visibleBy&#x60;).       This API implement pagination, using limit and offset options in query string arguments (default is limit on 100 users). Result sorting can also be done using sort and order options (default is sort on displayName on ascending order).       Examples:   * basic: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators * with pagination options: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators?limit&#x3D;10&amp;offset&#x3D;20&amp;sortField&#x3D;firstName&amp;sortOrder&#x3D;-1  
     * @param {String} companyId Company for which list of administrators is requested
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanyAdministratorsSuccess} and HTTP response
     */
    this.getCompanyAdministratorsWithHttpInfo = function(companyId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyAdministrators");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getCompanyAdministrators");
      }


      var pathParams = {
        'companyId': companyId
      };
      var queryParams = {
        'format': opts['format'],
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
      var returnType = GetCompanyAdministratorsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/companies/{companyId}/administrators', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get company administrators
     * This API allows users to list users being administrator of a company.       **Users can only retrieve administrators of their own company and administrators of companies visible by their own company** (companies being in user&#39;s company organisation and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, and companies having user&#39;s companyId in &#x60;visibleBy&#x60;).       This API implement pagination, using limit and offset options in query string arguments (default is limit on 100 users). Result sorting can also be done using sort and order options (default is sort on displayName on ascending order).       Examples:   * basic: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators * with pagination options: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators?limit&#x3D;10&amp;offset&#x3D;20&amp;sortField&#x3D;firstName&amp;sortOrder&#x3D;-1  
     * @param {String} companyId Company for which list of administrators is requested
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanyAdministratorsSuccess}
     */
    this.getCompanyAdministrators = function(companyId, accept, opts) {
      return this.getCompanyAdministratorsWithHttpInfo(companyId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a company data
     * This API allows user to get a company data.       **Users can only retrieve their own company and companies they can see** (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       If user request his own company, &#x60;numberUsers&#x60; field is returned with the number of Rainbow users being in this company.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies/569d0ef3ef7816921f7e94fa
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    **When a user wants data of his own company in &#39;full&#39; mode, he gets all fields except subscriptions and fields related to a business partner managing this company.**
     * @param {String} opts.name Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ...
     * @param {String} opts.status Allows to filter companies list on the provided status(es)
     * @param {String} opts.visibility Allows to filter companies list on the provided visibility(ies)
     * @param {String} opts.organisationId Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;
     * @param {Boolean} opts.isBP Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;.
     * @param {Boolean} opts.hasBP Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;.
     * @param {String} opts.bpType Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanyByIdSuccess} and HTTP response
     */
    this.getCompanyByIdWithHttpInfo = function(companyId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyById");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getCompanyById");
      }


      var pathParams = {
        'companyId': companyId
      };
      var queryParams = {
        'format': opts['format'],
        'name': opts['name'],
        'status': opts['status'],
        'visibility': opts['visibility'],
        'organisationId': opts['organisationId'],
        'isBP': opts['isBP'],
        'hasBP': opts['hasBP'],
        'bpType': opts['bpType'],
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
      var returnType = GetCompanyByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/companies/{companyId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a company data
     * This API allows user to get a company data.       **Users can only retrieve their own company and companies they can see** (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       If user request his own company, &#x60;numberUsers&#x60; field is returned with the number of Rainbow users being in this company.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies/569d0ef3ef7816921f7e94fa
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    **When a user wants data of his own company in &#39;full&#39; mode, he gets all fields except subscriptions and fields related to a business partner managing this company.**
     * @param {String} opts.name Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ...
     * @param {String} opts.status Allows to filter companies list on the provided status(es)
     * @param {String} opts.visibility Allows to filter companies list on the provided visibility(ies)
     * @param {String} opts.organisationId Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;
     * @param {Boolean} opts.isBP Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;.
     * @param {Boolean} opts.hasBP Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;.
     * @param {String} opts.bpType Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanyByIdSuccess}
     */
    this.getCompanyById = function(companyId, accept, opts) {
      return this.getCompanyByIdWithHttpInfo(companyId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
