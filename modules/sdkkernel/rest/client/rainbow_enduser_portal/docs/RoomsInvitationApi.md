# RainbowEnduserPortal.RoomsInvitationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendUserRoomInvitationCancelation**](RoomsInvitationApi.md#sendUserRoomInvitationCancelation) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/invitations/cancel | Notify users about a canceled invitation to join a room
[**sendUsersJoinRoomInvitation**](RoomsInvitationApi.md#sendUsersJoinRoomInvitation) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/invitations | Notify users to join a room



## sendUserRoomInvitationCancelation

> SendUserRoomInvitationCancelationSuccess sendUserRoomInvitationCancelation(roomId, body)

Notify users about a canceled invitation to join a room

Room invitation cancelling. Depending on the purpose of the invitation to cancel, we can have two different behaviors.   * **pstn-conference scenario** : Send a notification to users that a scheduled pstn conference is cancelled. The notification is an email. When some of them are known as Guest users (doesn&#39;t have created an account yet), the email of these guest is removed from the list of guest attached to the room. All active users in the room are notified about the new list of guest emails left. * **chat, video-conference scenario** : This case is mainly to dismiss some guest users attached to the room. The main reason is a bad email spelling. The email of these guest is removed from the list of guest attached to the room. When you use the chat or video-conference scenario, only a list of emails is wanted in the body. (\&quot;emails\&quot; : [\&quot;guest1@mycompany.com\&quot;, \&quot;guest2@mycompany\&quot;]) All active users in the room are notified about the new list of guest emails left.  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.RoomsInvitationApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.SendUserRoomInvitationCancelation(); // SendUserRoomInvitationCancelation | 
apiInstance.sendUserRoomInvitationCancelation(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**SendUserRoomInvitationCancelation**](SendUserRoomInvitationCancelation.md)|  | 

### Return type

[**SendUserRoomInvitationCancelationSuccess**](SendUserRoomInvitationCancelationSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/xml


## sendUsersJoinRoomInvitation

> SendUsersJoinRoomInvitationSuccess sendUsersJoinRoomInvitation(roomId, body)

Notify users to join a room

Common room invitation mechanism for chat only/pstn conference/video conference * Send notifications and/or emails to rainbow users, to join a room for a chat or conference session. * Send mails to foreign users, inviting to create a rainbow account before joining a room and starting a chat or conference session. * For pstn conference invitation, the notification is a mail indicating the conference phone number.  Three scenario are available: * **chat** : In this scenario, we try to move a set of users known by their email only, to a CHAT room. The room is already created and some Rainbow users are already invited. The goal is to carry on the users embedding using a list of emails. Rainbow users not yet invited to join the room are added. Other are considered as foreign users, then they receive an email inviting them to create their Rainbow account and join the room. In details the scenario:   * Ignore &#39;users&#39; list (see body content)   * Search rainbow users from &#39;emails&#39; list (see body content)   * Those found are invited to join the room   * Those not found receive an email to create their account before joining automatically the room. Emails address of foreign users are stored in the room data (new field: guestEmails) * **pstn-conference** : In this scenario, we try to notify a set of users known by their rainbowId or their email, to join a pstn conference. The room is already created and some Rainbow users are already invited. The goal is also to carry on the users embedding using a list of emails. Another goal is to send a notification for all invited users to join the conference.**The notification is a mail indicating the conference phone numbers and access code.** Furthermore an XMPP event could be sent. As for the &#39;chat scenario&#39;, Rainbow users not yet invited to join the room are added. Other are considered as foreign users, then they receive an email inviting them to create their Rainbow account and join the room. The mail indicates the conference phone numbers and access code. In details the scenario:    * Read &#39;users&#39; list to built a list of users to notify(see body content)   * Search rainbow users from &#39;emails&#39; list (see body content)   * Those found are invited to join the room and receive an email and/or an XMPP event. No event is sent in case of instant meeting.   * Those not found receive an email to create their account before joining automatically the room. Emails address of foreign users are stored in the room data (new field: guestEmails)   * No mail is sent if wanted (see body content &#39;noMail&#39; flag). * **video-conference** : In this scenario, we try to notify a set of users known by their rainbowId or their email, to join a video conference. The room is already created and some Rainbow users are already invited. The goal is also to carry on the users embedding using a list of emails. Another goal is to send an XMPP event to all rainbow user to join the video conference. The last goal is to send an email to foreign users, inviting them to create their Rainbow account and join the video conference room. In details the scenario:    * Read &#39;users&#39; list to built a list of users to notify(see body content)   * Search rainbow users from &#39;emails&#39; list (see body content)   * Those found are invited to join the room and receive an XMPP event to join the video conference   * Those not found receive an email to create their account before joining automatically the room. Emails address of foreign users are stored in the room data (new field: guestEmails)  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.RoomsInvitationApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.SendUsersJoinRoomInvitation(); // SendUsersJoinRoomInvitation | 
apiInstance.sendUsersJoinRoomInvitation(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**SendUsersJoinRoomInvitation**](SendUsersJoinRoomInvitation.md)|  | 

### Return type

[**SendUsersJoinRoomInvitationSuccess**](SendUsersJoinRoomInvitationSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/xml

