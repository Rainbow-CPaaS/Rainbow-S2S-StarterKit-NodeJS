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
    define(['ApiClient', 'model/GetJwtSuccess', 'model/GetOidcLoginSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetJwtSuccess'), require('../model/GetOidcLoginSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.OidcClientApi = factory(root.RainbowAuthenticationPortal.ApiClient, root.RainbowAuthenticationPortal.GetJwtSuccess, root.RainbowAuthenticationPortal.GetOidcLoginSuccess);
  }
}(this, function(ApiClient, GetJwtSuccess, GetOidcLoginSuccess) {
  'use strict';

  /**
   * OidcClient service.
   * @module api/OidcClientApi
   * @version 1.104.0
   */

  /**
   * Constructs a new OidcClientApi. 
   * @alias module:api/OidcClientApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a JWT from an id_token
     * This endpoints allows applications to get a Rainbow JWT from an OpenID Connect (OIDC) id_token.  This API has to be used when OIDC implicit flow is used (see details in OpenID Connect Core 1.0 specifications, [section 3.2](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth)) or when the OIDC id_token is retrieved by other way than using [GET /api/rainbow/authentication/v1.0/oidc-client/login](#api-OIDC_Client-GetOidcLogin) API.  Authorization code grant is **recommended** as it is more secure than Implicit grant (it involves a clientSecret from Rainbow application). &lt;br/&gt; However, some applications may prefer to implement the OIDC flow directly in their application, or some OIDC providers may not support authorization code grant. &lt;br/&gt; This API is dedicated to such cases, where the OIDC flow is completely handled outside of Rainbow plateform and the obtained id_token is used to generate a Rainbow JWT in order to use the Rainbow APIs.  In order to use this API, the OIDC SingleSignOn settings of the company must contain:  - &#x60;clientId&#x60;: the client_id for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;issuer&#x60;: the company&#39;s OIDC provider issuer (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;jwksUri&#x60;: the company&#39;s OIDC provider jwks_uri endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  The id_token must be valid and contain an &#x60;email&#x60; field corresponding to the &#x60;loginEmail&#x60; of a Rainbow user.  The full OIDC flow using Implicit grant is detailed in the following sequence diagram. &lt;br/&gt; This GET /api/rainbow/authentication/v1.0/oidc-client/jwt endpoint addresses point 8 of this diagram (point 1 to 7 are addressed outside of Rainbow platform). ![Failed to load diagram :-(](img/oidc-client_implicit_grant_flow_sd.png \&quot;OIDC client Implicit Flow grant sequence diagram\&quot;)  Details about the sequence diagram: - (1) User starts application - [optional] (2) Application requests Rainbow Authentication portal’s API [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com](#api-Authentication_Urls-GetLoginUrl)   to know what is the authentication type to use for this user. - (3) In the case the authentication type is OIDC for this user and company SSO setting &#x60;onlyUseImplicitFlow&#x60; is   set to true, or the developer wants to handle the OIDC flow directly in his application, the OIDC implicit flow is   handled outside of Rainbow platform.     - (3) The application redirects the browser / open a webview to the OIDC server’s authorize endpoint,     - (4) OIDC server display the login page,     - (5) The user enter his credentials in the OIDC server’s login page,     - (6) OIDC server redirects to client&#39;s redirect_uri (configured in OIDC server) with an id_token,     - (7) The application verifies the received id_token (see details in OpenID Connect Core 1.0 specifications, [section 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)), - (8) The application calls API GET /api/rainbow/authentication/v1.0/oidc-client/jwt with the id_token to get   a Rainbow JWT. This API performs the following validations:     - verify the application using x-rainbow-app-auth header     - ensure id_token is well a JWT and decode it to extract the user email     - ensure a user exists in Rainbow with this email as loginEmail and ensure his company has SSO OIDC settings     - validate the signature, issuer and audience of the id_token using company SSO OIDC settings     - If the validation succeed, a Rainbow JWT is returned in response, with the loggedInUser and loggedInApplication       objects (same response than the one returned by [GET /api/rainbow/authentication/v1.0/login API](#api-Authentication-GetBasicLogin) - (9) Rainbow JWT can be use to call Rainbow APIs
     * @param {String} contentType application/x-www-form-urlencoded
     * @param {String} xRainbowAppAuth Basic &lt;base64encode(appId:sha256(appSecretchallenge))&gt; &lt;br/&gt; Concatenation of appSecret and provided challenge, hashed with sha256.
     * @param {String} accept application/json
     * @param {String} idToken The id_token obtained from the OIDC provider
     * @param {String} challenge challenge for application authentication. &lt;br/&gt; This value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com, or be randomly generated by the application.
     * @param {Object} opts Optional parameters
     * @param {String} opts.nonce If provided, the nonce value (provided by application to OIDC provider when requesting the id_token using implicit flow) is validated to have the same value in the decoded id_token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetJwtSuccess} and HTTP response
     */
    this.getJwtWithHttpInfo = function(contentType, xRainbowAppAuth, accept, idToken, challenge, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling getJwt");
      }

      // verify the required parameter 'xRainbowAppAuth' is set
      if (xRainbowAppAuth === undefined || xRainbowAppAuth === null) {
        throw new Error("Missing the required parameter 'xRainbowAppAuth' when calling getJwt");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getJwt");
      }

      // verify the required parameter 'idToken' is set
      if (idToken === undefined || idToken === null) {
        throw new Error("Missing the required parameter 'idToken' when calling getJwt");
      }

      // verify the required parameter 'challenge' is set
      if (challenge === undefined || challenge === null) {
        throw new Error("Missing the required parameter 'challenge' when calling getJwt");
      }


      var pathParams = {
      };
      var queryParams = {
        'id_token': idToken,
        'nonce': opts['nonce'],
        'challenge': challenge,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'content-type': contentType,
        'x-rainbow-app-auth': xRainbowAppAuth,
        'accept': accept
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetJwtSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/authentication/v1.0/oidc-client/jwt', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a JWT from an id_token
     * This endpoints allows applications to get a Rainbow JWT from an OpenID Connect (OIDC) id_token.  This API has to be used when OIDC implicit flow is used (see details in OpenID Connect Core 1.0 specifications, [section 3.2](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth)) or when the OIDC id_token is retrieved by other way than using [GET /api/rainbow/authentication/v1.0/oidc-client/login](#api-OIDC_Client-GetOidcLogin) API.  Authorization code grant is **recommended** as it is more secure than Implicit grant (it involves a clientSecret from Rainbow application). &lt;br/&gt; However, some applications may prefer to implement the OIDC flow directly in their application, or some OIDC providers may not support authorization code grant. &lt;br/&gt; This API is dedicated to such cases, where the OIDC flow is completely handled outside of Rainbow plateform and the obtained id_token is used to generate a Rainbow JWT in order to use the Rainbow APIs.  In order to use this API, the OIDC SingleSignOn settings of the company must contain:  - &#x60;clientId&#x60;: the client_id for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;issuer&#x60;: the company&#39;s OIDC provider issuer (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;jwksUri&#x60;: the company&#39;s OIDC provider jwks_uri endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  The id_token must be valid and contain an &#x60;email&#x60; field corresponding to the &#x60;loginEmail&#x60; of a Rainbow user.  The full OIDC flow using Implicit grant is detailed in the following sequence diagram. &lt;br/&gt; This GET /api/rainbow/authentication/v1.0/oidc-client/jwt endpoint addresses point 8 of this diagram (point 1 to 7 are addressed outside of Rainbow platform). ![Failed to load diagram :-(](img/oidc-client_implicit_grant_flow_sd.png \&quot;OIDC client Implicit Flow grant sequence diagram\&quot;)  Details about the sequence diagram: - (1) User starts application - [optional] (2) Application requests Rainbow Authentication portal’s API [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com](#api-Authentication_Urls-GetLoginUrl)   to know what is the authentication type to use for this user. - (3) In the case the authentication type is OIDC for this user and company SSO setting &#x60;onlyUseImplicitFlow&#x60; is   set to true, or the developer wants to handle the OIDC flow directly in his application, the OIDC implicit flow is   handled outside of Rainbow platform.     - (3) The application redirects the browser / open a webview to the OIDC server’s authorize endpoint,     - (4) OIDC server display the login page,     - (5) The user enter his credentials in the OIDC server’s login page,     - (6) OIDC server redirects to client&#39;s redirect_uri (configured in OIDC server) with an id_token,     - (7) The application verifies the received id_token (see details in OpenID Connect Core 1.0 specifications, [section 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)), - (8) The application calls API GET /api/rainbow/authentication/v1.0/oidc-client/jwt with the id_token to get   a Rainbow JWT. This API performs the following validations:     - verify the application using x-rainbow-app-auth header     - ensure id_token is well a JWT and decode it to extract the user email     - ensure a user exists in Rainbow with this email as loginEmail and ensure his company has SSO OIDC settings     - validate the signature, issuer and audience of the id_token using company SSO OIDC settings     - If the validation succeed, a Rainbow JWT is returned in response, with the loggedInUser and loggedInApplication       objects (same response than the one returned by [GET /api/rainbow/authentication/v1.0/login API](#api-Authentication-GetBasicLogin) - (9) Rainbow JWT can be use to call Rainbow APIs
     * @param {String} contentType application/x-www-form-urlencoded
     * @param {String} xRainbowAppAuth Basic &lt;base64encode(appId:sha256(appSecretchallenge))&gt; &lt;br/&gt; Concatenation of appSecret and provided challenge, hashed with sha256.
     * @param {String} accept application/json
     * @param {String} idToken The id_token obtained from the OIDC provider
     * @param {String} challenge challenge for application authentication. &lt;br/&gt; This value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com, or be randomly generated by the application.
     * @param {Object} opts Optional parameters
     * @param {String} opts.nonce If provided, the nonce value (provided by application to OIDC provider when requesting the id_token using implicit flow) is validated to have the same value in the decoded id_token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetJwtSuccess}
     */
    this.getJwt = function(contentType, xRainbowAppAuth, accept, idToken, challenge, opts) {
      return this.getJwtWithHttpInfo(contentType, xRainbowAppAuth, accept, idToken, challenge, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Initiate an OIDC authentication
     * This API allows Rainbow users to login using OpenID Connect (OIDC) authentication (using authorization code grant) if this type of authentication is provided by their company.  Authorization code grant is **recommended** as it is more secure than Implicit grant (it involves a clientSecret from Rainbow application). This API is dedicated to Authorization code grant, the OIDC flow being completely handled by Rainbow authentication server.  In order to use this API, the OIDC SingleSignOn settings of the company must contain:  - &#x60;clientId&#x60;: the client_id for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;clientSecret&#x60;: the client_secret for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;issuer&#x60;: the company&#39;s OIDC provider issuer (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;authorizationEndpoint&#x60;: the company&#39;s OIDC provider authorization endpoint (should has been got from    discoveryUrl if OIDC settings has been configured with this parameter).  - &#x60;tokenEndpoint&#x60;: the company&#39;s OIDC provider token endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;jwksUri&#x60;: the company&#39;s OIDC provider jwks_uri endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  The full OIDC flow using Authorization Code grant is detailed in the following sequence diagram.  This GET /api/rainbow/authentication/v1.0/oidc-client/login endpoint addresses points 3 to 7 of this diagram (point 2 is addressed by GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com endpoint, see related [documentation](#api-Authentication_Urls-GetLoginUrl)). ![Failed to load diagram :-(](img/oidc-client_authorization_code_flow_sd.png \&quot;OIDC client Authorization Code grant sequence diagram\&quot;)  Details about the sequence diagram: - (1) User starts application - (2) Application requests Rainbow Authentication portal’s API [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com](#api-Authentication_Urls-GetLoginUrl)       to know what is the authentication type to use for this user. - (3) In the case the authentication type is OIDC for this user, the application has to redirect the browser / open a web view to this URL.     - &#x60;x-rainbow-app-auth&#x60; field has to be provided in query parameters to authenticate the application (sha256 hash is computed using the challenge) - Rainbow Authentication portal implements the OIDC authorization code grant flow:     - (4) Rainbow Authentication portal redirects the browser to the OIDC server’s authorize endpoint,     - (5) user enter his credentials in the OIDC server’s login page,     - (6) OIDC server send an authorization_code to a redirect_uri on Rainbow Authentication portal,     - (6) Rainbow Authentication portal calls OIDC server’s token endpoint to exchange this authorization_code against an id_token,     - (6) Rainbow Authentication portal decodes the id_token, looks for a Rainbow user with this email as loginEmail,           finds the OIDC SSO setting of his company and validates the id_token           (validation of id_token signature, id_token expiration, issuer and audience fields). - (7) Rainbow Authentication portal generates a Rainbow JWT and redirects the browser to the application’s       ssoAuthenticationRedirectUrl (default to Official Rainbow web client) with this jwt in query string (tkn query parameter). - (8) Rainbow JWT can be use to call Rainbow APIs  In the case errors occur during the OIDC client login flow, the browser is redirected to the application’s ssoAuthenticationRedirectUrl (default to Official Rainbow web client) with the following query parameters: - &#x60;errtype&#x60;: always set to OIDC for errors returned by this API, - &#x60;errcode&#x60;: an error detailed code associated to the error (ex: 401500) - &#x60;errmsg&#x60;: an error message code associated to the error (ex: Unknown application or wrong token for application id 204583b32039df11e9a07425538fb36c74)
     * @param {String} companyId User company identifier &lt;br/&gt; This value is automatically set in the loginUrl which can be retrieved using [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com](#api-Authentication_Urls-GetLoginUrl)
     * @param {String} challenge Challenge for application authentication &lt;br/&gt; This value can be retrieved using [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com](#api-Authentication_Urls-GetLoginUrl)
     * @param {String} xRainbowAppAuth Application authentication &lt;br/&gt; It has to be computed as follow: &lt;base64encode(appId:sha256(appSecretchallenge))&gt; (concatenation of appSecret and challenge, hashed with sha256). &lt;br/&gt; The challenge used to compute the &#x60;x-rainbow-app-auth&#x60; value must be the same than the one provided in query parameter &#x60;challenge&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOidcLoginSuccess} and HTTP response
     */
    this.getOidcLoginWithHttpInfo = function(companyId, challenge, xRainbowAppAuth) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getOidcLogin");
      }

      // verify the required parameter 'challenge' is set
      if (challenge === undefined || challenge === null) {
        throw new Error("Missing the required parameter 'challenge' when calling getOidcLogin");
      }

      // verify the required parameter 'xRainbowAppAuth' is set
      if (xRainbowAppAuth === undefined || xRainbowAppAuth === null) {
        throw new Error("Missing the required parameter 'xRainbowAppAuth' when calling getOidcLogin");
      }


      var pathParams = {
      };
      var queryParams = {
        'companyId': companyId,
        'challenge': challenge,
        'x-rainbow-app-auth': xRainbowAppAuth,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/unknown'];
      var returnType = GetOidcLoginSuccess;

      return this.apiClient.callApi(
        '/api/rainbow/authentication/v1.0/oidc-client/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Initiate an OIDC authentication
     * This API allows Rainbow users to login using OpenID Connect (OIDC) authentication (using authorization code grant) if this type of authentication is provided by their company.  Authorization code grant is **recommended** as it is more secure than Implicit grant (it involves a clientSecret from Rainbow application). This API is dedicated to Authorization code grant, the OIDC flow being completely handled by Rainbow authentication server.  In order to use this API, the OIDC SingleSignOn settings of the company must contain:  - &#x60;clientId&#x60;: the client_id for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;clientSecret&#x60;: the client_secret for the Rainbow application created on the company&#39;s OIDC provider,  - &#x60;issuer&#x60;: the company&#39;s OIDC provider issuer (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;authorizationEndpoint&#x60;: the company&#39;s OIDC provider authorization endpoint (should has been got from    discoveryUrl if OIDC settings has been configured with this parameter).  - &#x60;tokenEndpoint&#x60;: the company&#39;s OIDC provider token endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  - &#x60;jwksUri&#x60;: the company&#39;s OIDC provider jwks_uri endpoint (should has been got from discoveryUrl if OIDC    settings has been configured with this parameter).  The full OIDC flow using Authorization Code grant is detailed in the following sequence diagram.  This GET /api/rainbow/authentication/v1.0/oidc-client/login endpoint addresses points 3 to 7 of this diagram (point 2 is addressed by GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com endpoint, see related [documentation](#api-Authentication_Urls-GetLoginUrl)). ![Failed to load diagram :-(](img/oidc-client_authorization_code_flow_sd.png \&quot;OIDC client Authorization Code grant sequence diagram\&quot;)  Details about the sequence diagram: - (1) User starts application - (2) Application requests Rainbow Authentication portal’s API [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user@company.com](#api-Authentication_Urls-GetLoginUrl)       to know what is the authentication type to use for this user. - (3) In the case the authentication type is OIDC for this user, the application has to redirect the browser / open a web view to this URL.     - &#x60;x-rainbow-app-auth&#x60; field has to be provided in query parameters to authenticate the application (sha256 hash is computed using the challenge) - Rainbow Authentication portal implements the OIDC authorization code grant flow:     - (4) Rainbow Authentication portal redirects the browser to the OIDC server’s authorize endpoint,     - (5) user enter his credentials in the OIDC server’s login page,     - (6) OIDC server send an authorization_code to a redirect_uri on Rainbow Authentication portal,     - (6) Rainbow Authentication portal calls OIDC server’s token endpoint to exchange this authorization_code against an id_token,     - (6) Rainbow Authentication portal decodes the id_token, looks for a Rainbow user with this email as loginEmail,           finds the OIDC SSO setting of his company and validates the id_token           (validation of id_token signature, id_token expiration, issuer and audience fields). - (7) Rainbow Authentication portal generates a Rainbow JWT and redirects the browser to the application’s       ssoAuthenticationRedirectUrl (default to Official Rainbow web client) with this jwt in query string (tkn query parameter). - (8) Rainbow JWT can be use to call Rainbow APIs  In the case errors occur during the OIDC client login flow, the browser is redirected to the application’s ssoAuthenticationRedirectUrl (default to Official Rainbow web client) with the following query parameters: - &#x60;errtype&#x60;: always set to OIDC for errors returned by this API, - &#x60;errcode&#x60;: an error detailed code associated to the error (ex: 401500) - &#x60;errmsg&#x60;: an error message code associated to the error (ex: Unknown application or wrong token for application id 204583b32039df11e9a07425538fb36c74)
     * @param {String} companyId User company identifier &lt;br/&gt; This value is automatically set in the loginUrl which can be retrieved using [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com](#api-Authentication_Urls-GetLoginUrl)
     * @param {String} challenge Challenge for application authentication &lt;br/&gt; This value can be retrieved using [GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com](#api-Authentication_Urls-GetLoginUrl)
     * @param {String} xRainbowAppAuth Application authentication &lt;br/&gt; It has to be computed as follow: &lt;base64encode(appId:sha256(appSecretchallenge))&gt; (concatenation of appSecret and challenge, hashed with sha256). &lt;br/&gt; The challenge used to compute the &#x60;x-rainbow-app-auth&#x60; value must be the same than the one provided in query parameter &#x60;challenge&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOidcLoginSuccess}
     */
    this.getOidcLogin = function(companyId, challenge, xRainbowAppAuth) {
      return this.getOidcLoginWithHttpInfo(companyId, challenge, xRainbowAppAuth)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
