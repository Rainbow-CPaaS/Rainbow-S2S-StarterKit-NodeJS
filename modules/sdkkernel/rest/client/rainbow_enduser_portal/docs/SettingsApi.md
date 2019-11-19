# RainbowEnduserPortal.SettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserSettings**](SettingsApi.md#getUserSettings) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/settings | Get user settings
[**updateUserSettings**](SettingsApi.md#updateUserSettings) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/settings | Update user settings



## getUserSettings

> GetUserSettingsSuccess getUserSettings(userId, accept)

Get user settings

This API can be used to get user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SettingsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
apiInstance.getUserSettings(userId, accept).then(function(data) {
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

[**GetUserSettingsSuccess**](GetUserSettingsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserSettings

> UpdateUserSettingsSuccess updateUserSettings(userId, body)

Update user settings

This API can be used to update user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a setting is updated using this API, all user&#39;s XMPP resources will receive the following message indicating them that a setting has been updated:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;/&gt;        &lt;usersettings action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SettingsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.UpdateUserSettings(); // UpdateUserSettings | 
apiInstance.updateUserSettings(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**UpdateUserSettings**](UpdateUserSettings.md)|  | 

### Return type

[**UpdateUserSettingsSuccess**](UpdateUserSettingsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

