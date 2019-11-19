# RainbowEnduserPortal.SettingsWebrtcApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRainbowEnduserV10SettingsIceservers**](SettingsWebrtcApi.md#getApiRainbowEnduserV10SettingsIceservers) | **GET** /api/rainbow/enduser/v1.0/settings/iceservers | Get available stun, turn servers



## getApiRainbowEnduserV10SettingsIceservers

> GetApiRainbowEnduserV10SettingsIceserversSuccess getApiRainbowEnduserV10SettingsIceservers(accept)

Get available stun, turn servers

&lt;b&gt;⚠ Retrieving the ICE servers should now be performed from the geolocation portal. The url to request is GET /api/rainbow/geolocation/v1.0/settings/iceservers.&lt;/b&gt;

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SettingsWebrtcApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowEnduserV10SettingsIceservers(accept).then(function(data) {
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

[**GetApiRainbowEnduserV10SettingsIceserversSuccess**](GetApiRainbowEnduserV10SettingsIceserversSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

