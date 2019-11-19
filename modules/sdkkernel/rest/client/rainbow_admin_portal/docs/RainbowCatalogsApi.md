# RainbowAdminPortal.RainbowCatalogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDeleteRainbowCatalogs**](RainbowCatalogsApi.md#adminDeleteRainbowCatalogs) | **DELETE** /api/rainbow/admin/v1.0/catalogs/{catalogId} | Delete a catalog
[**adminDeleteRainbowCatalogsFeatures**](RainbowCatalogsApi.md#adminDeleteRainbowCatalogsFeatures) | **DELETE** /api/rainbow/admin/v1.0/catalogs/{catalogId}/offers/{offerId} | Remove an offer from a catalog
[**adminDeleteRainbowCatalogsServiceDescription**](RainbowCatalogsApi.md#adminDeleteRainbowCatalogsServiceDescription) | **DELETE** /api/rainbow/admin/v1.0/catalogs/{catalogId}/service-description | Delete a service description file
[**adminGetDefaultRainbowCatalog**](RainbowCatalogsApi.md#adminGetDefaultRainbowCatalog) | **GET** /api/rainbow/admin/v1.0/catalogs/default | Get default catalog
[**adminGetRainbowCatalogById**](RainbowCatalogsApi.md#adminGetRainbowCatalogById) | **GET** /api/rainbow/admin/v1.0/catalog/{catalogId} | Get a catalog
[**adminGetRainbowCatalogs**](RainbowCatalogsApi.md#adminGetRainbowCatalogs) | **GET** /api/rainbow/admin/v1.0/catalogs | Get all catalogs
[**adminGetRainbowCatalogsServiceDescription**](RainbowCatalogsApi.md#adminGetRainbowCatalogsServiceDescription) | **GET** /api/rainbow/admin/v1.0/catalogs/{catalogId}/service-description | Get a service description file
[**adminPostRainbowCatalogs**](RainbowCatalogsApi.md#adminPostRainbowCatalogs) | **POST** /api/rainbow/admin/v1.0/catalogs | Create a catalog
[**adminPostRainbowCatalogsFeatures**](RainbowCatalogsApi.md#adminPostRainbowCatalogsFeatures) | **POST** /api/rainbow/admin/v1.0/catalogs/{catalogId}/offers/{offerId} | Add an offer to a catalog
[**adminPostRainbowCatalogsServiceDescription**](RainbowCatalogsApi.md#adminPostRainbowCatalogsServiceDescription) | **POST** /api/rainbow/admin/v1.0/catalogs/{catalogId}/service-description | Upload a service description file
[**adminPutRainbowCatalogs**](RainbowCatalogsApi.md#adminPutRainbowCatalogs) | **PUT** /api/rainbow/admin/v1.0/catalogs/{catalogId} | Update a catalog
[**adminPutRainbowCatalogsDefault**](RainbowCatalogsApi.md#adminPutRainbowCatalogsDefault) | **PUT** /api/rainbow/admin/v1.0/catalogs/default/{catalogId} | Set a catalog as default



## adminDeleteRainbowCatalogs

> AdminDeleteRainbowCatalogsSuccess adminDeleteRainbowCatalogs(catalogId, accept)

Delete a catalog

This API can be used to delete a catalog.    Deletion of catalogs is not allowed if this catalog is associated to company(ies).    Deletion of default catalog is not allowed.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowCatalogs(catalogId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowCatalogsSuccess**](AdminDeleteRainbowCatalogsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminDeleteRainbowCatalogsFeatures

> AdminDeleteRainbowCatalogsFeaturesSuccess adminDeleteRainbowCatalogsFeatures(offerId, catalogId, accept)

Remove an offer from a catalog

This API can be used to remove an offer from a catalog.    Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/catalogs/5984494643af69df7fda80e8/offers/58072f646237427a3687dc90

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var offerId = "offerId_example"; // String | Unique identifier of the offer to remove from the catalog.
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowCatalogsFeatures(offerId, catalogId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Unique identifier of the offer to remove from the catalog. | 
 **catalogId** | **String**| Catalog unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowCatalogsFeaturesSuccess**](AdminDeleteRainbowCatalogsFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminDeleteRainbowCatalogsServiceDescription

> AdminDeleteRainbowCatalogsServiceDescriptionSuccess adminDeleteRainbowCatalogsServiceDescription(catalogId, accept)

Delete a service description file

This API can be used to delete a service description linked to a catalog.    Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/catalogs/5984494643af69df7fda80e8/service-description

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowCatalogsServiceDescription(catalogId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowCatalogsServiceDescriptionSuccess**](AdminDeleteRainbowCatalogsServiceDescriptionSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetDefaultRainbowCatalog

> AdminGetDefaultRainbowCatalogSuccess adminGetDefaultRainbowCatalog(accept)

Get default catalog

Get the default Rainbow catalog    Default catalog is the catalog which is automatically assigned to newly created companies.       &#x60;superadmin&#x60; can change the catalog associated to a given company using API [PUT /api/rainbow/admin/v1.0/companies/{companyId}][0].  [0]: #api-companies-PutCompanies

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var accept = "accept_example"; // String | application/json
apiInstance.adminGetDefaultRainbowCatalog(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**AdminGetDefaultRainbowCatalogSuccess**](AdminGetDefaultRainbowCatalogSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowCatalogById

> AdminGetRainbowCatalogByIdSuccess adminGetRainbowCatalogById(catalogId, accept)

Get a catalog

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowCatalogById(catalogId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowCatalogByIdSuccess**](AdminGetRainbowCatalogByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowCatalogs

> AdminGetRainbowCatalogsSuccess adminGetRainbowCatalogs(accept, opts)

Get all catalogs

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less catalog details in response.    - `small`: id name    - `medium`: id name description isDefault    - `full`: all offer fields
  'name': "name_example", // String | Allows to filter catalog list on field name.
  'isDefault': true, // Boolean | Allows to filter catalog list on field isDefault.
  'offerId': "offerId_example", // String | Allows to filter catalog list on field offersList (allow to list catalogs having a given offerId in their offersList).
  'limit': 3.4, // Number | Allow to specify the number of catalogs to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first catalog to retrieve (first catalog if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort catalog list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting catalog list.
};
apiInstance.adminGetRainbowCatalogs(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less catalog details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description isDefault    - &#x60;full&#x60;: all offer fields | [optional] 
 **name** | **String**| Allows to filter catalog list on field name. | [optional] 
 **isDefault** | **Boolean**| Allows to filter catalog list on field isDefault. | [optional] 
 **offerId** | **String**| Allows to filter catalog list on field offersList (allow to list catalogs having a given offerId in their offersList). | [optional] 
 **limit** | **Number**| Allow to specify the number of catalogs to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first catalog to retrieve (first catalog if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort catalog list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting catalog list. | [optional] 

### Return type

[**AdminGetRainbowCatalogsSuccess**](AdminGetRainbowCatalogsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowCatalogsServiceDescription

> AdminGetRainbowCatalogsServiceDescriptionSuccess adminGetRainbowCatalogsServiceDescription(catalogId, accept)

Get a service description file

This API can be used to get a service description pdf file linked to a catalog.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/catalogs/5984494643af69df7fda80e8/service-description

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowCatalogsServiceDescription(catalogId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowCatalogsServiceDescriptionSuccess**](AdminGetRainbowCatalogsServiceDescriptionSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostRainbowCatalogs

> AdminPostRainbowCatalogsSuccess adminPostRainbowCatalogs(body)

Create a catalog

This API can be used to create a catalog.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var body = new RainbowAdminPortal.AdminPostRainbowCatalogs(); // AdminPostRainbowCatalogs | 
apiInstance.adminPostRainbowCatalogs(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminPostRainbowCatalogs**](AdminPostRainbowCatalogs.md)|  | 

### Return type

[**AdminPostRainbowCatalogsSuccess**](AdminPostRainbowCatalogsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPostRainbowCatalogsFeatures

> AdminPostRainbowCatalogsFeaturesSuccess adminPostRainbowCatalogsFeatures(offerId, catalogId)

Add an offer to a catalog

This API can be used to add an offer to a catalog.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/catalogs/5984494643af69df7fda80e8/offers/58072f646237427a3687dc90

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var offerId = "offerId_example"; // String | Unique identifier of the offer to add in the catalog.
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
apiInstance.adminPostRainbowCatalogsFeatures(offerId, catalogId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Unique identifier of the offer to add in the catalog. | 
 **catalogId** | **String**| Catalog unique identifier. | 

### Return type

[**AdminPostRainbowCatalogsFeaturesSuccess**](AdminPostRainbowCatalogsFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostRainbowCatalogsServiceDescription

> AdminPostRainbowCatalogsServiceDescriptionSuccess adminPostRainbowCatalogsServiceDescription(catalogId)

Upload a service description file

This API can be used to upload a service description pdf file linked to a catalog.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/catalogs/5984494643af69df7fda80e8/service-description    Rules:   * Service description file has to be sent directly in http body (no JSon). * Only .pdf format is supported. * By default, pdf file size is limited to 10 MB. * Content-type should be set to &#39;application/pdf&#39; in request header.  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
apiInstance.adminPostRainbowCatalogsServiceDescription(catalogId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 

### Return type

[**AdminPostRainbowCatalogsServiceDescriptionSuccess**](AdminPostRainbowCatalogsServiceDescriptionSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPutRainbowCatalogs

> AdminPutRainbowCatalogsSuccess adminPutRainbowCatalogs(catalogId, body)

Update a catalog

This API can be used to update a catalog.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowCatalogs(); // AdminPutRainbowCatalogs | 
apiInstance.adminPutRainbowCatalogs(catalogId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 
 **body** | [**AdminPutRainbowCatalogs**](AdminPutRainbowCatalogs.md)|  | 

### Return type

[**AdminPutRainbowCatalogsSuccess**](AdminPutRainbowCatalogsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowCatalogsDefault

> AdminPutRainbowCatalogsDefaultSuccess adminPutRainbowCatalogsDefault(catalogId)

Set a catalog as default

This API can be used to change default Rainbow catalog.    The flag isDefault of previous default catalog is set to false, and the flag isDefault of the specified catalog is set to true.    Previous default catalog stays the default catalog for companies having already this catalog as default.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowCatalogsApi();
var catalogId = "catalogId_example"; // String | Catalog unique identifier.
apiInstance.adminPutRainbowCatalogsDefault(catalogId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog unique identifier. | 

### Return type

[**AdminPutRainbowCatalogsDefaultSuccess**](AdminPutRainbowCatalogsDefaultSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

