# RainbowAdminPortal.CompaniesSsoSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCompanySSOSettings**](CompaniesSsoSettingsApi.md#deleteCompanySSOSettings) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/settings/sso/{singleSignOnType} | Delete an SSO server configuration
[**getCompanySSOSettings**](CompaniesSsoSettingsApi.md#getCompanySSOSettings) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/settings/sso | Get SSO server configuration
[**postCompanySSOSettings**](CompaniesSsoSettingsApi.md#postCompanySSOSettings) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/settings/sso | Create SSO server configuration
[**putCompanySSOSettings**](CompaniesSsoSettingsApi.md#putCompanySSOSettings) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/settings/sso/{singleSignOnType} | Update SSO server configuration



## deleteCompanySSOSettings

> deleteCompanySSOSettings(singleSignOnType, companyId, accept, contentType)

Delete an SSO server configuration

This API allows to delete an SSO server configuration for a given company.       Users with &#x60;superadmin&#x60; role can delete an SSO server configuration of any company.       &#x60;bp_admin&#x60; users can only delete an SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only delete an SSO server configuration for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only delete an SSO server configuration of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSsoSettingsApi();
var singleSignOnType = "singleSignOnType_example"; // String | authentication type (like SAML)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
apiInstance.deleteCompanySSOSettings(singleSignOnType, companyId, accept, contentType).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **singleSignOnType** | **String**| authentication type (like SAML) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanySSOSettings

> GetCompanySSOSettingsSuccess getCompanySSOSettings(companyId, accept)

Get SSO server configuration

This API allows to get SSO server configuration for a given company.       Users with &#x60;superadmin&#x60; role can get SSO server configurationof any company.       &#x60;bp_admin&#x60; users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only get SSO server configuration of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSsoSettingsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getCompanySSOSettings(companyId, accept).then(function(data) {
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

[**GetCompanySSOSettingsSuccess**](GetCompanySSOSettingsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCompanySSOSettings

> postCompanySSOSettings(companyId, body)

Create SSO server configuration

This API allows to get SSO server configuration for a given company.       Users with &#x60;superadmin&#x60; role can get SSO server configuration of any company.       &#x60;bp_admin&#x60; users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only get SSO server configuration of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSsoSettingsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PostCompanySSOSettings(); // PostCompanySSOSettings | 
apiInstance.postCompanySSOSettings(companyId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PostCompanySSOSettings**](PostCompanySSOSettings.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCompanySSOSettings

> putCompanySSOSettings(singleSignOnType, companyId, body)

Update SSO server configuration

This API allows to update SSO server configuration for a given company.       Users with &#x60;superadmin&#x60; role can update SSO server configuration of any company.       &#x60;bp_admin&#x60; users can only update SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only update SSO server configuration for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only update SSO server configuration of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSsoSettingsApi();
var singleSignOnType = "singleSignOnType_example"; // String | authentication type (like SAML)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutCompanySSOSettings(); // PutCompanySSOSettings | 
apiInstance.putCompanySSOSettings(singleSignOnType, companyId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **singleSignOnType** | **String**| authentication type (like SAML) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutCompanySSOSettings**](PutCompanySSOSettings.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

