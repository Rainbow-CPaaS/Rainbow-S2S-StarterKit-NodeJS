# RainbowAdminPortal.SettingsRainbowChangeLogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRainbowChangeLog**](SettingsRainbowChangeLogApi.md#getRainbowChangeLog) | **GET** /api/rainbow/admin/v1.0/settings/changelogs | Get news about rainbow features
[**putRainbowChange**](SettingsRainbowChangeLogApi.md#putRainbowChange) | **PUT** /api/rainbow/admin/v1.0/settings/changelogs | Create a rainbow change log



## getRainbowChangeLog

> GetRainbowChangeLogSuccess getRainbowChangeLog(accept)

Get news about rainbow features

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

var apiInstance = new RainbowAdminPortal.SettingsRainbowChangeLogApi();
var accept = "accept_example"; // String | application/json
apiInstance.getRainbowChangeLog(accept).then(function(data) {
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

[**GetRainbowChangeLogSuccess**](GetRainbowChangeLogSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putRainbowChange

> PutRainbowChangeSuccess putRainbowChange(body)

Create a rainbow change log

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SettingsRainbowChangeLogApi();
var body = new RainbowAdminPortal.PutRainbowChange(); // PutRainbowChange | 
apiInstance.putRainbowChange(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutRainbowChange**](PutRainbowChange.md)|  | 

### Return type

[**PutRainbowChangeSuccess**](PutRainbowChangeSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

