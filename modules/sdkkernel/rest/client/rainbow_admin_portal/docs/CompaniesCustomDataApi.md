# RainbowAdminPortal.CompaniesCustomDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putCompaniesCustomData**](CompaniesCustomDataApi.md#putCompaniesCustomData) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/custom-data | Manage custom data



## putCompaniesCustomData

> PutCompaniesCustomDataSuccess putCompaniesCustomData(companyId, body)

Manage custom data

This API is still working, but customData management can now be done directly at company creation (using API [POST /api/rainbow/admin/v1.0/companies](#api-companies-PostCompanies) or with a company update (using API [PUT /api/rainbow/admin/v1.0/companies/:companyId](#api-companies-PutCompanies).

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesCustomDataApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutCompaniesCustomData(); // PutCompaniesCustomData | 
apiInstance.putCompaniesCustomData(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutCompaniesCustomData**](PutCompaniesCustomData.md)|  | 

### Return type

[**PutCompaniesCustomDataSuccess**](PutCompaniesCustomDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

