# RainbowAdminPortal.CompaniesSettingsForPstnConferencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyConferenceSettings**](CompaniesSettingsForPstnConferencesApi.md#getCompanyConferenceSettings) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/settings/conferences | Get PSTN Conferences settings
[**putCompanyConferenceSettings**](CompaniesSettingsForPstnConferencesApi.md#putCompanyConferenceSettings) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/settings/conferences | Update conferences settings for a given company



## getCompanyConferenceSettings

> GetCompanyConferenceSettingsSuccess getCompanyConferenceSettings(companyId, accept)

Get PSTN Conferences settings

This API allows to get Conferences settings for a given company.       Users with &#x60;superadmin&#x60; role can get Conferences settings of any company.       &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users can only get Conferences settings for a company they manage.       &#x60;organization_admin&#x60; users can only get Conferences settings for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only get Conferences settings of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsForPstnConferencesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getCompanyConferenceSettings(companyId, accept).then(function(data) {
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

[**GetCompanyConferenceSettingsSuccess**](GetCompanyConferenceSettingsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putCompanyConferenceSettings

> PutCompanyConferenceSettingsSuccess putCompanyConferenceSettings(companyId, body)

Update conferences settings for a given company

This API allows to update conferences settings for a given company.       Users with &#x60;superadmin&#x60; role can update conferences settings of any company.       &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users can only update conferences settings for a company they manage       &#x60;organization_admin&#x60; users can only update conferences settings for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only update conferences settings of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsForPstnConferencesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutCompanyConferenceSettings(); // PutCompanyConferenceSettings | 
apiInstance.putCompanyConferenceSettings(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutCompanyConferenceSettings**](PutCompanyConferenceSettings.md)|  | 

### Return type

[**PutCompanyConferenceSettingsSuccess**](PutCompanyConferenceSettingsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

