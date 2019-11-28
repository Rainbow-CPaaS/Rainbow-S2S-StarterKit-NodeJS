# RainbowAuthenticationPortal.OauthTokensApi

All URIs are relative to *https://openrainbow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOAuthToken**](OauthTokensApi.md#deleteOAuthToken) | **DELETE** /api/rainbow/authentication/v1.0/oauth/tokens/{tokenId} | Delete an OAuth token
[**getOAuthToken**](OauthTokensApi.md#getOAuthToken) | **GET** /api/rainbow/authentication/v1.0/oauth/tokens | Get all OAuth token
[**getOAuthTokenById**](OauthTokensApi.md#getOAuthTokenById) | **GET** /api/rainbow/authentication/v1.0/oauth/tokens/{tokenId} | Get an OAuth token



## deleteOAuthToken

> DeleteOAuthTokenSuccess deleteOAuthToken(tokenId, accept)

Delete an OAuth token

This API allows users to revoke OAuth token they have previously granted for applications. &lt;br/&gt; &lt;br/&gt; Once an OAuth token is revoked, the application for which this token has been issued will no longer be able to use Rainbow APIs in the name of the user.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');
var defaultClient = RainbowAuthenticationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthenticationPortal.OauthTokensApi();
var tokenId = "tokenId_example"; // String | OAuth token unique identifier (like 5c6c32532204570d233816d2)
var accept = "accept_example"; // String | application/json
apiInstance.deleteOAuthToken(tokenId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| OAuth token unique identifier (like 5c6c32532204570d233816d2) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteOAuthTokenSuccess**](DeleteOAuthTokenSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOAuthToken

> GetOAuthTokenSuccess getOAuthToken(accept, opts)

Get all OAuth token

This API allows users to list all OAuth tokens they have generated. &lt;br/&gt; &lt;br/&gt; An OAuth token is generated when an application logs a user using OAuth 2.0 protocol. An OAuth token gives the possibility for the application to use Rainbow APIs in the name of the user (delegation).

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');
var defaultClient = RainbowAuthenticationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthenticationPortal.OauthTokensApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "'small'", // String | Allows to retrieve more or less OAuth token details in response. <br/> - `small`: id, appId, appName, userId <br/> - `medium`: id, appId, appName, userId, scope, creationDate, accessTokenIssuedAt, refreshTokenExpiresAt <br/> - `full`: all OAuth token fields
  'limit': 3.4, // Number | Allow to specify the number of OAuth tokens to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first OAuth token to retrieve (first OAuth token if not specified). Warning: if offset > total, no results are returned.
  'sortField': "'appName'", // String | Sort OAuth tokens list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting OAuth tokens list.
};
apiInstance.getOAuthToken(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less OAuth token details in response. &lt;br/&gt; - &#x60;small&#x60;: id, appId, appName, userId &lt;br/&gt; - &#x60;medium&#x60;: id, appId, appName, userId, scope, creationDate, accessTokenIssuedAt, refreshTokenExpiresAt &lt;br/&gt; - &#x60;full&#x60;: all OAuth token fields | [optional] [default to &#39;small&#39;]
 **limit** | **Number**| Allow to specify the number of OAuth tokens to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first OAuth token to retrieve (first OAuth token if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort OAuth tokens list based on the given field. | [optional] [default to &#39;appName&#39;]
 **sortOrder** | **Number**| Specify order when sorting OAuth tokens list. | [optional] 

### Return type

[**GetOAuthTokenSuccess**](GetOAuthTokenSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOAuthTokenById

> GetOAuthTokenByIdSuccess getOAuthTokenById(tokenId, accept)

Get an OAuth token

This API allows users to get an OAuth token.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');
var defaultClient = RainbowAuthenticationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAuthenticationPortal.OauthTokensApi();
var tokenId = "tokenId_example"; // String | OAuth token unique identifier (like 5c6c32532204570d233816d2)
var accept = "accept_example"; // String | application/json
apiInstance.getOAuthTokenById(tokenId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| OAuth token unique identifier (like 5c6c32532204570d233816d2) | 
 **accept** | **String**| application/json | 

### Return type

[**GetOAuthTokenByIdSuccess**](GetOAuthTokenByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

