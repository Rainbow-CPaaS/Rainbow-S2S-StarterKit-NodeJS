# RainbowAdminPortal.OrganisationsCompaniesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrganisationCompanies**](OrganisationsCompaniesApi.md#deleteOrganisationCompanies) | **DELETE** /api/rainbow/admin/v1.0/organisations/{organisationId}/companies/{companyId} | Unlink the company to an organization
[**getOrganisationCompanies**](OrganisationsCompaniesApi.md#getOrganisationCompanies) | **GET** /api/rainbow/admin/v1.0/organisations/{organisationId}/companies | Get all companies linked with this organization
[**postOrganisationCompanies**](OrganisationsCompaniesApi.md#postOrganisationCompanies) | **POST** /api/rainbow/admin/v1.0/organisations/{organisationId}/companies | Link a company to an organization



## deleteOrganisationCompanies

> DeleteOrganisationCompaniesSuccess deleteOrganisationCompanies(companyId, organisationId, accept)

Unlink the company to an organization

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsCompaniesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 5749ab92245015fe0d36e96a)
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteOrganisationCompanies(companyId, organisationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 5749ab92245015fe0d36e96a) | 
 **organisationId** | **String**| Organisation unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteOrganisationCompaniesSuccess**](DeleteOrganisationCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganisationCompanies

> GetOrganisationCompaniesSuccess getOrganisationCompanies(organisationId, accept, opts)

Get all companies linked with this organization

For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api gets all companies linked with an organization.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57486e5d807a594145e510d6/companies

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsCompaniesApi();
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less company details in response.    - `small`: _id, name    - `medium`: _id, name, status    - `full`: all company fields
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort company list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting company list.
};
apiInstance.getOrganisationCompanies(organisationId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name, status    - &#x60;full&#x60;: all company fields | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort company list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting company list. | [optional] 

### Return type

[**GetOrganisationCompaniesSuccess**](GetOrganisationCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganisationCompanies

> PostOrganisationCompaniesSuccess postOrganisationCompanies(organisationId, body)

Link a company to an organization

For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined.    It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    This api links a company with the given organization. Company&#39;s users are automatically attached to this organisation.    A company must belong to only one organisation or kept single.    When an organization is deleted, the company is automatically unlinked.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/organisations/57515338c5d7b862456d60a0/companies (body \&quot;companyId\&quot;:\&quot;5749ab92245015fe0d36e96a\&quot;)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OrganisationsCompaniesApi();
var organisationId = "organisationId_example"; // String | Organisation unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PostOrganisationCompanies(); // PostOrganisationCompanies | 
apiInstance.postOrganisationCompanies(organisationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| Organisation unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PostOrganisationCompanies**](PostOrganisationCompanies.md)|  | 

### Return type

[**PostOrganisationCompaniesSuccess**](PostOrganisationCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

