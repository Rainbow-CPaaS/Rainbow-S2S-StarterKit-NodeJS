# RainbowEnduserPortal.UsersAvatarApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserAvatar**](UsersAvatarApi.md#deleteUserAvatar) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/avatar | Delete user avatar
[**getAvatar**](UsersAvatarApi.md#getAvatar) | **GET** /api/avatar/{entityId} | Get user or company avatar
[**uploadUserAvatar**](UsersAvatarApi.md#uploadUserAvatar) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/avatar | Upload user avatar



## deleteUserAvatar

> DeleteUserAvatarSuccess deleteUserAvatar(userId, accept)

Delete user avatar

This API can be used to delete avatar image for logged in user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL).       When an avatar is deleted, the field &#x60;lastAvatarUpdateDate&#x60; of the user is set to null.    User vCard is also updated: the &#x60;PHOTO&#x60; element is removed and the &#x60;LASTAVATARUPDATE&#x60; element is set to empty.       A presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;avatar/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersAvatarApi();
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var accept = "accept_example"; // String | application/json
apiInstance.deleteUserAvatar(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteUserAvatarSuccess**](DeleteUserAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvatar

> GetAvatarSuccess getAvatar(entityId, opts)

Get user or company avatar

This API can be used to retrieve users or companies avatar.    Example: GET https://openrainbow.com/api/avatar/56c5c19f94141765119f896c?size&#x3D;128       Clients can request avatars in a given size by specifying size query string parameter.    Avatar file can be resized from 1px to its original resolution, with a maximum of 512px:   * If no size option is requested, avatar is returned by default with resolution of 80px. * Max requestable size is 512. If a higher resolution is requested, the default size is returned instead, i.e. 80px. * Original avatars resolution can&#39;t be increased. If uploaded avatar size is 128 x 128 px, even is client request avatar with size 256, the original avatar file will be returned (128px).  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersAvatarApi();
var entityId = "entityId_example"; // String | User or Company unique identifier.
var opts = {
  'size': 3.4 // Number | Specify avatar size in pixels (square size x size).
};
apiInstance.getAvatar(entityId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **String**| User or Company unique identifier. | 
 **size** | **Number**| Specify avatar size in pixels (square size x size). | [optional] 

### Return type

[**GetAvatarSuccess**](GetAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadUserAvatar

> UploadUserAvatarSuccess uploadUserAvatar(userId)

Upload user avatar

This API can be used to upload avatar image for logged in user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL).    Rules:   * Avatar file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If user already has an avatar, the existing one is overwritten. * By default, avatar file size is limited to 4194304 bytes (4 MB) (this limit can be changed by integration team in enduser portal config file). * When an avatar is uploaded, the field &#x60;lastAvatarUpdateDate&#x60; of the user is updated to the current date. * User vCard is also updated: the &#x60;PHOTO&#x60; element is set with avatar filename (i.e. user id) in base64 and the &#x60;LASTAVATARUPDATE&#x60; element is set to the current date. * A presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that this user has been updated:      &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;avatar/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60;  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersAvatarApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
apiInstance.uploadUserAvatar(userId).then(function(data) {
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

[**UploadUserAvatarSuccess**](UploadUserAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

