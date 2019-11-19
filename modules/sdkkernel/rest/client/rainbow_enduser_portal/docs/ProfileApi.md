# RainbowEnduserPortal.ProfileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserProfiles**](ProfileApi.md#getUserProfiles) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/profiles | Get user profiles
[**getUserProfilesFeatures**](ProfileApi.md#getUserProfilesFeatures) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/profiles/features | Get user profiles features



## getUserProfiles

> GetUserProfilesSuccess getUserProfiles(userId, accept)

Get user profiles

This API can be used to get user profiles.       This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/profiles

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ProfileApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
apiInstance.getUserProfiles(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserProfilesSuccess**](GetUserProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfilesFeatures

> GetUserProfilesFeaturesSuccess getUserProfilesFeatures(userId, accept)

Get user profiles features

This API can be used to get features associated to the user through its profiles.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       User can be assigned to several profiles (if his company has subscribed to commercial offers linked to these profiles, and if an admin has assigned these profiles to the user).    By default, user is at least assigned to the subscription of his company to the default offer (i.e. Essential).       Each profile has his own list of features with his own values.    This API allows to aggregate all features from all user&#39;s profiles.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/profiles/features

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ProfileApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
apiInstance.getUserProfilesFeatures(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserProfilesFeaturesSuccess**](GetUserProfilesFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

