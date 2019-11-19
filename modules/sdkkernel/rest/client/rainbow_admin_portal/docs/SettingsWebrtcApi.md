# RainbowAdminPortal.SettingsWebrtcApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIceServers**](SettingsWebrtcApi.md#deleteIceServers) | **DELETE** /api/rainbow/admin/v1.0/settings/iceservers/{iceServerId} | Delete an ICE server
[**getIceServers**](SettingsWebrtcApi.md#getIceServers) | **GET** /api/rainbow/admin/v1.0/settings/iceservers | Get available stun, turn servers
[**postIceServers**](SettingsWebrtcApi.md#postIceServers) | **POST** /api/rainbow/admin/v1.0/settings/iceservers | Create an ICE server
[**putIceServers**](SettingsWebrtcApi.md#putIceServers) | **PUT** /api/rainbow/admin/v1.0/settings/iceservers/{iceServerId} | Update an ICE server



## deleteIceServers

> DeleteIceServersSuccess deleteIceServers(iceServerId, accept, contentType)

Delete an ICE server

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
apiInstance.deleteIceServers(iceServerId, accept, contentType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 

### Return type

[**DeleteIceServersSuccess**](DeleteIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIceServers

> GetIceServersSuccess getIceServers(accept)

Get available stun, turn servers

Display a list ICE servers available to start WebRTC audio / vidéo conversations    Servers available from Rainbow infrastructure are returned.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SettingsWebrtcApi();
var accept = "accept_example"; // String | application/json
apiInstance.getIceServers(accept).then(function(data) {
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

[**GetIceServersSuccess**](GetIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postIceServers

> PostIceServersSuccess postIceServers(body)

Create an ICE server

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SettingsWebrtcApi();
var body = new RainbowAdminPortal.PostIceServers(); // PostIceServers | 
apiInstance.postIceServers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostIceServers**](PostIceServers.md)|  | 

### Return type

[**PostIceServersSuccess**](PostIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putIceServers

> PutIceServersSuccess putIceServers(iceServerId, body)

Update an ICE server

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var body = new RainbowAdminPortal.PutIceServers(); // PutIceServers | 
apiInstance.putIceServers(iceServerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **body** | [**PutIceServers**](PutIceServers.md)|  | 

### Return type

[**PutIceServersSuccess**](PutIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

