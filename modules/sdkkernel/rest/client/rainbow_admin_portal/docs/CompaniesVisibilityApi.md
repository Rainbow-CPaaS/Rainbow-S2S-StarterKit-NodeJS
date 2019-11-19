# RainbowAdminPortal.CompaniesVisibilityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCompaniesVisibility**](CompaniesVisibilityApi.md#deleteCompaniesVisibility) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/visible-by/{otherCompanyId} | Remove visibility to a given company
[**deletePendingCompanyVisibilityReqById**](CompaniesVisibilityApi.md#deletePendingCompanyVisibilityReqById) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/visibility/requests/{visibilityRequestId} | Delete a pending visibility request
[**getPendingCompanyVisibilityReq**](CompaniesVisibilityApi.md#getPendingCompanyVisibilityReq) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/visibility/requests | Get pending visibility requests
[**getPendingCompanyVisibilityReqById**](CompaniesVisibilityApi.md#getPendingCompanyVisibilityReqById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/visibility/requests/{visibilityRequestId} | Get a pending visibility request
[**postAcceptCompanyVisibilityReq**](CompaniesVisibilityApi.md#postAcceptCompanyVisibilityReq) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/visibility/requests/{visibilityRequestId}/accept | Accept a visibility request
[**postCompaniesVisibility**](CompaniesVisibilityApi.md#postCompaniesVisibility) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/visible-by/{otherCompanyId} | Add visibility to a given company



## deleteCompaniesVisibility

> DeleteCompaniesVisibilitySuccess deleteCompaniesVisibility(otherCompanyId, companyId, accept)

Remove visibility to a given company

This API can be used by &#x60;superadmin&#x60;, &#x60;organization_admin&#x60;, &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users to delete visibility between company A and company B (uni-directionally):    DELETE https://openrainbow.com/api/rainbow/admin/v1.0/companies/{company_id_A}/visible-by/{company_id_B}       &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users can only remove visibility from a company they manage with a company they manage (i.e. management of End Customers companies for which bp_admin/bp_finance&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only remove visibility from a company they manage with a company they manage (i.e. management of the visibility between companies of his organization).       Using this API, the visibility is removed **uni-directionally**. This means that if company A and company B could see each other, if DELETE /api/rainbow/admin/v1.0/companies/{company_id_B}/visible-by/{company_id_A} is called, company B will no longer be able to see company A, but company A will still be able to see company B.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var otherCompanyId = "otherCompanyId_example"; // String | Company unique identifier to which the visibility will be given (like 56d6f00441255dd54b5b61ae)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteCompaniesVisibility(otherCompanyId, companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otherCompanyId** | **String**| Company unique identifier to which the visibility will be given (like 56d6f00441255dd54b5b61ae) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteCompaniesVisibilitySuccess**](DeleteCompaniesVisibilitySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePendingCompanyVisibilityReqById

> DeletePendingCompanyVisibilityReqByIdSuccess deletePendingCompanyVisibilityReqById(visibilityRequestId, companyId, accept)

Delete a pending visibility request

This API can be used by company &#x60;admin&#x60; users to delete a given visibility request he has received from admin of another companies (sent using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]).  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var visibilityRequestId = "visibilityRequestId_example"; // String | VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deletePendingCompanyVisibilityReqById(visibilityRequestId, companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **visibilityRequestId** | **String**| VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeletePendingCompanyVisibilityReqByIdSuccess**](DeletePendingCompanyVisibilityReqByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPendingCompanyVisibilityReq

> GetPendingCompanyVisibilityReqSuccess getPendingCompanyVisibilityReq(companyId, accept)

Get pending visibility requests

This API can be used by company &#x60;admin&#x60; users to list visibility request he has received from admin of another companies (sent using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]).  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getPendingCompanyVisibilityReq(companyId, accept).then(function(data) {
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

[**GetPendingCompanyVisibilityReqSuccess**](GetPendingCompanyVisibilityReqSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPendingCompanyVisibilityReqById

> GetPendingCompanyVisibilityReqByIdSuccess getPendingCompanyVisibilityReqById(visibilityRequestId, companyId, accept)

Get a pending visibility request

This API can be used by company &#x60;admin&#x60; users to retrieve a given visibility request he has received from admin of another companies (sent using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]).  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var visibilityRequestId = "visibilityRequestId_example"; // String | VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getPendingCompanyVisibilityReqById(visibilityRequestId, companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **visibilityRequestId** | **String**| VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetPendingCompanyVisibilityReqByIdSuccess**](GetPendingCompanyVisibilityReqByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAcceptCompanyVisibilityReq

> PostAcceptCompanyVisibilityReqSuccess postAcceptCompanyVisibilityReq(visibilityRequestId, companyId)

Accept a visibility request

This API can be used by company &#x60;admin&#x60; users to accept a visibility request sent by the admin of another company (sent using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]).       Using this API, the visibility is given **bi-directionally**.       Visibility means that:   * &#x60;users&#x60; and &#x60;admins&#x60; from one of these companies will be able to see the other company using [GET /api/rainbow/enduser/v1.0/companies][1] and [GET /api/rainbow/enduser/v1.0/companies/{companyId}][2] * &#x60;users&#x60; and &#x60;admins&#x60; from one of these companies will be able to see users of the other company using [GET /api/rainbow/enduser/v1.0/users][3], [GET /api/rainbow/enduser/v1.0/users/{userId}][4] and [GET /api/rainbow/enduser/v1.0/search][5] and [POST /api/rainbow/enduser/v1.0/search][6]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility [1]: /enduser/#api-companies-enduser_GetCompanies [2]: /enduser/#api-companies-enduser_GetCompaniesId [3]: /enduser/#api-users-enduser_GetUsers [4]: /enduser/#api-users-enduser_GetUsersId [5]: /enduser/#api-search-enduser_Search_by_GET [6]: /enduser/#api-search-enduser_Search_by_POST

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var visibilityRequestId = "visibilityRequestId_example"; // String | VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
apiInstance.postAcceptCompanyVisibilityReq(visibilityRequestId, companyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **visibilityRequestId** | **String**| VisibilityRequest unique identifier (ex: 5762bd90650506b1a7229f63). Correspond to the id sent in the url query parameters of the email received by the company administrator using API [POST /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility][0]  [0]: #api-admin_notifications_emails-admin_RequestCompanyVisibility | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 

### Return type

[**PostAcceptCompanyVisibilityReqSuccess**](PostAcceptCompanyVisibilityReqSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCompaniesVisibility

> PostCompaniesVisibilitySuccess postCompaniesVisibility(otherCompanyId, companyId)

Add visibility to a given company

This API can be used by &#x60;superadmin&#x60;, &#x60;organization_admin&#x60;, &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users to make company A visible by company B:    POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/{company_id_A}/visible-by/{company_id_B}       &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; users can only add visibility from a company they manage to a company they manage (i.e. management of End Customers companies for which bp_admin/bp_finance&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only add visibility from a company they manage to a company they manage (i.e. management of the visibility between companies of his organization).       Using this API, the visibility is given **uni-directionally**. This means that if POST /api/rainbow/admin/v1.0/companies/{company_id_B}/visible-by/{company_id_A} is not called, company B will be able to see company A but company B won&#39;t be able to see company A.       Visibility means that:   * &#x60;users&#x60; and &#x60;admins&#x60; from company B will be able to see company A using [GET /api/rainbow/enduser/v1.0/companies][0] and [GET /api/rainbow/enduser/v1.0/companies/{companyId}][1] * &#x60;users&#x60; and &#x60;admins&#x60; from company B will be able to see users of company A using [GET /api/rainbow/enduser/v1.0/users][2], [GET /api/rainbow/enduser/v1.0/users/:userId][3] and [GET /api/rainbow/enduser/v1.0/search][4] and [POST /api/rainbow/enduser/v1.0/search][5]  [0]: /enduser/#api-companies-enduser_GetCompanies [1]: /enduser/#api-companies-enduser_GetCompaniesId [2]: /enduser/#api-users-enduser_GetUsers [3]: /enduser/#api-users-enduser_GetUsersId [4]: /enduser/#api-search-enduser_Search_by_GET [5]: /enduser/#api-search-enduser_Search_by_POST

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesVisibilityApi();
var otherCompanyId = "otherCompanyId_example"; // String | Company unique identifier to which the visibility will be given (like 56d6f00441255dd54b5b61ae)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
apiInstance.postCompaniesVisibility(otherCompanyId, companyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otherCompanyId** | **String**| Company unique identifier to which the visibility will be given (like 56d6f00441255dd54b5b61ae) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 

### Return type

[**PostCompaniesVisibilitySuccess**](PostCompaniesVisibilitySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

