# RainbowEnduserPortal.RoomsUsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToRoom**](RoomsUsersApi.md#addUserToRoom) | **POST** /api/rainbow/enduser/v1.0/rooms/{roomId}/users | Add a user
[**getRoomActiveUsers**](RoomsUsersApi.md#getRoomActiveUsers) | **GET** /api/rainbow/enduser/v1.0/rooms/{roomId}/users | Get all active users from a room
[**getUserRoomData**](RoomsUsersApi.md#getUserRoomData) | **GET** /api/rainbow/enduser/v1.0/rooms/{roomId}/users/{userId} | Get a user room data
[**removeUserFromRoom**](RoomsUsersApi.md#removeUserFromRoom) | **DELETE** /api/rainbow/enduser/v1.0/rooms/{roomId}/users/{userId} | Delete a user from a room
[**updateUserData**](RoomsUsersApi.md#updateUserData) | **PUT** /api/rainbow/enduser/v1.0/rooms/{roomId}/users/{userId} | Change a user data



## addUserToRoom

> AddUserToRoomSuccess addUserToRoom(roomId, body)

Add a user

If the logged in user is not register into the wanted room, and if he hasn&#39;t a &#39;moderator&#39; privilege, a (403) forbidden error is sent.    Creating a user with the privilege &#39;moderator&#39; is sometimes barred (feature BUBBLE_PROMOTE_MEMBER)    If the user to add is already registered (declared in the room and &#x60;status&#x60; is not &#x60;deleted&#x60;), a (409) conflict error is sent.    If not the user is either created or updated with &#x60;status&#x60; being &#x60;invited&#x60;.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsUsersApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var body = new RainbowEnduserPortal.AddUserToRoom(); // AddUserToRoom | 
apiInstance.addUserToRoom(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **body** | [**AddUserToRoom**](AddUserToRoom.md)|  | 

### Return type

[**AddUserToRoomSuccess**](AddUserToRoomSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRoomActiveUsers

> GetRoomActiveUsersSuccess getRoomActiveUsers(roomId, accept, opts)

Get all active users from a room

get active users from a room. A user is considered as &#39;active&#39; when his status is &#39;invited&#39; or &#39;accepted&#39; Example: GET /api/rainbow/enduser/v1.0/rooms/5841475f9f4ceb902756326e/users?format&#x3D;full&amp;sortField&#x3D;lastName

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsUsersApi();
var roomId = "roomId_example"; // String | - room unique identifier (like 56f3f51a76e0bf767ed45325)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less user details in response, besides specifics data about room users like (privilege, status and additionDate)    - `small`: userId loginEmail displayName jid_im    - `medium`: userId loginEmail displayName jid_im status additionDate privilege firstName lastName companyId companyName    - `full`: userId loginEmail displayName jid_im status additionDate privilege firstName lastName nickName title jobTitle emails country language timezone companyId companyName roles adminType
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'privilege': "privilege_example", // String | Allows to filter users list on the privilege type provided in this option.
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getRoomActiveUsers(roomId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| - room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less user details in response, besides specifics data about room users like (privilege, status and additionDate)    - &#x60;small&#x60;: userId loginEmail displayName jid_im    - &#x60;medium&#x60;: userId loginEmail displayName jid_im status additionDate privilege firstName lastName companyId companyName    - &#x60;full&#x60;: userId loginEmail displayName jid_im status additionDate privilege firstName lastName nickName title jobTitle emails country language timezone companyId companyName roles adminType | [optional] 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **privilege** | **String**| Allows to filter users list on the privilege type provided in this option. | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetRoomActiveUsersSuccess**](GetRoomActiveUsersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserRoomData

> GetUserRoomDataSuccess getUserRoomData(roomId, userId, accept)

Get a user room data

If the logged in user is not register into the wanted room , a forbidden error is sent.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsUsersApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f42c1914e2a8a91b99e595)
var userId = "userId_example"; // String | User unique identifier
var accept = "accept_example"; // String | application/json
apiInstance.getUserRoomData(roomId, userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **userId** | **String**| User unique identifier | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserRoomDataSuccess**](GetUserRoomDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeUserFromRoom

> RemoveUserFromRoomSuccess removeUserFromRoom(roomId, userId, accept)

Delete a user from a room

If the logged in user is not registered (declared in the room and &#x60;status&#x60; is not &#x60;deleted&#x60;) into the wanted room, and if he hasn&#39;t a &#39;moderator&#39; privilege, a (403) forbidden error is sent.   If the user to update is not registered, a (404) conflict error is sent.   A registered user can delete itself resulting in having it&#39;s &#x60;status&#x60; being &#x60;deleted&#x60;. A moderator user can delete itself resulting in having it&#39;s &#x60;status&#x60; being &#x60;deleted&#x60;, but only if another moderator exist to take on. A moderator user can delete another user resulting in deleting the user from the room (not simply &#x60;status&#x60; being &#x60;deleted&#x60;).

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsUsersApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)    A message stanza with the new status is sent to all room users.        ```html <message           from= 'a portal client connected'           to='room user jid'           id='lh2bs617'           type='management'           xmlns: 'jabber :client' >           <room               roomid : mongoid of the room               roomjid: jid of the room               userjid : jid of the modified user               status : new status of the modified user           />    </message> ```    A message stanza is sent to room users as a private room message. This allow clients to display notifications:        ```html <message           from='room jid'           to='room jid/user's nic'>            <x body  user's deleted display name has left the bubble </body&gt            <x event xmlns='jabber:iq:configuration'                 name: 'leave'                 jid: 'deleted user's jid' />    </message> ``` 
var accept = "accept_example"; // String | application/json
apiInstance.removeUserFromRoom(roomId, userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595)    A message stanza with the new status is sent to all room users.        &#x60;&#x60;&#x60;html &lt;message           from&#x3D; &#39;a portal client connected&#39;           to&#x3D;&#39;room user jid&#39;           id&#x3D;&#39;lh2bs617&#39;           type&#x3D;&#39;management&#39;           xmlns: &#39;jabber :client&#39; &gt;           &lt;room               roomid : mongoid of the room               roomjid: jid of the room               userjid : jid of the modified user               status : new status of the modified user           /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    A message stanza is sent to room users as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s deleted display name has left the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;leave&#39;                 jid: &#39;deleted user&#39;s jid&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;  | 
 **accept** | **String**| application/json | 

### Return type

[**RemoveUserFromRoomSuccess**](RemoveUserFromRoomSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserData

> UpdateUserDataSuccess updateUserData(roomId, userId, body)

Change a user data

If the logged in user is not registered (declared in the room and &#x60;status&#x60; is not &#x60;deleted&#x60;) into the wanted room, and if he hasn&#39;t a &#39;moderator&#39; privilege, a (403) forbidden error is sent.   If the user to update is not registered, a (404) conflict error is sent.   If the body parameter is missed, a (400) bad request error is sent.   If the body parameter is set to &#39;empty string&#39;, the default privilege &#39;user&#39; is set.   The logged in user can&#39;t update himself. As a result, a &#39;moderator&#39; can&#39;t be downgraded to &#39;user&#39;.    Promoting a user with the privilege &#39;moderator&#39; is sometimes barred (403) (feature BUBBLE_PROMOTE_MEMBER)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsUsersApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.UpdateUserData(); // UpdateUserData | 
apiInstance.updateUserData(roomId, userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**UpdateUserData**](UpdateUserData.md)|  | 

### Return type

[**UpdateUserDataSuccess**](UpdateUserDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

