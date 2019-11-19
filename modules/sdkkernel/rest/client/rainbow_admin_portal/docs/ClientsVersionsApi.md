# RainbowAdminPortal.ClientsVersionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteClientsVersions**](ClientsVersionsApi.md#deleteClientsVersions) | **DELETE** /api/rainbow/admin/v1.0/clientsversions/{clientId} | Delete a client version
[**getClientsVersionsId**](ClientsVersionsApi.md#getClientsVersionsId) | **GET** /api/rainbow/admin/v1.0/clientsversions/{clientId} | Get a clients versions data
[**getClientsversions**](ClientsVersionsApi.md#getClientsversions) | **GET** /api/rainbow/admin/v1.0/clientsversions | Get all clients versions
[**postClientsVersions**](ClientsVersionsApi.md#postClientsVersions) | **POST** /api/rainbow/admin/v1.0/clientsversions | Create a client version
[**putClientsVersions**](ClientsVersionsApi.md#putClientsVersions) | **PUT** /api/rainbow/admin/v1.0/clientsversions/{clientId} | Update a client version



## deleteClientsVersions

> DeleteClientsVersionsSuccess deleteClientsVersions(clientId, accept)

Delete a client version

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.ClientsVersionsApi();
var clientId = "clientId_example"; // String | App unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteClientsVersions(clientId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| App unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteClientsVersionsSuccess**](DeleteClientsVersionsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientsVersionsId

> GetClientsVersionsIdSuccess getClientsVersionsId(clientId, accept)

Get a clients versions data

Users with &#39;superadmin&#39; role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions/569d0ef3ef7816921f7e94fa

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.ClientsVersionsApi();
var clientId = "clientId_example"; // String | App unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getClientsVersionsId(clientId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| App unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetClientsVersionsIdSuccess**](GetClientsVersionsIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientsversions

> GetClientsversionsSuccess getClientsversions(accept, opts)

Get all clients versions

Users with &#39;superadmin&#39; role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions?limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.ClientsVersionsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'name': "name_example", // String | Allows to filter sites list on field name.
  'limit': 3.4, // Number | Allow to specify the number of apps to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first app to retrieve (first app if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort app list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting app list.
};
apiInstance.getClientsversions(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **name** | **String**| Allows to filter sites list on field name. | [optional] 
 **limit** | **Number**| Allow to specify the number of apps to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first app to retrieve (first app if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort app list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting app list. | [optional] 

### Return type

[**GetClientsversionsSuccess**](GetClientsversionsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postClientsVersions

> PostClientsVersionsSuccess postClientsVersions(body)

Create a client version

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.ClientsVersionsApi();
var body = new RainbowAdminPortal.PostClientsVersions(); // PostClientsVersions | 
apiInstance.postClientsVersions(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostClientsVersions**](PostClientsVersions.md)|  | 

### Return type

[**PostClientsVersionsSuccess**](PostClientsVersionsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putClientsVersions

> PutClientsVersionsSuccess putClientsVersions(clientId, body)

Update a client version

Users with superadmin role can update any client version.   

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.ClientsVersionsApi();
var clientId = "clientId_example"; // String | App unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutClientsVersions(); // PutClientsVersions | 
apiInstance.putClientsVersions(clientId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| App unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutClientsVersions**](PutClientsVersions.md)|  | 

### Return type

[**PutClientsVersionsSuccess**](PutClientsVersionsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

