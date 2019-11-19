# RainbowAuthentPortal.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRainbowAuthenticationV10Validator**](AuthenticationApi.md#getApiRainbowAuthenticationV10Validator) | **GET** /api/rainbow/authentication/v1.0/validator | Validate user JWT
[**getBasicLogin**](AuthenticationApi.md#getBasicLogin) | **GET** /api/rainbow/authentication/v1.0/login | Login user
[**getLogout**](AuthenticationApi.md#getLogout) | **GET** /api/rainbow/authentication/v1.0/logout | Logout user
[**getRenew**](AuthenticationApi.md#getRenew) | **GET** /api/rainbow/authentication/v1.0/renew | Renew user JWT



## getApiRainbowAuthenticationV10Validator

> GetApiRainbowAuthenticationV10ValidatorSuccess getApiRainbowAuthenticationV10Validator(accept)

Validate user JWT

This API allows to get a validation status on a token.

### Example

```javascript
var RainbowAuthentPortal = require('rainbow_authent_portal');
var defaultClient = RainbowAuthentPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthentPortal.AuthenticationApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowAuthenticationV10Validator(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetApiRainbowAuthenticationV10ValidatorSuccess**](GetApiRainbowAuthenticationV10ValidatorSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasicLogin

> GetBasicLoginSuccess getBasicLogin(authorization, xRainbowAppAuth, accept, opts)

Login user

This API allows Rainbow users to login.       Application is also authenticated during the user login.       If login is successful, the API returns a **JSON Web Token** (JWT) which has to be provided by clients for all Rainbow APIs requiring user authentication:   * The JWT is valid only for a given time period. * The JWT can be renewed a few times using API [GET /api/rainbow/authentication/v1.0/renew][0]. * The maximum number of renew is given in the JWT payload, as well as the current number of time the token has been renewed (see below). * Once the JWT expired, or if the maximum of token renew has been reached, user must login again using this API.  The JWT returned contains the following data in payload:        &#x60;&#x60;&#x60;json {       \&quot;countRenewed\&quot;: 0,  // Number of times the token has been renewed       \&quot;maxTokenRenew\&quot;: 5,  // Number of times the token can be renewed       \&quot;user\&quot;: {           \&quot;id\&quot;: \&quot;572756967bfbca0d0e09a6b4\&quot;,  // Logged in user id           \&quot;loginEmail\&quot;: \&quot;user@company.com\&quot;  // Logged in user loginEmail       },       \&quot;app\&quot;: {           \&quot;id\&quot;: \&quot;598983029db9b5b14693a6f0\&quot;,  // Application id used for the authentication           \&quot;name\&quot;: \&quot;My App\&quot;  // Application name       },       \&quot;iat\&quot;: 1463588327,  // (Issued At) Time at which the JWT was issued       \&quot;exp\&quot;: 2183588327  // (Expiration Time) Expiration time after which the JWT won&#39;t be accepted } &#x60;&#x60;&#x60;       If login / password combination is wrong, an error 401 is return.    If appId / appSecret combination is wrong, an error 401 is return.    The following login protection is implemented:   * After a given number of login failure (5 by default), the user account is **locked** for a given time period (60 min by default). * As long as the maximum number of login failure has not been reached, a 401 error with errorDetailsCode &#x60;401500&#x60; is returned. * Once the maximum number of login attempts has been reached, a 401 error with errorDetailsCode &#x60;401501&#x60; is returned: the user account is locked for the given time period. * While the user account is locked, the same response with errorDetailsCode &#x60;401501&#x60; will be returned for each new login attempt for this user account (even if a good login / password combination is provided). If the login / password combination is wrong, the locked time period restarts from this new wrong attempt. * Once the locked time period is over, a login with the good credentials will be allowed. * While the account is locked, the user can reset his password. In that case, his account will be unlocked and he will be able to login with his new password. * While the account is locked, a superadmin / support / admin (organisation or company level) user can set a new password for this account. In that case, this account will be unlocked and the user will be able to login with this new password.  - Warning login url is case sensitive (lowercase). For example, /Login or /LOGIN won&#39;t work.login will be forbidden for a certain delay if too much consecutive wrong password errors occurs, after this user has to request a password change or just wait (see implementation details above).   [0]: #api-authentication-GetRenew

### Example

```javascript
var RainbowAuthentPortal = require('rainbow_authent_portal');

var apiInstance = new RainbowAuthentPortal.AuthenticationApi();
var authorization = "authorization_example"; // String | Basic <base64encode(userLogin:userPassword)>
var xRainbowAppAuth = "xRainbowAppAuth_example"; // String | Basic <base64encode(appId:sha256(appSecretuserPassword))> (concatenation of appSecret and userPassword, hashed with sha256)
var accept = "accept_example"; // String | application/json
var opts = {
  'xRainbowClient': "xRainbowClient_example", // String | the app used
  'xRainbowClientVersion': "xRainbowClientVersion_example" // String | 1.10.7
};
apiInstance.getBasicLogin(authorization, xRainbowAppAuth, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Basic &lt;base64encode(userLogin:userPassword)&gt; | 
 **xRainbowAppAuth** | **String**| Basic &lt;base64encode(appId:sha256(appSecretuserPassword))&gt; (concatenation of appSecret and userPassword, hashed with sha256) | 
 **accept** | **String**| application/json | 
 **xRainbowClient** | **String**| the app used | [optional] 
 **xRainbowClientVersion** | **String**| 1.10.7 | [optional] 

### Return type

[**GetBasicLoginSuccess**](GetBasicLoginSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogout

> GetLogoutSuccess getLogout(accept)

Logout user

### Example

```javascript
var RainbowAuthentPortal = require('rainbow_authent_portal');
var defaultClient = RainbowAuthentPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthentPortal.AuthenticationApi();
var accept = "accept_example"; // String | application/json
apiInstance.getLogout(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetLogoutSuccess**](GetLogoutSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRenew

> GetRenewSuccess getRenew(accept)

Renew user JWT

This API allows Rainbow users to renew their JSON Web Token (JWT), thus extending the expiration date of their current JWT.       This API requires user to be authenticated with a valid non expired JWT.    If so, a new JWT is returned, with the expiration date starting from now.       **Warning:** The JWT can only be renewed a given number of times, after this user has to login again to get a new token using API [GET /api/rainbow/authentication/v1.0/login][0].    The maximum number of renew is given in the JWT, as well as the current number of time the token has been renewed.  [0]: #api-authentication-GetLogin

### Example

```javascript
var RainbowAuthentPortal = require('rainbow_authent_portal');
var defaultClient = RainbowAuthentPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthentPortal.AuthenticationApi();
var accept = "accept_example"; // String | application/json
apiInstance.getRenew(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetRenewSuccess**](GetRenewSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

