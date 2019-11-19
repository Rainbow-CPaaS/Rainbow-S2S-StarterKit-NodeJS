# RainbowAdminPortal.OrganisationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrganisations**](OrganisationsApi.md#deleteOrganisations) | **DELETE** /api/rainbow/admin/v1.0/organisations/{organisationId} | Delete an organisation
[**getOrganisations**](OrganisationsApi.md#getOrganisations) | **GET** /api/rainbow/admin/v1.0/organisations | Get all organisations
[**getOrganisationsId**](OrganisationsApi.md#getOrganisationsId) | **GET** /api/rainbow/admin/v1.0/organisations/{organisationId} | Get an organisation data
[**postOrganisations**](OrganisationsApi.md#postOrganisations) | **POST** /api/rainbow/admin/v1.0/organisations | Create an organisation
[**putOrganisations**](OrganisationsApi.md#putOrganisations) | **PUT** /api/rainbow/admin/v1.0/organisations/{organisationId} | Update an organisation



## deleteOrganisations

> DeleteOrganisationsSuccess deleteOrganisations(organisationId, accept)

Delete an organisation

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsApi();
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteOrganisations(organisationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| Organisation unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteOrganisationsSuccess**](DeleteOrganisationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganisations

> GetOrganisationsSuccess getOrganisations(accept, opts)

Get all organisations

Users with &#39;superadmin&#39;, &#39;support&#39;, &#39;business_admin&#39; or &#39;admin&#39; role can retrieve all organisations. Users with admin role (and not having superadmin, business_admin nor support role) can only retrieve organisations he has to manage.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/organisations?format&#x3D;small&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less organisation details in response.    - `small`: _id, name    - `medium`: _id, name    - `full`: all company fields
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort organisation list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting company list.
};
apiInstance.getOrganisations(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less organisation details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name    - &#x60;full&#x60;: all company fields | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort organisation list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting company list. | [optional] 

### Return type

[**GetOrganisationsSuccess**](GetOrganisationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganisationsId

> GetOrganisationsIdSuccess getOrganisationsId(organisationId, accept)

Get an organisation data

Users with &#39;superadmin&#39;, &#39;business_admin&#39;, &#39;support&#39; or &#39;admin&#39; role can retrieve any company.   **Users with admin role (and not having superadmin, business_admin nor support role) can only retrieve organisations he has to manage..**   Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57486e5d807a594145e510d6

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsApi();
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getOrganisationsId(organisationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| Organisation unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetOrganisationsIdSuccess**](GetOrganisationsIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganisations

> PostOrganisationsSuccess postOrganisations(body)

Create an organisation

For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined. It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    The organization is the highest level of the customer structure. It can federate several companies.    An administrator of an organization has the view of all companies below it.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations (body \&quot;name\&quot;:\&quot;Organization name\&quot;)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsApi();
var body = new RainbowAdminPortal.PostOrganisations(); // PostOrganisations | 
apiInstance.postOrganisations(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostOrganisations**](PostOrganisations.md)|  | 

### Return type

[**PostOrganisationsSuccess**](PostOrganisationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrganisations

> PutOrganisationsSuccess putOrganisations(organisationId, body)

Update an organisation

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsApi();
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutOrganisations(); // PutOrganisations | 
apiInstance.putOrganisations(organisationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| Organisation unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutOrganisations**](PutOrganisations.md)|  | 

### Return type

[**PutOrganisationsSuccess**](PutOrganisationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

