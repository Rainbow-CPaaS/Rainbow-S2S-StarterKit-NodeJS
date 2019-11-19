# RainbowAdminPortal.SitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSites**](SitesApi.md#deleteSites) | **DELETE** /api/rainbow/admin/v1.0/sites/{siteId} | Delete a site
[**getSites**](SitesApi.md#getSites) | **GET** /api/rainbow/admin/v1.0/sites | Get all sites
[**getSitesId**](SitesApi.md#getSitesId) | **GET** /api/rainbow/admin/v1.0/sites/{siteId} | Get a site data
[**postSites**](SitesApi.md#postSites) | **POST** /api/rainbow/admin/v1.0/sites | Create a site
[**putSites**](SitesApi.md#putSites) | **PUT** /api/rainbow/admin/v1.0/sites/{siteId} | Update a site



## deleteSites

> DeleteSitesSuccess deleteSites(siteId, accept)

Delete a site

This API allows administrator to delete a site for a company they administrate.       &#x60;superadmin&#x60; can delete sites for all companies existing in Rainbow.    &#x60;bp_admin&#x60; can only delete sites for companies linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only delete sites for companies linked to companies under their organisation.    &#x60;company_admin&#x60; can only delete sites for their own company.    Note : Delete will be forbidden if site is still linked to system(s)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesApi();
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteSites(siteId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteSitesSuccess**](DeleteSitesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSites

> GetSitesSuccess getSites(accept, opts)

Get all sites

This API allows administrator to retrieve sites they can administrate.       &#x60;superadmin&#x60; and &#x60;support&#x60; get all sites existing in Rainbow.    &#x60;bp_admin&#x60; only get sites linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; only get sites linked to companies under their organisation.    &#x60;company_admin&#x60; only get sites linked to their company.    &#x60;site_admin&#x60; only get the site they administrate.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/sites?format&#x3D;small&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less site details in response.    - `small`: _id, name    - `medium`: _id, name, status, companyId    - `full`: all site fields
  'name': "name_example", // String | Allows to filter sites list on field name.       The filtering is case insensitive and on partial name match: all sites **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _sit_, sites with the following names are match the filter 'My site', 'Site', 'A site 1', 'Site of company', 'Sit1', 'Sit2', ...
  'companyId': "companyId_example", // String | Allows to filter sites list on the companyIds provided in this option.
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first site to retrieve (first site if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort site list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting site list.
};
apiInstance.getSites(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less site details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: _id, name, status, companyId    - &#x60;full&#x60;: all site fields | [optional] 
 **name** | **String**| Allows to filter sites list on field name.       The filtering is case insensitive and on partial name match: all sites **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _sit_, sites with the following names are match the filter &#39;My site&#39;, &#39;Site&#39;, &#39;A site 1&#39;, &#39;Site of company&#39;, &#39;Sit1&#39;, &#39;Sit2&#39;, ... | [optional] 
 **companyId** | **String**| Allows to filter sites list on the companyIds provided in this option. | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first site to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort site list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting site list. | [optional] 

### Return type

[**GetSitesSuccess**](GetSitesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSitesId

> GetSitesIdSuccess getSitesId(siteId, accept)

Get a site data

This API allows administrator to retrieve a given site.       &#x60;superadmin&#x60; and &#x60;support&#x60; can get all sites existing in Rainbow.    &#x60;bp_admin&#x60; can only get sites linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get sites linked to companies under their organisation.    &#x60;company_admin&#x60; can only get sites linked to their company.    &#x60;site_admin&#x60; can only get the site they administrate.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/sites/569d0ef3ef7816921f7e94fa

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesApi();
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSitesId(siteId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetSitesIdSuccess**](GetSitesIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSites

> PostSitesSuccess postSites(body)

Create a site

This API allows administrator to create a site for a company they administrate.       &#x60;superadmin&#x60; can create sites for all companies existing in Rainbow.    &#x60;bp_admin&#x60; can only create sites for companies linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only create sites for companies linked to companies under their organisation.    &#x60;company_admin&#x60; can only create sites for their own company.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A company in this environment can only have a single site. It has automatically the flag isCentrex &#x3D; true   This flag is readonly.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesApi();
var body = new RainbowAdminPortal.PostSites(); // PostSites | 
apiInstance.postSites(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostSites**](PostSites.md)|  | 

### Return type

[**PostSitesSuccess**](PostSitesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSites

> PutSitesSuccess putSites(siteId, body)

Update a site

This API allows administrator to update a given site.       &#x60;superadmin&#x60; can update all sites existing in Rainbow.    &#x60;bp_admin&#x60; can only update sites linked to End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only update sites linked to companies under their organisation.    &#x60;company_admin&#x60; can only update sites linked to their company.    &#x60;site_admin&#x60; can only update the site they administrate.       In a Multi-Layer organization defining a hierarchy ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, only bp admin or admin of the site&#39;s organization is allowed to move the site (change companyId field of the site).    

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesApi();
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutSites(); // PutSites | 
apiInstance.putSites(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutSites**](PutSites.md)|  | 

### Return type

[**PutSitesSuccess**](PutSitesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

