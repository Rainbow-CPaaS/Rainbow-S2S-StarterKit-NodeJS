# RainbowEnduserPortal.RoomsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoom**](RoomsApi.md#createRoom) | **POST** /api/rainbow/enduser/v1.0/rooms | Create a room
[**deleteRoom**](RoomsApi.md#deleteRoom) | **DELETE** /api/rainbow/enduser/v1.0/rooms/{roomId} | Delete a room
[**getRoomById**](RoomsApi.md#getRoomById) | **GET** /api/rainbow/enduser/v1.0/rooms/{roomId} | Get a room data from its id
[**getRoomByJid**](RoomsApi.md#getRoomByJid) | **GET** /api/rainbow/enduser/v1.0/rooms/jids/{jid} | Get a room data from its jid
[**getRooms**](RoomsApi.md#getRooms) | **GET** /api/rainbow/enduser/v1.0/rooms | Get all rooms visible by the user requesting it
[**updateRoom**](RoomsApi.md#updateRoom) | **PUT** /api/rainbow/enduser/v1.0/rooms/{roomId} | Change room data



## createRoom

> CreateRoomSuccess createRoom(body)

Create a room

Rainbow users/administrator can create/delete rooms based on multi-chat principle and change several room related data fields.    When a room is created, person that has created the room gets room administration rights. After that he can add other users with the role: &#x60;user&#x60;, &#x60;administrator&#x60; or &#x60;guest&#x60;.    Users with administration rights can: change the topic and the room visibility (public / private); add/remove room users; promote users as administrator; and delete rooms.    The room multi chat jid (MUC JID) is created server side and returned in Json response.    Creating a room is sometimes barred (403) (feature BUBBLE_COUNT)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var body = new RainbowEnduserPortal.CreateRoom(); // CreateRoom | 
apiInstance.createRoom(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRoom**](CreateRoom.md)|  | 

### Return type

[**CreateRoomSuccess**](CreateRoomSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoom

> DeleteRoomSuccess deleteRoom(roomId, accept)

Delete a room

This API allows to delete a room.    A message stanza is sent to room users as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s deleted display name has closed the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name&#x3D;&#39;close&#39;                  /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var accept = "accept_example"; // String | application/json
apiInstance.deleteRoom(roomId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteRoomSuccess**](DeleteRoomSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoomById

> GetRoomByIdSuccess getRoomById(roomId, accept, opts)

Get a room data from its id

Get a rooms data visible by the user requesting it (a private room the user is part of or a public room)   

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less room details in response. > - `small`: id, name, jid, isActive > - `medium`: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive > - `full`: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If `full` format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The `activeUsersCounter` represents the number of users with the status 'accepted' or 'invited'. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status 'accepted' or 'invited'.
};
apiInstance.getRoomById(roomId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less room details in response. &gt; - &#x60;small&#x60;: id, name, jid, isActive &gt; - &#x60;medium&#x60;: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive &gt; - &#x60;full&#x60;: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If &#x60;full&#x60; format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The &#x60;activeUsersCounter&#x60; represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. | [optional] 

### Return type

[**GetRoomByIdSuccess**](GetRoomByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoomByJid

> GetRoomByJidSuccess getRoomByJid(jid, accept, opts)

Get a room data from its jid

Get a rooms data visible by the user requesting it (a private room the user is part of or a public room)   

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var jid = "jid_example"; // String | Room MUC JID (example: room1@muc.mycompany.com)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less room details in response. > - `small`: id, name, jid, isActive > - `medium`: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive > - `full`: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If `full` format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The `activeUsersCounter` represents the number of users with the status 'accepted' or 'invited'. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status 'accepted' or 'invited'.
};
apiInstance.getRoomByJid(jid, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jid** | **String**| Room MUC JID (example: room1@muc.mycompany.com) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less room details in response. &gt; - &#x60;small&#x60;: id, name, jid, isActive &gt; - &#x60;medium&#x60;: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive &gt; - &#x60;full&#x60;: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If &#x60;full&#x60; format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The &#x60;activeUsersCounter&#x60; represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. | [optional] 

### Return type

[**GetRoomByJidSuccess**](GetRoomByJidSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRooms

> GetRoomsSuccess getRooms(accept, opts)

Get all rooms visible by the user requesting it

Display a list of short room description including: **id** - room identifier, **name** - room name   Get all rooms visible by the user requesting it (the private rooms the user is part of and the public rooms)   

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'userId': "userId_example", // String | user unique identifier from which to retrieve the list of rooms (like 56f42c1914e2a8a91b99e595)
  'status': "status_example", // String | user's status to filter when retrieving the list of user's rooms (like 56f42c1914e2a8a91b99e595) `userId` query parameter can be any userid from Users with `superadmin` role, and only the User's id itself if not.    In this case only the rooms the user is part of are returned   
  'confId': "confId_example", // String | When a room hosts a conference endpoint, retrieve the one hosting the given confEndPointId (like 5980c0aaf698c541468fd1e0). `confId` query parameter used with `userId` query parameter helps filter when retrieving the list of user's rooms.**GET /api/rainbow/enduser/v1.0/rooms?userId=597ef13f36055b298edfaa13&confId=5980c0aaf698c541468fd1e0**
  'scheduled': true, // Boolean | When a room is/was used for a meeting, select rooms used for an immediate or a scheduled meeting. `scheduled` query parameter used with `userId` query parameter helps filter when retrieving the list of user's rooms.   * scheduled=false : all rooms used for an instant meeting * scheduled=true : all rooms used for a scheduled meeting  **GET /api/rainbow/enduser/v1.0/rooms?userId=597ef13f36055b298edfaa13&scheduled=true**
  'hasConf': true, // Boolean | Select all rooms used for meeting. `hasConf` query parameter used with `userId` query parameter helps filter when retrieving the list of user's rooms.   * hasConf=false : all rooms never used for a meeting * hasConf=true : all rooms used for a meeting  **GET /api/rainbow/enduser/v1.0/rooms?userId=597ef13f36055b298edfaa13&hasConf=true**
  'isActive': true, // Boolean | isActive is a flag of the room. When set to true all room users are invited to share their presence. Else they have to wait an event from XMPP server to share the presence. This flag is reset when the room is inactive for a while (basically 60 days), and set when the first user share his presence.   * isActive=false : all rooms not active yet * isActive=true : all active rooms  **GET /api/rainbow/enduser/v1.0/rooms?userId=597ef13f36055b298edfaa13&isActive=true**
  'format': "format_example", // String | Allows to retrieve more or less room details in response. > - `small`: id, name, jid, isActive > - `medium`: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive > - `full`: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If `full` format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The `activeUsersCounter` represents the number of users with the status 'accepted' or 'invited'. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status 'accepted' or 'invited'.
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getRooms(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **userId** | **String**| user unique identifier from which to retrieve the list of rooms (like 56f42c1914e2a8a91b99e595) | [optional] 
 **status** | **String**| user&#39;s status to filter when retrieving the list of user&#39;s rooms (like 56f42c1914e2a8a91b99e595) &#x60;userId&#x60; query parameter can be any userid from Users with &#x60;superadmin&#x60; role, and only the User&#39;s id itself if not.    In this case only the rooms the user is part of are returned    | [optional] 
 **confId** | **String**| When a room hosts a conference endpoint, retrieve the one hosting the given confEndPointId (like 5980c0aaf698c541468fd1e0). &#x60;confId&#x60; query parameter used with &#x60;userId&#x60; query parameter helps filter when retrieving the list of user&#39;s rooms.**GET /api/rainbow/enduser/v1.0/rooms?userId&#x3D;597ef13f36055b298edfaa13&amp;confId&#x3D;5980c0aaf698c541468fd1e0** | [optional] 
 **scheduled** | **Boolean**| When a room is/was used for a meeting, select rooms used for an immediate or a scheduled meeting. &#x60;scheduled&#x60; query parameter used with &#x60;userId&#x60; query parameter helps filter when retrieving the list of user&#39;s rooms.   * scheduled&#x3D;false : all rooms used for an instant meeting * scheduled&#x3D;true : all rooms used for a scheduled meeting  **GET /api/rainbow/enduser/v1.0/rooms?userId&#x3D;597ef13f36055b298edfaa13&amp;scheduled&#x3D;true** | [optional] 
 **hasConf** | **Boolean**| Select all rooms used for meeting. &#x60;hasConf&#x60; query parameter used with &#x60;userId&#x60; query parameter helps filter when retrieving the list of user&#39;s rooms.   * hasConf&#x3D;false : all rooms never used for a meeting * hasConf&#x3D;true : all rooms used for a meeting  **GET /api/rainbow/enduser/v1.0/rooms?userId&#x3D;597ef13f36055b298edfaa13&amp;hasConf&#x3D;true** | [optional] 
 **isActive** | **Boolean**| isActive is a flag of the room. When set to true all room users are invited to share their presence. Else they have to wait an event from XMPP server to share the presence. This flag is reset when the room is inactive for a while (basically 60 days), and set when the first user share his presence.   * isActive&#x3D;false : all rooms not active yet * isActive&#x3D;true : all active rooms  **GET /api/rainbow/enduser/v1.0/rooms?userId&#x3D;597ef13f36055b298edfaa13&amp;isActive&#x3D;true** | [optional] 
 **format** | **String**| Allows to retrieve more or less room details in response. &gt; - &#x60;small&#x60;: id, name, jid, isActive &gt; - &#x60;medium&#x60;: id, name, jid, topic, creator, conference, guestEmails, disableNotifications, isActive &gt; - &#x60;full&#x60;: id, name, jid, topic, creator, conference, guestEmails, customData, disableNotifications, users, activeUsersCounter, isActive If &#x60;full&#x60; format is used, the users list is limited to the first one hundred. Beyond, the number of active users is supplied. The &#x60;activeUsersCounter&#x60; represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. Use /api/rainbow/enduser/v1.0/rooms/:roomId/users to Get all active users from a room with paginate options In this case, as a room can have many users (more than 100). We hide users ranked after this threshold. The activeUsersCounter represents the number of users with the status &#39;accepted&#39; or &#39;invited&#39;. | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetRoomsSuccess**](GetRoomsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRoom

> UpdateRoomSuccess updateRoom(roomId, body)

Change room data

This API allows to update room data.    A message stanza with the updated room data is sent to all room users. This allow clients to be notified of the up-to-date room data when they join the room:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D; &#39;a portal client connected&#39;           to&#x3D;&#39;room user jid&#39;           id&#x3D;&#39;lh2bs617&#39;           type&#x3D;&#39;management&#39;           xmlns: &#39;jabber :client&#39; &gt;           &lt;room&gt;               roomid&#x3D;\&quot;mongoid of the room\&quot;               roomjid&#x3D;\&quot;jid of the room\&quot;               topic&#x3D;\&quot;new topic of the room\&quot;               name&#x3D;\&quot;new name of the room\&quot;               xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;           /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var body = new RainbowEnduserPortal.UpdateRoom(); // UpdateRoom | 
apiInstance.updateRoom(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **body** | [**UpdateRoom**](UpdateRoom.md)|  | 

### Return type

[**UpdateRoomSuccess**](UpdateRoomSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

