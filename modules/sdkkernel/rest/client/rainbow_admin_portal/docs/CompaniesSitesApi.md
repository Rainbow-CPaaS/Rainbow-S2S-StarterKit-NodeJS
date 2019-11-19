# RainbowAdminPortal.CompaniesSitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanySites**](CompaniesSitesApi.md#getCompanySites) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/sites | Get all sites linked with this company



## getCompanySites

> GetCompanySitesSuccess getCompanySites(companyId, accept, opts)

Get all sites linked with this company

This API allows administrator to retrieve sites linked to a given company       &#x60;superadmin&#x60; and &#x60;support&#x60; get sites linked to all companies existing in Rainbow.    &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; only get sites linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; only get sites linked to companies under their organization.    &#x60;company_admin&#x60; only get sites linked to their company.    &#x60;site_admin&#x60; is not allowed to use this API.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/sites?format&#x3D;full

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesSitesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less site details in response.    - `small`: _id, name    - `medium`: _id, name, status, companyId    - `full`: all site fields
  'name': "name_example", // String | Allows to filter sites list on field name.       The filtering is case insensitive and on partial name match: all sites **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _sit_, sites with the following names are match the filter 'My site', 'Site', 'A site 1', 'Site of company', 'Sit1', 'Sit2', ...
  'companyId2': "companyId_example", // String | Allows to filter sites list on the companyIds provided in this option.
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first site to retrieve (first site if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort site list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting site list.
};
apiInstance.getCompanySites(companyId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less site details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name, status, companyId    - &#x60;full&#x60;: all site fields | [optional] 
 **name** | **String**| Allows to filter sites list on field name.       The filtering is case insensitive and on partial name match: all sites **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _sit_, sites with the following names are match the filter &#39;My site&#39;, &#39;Site&#39;, &#39;A site 1&#39;, &#39;Site of company&#39;, &#39;Sit1&#39;, &#39;Sit2&#39;, ... | [optional] 
 **companyId2** | **String**| Allows to filter sites list on the companyIds provided in this option. | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first site to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort site list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting site list. | [optional] 

### Return type

[**GetCompanySitesSuccess**](GetCompanySitesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

