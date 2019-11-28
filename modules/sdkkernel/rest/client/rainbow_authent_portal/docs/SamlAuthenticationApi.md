# RainbowAuthenticationPortal.SamlAuthenticationApi

All URIs are relative to *https://openrainbow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSamlAssertion**](SamlAuthenticationApi.md#getSamlAssertion) | **GET** /api/rainbow/authentication/v1.0/saml/{companyId}/assert | IDP logout response
[**getSamlAssertionConfiguration**](SamlAuthenticationApi.md#getSamlAssertionConfiguration) | **GET** /api/rainbow/authentication/v1.0/saml/{companyId}/metadata.xml | Get assertion configuration for a company
[**getSamlLogin**](SamlAuthenticationApi.md#getSamlLogin) | **GET** /api/rainbow/authentication/v1.0/saml/login | Initiate an SAML authentication
[**getSamlLogout**](SamlAuthenticationApi.md#getSamlLogout) | **GET** /api/rainbow/authentication/v1.0/saml/logout | Close SAML session
[**postSamlAssertion**](SamlAuthenticationApi.md#postSamlAssertion) | **POST** /api/rainbow/authentication/v1.0/saml/{companyId}/assert | IDP authentication response



## getSamlAssertion

> getSamlAssertion(companyId, accept)

IDP logout response

This API allows IDP server to respond to SAML logout request or ask for SAML logout.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.SamlAuthenticationApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSamlAssertion(companyId, accept).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/unknown


## getSamlAssertionConfiguration

> GetSamlAssertionConfigurationSuccess getSamlAssertionConfiguration(companyId, accept)

Get assertion configuration for a company

This API allows an IDP server to retrieve ASSERTION configuration to callback Rainbow SP after an SAML authentication request

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.SamlAuthenticationApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSamlAssertionConfiguration(companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetSamlAssertionConfigurationSuccess**](GetSamlAssertionConfigurationSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## getSamlLogin

> getSamlLogin(companyId, challenge)

Initiate an SAML authentication

This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.SamlAuthenticationApi();
var companyId = "companyId_example"; // String | User company identifier: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid=user1@company.com
var challenge = "challenge_example"; // String | challenge for application authentication: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid=user1@company.com
apiInstance.getSamlLogin(companyId, challenge).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| User company identifier: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com | 
 **challenge** | **String**| challenge for application authentication: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/unknown


## getSamlLogout

> getSamlLogout()

Close SAML session

This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.SamlAuthenticationApi();
apiInstance.getSamlLogout().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/unknown


## postSamlAssertion

> PostSamlAssertionSuccess postSamlAssertion(companyId, postSamlAssertion)

IDP authentication response

This API allows IDP server to provide the identity of a user which have performed an SAML authentication (If the user suceeded in the authentication process). This identity provided by the IDP will be used to retrieve the associated Rainbow user.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.SamlAuthenticationApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var postSamlAssertion = new RainbowAuthenticationPortal.PostSamlAssertion(); // PostSamlAssertion | 
apiInstance.postSamlAssertion(companyId, postSamlAssertion).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **postSamlAssertion** | [**PostSamlAssertion**](PostSamlAssertion.md)|  | 

### Return type

[**PostSamlAssertionSuccess**](PostSamlAssertionSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

