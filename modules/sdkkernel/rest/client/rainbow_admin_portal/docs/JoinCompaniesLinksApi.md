# RainbowAdminPortal.JoinCompaniesLinksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteJoinCompaniesLinksById**](JoinCompaniesLinksApi.md#deleteJoinCompaniesLinksById) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/links/{joinCompanyLinkId} | Delete a join company link
[**getJoinCompaniesLinks**](JoinCompaniesLinksApi.md#getJoinCompaniesLinks) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/links | Get all join company links
[**getJoinCompaniesLinksById**](JoinCompaniesLinksApi.md#getJoinCompaniesLinksById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/links/{joinCompanyLinkId} | Get a join company link
[**postJoinCompaniesLinks**](JoinCompaniesLinksApi.md#postJoinCompaniesLinks) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/links | Create a join company link



## deleteJoinCompaniesLinksById

> DeleteJoinCompaniesLinksByIdSuccess deleteJoinCompaniesLinksById(companyId, joinCompanyLinkId, accept)

Delete a join company link

This API can be used by company &#x60;admin&#x60; users to delete a join company link by id       Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/links/5819ed7c9547b313509237d6

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompaniesLinksApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var joinCompanyLinkId = "joinCompanyLinkId_example"; // String | Join company link unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.deleteJoinCompaniesLinksById(companyId, joinCompanyLinkId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **joinCompanyLinkId** | **String**| Join company link unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteJoinCompaniesLinksByIdSuccess**](DeleteJoinCompaniesLinksByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompaniesLinks

> GetJoinCompaniesLinksSuccess getJoinCompaniesLinks(companyId, accept)

Get all join company links

This API can be used by company &#x60;admin&#x60; users to list existing join company links for his company.       Join company links allow users to send a join company request to company admins (using API [POST /api/rainbow/enduser/v1.0/users/{userId}/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/links  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompaniesLinksApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompaniesLinks(companyId, accept).then(function(data) {
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

[**GetJoinCompaniesLinksSuccess**](GetJoinCompaniesLinksSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompaniesLinksById

> GetJoinCompaniesLinksByIdSuccess getJoinCompaniesLinksById(companyId, joinCompanyLinkId, accept)

Get a join company link

This API can be used by company &#x60;admin&#x60; users to get a join company link by id       Join company links allow users to send a join company request to company admins (using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/links/5819ed7c9547b313509237d6  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompaniesLinksApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var joinCompanyLinkId = "joinCompanyLinkId_example"; // String | Join company link unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompaniesLinksById(companyId, joinCompanyLinkId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **joinCompanyLinkId** | **String**| Join company link unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetJoinCompaniesLinksByIdSuccess**](GetJoinCompaniesLinksByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postJoinCompaniesLinks

> PostJoinCompaniesLinksSuccess postJoinCompaniesLinks(companyId, body)

Create a join company link

This API can be used by company &#x60;admin&#x60; users to create a join company link for his company.       Join company links allow users to send a join company request to company admins (using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/links  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompaniesLinksApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PostJoinCompaniesLinks(); // PostJoinCompaniesLinks | 
apiInstance.postJoinCompaniesLinks(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PostJoinCompaniesLinks**](PostJoinCompaniesLinks.md)|  | 

### Return type

[**PostJoinCompaniesLinksSuccess**](PostJoinCompaniesLinksSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

