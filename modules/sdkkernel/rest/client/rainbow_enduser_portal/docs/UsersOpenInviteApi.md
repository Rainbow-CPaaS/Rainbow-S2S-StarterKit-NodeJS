# RainbowEnduserPortal.UsersOpenInviteApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bindPersonaOpenInviteWithRoomId**](UsersOpenInviteApi.md#bindPersonaOpenInviteWithRoomId) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/open-invites/bind | Bind a personal openInviteId with a roomId
[**createOrResetPersonalOpenInvite**](UsersOpenInviteApi.md#createOrResetPersonalOpenInvite) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/open-invites/reset | Create or Reset a personal openInviteId
[**getPersonalOpenInvite**](UsersOpenInviteApi.md#getPersonalOpenInvite) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/open-invites | Get my personal openInviteId
[**unbindOpenInviteWithRoomId**](UsersOpenInviteApi.md#unbindOpenInviteWithRoomId) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/open-invites/unbind | Unbind a personal openInviteId with a roomId



## bindPersonaOpenInviteWithRoomId

> BindPersonaOpenInviteWithRoomIdSuccess bindPersonaOpenInviteWithRoomId(userId, body)

Bind a personal openInviteId with a roomId

use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersOpenInviteApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.BindPersonaOpenInviteWithRoomId(); // BindPersonaOpenInviteWithRoomId | 
apiInstance.bindPersonaOpenInviteWithRoomId(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**BindPersonaOpenInviteWithRoomId**](BindPersonaOpenInviteWithRoomId.md)|  | 

### Return type

[**BindPersonaOpenInviteWithRoomIdSuccess**](BindPersonaOpenInviteWithRoomIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrResetPersonalOpenInvite

> CreateOrResetPersonalOpenInviteSuccess createOrResetPersonalOpenInvite(userId)

Create or Reset a personal openInviteId

use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersOpenInviteApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
apiInstance.createOrResetPersonalOpenInvite(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 

### Return type

[**CreateOrResetPersonalOpenInviteSuccess**](CreateOrResetPersonalOpenInviteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonalOpenInvite

> GetPersonalOpenInviteSuccess getPersonalOpenInvite(userId, accept)

Get my personal openInviteId

use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersOpenInviteApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
apiInstance.getPersonalOpenInvite(userId, accept).then(function(data) {
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

[**GetPersonalOpenInviteSuccess**](GetPersonalOpenInviteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unbindOpenInviteWithRoomId

> UnbindOpenInviteWithRoomIdSuccess unbindOpenInviteWithRoomId(userId)

Unbind a personal openInviteId with a roomId

use now (&lt;a href&#x3D;\&quot;#api-users_rooms_public_link\&quot;&gt;public links&lt;/a&gt;)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersOpenInviteApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
apiInstance.unbindOpenInviteWithRoomId(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 

### Return type

[**UnbindOpenInviteWithRoomIdSuccess**](UnbindOpenInviteWithRoomIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

