# RainbowEnduserPortal.SettingsRainbowChangeLogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRainbowChanges**](SettingsRainbowChangeLogApi.md#getRainbowChanges) | **GET** /api/rainbow/enduser/v1.0/settings/changelogs | Get news about rainbow features



## getRainbowChanges

> GetRainbowChangesSuccess getRainbowChanges(accept)

Get news about rainbow features

Display a list ICE servers available to start WebRTC audio / vidéo conversations Servers available from Rainbow infrastructure are returned.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SettingsRainbowChangeLogApi();
var accept = "accept_example"; // String | application/json
apiInstance.getRainbowChanges(accept).then(function(data) {
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

[**GetRainbowChangesSuccess**](GetRainbowChangesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

