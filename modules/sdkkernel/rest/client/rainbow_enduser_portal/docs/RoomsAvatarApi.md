# RainbowEnduserPortal.RoomsAvatarApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRoomAvatar**](RoomsAvatarApi.md#deleteRoomAvatar) | **DELETE** /api/rainbow/enduser/v1.0/rooms/{roomId}/avatar | Delete room avatar
[**getRoomAvatar**](RoomsAvatarApi.md#getRoomAvatar) | **GET** /api/room-avatar/{roomId} | Get room&#39;s avatar
[**uploadRoomAvatar**](RoomsAvatarApi.md#uploadRoomAvatar) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/avatar | Upload room avatar



## deleteRoomAvatar

> DeleteRoomAvatarSuccess deleteRoomAvatar(roomId, accept)

Delete room avatar

This API can be used to delete avatar image for the given roomId.    This API can only be used by one room&#39;s moderator.       When an avatar is deleted, the field &#x60;lastAvatarUpdateDate&#x60; of the room is set to null.    User vCard is also updated: the &#x60;PHOTO&#x60; element is removed and the &#x60;LASTAVATARUPDATE&#x60; element is set to empty.       A message stanza with the attribute lastAvatarUpdateDate:null is sent to all room users. This allow clients to be notified the avatar is no more available when they join the room:       &amp;lt;message                        from&#x3D; &#39;a portal client connected&#39;                        to&#x3D;&#39;room user jid&#39;                        id&#x3D;&#39;lh2bs617&#39;                        type&#x3D;&#39;management&#39;                        xmlns: &#39;jabber :client&#39; &amp;gt;                        &amp;lt;room&amp;gt;                            roomid&#x3D;\&quot;mongoid of the room\&quot;                            roomjid&#x3D;\&quot;jid of the room\&quot;                            lastAvatarUpdateDate&#x3D;null                            xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                            action&#x3D;\&quot;delete\&quot;                        /&amp;gt;                        &amp;lt;/message&amp;gt;                

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsAvatarApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var accept = "accept_example"; // String | application/json
apiInstance.deleteRoomAvatar(roomId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteRoomAvatarSuccess**](DeleteRoomAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoomAvatar

> GetRoomAvatarSuccess getRoomAvatar(roomId, opts)

Get room&#39;s avatar

This API can be used to retrieve room&#39;s avatar.    Example: GET https://openrainbow.com/api/room-avatar/56c5c19f94141765119f896c?size&#x3D;128       Clients can request avatars in a given size by specifying size query string parameter.    Avatar file can be resized from 1px to its original resolution, with a maximum of 512px:   * If no size option is requested, avatar is returned by default with resolution of 80px. * Max requestable size is 512. If a higher resolution is requested, the default size is returned instead, i.e. 80px. * Original avatars resolution can&#39;t be increased. If uploaded avatar size is 128 x 128 px, even is client request avatar with size 256, the original avatar file will be returned (128px).  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsAvatarApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var opts = {
  'size': 3.4 // Number | Specify avatar size in pixels (square size x size).
};
apiInstance.getRoomAvatar(roomId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **size** | **Number**| Specify avatar size in pixels (square size x size). | [optional] 

### Return type

[**GetRoomAvatarSuccess**](GetRoomAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadRoomAvatar

> UploadRoomAvatarSuccess uploadRoomAvatar(roomId)

Upload room avatar

This API can be used to upload avatar image for the given roomId. This API can only be used by one room&#39;s moderator.    Rules:   * Avatar file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If room already has an avatar, the existing one is overwritten. * By default, avatar file size is limited to 4194304 bytes (4 MB) (this limit can be changed by integration team in enduser portal config file). * When an avatar is uploaded, the field &#x60;lastAvatarUpdateDate&#x60; of the room is updated to the current date. * A message stanza with the lastAvatarUpdateDate is sent to all room users. This allow clients to be notified of the up-to-date room avatar when they join the room:        &#x60;&#x60;&#x60;html &lt;message                    from&#x3D; &#39;a portal client connected&#39;                    to&#x3D;&#39;room user jid&#39;                    id&#x3D;&#39;lh2bs617&#39;                    type&#x3D;&#39;management&#39;                    xmlns: &#39;jabber :client&#39; &gt;                    &lt;room&gt;                        roomid&#x3D;\&quot;mongoid of the room\&quot;                        roomjid&#x3D;\&quot;jid of the room\&quot;                        lastAvatarUpdateDate&#x3D;\&quot;Fri Aug 18 2017 15:36:12 GMT+0200 (CEST)\&quot;                        xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                        action&#x3D;\&quot;update\&quot;                    /&gt;                    &lt;/message&gt;           &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsAvatarApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
apiInstance.uploadRoomAvatar(roomId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 

### Return type

[**UploadRoomAvatarSuccess**](UploadRoomAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

