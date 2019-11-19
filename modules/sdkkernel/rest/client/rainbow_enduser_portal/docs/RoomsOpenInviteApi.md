# RainbowEnduserPortal.RoomsOpenInviteApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendJoinRoomInvitationUsingOpenInviteiId**](RoomsOpenInviteApi.md#sendJoinRoomInvitationUsingOpenInviteiId) | **POST** /api/rainbow/enduser/v1.0/rooms/open-invites | Join a room using an openInviteId



## sendJoinRoomInvitationUsingOpenInviteiId

> SendJoinRoomInvitationUsingOpenInviteiIdSuccess sendJoinRoomInvitationUsingOpenInviteiId(body)

Join a room using an openInviteId

From 1.83.0 release, a Rainbow user may have a public links that will help their coworkers to join rooms. So that he just has to create a room and create a public link so called **&#39;public URL&#39;**. Each user can create on demand a public URL to one of his rooms([users public link][0]). The public URL format is designed by the Rainbow application programmer and must contain at least an &#39;openInviteId&#39;. This openInviteId is an UUID-V4 value.   * https://meet.openrainbow.com/d4bb04c2a2254cd3bebb28e449ce7de3  The goal of this api is to embed on the fly a user in the room bind with the given openInviteId (body parameter). Many error cases may occur:   * The openInviteId is not valid HTTP error 404 Not Found (detail: 40400) * If no room is currently binded or when the room to join is no more active (deleted or archived), an HTTP error 404 Not Found (detail: 404116) is returned. * If the room is locked (autoRegister &#x3D; &#39;lock&#39;), a user not yet registered inside this room is rejected. An HTTP error 403 (detail: 403621 - Forecast a maximum quota reached..) is returned * If the maximum of users for a room is reached, an HTTP error 403 (detail: 403621 - Forecast a maximum quota reached..) is returned     A message stanza is sent to added user. This allow clients to be notified and join the room:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;inviter user&#39;s jid&#39;           to&#x3D;&#39;invited user&#39;s jid &#39;&gt;            &lt;x xmlns&#x3D;&#39;jabber:x:conference&#39;                 jid: &#39;room jid&#39;                 reason: &#39;reason given in body parameter&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    A message stanza is sent to moderators as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s invited display name has been invited to join the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;invitation&#39;                 jid: &#39;invited user&#39;s jid&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;  [0]: #api-users_rooms_public_link

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsOpenInviteApi();
var body = new RainbowEnduserPortal.SendJoinRoomInvitationUsingOpenInviteiId(); // SendJoinRoomInvitationUsingOpenInviteiId | 
apiInstance.sendJoinRoomInvitationUsingOpenInviteiId(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendJoinRoomInvitationUsingOpenInviteiId**](SendJoinRoomInvitationUsingOpenInviteiId.md)|  | 

### Return type

[**SendJoinRoomInvitationUsingOpenInviteiIdSuccess**](SendJoinRoomInvitationUsingOpenInviteiIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

