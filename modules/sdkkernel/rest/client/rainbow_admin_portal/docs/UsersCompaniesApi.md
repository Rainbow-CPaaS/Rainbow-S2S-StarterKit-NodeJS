# RainbowAdminPortal.UsersCompaniesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**unlinkUserFromACompany**](UsersCompaniesApi.md#unlinkUserFromACompany) | **PUT** /api/rainbow/admin/v1.0/users/{userId}/companies/default | Unlink user from a company and link it to default company



## unlinkUserFromACompany

> UnlinkUserFromACompanySuccess unlinkUserFromACompany(userId)

Unlink user from a company and link it to default company

This API can be used to unlink user from a company and link it to the default company.    Note that if user to unlink is an admin (organization_admin, company_admin, bp_admin, bp_finance ...), he will loose his admin rights.    Note also that if user was linked to PBX phone numbers, these phone numbers will be removed from user phone numbers.    

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersCompaniesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
apiInstance.unlinkUserFromACompany(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 

### Return type

[**UnlinkUserFromACompanySuccess**](UnlinkUserFromACompanySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

