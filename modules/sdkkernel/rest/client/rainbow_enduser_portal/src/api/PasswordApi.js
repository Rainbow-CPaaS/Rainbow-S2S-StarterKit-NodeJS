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
    define(['ApiClient', 'model/ChangePassword', 'model/ChangePasswordSuccess', 'model/ResetPassword', 'model/ResetPasswordSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangePassword'), require('../model/ChangePasswordSuccess'), require('../model/ResetPassword'), require('../model/ResetPasswordSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.PasswordApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.ChangePassword, root.RainbowEnduserPortal.ChangePasswordSuccess, root.RainbowEnduserPortal.ResetPassword, root.RainbowEnduserPortal.ResetPasswordSuccess);
  }
}(this, function(ApiClient, ChangePassword, ChangePasswordSuccess, ResetPassword, ResetPasswordSuccess) {
  'use strict';

  /**
   * Password service.
   * @module api/PasswordApi
   * @version 1.84.0
   */

  /**
   * Constructs a new PasswordApi. 
   * @alias module:api/PasswordApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Update user password
     * This API can be used to update password of logged in user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Note than when user password is changed, all its previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5).
     * @param {module:model/ChangePassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangePasswordSuccess} and HTTP response
     */
    this.changePasswordWithHttpInfo = function(userId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling changePassword");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling changePassword");
      }


      var pathParams = {
        'userId': userId
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
      var returnType = ChangePasswordSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/change-password', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update user password
     * This API can be used to update password of logged in user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Note than when user password is changed, all its previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5).
     * @param {module:model/ChangePassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangePasswordSuccess}
     */
    this.changePassword = function(userId, body) {
      return this.changePasswordWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset user password
     * This API can be used by a user to reset his password (i.e. change his password when he does not remember his current password).    This API requires a temporary user token to validate that this is well the user who reset his password.    Clients have to first call POST /api/rainbow/enduser/v1.0/notifications/emails/reset-password so that user receive an email with a temporary token.    User enters this token and his new password, and Clients have to call PUT /api/rainbow/enduser/v1.0/users/:userId/reset-password with this code and the new password.       Note than when user password is reset, all user&#39;s previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 
     * @param {module:model/ResetPassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResetPasswordSuccess} and HTTP response
     */
    this.resetPasswordWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassword");
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
      var returnType = ResetPasswordSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/reset-password', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reset user password
     * This API can be used by a user to reset his password (i.e. change his password when he does not remember his current password).    This API requires a temporary user token to validate that this is well the user who reset his password.    Clients have to first call POST /api/rainbow/enduser/v1.0/notifications/emails/reset-password so that user receive an email with a temporary token.    User enters this token and his new password, and Clients have to call PUT /api/rainbow/enduser/v1.0/users/:userId/reset-password with this code and the new password.       Note than when user password is reset, all user&#39;s previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 
     * @param {module:model/ResetPassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResetPasswordSuccess}
     */
    this.resetPassword = function(body) {
      return this.resetPasswordWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
