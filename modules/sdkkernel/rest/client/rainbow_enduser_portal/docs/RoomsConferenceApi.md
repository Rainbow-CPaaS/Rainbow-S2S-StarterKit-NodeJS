# RainbowEnduserPortal.RoomsConferenceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSharedConference**](RoomsConferenceApi.md#getSharedConference) | **GET** /api/rainbow/enduser/v1.0/rooms/{roomId}/conferences/{confId} | Get shared conference data
[**sendJoinConferenceInvitationEmail**](RoomsConferenceApi.md#sendJoinConferenceInvitationEmail) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/conferences/{confId}/invitations | Notify users to join a conference
[**sendScheduledMeetingCancelationEmail**](RoomsConferenceApi.md#sendScheduledMeetingCancelationEmail) | **DELETE** /api/rainbow/enduser/v1.0/rooms/{roomId}/conferences/{confId}/invitations | Notify users cancel conference
[**shareConference**](RoomsConferenceApi.md#shareConference) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/conferences | Share a conference
[**stopConferenceSharing**](RoomsConferenceApi.md#stopConferenceSharing) | **DELETE** /api/rainbow/enduser/v1.0/rooms/{roomId}/conferences/{confId} | Stop sharing a conference



## getSharedConference

> GetSharedConferenceSuccess getSharedConference(roomId, confId, accept)

Get shared conference data

If the logged in user is not register into the wanted room , a forbidden error is sent. Gives less data than the [GET /api/rainbow/confprovisioning/v1.0/conferences/{confEndpointId}][0]).   [0]: /conf-provision/#api-conferences-GetConference

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsConferenceApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var confId = "confId_example"; // String | Conference unique identifier
var accept = "accept_example"; // String | application/json
apiInstance.getSharedConference(roomId, confId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **confId** | **String**| Conference unique identifier | 
 **accept** | **String**| application/json | 

### Return type

[**GetSharedConferenceSuccess**](GetSharedConferenceSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendJoinConferenceInvitationEmail

> SendJoinConferenceInvitationEmailSuccess sendJoinConferenceInvitationEmail(roomId, confId, body)

Notify users to join a conference

Send a notification for users to join a conference. Mainly the notification is a mail indicating the conference phone number. Furthermore an XMPP event could be sent.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.RoomsConferenceApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var confId = "confId_example"; // String | Conference unique identifier
var body = new RainbowEnduserPortal.SendJoinConferenceInvitationEmail(); // SendJoinConferenceInvitationEmail | 
apiInstance.sendJoinConferenceInvitationEmail(roomId, confId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **confId** | **String**| Conference unique identifier | 
 **body** | [**SendJoinConferenceInvitationEmail**](SendJoinConferenceInvitationEmail.md)|  | 

### Return type

[**SendJoinConferenceInvitationEmailSuccess**](SendJoinConferenceInvitationEmailSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendScheduledMeetingCancelationEmail

> SendScheduledMeetingCancelationEmailSuccess sendScheduledMeetingCancelationEmail(roomId, confId, accept, contentType, body, opts)

Notify users cancel conference

Send a notification to users that a scheduled meeting is cancelled. The notification is a mail. 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.RoomsConferenceApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var confId = "confId_example"; // String | Conference unique identifier
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
var body = new RainbowEnduserPortal.SendScheduledMeetingCancelationEmail(); // SendScheduledMeetingCancelationEmail | 
var opts = {
  'noMail': true // Boolean | Bypass emails delivery. Supply instead all data available to build custom emails
};
apiInstance.sendScheduledMeetingCancelationEmail(roomId, confId, accept, contentType, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **confId** | **String**| Conference unique identifier | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 
 **body** | [**SendScheduledMeetingCancelationEmail**](SendScheduledMeetingCancelationEmail.md)|  | 
 **noMail** | **Boolean**| Bypass emails delivery. Supply instead all data available to build custom emails | [optional] 

### Return type

[**SendScheduledMeetingCancelationEmailSuccess**](SendScheduledMeetingCancelationEmailSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## shareConference

> ShareConferenceSuccess shareConference(roomId, body)

Share a conference

If the logged in user is not registed into the wanted room a (403) forbidden error is sent.   If the conference end point to add is already registered, a (409) conflict error is sent.   If the conference end point to add is already present in another room, it is detached from this room and attached to the room in the current request.    A message stanza is sent to all users of the room as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s display name shares an end point in the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;conferenceAdd&#39;                 userId: &#39;userId of the owner of the conference end point&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsConferenceApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var body = new RainbowEnduserPortal.ShareConference(); // ShareConference | 
apiInstance.shareConference(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **body** | [**ShareConference**](ShareConference.md)|  | 

### Return type

[**ShareConferenceSuccess**](ShareConferenceSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopConferenceSharing

> StopConferenceSharingSuccess stopConferenceSharing(roomId, confId, accept, mediaType)

Stop sharing a conference

Only an active moderator is allowed to remove it from the room. (privilege&#x3D;&#39;moderator&#39;, status&#x3D;&#39;active&#39;)   If the conference to delete is not registered, a (404) conflict error is sent.      A message stanza is sent to room users as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s display name stop to share an end point in the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;conferenceRemove&#39;                 userId: &#39;userId of the owner of the conference end point&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsConferenceApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var confId = "confId_example"; // String | Conference unique identifier (like 56f42c1914e2a8a91b99e595)
var accept = "accept_example"; // String | application/json
var mediaType = "mediaType_example"; // String | {pstnAudio, webrtc} : If not defined a pstnAudio is taken as default value
apiInstance.stopConferenceSharing(roomId, confId, accept, mediaType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **confId** | **String**| Conference unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **accept** | **String**| application/json | 
 **mediaType** | **String**| {pstnAudio, webrtc} : If not defined a pstnAudio is taken as default value | 

### Return type

[**StopConferenceSharingSuccess**](StopConferenceSharingSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

