# RainbowAdminPortal.SystemsPhoneNumbersMultiCompaniesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemPhoneNumbersMulti**](SystemsPhoneNumbersMultiCompaniesApi.md#getSystemPhoneNumbersMulti) | **GET** /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/multi-companies | Get all companyPrefix for a isCentrex system



## getSystemPhoneNumbersMulti

> getSystemPhoneNumbersMulti(systemId, accept)

Get all companyPrefix for a isCentrex system

Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When directoryNumber are got from this system two more data are available: \&quot;companyName\&quot;, \&quot;companyPrefix\&quot;.   These data are stored and it&#39;s now possible to get all \&quot;companyPrefix\&quot;.    

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsPhoneNumbersMultiCompaniesApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSystemPhoneNumbersMulti(systemId, accept).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

