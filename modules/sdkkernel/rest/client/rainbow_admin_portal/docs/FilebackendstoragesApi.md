# RainbowAdminPortal.FilebackendstoragesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminFilebackendstoragesDeleteBackends**](FilebackendstoragesApi.md#adminFilebackendstoragesDeleteBackends) | **DELETE** /api/rainbow/admin/v1.0/filebackendstorages/{backendId} | Delete a backend.
[**adminFilebackendstoragesGetBackendId**](FilebackendstoragesApi.md#adminFilebackendstoragesGetBackendId) | **GET** /api/rainbow/admin/v1.0/filebackendstorages/{backendId} | Get a file backend data
[**adminFilebackendstoragesGetBackends**](FilebackendstoragesApi.md#adminFilebackendstoragesGetBackends) | **GET** /api/rainbow/admin/v1.0/filebackendstorages | Get all filebackendstorages
[**adminFilebackendstoragesPostBackends**](FilebackendstoragesApi.md#adminFilebackendstoragesPostBackends) | **POST** /api/rainbow/admin/v1.0/filebackendstorages | Create a backend
[**adminFilebackendstoragesPutBots**](FilebackendstoragesApi.md#adminFilebackendstoragesPutBots) | **PUT** /api/rainbow/admin/v1.0/filebackendstorages/{backendId} | Update a backend



## adminFilebackendstoragesDeleteBackends

> AdminFilebackendstoragesDeleteBackendsSuccess adminFilebackendstoragesDeleteBackends(backendId, accept)

Delete a backend.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.FilebackendstoragesApi();
var backendId = "backendId_example"; // String | File backend unique identifier (like 578bb08dc0d8c107725ef8c4)
var accept = "accept_example"; // String | application/json
apiInstance.adminFilebackendstoragesDeleteBackends(backendId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backendId** | **String**| File backend unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **accept** | **String**| application/json | 

### Return type

[**AdminFilebackendstoragesDeleteBackendsSuccess**](AdminFilebackendstoragesDeleteBackendsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminFilebackendstoragesGetBackendId

> AdminFilebackendstoragesGetBackendIdSuccess adminFilebackendstoragesGetBackendId(backendId, accept)

Get a file backend data

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.FilebackendstoragesApi();
var backendId = "backendId_example"; // String | File backend unique identifier (like 578bb08dc0d8c107725ef8c4)
var accept = "accept_example"; // String | application/json
apiInstance.adminFilebackendstoragesGetBackendId(backendId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backendId** | **String**| File backend unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **accept** | **String**| application/json | 

### Return type

[**AdminFilebackendstoragesGetBackendIdSuccess**](AdminFilebackendstoragesGetBackendIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminFilebackendstoragesGetBackends

> AdminFilebackendstoragesGetBackendsSuccess adminFilebackendstoragesGetBackends(accept, opts)

Get all filebackendstorages

This API can be used to retrieve the list of file backend storage .

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.FilebackendstoragesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less file backend storage config details in response.    - `small`: id, hostName, regionName    - `medium`: id, hostName, regionName, endPoint    - `full`: id, hostName, regionName, endPoint, tenantId, tenantName, userName, password, rootStorageURL
  'limit': 3.4, // Number | Allow to specify the number of file backend storage to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first file backend storage to retrieve (first file backend if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort file backend storage list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting backend storage list.
};
apiInstance.adminFilebackendstoragesGetBackends(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less file backend storage config details in response.    - &#x60;small&#x60;: id, hostName, regionName    - &#x60;medium&#x60;: id, hostName, regionName, endPoint    - &#x60;full&#x60;: id, hostName, regionName, endPoint, tenantId, tenantName, userName, password, rootStorageURL | [optional] 
 **limit** | **Number**| Allow to specify the number of file backend storage to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first file backend storage to retrieve (first file backend if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort file backend storage list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting backend storage list. | [optional] 

### Return type

[**AdminFilebackendstoragesGetBackendsSuccess**](AdminFilebackendstoragesGetBackendsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminFilebackendstoragesPostBackends

> AdminFilebackendstoragesPostBackendsSuccess adminFilebackendstoragesPostBackends(body)

Create a backend

Rainbow File sharing leans on Openstack/Swift backends to store documents so called Objects. A Swift backend must be configured first. So that a superadmin can report the configuration using the filebackendstorages API. To give an overview of the parameters awaited, here is a short description. For more details, refer to [https://docs.openstack.org/swift/latest/index.html][0] The Swift Object Storage is defined by an endPoint. (ex: **http://swift.rainbow.rdna:5000/v3**) The Swift Object Storage system organizes data in a hierarchy, as follows:   * **Account:** Represents the top-level of the hierarchy. The goal of &#39;filebackendstorages&#39; api is to manage a Swift account. The account defines a namespace for containers as a container might have the same name in two different accounts. * **Container:** Defines a namespace for objects. An object with the same name in two different containers represents two different objects. * **Object:** Stores data content, such as documents, images, and so on.  The rootStorageURL indicates the beginning of the path to access to a resource. This path lead to the account. (ex: **http://swift.rainbow.rdna:8080/v1/AUTH_a67b0e12592941488a5f53189c61022d**) The resource path has the pattern **{rootStorageUrl}/{container}/{object}** For example, if the endpoint for a Swift Object Storage is **objects.mycloud.com**, the returned URL is https://objects.mycloud.com/v1/12345678912345. The endPoint domain name is replicated in the field &#39;hostName&#39;. This value has to be used inside the zone.json file managed by Rainbow operation team.  [0]: https://docs.openstack.org/swift/latest/index.html

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.FilebackendstoragesApi();
var body = new RainbowAdminPortal.AdminFilebackendstoragesPostBackends(); // AdminFilebackendstoragesPostBackends | 
apiInstance.adminFilebackendstoragesPostBackends(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminFilebackendstoragesPostBackends**](AdminFilebackendstoragesPostBackends.md)|  | 

### Return type

[**AdminFilebackendstoragesPostBackendsSuccess**](AdminFilebackendstoragesPostBackendsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminFilebackendstoragesPutBots

> AdminFilebackendstoragesPutBotsSuccess adminFilebackendstoragesPutBots(backendId, body)

Update a backend

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.FilebackendstoragesApi();
var backendId = "backendId_example"; // String | File backend unique identifier (like 578bb08dc0d8c107725ef8c4)
var body = new RainbowAdminPortal.AdminFilebackendstoragesPutBots(); // AdminFilebackendstoragesPutBots | 
apiInstance.adminFilebackendstoragesPutBots(backendId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backendId** | **String**| File backend unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **body** | [**AdminFilebackendstoragesPutBots**](AdminFilebackendstoragesPutBots.md)|  | 

### Return type

[**AdminFilebackendstoragesPutBotsSuccess**](AdminFilebackendstoragesPutBotsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

