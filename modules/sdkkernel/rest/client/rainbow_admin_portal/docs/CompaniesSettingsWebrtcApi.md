# RainbowAdminPortal.CompaniesSettingsWebrtcApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCompanyIceServers**](CompaniesSettingsWebrtcApi.md#deleteCompanyIceServers) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/settings/iceservers/{iceServerId} | Delete an ICE server
[**getCompanyIceServers**](CompaniesSettingsWebrtcApi.md#getCompanyIceServers) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/settings/iceservers | Get ICE servers
[**postCompanyIceServers**](CompaniesSettingsWebrtcApi.md#postCompanyIceServers) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/settings/iceservers | Create an ICE server
[**putCompanyIceServers**](CompaniesSettingsWebrtcApi.md#putCompanyIceServers) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/settings/iceservers/{iceServerId} | Update an ICE server



## deleteCompanyIceServers

> DeleteCompanyIceServersSuccess deleteCompanyIceServers(iceServerId, companyId, accept, contentType)

Delete an ICE server

This API allows to delete an existing ICE server configuration for a given company.       Users with &#x60;superadmin&#x60; role can delete ICE servers of any company.       &#x60;bp_admin&#x60; users can only delete ICE servers for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only delete ICE servers for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only delete ICE servers of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
apiInstance.deleteCompanyIceServers(iceServerId, companyId, accept, contentType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 

### Return type

[**DeleteCompanyIceServersSuccess**](DeleteCompanyIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyIceServers

> GetCompanyIceServersSuccess getCompanyIceServers(companyId, accept, body)

Get ICE servers

This API allows to get ICE servers configuration for a given company.       Users with &#x60;superadmin&#x60; role can get ICE servers of any company.       &#x60;bp_admin&#x60; users can only get ICE servers for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only get ICE servers for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only get ICE servers of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsWebrtcApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var body = new RainbowAdminPortal.GetCompanyIceServers(); // GetCompanyIceServers | 
apiInstance.getCompanyIceServers(companyId, accept, body).then(function(data) {
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
 **body** | [**GetCompanyIceServers**](GetCompanyIceServers.md)|  | 

### Return type

[**GetCompanyIceServersSuccess**](GetCompanyIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCompanyIceServers

> PostCompanyIceServersSuccess postCompanyIceServers(companyId, body)

Create an ICE server

This API allows to create an ICE server configuration for a given company.       Users with &#x60;superadmin&#x60; role can create ICE servers of any company.       &#x60;bp_admin&#x60; users can only create ICE servers for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only create ICE servers for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only create ICE servers of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsWebrtcApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PostCompanyIceServers(); // PostCompanyIceServers | 
apiInstance.postCompanyIceServers(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PostCompanyIceServers**](PostCompanyIceServers.md)|  | 

### Return type

[**PostCompanyIceServersSuccess**](PostCompanyIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCompanyIceServers

> PutCompanyIceServersSuccess putCompanyIceServers(iceServerId, companyId, body)

Update an ICE server

This API allows to update an existing ICE server configuration for a given company.       Users with &#x60;superadmin&#x60; role can update ICE servers of any company.       &#x60;bp_admin&#x60; users can only update ICE servers for a company they manage (i.e. End Customer company for which bp_admin&#39;s company if the BP company).       &#x60;organization_admin&#x60; users can only update ICE servers for a company they manage (i.e. company linked to organization_admin&#39;s organization).       &#x60;company_admin&#x60; users can only update ICE servers of their own company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutCompanyIceServers(); // PutCompanyIceServers | 
apiInstance.putCompanyIceServers(iceServerId, companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutCompanyIceServers**](PutCompanyIceServers.md)|  | 

### Return type

[**PutCompanyIceServersSuccess**](PutCompanyIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

