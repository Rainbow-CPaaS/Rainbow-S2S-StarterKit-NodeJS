# RainbowEnduserPortal.UsersRoomsPublicLinkApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bindOpenInviteIdWithRoomId**](UsersRoomsPublicLinkApi.md#bindOpenInviteIdWithRoomId) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/public-links/bind | Create an openInviteId for a room
[**getOpenInviteIdsOfUser**](UsersRoomsPublicLinkApi.md#getOpenInviteIdsOfUser) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/public-links | Get all openInviteId per room of a user
[**resetOpenInviteIdOfRoomId**](UsersRoomsPublicLinkApi.md#resetOpenInviteIdOfRoomId) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/public-links/reset | Reset the openInviteId for a room
[**unbindOpenInviteIdWithRoomId**](UsersRoomsPublicLinkApi.md#unbindOpenInviteIdWithRoomId) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/public-links/unbind | Remove the public link of a room



## bindOpenInviteIdWithRoomId

> BindOpenInviteIdWithRoomIdSuccess bindOpenInviteIdWithRoomId(userId, body)

Create an openInviteId for a room

A Rainbow user may have a public link that will help somebody to join a room. So that he just has to create a room and create a public link so called **&#39;public URL&#39;**. Each user can create on demand a public URL to one of his rooms. The public URL format is designed by the Rainbow application programmer and must contain at least an &#39;openInviteId&#39;. This openInviteId is an UUID-V4 value.   * https://meet.openrainbow.com/d4bb04c2a2254cd3bebb28e449ce7de3  Each user may have up to two public URL dedicated to join either a personal audio or video room. A personal audio room is characterized by the flag &#39;conference.scheduled &#x3D; false&#39; and &#39;conference.mediaType &#x3D; \&quot;pstnAudio\&quot;. A personal video room is characterized by the flag &#39;conference.scheduled &#x3D; false&#39; and &#39;conference.mediaType &#x3D; \&quot;webrtc\&quot;. A room is bound if:   * The room exists and is not yet closed * The user is one of the room&#39;s moderator  A public URL for personal rooms still remains in our database even if the bound room is closed. That is to say the same public URL can be used for each personal room (audio or video) created for this user. It&#39;s enough to bind this new room. To join a room using a public URL, the Rainbow application extracts the &#39;openInviteId&#39; then call the api that allow to register on the fly when necessary a user into the bound room. [POST /api/rainbow/enduser/v1.0/rooms/open-invites][0] To use this feature, a programmer can use a set of API that allows to a user openInviteId(s) management: | Verb | API | Role | |:----:|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | POST | /api/rainbow/enduser/v1.0/users/:userId/public-links/bind body {roomId:\&quot;xxxx\&quot;} | Create an openInviteId Bind it with the given roomId | | PUT | /api/rainbow/enduser/v1.0/users/:userId/public-links/unbind body {roomId:\&quot;xxxx\&quot;} | If the roomId is the personal audio or video room, unbind the given roomId to the openInviteId. That is to say a public URL is invariant when an application decides to re-create a room after each personal audio or video meeting. For other kinds of room (chat, scheduled meeting..) the public URL is deleted. | | PUT | /api/rainbow/enduser/v1.0/users/:userId/public-links/reset body {roomId:\&quot;xxxx\&quot;} | Process another openInvitId. | | GET | /api/rainbow/enduser/v1.0/users/:userId/public-links?type&#x3D;xxx&amp;roomId&#x3D;xxx | Get all openInviteId belonging to a user. A filter per type of room (personal-audio-room, personal-video-room, default) is available. | ## Basic workflow ![Failed to load diagram :-(](img/public_link_1.jpg \&quot;Basic workflow\&quot;) ## These set of API replaces the former open-invites API set ([users open invite][1])    When a room is bound with an openInviteId, a message stanza is sent to the user for multi-devices constraints: 1) A new public link is created        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;86be9505-9f31-4935-ae88-d095825ab4ef_0\&quot;           to&#x3D;\&quot;4084a3b277644118be3403720287f978@francky-all-in-one-dev-1.opentouch.cloud\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;            &lt;openinviteid action&#x3D;\&quot;create\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;openinviteid&gt;77745cff22e44d56bdb47b49d28f3e0c&lt;/openinviteid&gt;            &lt;roomid&gt;5ab109781caacce5df54436a&lt;/roomid&gt;            &lt;roomType&gt;default&lt;/roomType&gt;            &lt;/openinvite&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 2) A former public link is updated        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;86be9505-9f31-4935-ae88-d095825ab4ef_0\&quot;           to&#x3D;\&quot;4084a3b277644118be3403720287f978@francky-all-in-one-dev-1.opentouch.cloud\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;            &lt;openinviteid action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;openinviteid&gt;77745cff22e44d56bdb47b49d28f3e0c&lt;/openinviteid&gt;            &lt;roomid&gt;5ab109781caacce5df54436a&lt;/roomid&gt;            &lt;roomType&gt;personal_audio_room&lt;/roomType&gt;            &lt;/openinvite&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links/bind  [0]: #api-rooms_open_invite-sendJoinRoomInvitationUsingOpenInviteiId [1]: #api-users_open_invite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersRoomsPublicLinkApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.BindOpenInviteIdWithRoomId(); // BindOpenInviteIdWithRoomId | 
apiInstance.bindOpenInviteIdWithRoomId(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**BindOpenInviteIdWithRoomId**](BindOpenInviteIdWithRoomId.md)|  | 

### Return type

[**BindOpenInviteIdWithRoomIdSuccess**](BindOpenInviteIdWithRoomIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOpenInviteIdsOfUser

> GetOpenInviteIdsOfUserSuccess getOpenInviteIdsOfUser(userId, accept, opts)

Get all openInviteId per room of a user

Get all openInviteId belonging to a user. Some filters per type of room (personal_audio_room, personal_video_room, default) or by roomId are available.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links&amp;type&#x3D;personal_audio_room&amp;type&#x3D;personal_video_room

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersRoomsPublicLinkApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
var opts = {
  'type': "type_example", // String | to get the public link of personal rooms `type` query parameter used with `personal_audio_room` or `personal_video_room` or `default`.**GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links&type=personal_audio_room**
  'roomId': "roomId_example" // String | Get the public link for a given roomId, managed by the userId `roomId`**GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links&roomId=57cd5922d341df5812bbcb72**
};
apiInstance.getOpenInviteIdsOfUser(userId, accept, opts).then(function(data) {
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
 **type** | **String**| to get the public link of personal rooms &#x60;type&#x60; query parameter used with &#x60;personal_audio_room&#x60; or &#x60;personal_video_room&#x60; or &#x60;default&#x60;.**GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links&amp;type&#x3D;personal_audio_room** | [optional] 
 **roomId** | **String**| Get the public link for a given roomId, managed by the userId &#x60;roomId&#x60;**GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links&amp;roomId&#x3D;57cd5922d341df5812bbcb72** | [optional] 

### Return type

[**GetOpenInviteIdsOfUserSuccess**](GetOpenInviteIdsOfUserSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetOpenInviteIdOfRoomId

> ResetOpenInviteIdOfRoomIdSuccess resetOpenInviteIdOfRoomId(userId)

Reset the openInviteId for a room

This API can be used by the user himself to initialize or to change his personal open invite id.    A message stanza is sent to the user for multi-devices constraints:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;86be9505-9f31-4935-ae88-d095825ab4ef_0\&quot;           to&#x3D;\&quot;4084a3b277644118be3403720287f978@francky-all-in-one-dev-1.opentouch.cloud\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;            &lt;openinviteid action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;openinviteid&gt;77745cff22e44d56bdb47b49d28f3e0c&lt;/openinviteid&gt;            &lt;roomid&gt;&lt;/roomid&gt;            &lt;roomType&gt;personal_audio_room&lt;/roomType&gt;            &lt;/openinvite&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links/reset

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersRoomsPublicLinkApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
apiInstance.resetOpenInviteIdOfRoomId(userId).then(function(data) {
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

[**ResetOpenInviteIdOfRoomIdSuccess**](ResetOpenInviteIdOfRoomIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unbindOpenInviteIdWithRoomId

> UnbindOpenInviteIdWithRoomIdSuccess unbindOpenInviteIdWithRoomId(userId, body)

Remove the public link of a room

If the roomId is the personal audio or video room, unbind the given roomId to the openInviteId. That is to say a public URL is invariant when an application decides to re-create a room after each personal audio or video meeting. For other kinds of room (chat, scheduled meeting..) the public URL is deleted. According with the roomType, a message stanza is sent to the user for multi-devices constraints: 1) The public link is removed        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;86be9505-9f31-4935-ae88-d095825ab4ef_0\&quot;           to&#x3D;\&quot;4084a3b277644118be3403720287f978@francky-all-in-one-dev-1.opentouch.cloud\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;            &lt;openinviteid action&#x3D;\&quot;deleted\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;openinviteid&gt;77745cff22e44d56bdb47b49d28f3e0c&lt;/openinviteid&gt;            &lt;roomid&gt;5ab109781caacce5df54436a&lt;/roomid&gt;            &lt;roomType&gt;default&lt;/roomType&gt;            &lt;/openinvite&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 2) The public link still remains. It is just disabled.        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;86be9505-9f31-4935-ae88-d095825ab4ef_0\&quot;           to&#x3D;\&quot;4084a3b277644118be3403720287f978@francky-all-in-one-dev-1.opentouch.cloud\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;            &lt;openinviteid action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;openinviteid&gt;77745cff22e44d56bdb47b49d28f3e0c&lt;/openinviteid&gt;            &lt;roomid&gt;5ab109781caacce5df54436a&lt;/roomid&gt;            &lt;roomType&gt;personal_audio_room&lt;/roomType&gt;            &lt;/openinvite&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/public-links/unbind

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersRoomsPublicLinkApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.UnbindOpenInviteIdWithRoomId(); // UnbindOpenInviteIdWithRoomId | 
apiInstance.unbindOpenInviteIdWithRoomId(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**UnbindOpenInviteIdWithRoomId**](UnbindOpenInviteIdWithRoomId.md)|  | 

### Return type

[**UnbindOpenInviteIdWithRoomIdSuccess**](UnbindOpenInviteIdWithRoomIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

