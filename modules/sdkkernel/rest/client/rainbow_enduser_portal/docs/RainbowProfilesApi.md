# RainbowEnduserPortal.RainbowProfilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRainbowProfileById**](RainbowProfilesApi.md#getRainbowProfileById) | **GET** /api/rainbow/enduser/v1.0/profiles/{profileId} | Get a profile



## getRainbowProfileById

> GetRainbowProfileByIdSuccess getRainbowProfileById(profileId, accept)

Get a profile

This API allows to retrieve details about a given profile.       Users can only retrieve profile on which they are assigned.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/profiles/5745b147f0674c7c43417997

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RainbowProfilesApi();
var profileId = "profileId_example"; // String | Profile unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.getRainbowProfileById(profileId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**GetRainbowProfileByIdSuccess**](GetRainbowProfileByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

