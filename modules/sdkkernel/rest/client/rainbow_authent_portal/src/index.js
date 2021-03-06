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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeleteMetricsSuccess', 'model/DeleteOAuthTokenSuccess', 'model/DeleteOAuthTokenSuccessData', 'model/GetApiRainbowAuthenticationV10AboutSuccess', 'model/GetApiRainbowAuthenticationV10ValidatorSuccess', 'model/GetApiRainbowPingSuccess', 'model/GetBasicLoginSuccess', 'model/GetBasicLoginSuccessEmails', 'model/GetBasicLoginSuccessLoggedInApplication', 'model/GetBasicLoginSuccessLoggedInUser', 'model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin', 'model/GetBasicLoginSuccessPhoneNumbers', 'model/GetBasicLoginSuccessProfiles', 'model/GetBasicLoginSuccessProvisioningNeeded', 'model/GetJwtSuccess', 'model/GetJwtSuccessEmails', 'model/GetJwtSuccessLoggedInUser', 'model/GetJwtSuccessPhoneNumbers', 'model/GetJwtSuccessProfiles', 'model/GetJwtSuccessProvisioningNeeded', 'model/GetLoginUrlSuccess', 'model/GetLoginUrlSuccessData', 'model/GetLogoutSuccess', 'model/GetMetricsSuccess', 'model/GetOAuthTokenByIdSuccess', 'model/GetOAuthTokenSuccess', 'model/GetOidcLoginSuccess', 'model/GetRenewSuccess', 'model/GetRenewSuccessEmails', 'model/GetRenewSuccessLoggedInUser', 'model/GetRenewSuccessPhoneNumbers', 'model/GetRenewSuccessProfiles', 'model/GetRenewSuccessProvisioningNeeded', 'model/GetSamlAssertionConfigurationSuccess', 'model/GetSamlAssertionSuccess', 'model/GetSamlLoginSuccess', 'model/GetSamlLogoutSuccess', 'model/OAuthAuthorizeSuccess', 'model/OAuthToken', 'model/OAuthTokenSuccess', 'model/PostSamlAssertion', 'model/PostSamlAssertionSuccess', 'model/PostSamlAssertionSuccessEmails', 'model/PostSamlAssertionSuccessLoggedInUser', 'model/PostSamlAssertionSuccessPhoneNumbers', 'model/PostSamlAssertionSuccessProfiles', 'model/PostSamlAssertionSuccessProvisioningNeeded', 'model/PutApiRainbowLogsLevels', 'model/PutApiRainbowLogsLevelsSuccess', 'model/PutApiRainbowLogsLevelsSuccessNewLoggerLevels', 'model/PutApiRainbowLogsLevelsSuccessOldLoggerLevels', 'api/AuthenticationApi', 'api/AuthenticationUrlsApi', 'api/CommonApi', 'api/OauthAuthenticationApi', 'api/OauthTokensApi', 'api/OidcClientApi', 'api/SamlAuthenticationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DeleteMetricsSuccess'), require('./model/DeleteOAuthTokenSuccess'), require('./model/DeleteOAuthTokenSuccessData'), require('./model/GetApiRainbowAuthenticationV10AboutSuccess'), require('./model/GetApiRainbowAuthenticationV10ValidatorSuccess'), require('./model/GetApiRainbowPingSuccess'), require('./model/GetBasicLoginSuccess'), require('./model/GetBasicLoginSuccessEmails'), require('./model/GetBasicLoginSuccessLoggedInApplication'), require('./model/GetBasicLoginSuccessLoggedInUser'), require('./model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin'), require('./model/GetBasicLoginSuccessPhoneNumbers'), require('./model/GetBasicLoginSuccessProfiles'), require('./model/GetBasicLoginSuccessProvisioningNeeded'), require('./model/GetJwtSuccess'), require('./model/GetJwtSuccessEmails'), require('./model/GetJwtSuccessLoggedInUser'), require('./model/GetJwtSuccessPhoneNumbers'), require('./model/GetJwtSuccessProfiles'), require('./model/GetJwtSuccessProvisioningNeeded'), require('./model/GetLoginUrlSuccess'), require('./model/GetLoginUrlSuccessData'), require('./model/GetLogoutSuccess'), require('./model/GetMetricsSuccess'), require('./model/GetOAuthTokenByIdSuccess'), require('./model/GetOAuthTokenSuccess'), require('./model/GetOidcLoginSuccess'), require('./model/GetRenewSuccess'), require('./model/GetRenewSuccessEmails'), require('./model/GetRenewSuccessLoggedInUser'), require('./model/GetRenewSuccessPhoneNumbers'), require('./model/GetRenewSuccessProfiles'), require('./model/GetRenewSuccessProvisioningNeeded'), require('./model/GetSamlAssertionConfigurationSuccess'), require('./model/GetSamlAssertionSuccess'), require('./model/GetSamlLoginSuccess'), require('./model/GetSamlLogoutSuccess'), require('./model/OAuthAuthorizeSuccess'), require('./model/OAuthToken'), require('./model/OAuthTokenSuccess'), require('./model/PostSamlAssertion'), require('./model/PostSamlAssertionSuccess'), require('./model/PostSamlAssertionSuccessEmails'), require('./model/PostSamlAssertionSuccessLoggedInUser'), require('./model/PostSamlAssertionSuccessPhoneNumbers'), require('./model/PostSamlAssertionSuccessProfiles'), require('./model/PostSamlAssertionSuccessProvisioningNeeded'), require('./model/PutApiRainbowLogsLevels'), require('./model/PutApiRainbowLogsLevelsSuccess'), require('./model/PutApiRainbowLogsLevelsSuccessNewLoggerLevels'), require('./model/PutApiRainbowLogsLevelsSuccessOldLoggerLevels'), require('./api/AuthenticationApi'), require('./api/AuthenticationUrlsApi'), require('./api/CommonApi'), require('./api/OauthAuthenticationApi'), require('./api/OauthTokensApi'), require('./api/OidcClientApi'), require('./api/SamlAuthenticationApi'));
  }
}(function(ApiClient, DeleteMetricsSuccess, DeleteOAuthTokenSuccess, DeleteOAuthTokenSuccessData, GetApiRainbowAuthenticationV10AboutSuccess, GetApiRainbowAuthenticationV10ValidatorSuccess, GetApiRainbowPingSuccess, GetBasicLoginSuccess, GetBasicLoginSuccessEmails, GetBasicLoginSuccessLoggedInApplication, GetBasicLoginSuccessLoggedInUser, GetBasicLoginSuccessLoggedInUserCreatedByAdmin, GetBasicLoginSuccessPhoneNumbers, GetBasicLoginSuccessProfiles, GetBasicLoginSuccessProvisioningNeeded, GetJwtSuccess, GetJwtSuccessEmails, GetJwtSuccessLoggedInUser, GetJwtSuccessPhoneNumbers, GetJwtSuccessProfiles, GetJwtSuccessProvisioningNeeded, GetLoginUrlSuccess, GetLoginUrlSuccessData, GetLogoutSuccess, GetMetricsSuccess, GetOAuthTokenByIdSuccess, GetOAuthTokenSuccess, GetOidcLoginSuccess, GetRenewSuccess, GetRenewSuccessEmails, GetRenewSuccessLoggedInUser, GetRenewSuccessPhoneNumbers, GetRenewSuccessProfiles, GetRenewSuccessProvisioningNeeded, GetSamlAssertionConfigurationSuccess, GetSamlAssertionSuccess, GetSamlLoginSuccess, GetSamlLogoutSuccess, OAuthAuthorizeSuccess, OAuthToken, OAuthTokenSuccess, PostSamlAssertion, PostSamlAssertionSuccess, PostSamlAssertionSuccessEmails, PostSamlAssertionSuccessLoggedInUser, PostSamlAssertionSuccessPhoneNumbers, PostSamlAssertionSuccessProfiles, PostSamlAssertionSuccessProvisioningNeeded, PutApiRainbowLogsLevels, PutApiRainbowLogsLevelsSuccess, PutApiRainbowLogsLevelsSuccessNewLoggerLevels, PutApiRainbowLogsLevelsSuccessOldLoggerLevels, AuthenticationApi, AuthenticationUrlsApi, CommonApi, OauthAuthenticationApi, OauthTokensApi, OidcClientApi, SamlAuthenticationApi) {
  'use strict';

  /**
   * _Rainbow_authentication_portal_API_guide_Preamble_Download_Postman_collection_0_IntroductionThis_guide_describes_list_of_API_services_that_are_provided_by_OT_Rainbow_authentication_portal_system__Services_are_used_to_manage_OT_Rainbow_authentication__ProtocolREST_interface_is_used_for_sendingreceiving_OT_rainbow_API_messages___HTTP_request_GET_is_used__Standard_HTTP_responses_are_used_to_provide_requested_information_or_error_status__There_is_no_session_notion_in_OT_Rainbow_system_so_requests_could_be_issued_according_stateless_model_without_transport_conservation_between_them___JSON_is_used_as_a_main_format_for_data_encoding_in_message_body_part__Each_request_is_started_with_the_following_pattern_moduleversion_where_module_is_a_portal_module_name_to_address_and_version_is_a_version_of_used_API_par_example_v1_0__Security_considerationsEach_request_should_contain_some_credential_information_to_authenticate_itself__Standard_HTTP_authentication_with_basicbearer_modes_is_used__JSON_Web_Token_mechanism_is_used_to_provide_authentication_information__JWT_has_a_expire_timeout_that_is_controlled_by_OT_Rainbow_portal_to_prevent_very_long_token_usage__Also_authentication_with_application_token_is_used__The_token_must_be_provided_in_the_request_HTTP_header_using_a_custom_header_APIKey__At_server_side_token_is_verified_and_if_it_doesnt_match_403_Not_Allowed_response_is_sent__TLS_is_used_as_a_transport_protocol_to_support_message_exchanges_between_OT_Rainbow_portal_and_an_application__0_AuthenticationPortalServer_postman_json.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RainbowAuthenticationPortal = require('index'); // See note below*.
   * var xxxSvc = new RainbowAuthenticationPortal.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RainbowAuthenticationPortal.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RainbowAuthenticationPortal.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RainbowAuthenticationPortal.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.104.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DeleteMetricsSuccess model constructor.
     * @property {module:model/DeleteMetricsSuccess}
     */
    DeleteMetricsSuccess: DeleteMetricsSuccess,
    /**
     * The DeleteOAuthTokenSuccess model constructor.
     * @property {module:model/DeleteOAuthTokenSuccess}
     */
    DeleteOAuthTokenSuccess: DeleteOAuthTokenSuccess,
    /**
     * The DeleteOAuthTokenSuccessData model constructor.
     * @property {module:model/DeleteOAuthTokenSuccessData}
     */
    DeleteOAuthTokenSuccessData: DeleteOAuthTokenSuccessData,
    /**
     * The GetApiRainbowAuthenticationV10AboutSuccess model constructor.
     * @property {module:model/GetApiRainbowAuthenticationV10AboutSuccess}
     */
    GetApiRainbowAuthenticationV10AboutSuccess: GetApiRainbowAuthenticationV10AboutSuccess,
    /**
     * The GetApiRainbowAuthenticationV10ValidatorSuccess model constructor.
     * @property {module:model/GetApiRainbowAuthenticationV10ValidatorSuccess}
     */
    GetApiRainbowAuthenticationV10ValidatorSuccess: GetApiRainbowAuthenticationV10ValidatorSuccess,
    /**
     * The GetApiRainbowPingSuccess model constructor.
     * @property {module:model/GetApiRainbowPingSuccess}
     */
    GetApiRainbowPingSuccess: GetApiRainbowPingSuccess,
    /**
     * The GetBasicLoginSuccess model constructor.
     * @property {module:model/GetBasicLoginSuccess}
     */
    GetBasicLoginSuccess: GetBasicLoginSuccess,
    /**
     * The GetBasicLoginSuccessEmails model constructor.
     * @property {module:model/GetBasicLoginSuccessEmails}
     */
    GetBasicLoginSuccessEmails: GetBasicLoginSuccessEmails,
    /**
     * The GetBasicLoginSuccessLoggedInApplication model constructor.
     * @property {module:model/GetBasicLoginSuccessLoggedInApplication}
     */
    GetBasicLoginSuccessLoggedInApplication: GetBasicLoginSuccessLoggedInApplication,
    /**
     * The GetBasicLoginSuccessLoggedInUser model constructor.
     * @property {module:model/GetBasicLoginSuccessLoggedInUser}
     */
    GetBasicLoginSuccessLoggedInUser: GetBasicLoginSuccessLoggedInUser,
    /**
     * The GetBasicLoginSuccessLoggedInUserCreatedByAdmin model constructor.
     * @property {module:model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin}
     */
    GetBasicLoginSuccessLoggedInUserCreatedByAdmin: GetBasicLoginSuccessLoggedInUserCreatedByAdmin,
    /**
     * The GetBasicLoginSuccessPhoneNumbers model constructor.
     * @property {module:model/GetBasicLoginSuccessPhoneNumbers}
     */
    GetBasicLoginSuccessPhoneNumbers: GetBasicLoginSuccessPhoneNumbers,
    /**
     * The GetBasicLoginSuccessProfiles model constructor.
     * @property {module:model/GetBasicLoginSuccessProfiles}
     */
    GetBasicLoginSuccessProfiles: GetBasicLoginSuccessProfiles,
    /**
     * The GetBasicLoginSuccessProvisioningNeeded model constructor.
     * @property {module:model/GetBasicLoginSuccessProvisioningNeeded}
     */
    GetBasicLoginSuccessProvisioningNeeded: GetBasicLoginSuccessProvisioningNeeded,
    /**
     * The GetJwtSuccess model constructor.
     * @property {module:model/GetJwtSuccess}
     */
    GetJwtSuccess: GetJwtSuccess,
    /**
     * The GetJwtSuccessEmails model constructor.
     * @property {module:model/GetJwtSuccessEmails}
     */
    GetJwtSuccessEmails: GetJwtSuccessEmails,
    /**
     * The GetJwtSuccessLoggedInUser model constructor.
     * @property {module:model/GetJwtSuccessLoggedInUser}
     */
    GetJwtSuccessLoggedInUser: GetJwtSuccessLoggedInUser,
    /**
     * The GetJwtSuccessPhoneNumbers model constructor.
     * @property {module:model/GetJwtSuccessPhoneNumbers}
     */
    GetJwtSuccessPhoneNumbers: GetJwtSuccessPhoneNumbers,
    /**
     * The GetJwtSuccessProfiles model constructor.
     * @property {module:model/GetJwtSuccessProfiles}
     */
    GetJwtSuccessProfiles: GetJwtSuccessProfiles,
    /**
     * The GetJwtSuccessProvisioningNeeded model constructor.
     * @property {module:model/GetJwtSuccessProvisioningNeeded}
     */
    GetJwtSuccessProvisioningNeeded: GetJwtSuccessProvisioningNeeded,
    /**
     * The GetLoginUrlSuccess model constructor.
     * @property {module:model/GetLoginUrlSuccess}
     */
    GetLoginUrlSuccess: GetLoginUrlSuccess,
    /**
     * The GetLoginUrlSuccessData model constructor.
     * @property {module:model/GetLoginUrlSuccessData}
     */
    GetLoginUrlSuccessData: GetLoginUrlSuccessData,
    /**
     * The GetLogoutSuccess model constructor.
     * @property {module:model/GetLogoutSuccess}
     */
    GetLogoutSuccess: GetLogoutSuccess,
    /**
     * The GetMetricsSuccess model constructor.
     * @property {module:model/GetMetricsSuccess}
     */
    GetMetricsSuccess: GetMetricsSuccess,
    /**
     * The GetOAuthTokenByIdSuccess model constructor.
     * @property {module:model/GetOAuthTokenByIdSuccess}
     */
    GetOAuthTokenByIdSuccess: GetOAuthTokenByIdSuccess,
    /**
     * The GetOAuthTokenSuccess model constructor.
     * @property {module:model/GetOAuthTokenSuccess}
     */
    GetOAuthTokenSuccess: GetOAuthTokenSuccess,
    /**
     * The GetOidcLoginSuccess model constructor.
     * @property {module:model/GetOidcLoginSuccess}
     */
    GetOidcLoginSuccess: GetOidcLoginSuccess,
    /**
     * The GetRenewSuccess model constructor.
     * @property {module:model/GetRenewSuccess}
     */
    GetRenewSuccess: GetRenewSuccess,
    /**
     * The GetRenewSuccessEmails model constructor.
     * @property {module:model/GetRenewSuccessEmails}
     */
    GetRenewSuccessEmails: GetRenewSuccessEmails,
    /**
     * The GetRenewSuccessLoggedInUser model constructor.
     * @property {module:model/GetRenewSuccessLoggedInUser}
     */
    GetRenewSuccessLoggedInUser: GetRenewSuccessLoggedInUser,
    /**
     * The GetRenewSuccessPhoneNumbers model constructor.
     * @property {module:model/GetRenewSuccessPhoneNumbers}
     */
    GetRenewSuccessPhoneNumbers: GetRenewSuccessPhoneNumbers,
    /**
     * The GetRenewSuccessProfiles model constructor.
     * @property {module:model/GetRenewSuccessProfiles}
     */
    GetRenewSuccessProfiles: GetRenewSuccessProfiles,
    /**
     * The GetRenewSuccessProvisioningNeeded model constructor.
     * @property {module:model/GetRenewSuccessProvisioningNeeded}
     */
    GetRenewSuccessProvisioningNeeded: GetRenewSuccessProvisioningNeeded,
    /**
     * The GetSamlAssertionConfigurationSuccess model constructor.
     * @property {module:model/GetSamlAssertionConfigurationSuccess}
     */
    GetSamlAssertionConfigurationSuccess: GetSamlAssertionConfigurationSuccess,
    /**
     * The GetSamlAssertionSuccess model constructor.
     * @property {module:model/GetSamlAssertionSuccess}
     */
    GetSamlAssertionSuccess: GetSamlAssertionSuccess,
    /**
     * The GetSamlLoginSuccess model constructor.
     * @property {module:model/GetSamlLoginSuccess}
     */
    GetSamlLoginSuccess: GetSamlLoginSuccess,
    /**
     * The GetSamlLogoutSuccess model constructor.
     * @property {module:model/GetSamlLogoutSuccess}
     */
    GetSamlLogoutSuccess: GetSamlLogoutSuccess,
    /**
     * The OAuthAuthorizeSuccess model constructor.
     * @property {module:model/OAuthAuthorizeSuccess}
     */
    OAuthAuthorizeSuccess: OAuthAuthorizeSuccess,
    /**
     * The OAuthToken model constructor.
     * @property {module:model/OAuthToken}
     */
    OAuthToken: OAuthToken,
    /**
     * The OAuthTokenSuccess model constructor.
     * @property {module:model/OAuthTokenSuccess}
     */
    OAuthTokenSuccess: OAuthTokenSuccess,
    /**
     * The PostSamlAssertion model constructor.
     * @property {module:model/PostSamlAssertion}
     */
    PostSamlAssertion: PostSamlAssertion,
    /**
     * The PostSamlAssertionSuccess model constructor.
     * @property {module:model/PostSamlAssertionSuccess}
     */
    PostSamlAssertionSuccess: PostSamlAssertionSuccess,
    /**
     * The PostSamlAssertionSuccessEmails model constructor.
     * @property {module:model/PostSamlAssertionSuccessEmails}
     */
    PostSamlAssertionSuccessEmails: PostSamlAssertionSuccessEmails,
    /**
     * The PostSamlAssertionSuccessLoggedInUser model constructor.
     * @property {module:model/PostSamlAssertionSuccessLoggedInUser}
     */
    PostSamlAssertionSuccessLoggedInUser: PostSamlAssertionSuccessLoggedInUser,
    /**
     * The PostSamlAssertionSuccessPhoneNumbers model constructor.
     * @property {module:model/PostSamlAssertionSuccessPhoneNumbers}
     */
    PostSamlAssertionSuccessPhoneNumbers: PostSamlAssertionSuccessPhoneNumbers,
    /**
     * The PostSamlAssertionSuccessProfiles model constructor.
     * @property {module:model/PostSamlAssertionSuccessProfiles}
     */
    PostSamlAssertionSuccessProfiles: PostSamlAssertionSuccessProfiles,
    /**
     * The PostSamlAssertionSuccessProvisioningNeeded model constructor.
     * @property {module:model/PostSamlAssertionSuccessProvisioningNeeded}
     */
    PostSamlAssertionSuccessProvisioningNeeded: PostSamlAssertionSuccessProvisioningNeeded,
    /**
     * The PutApiRainbowLogsLevels model constructor.
     * @property {module:model/PutApiRainbowLogsLevels}
     */
    PutApiRainbowLogsLevels: PutApiRainbowLogsLevels,
    /**
     * The PutApiRainbowLogsLevelsSuccess model constructor.
     * @property {module:model/PutApiRainbowLogsLevelsSuccess}
     */
    PutApiRainbowLogsLevelsSuccess: PutApiRainbowLogsLevelsSuccess,
    /**
     * The PutApiRainbowLogsLevelsSuccessNewLoggerLevels model constructor.
     * @property {module:model/PutApiRainbowLogsLevelsSuccessNewLoggerLevels}
     */
    PutApiRainbowLogsLevelsSuccessNewLoggerLevels: PutApiRainbowLogsLevelsSuccessNewLoggerLevels,
    /**
     * The PutApiRainbowLogsLevelsSuccessOldLoggerLevels model constructor.
     * @property {module:model/PutApiRainbowLogsLevelsSuccessOldLoggerLevels}
     */
    PutApiRainbowLogsLevelsSuccessOldLoggerLevels: PutApiRainbowLogsLevelsSuccessOldLoggerLevels,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The AuthenticationUrlsApi service constructor.
     * @property {module:api/AuthenticationUrlsApi}
     */
    AuthenticationUrlsApi: AuthenticationUrlsApi,
    /**
     * The CommonApi service constructor.
     * @property {module:api/CommonApi}
     */
    CommonApi: CommonApi,
    /**
     * The OauthAuthenticationApi service constructor.
     * @property {module:api/OauthAuthenticationApi}
     */
    OauthAuthenticationApi: OauthAuthenticationApi,
    /**
     * The OauthTokensApi service constructor.
     * @property {module:api/OauthTokensApi}
     */
    OauthTokensApi: OauthTokensApi,
    /**
     * The OidcClientApi service constructor.
     * @property {module:api/OidcClientApi}
     */
    OidcClientApi: OidcClientApi,
    /**
     * The SamlAuthenticationApi service constructor.
     * @property {module:api/SamlAuthenticationApi}
     */
    SamlAuthenticationApi: SamlAuthenticationApi
  };

  return exports;
}));
