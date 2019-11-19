# RainbowEnduserPortal.GroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToGroup**](GroupsApi.md#addUserToGroup) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/groups/{groupId}/users/{userIdToAdd} | Add a user in a group
[**createGroup**](GroupsApi.md#createGroup) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/groups | Create a group
[**deleteGroupById**](GroupsApi.md#deleteGroupById) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/groups/{groupId} | Delete a group
[**getUserGroups**](GroupsApi.md#getUserGroups) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/groups | Get all user&#39;s groups
[**getUserGroupsById**](GroupsApi.md#getUserGroupsById) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/groups/{groupId} | Get a group
[**removeUserFromGroup**](GroupsApi.md#removeUserFromGroup) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/groups/{groupId}/users/{userIdToRemove} | Remove a user from a group
[**updateGroupById**](GroupsApi.md#updateGroupById) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/groups/{groupId} | Update a group



## addUserToGroup

> AddUserToGroupSuccess addUserToGroup(userIdToAdd, userId, groupId)

Add a user in a group

This API can be used to add a user in a group.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a user is added in a group using this API, all user&#39;s XMPP resources will receive the following message indicating them that a user has been added in a group:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;group id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;create\&quot; scope&#x3D;\&quot;user\&quot; userId&#x3D;\&quot;574ff5153448af6c2940f908\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups/57b44e9c0c32e0b425252f9e/users/574ff5153448af6c2940f908

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userIdToAdd = "userIdToAdd_example"; // String | User unique identifier of the user to add in the group (like 574ff5153448af6c2940f908)
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var groupId = "groupId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.addUserToGroup(userIdToAdd, userId, groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdToAdd** | **String**| User unique identifier of the user to add in the group (like 574ff5153448af6c2940f908) | 
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **groupId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**AddUserToGroupSuccess**](AddUserToGroupSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createGroup

> CreateGroupSuccess createGroup(userId, body)

Create a group

This API can be used to create a group.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a group is created using this API, all user&#39;s XMPP resources will receive the following message indicating them that a group has been created:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;group id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;create\&quot; scope&#x3D;\&quot;group\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.CreateGroup(); // CreateGroup | 
apiInstance.createGroup(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**CreateGroup**](CreateGroup.md)|  | 

### Return type

[**CreateGroupSuccess**](CreateGroupSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroupById

> DeleteGroupByIdSuccess deleteGroupById(userId, groupId, accept)

Delete a group

This API can be used to delete a group.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a group is deleted using this API, all user&#39;s XMPP resources will receive the following message indicating them that a group has been deleted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;group id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;delete\&quot; scope&#x3D;\&quot;group\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: DELETE https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups/57b44e9c0c32e0b425252f9e

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var groupId = "groupId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.deleteGroupById(userId, groupId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **groupId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteGroupByIdSuccess**](DeleteGroupByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserGroups

> GetUserGroupsSuccess getUserGroups(userId, accept, opts)

Get all user&#39;s groups

This API can be used to retrieve the list of user&#39;s groups (i.e. groups having owner field equal to provided userId).    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups?format&#x3D;full&amp;userId&#x3D;574ff5153448af6c2940f908&amp;isFavorite&#x3D;true

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
var opts = {
  'userId2': "userId_example", // String | List all groups having this user in their `users` list
  'isFavorite': true, // Boolean | Allows to filter group list on the isFavorite criterion.
  'format': "format_example", // String | Allows to retrieve more or less group details in response. > - `small`: id, name, isFavorite > - `medium`: id, name, isFavorite, comment, owner, creationDate > - `full`: all group fields
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getUserGroups(userId, accept, opts).then(function(data) {
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
 **userId2** | **String**| List all groups having this user in their &#x60;users&#x60; list | [optional] 
 **isFavorite** | **Boolean**| Allows to filter group list on the isFavorite criterion. | [optional] 
 **format** | **String**| Allows to retrieve more or less group details in response. &gt; - &#x60;small&#x60;: id, name, isFavorite &gt; - &#x60;medium&#x60;: id, name, isFavorite, comment, owner, creationDate &gt; - &#x60;full&#x60;: all group fields | [optional] 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetUserGroupsSuccess**](GetUserGroupsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserGroupsById

> GetUserGroupsByIdSuccess getUserGroupsById(userId, groupId, accept)

Get a group

This API can be used to retrieve a specific user&#39;s groups.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Users being in this group are returned with the following fields: id, firstName, lastName, jid_im, companyId, companyName, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode (fields are fetched from database for each userId being in this group)    For now, loginEmail is returned if the user is in the same company than logged in user, but this field is **DEPRECATED** and will be removed in a future release.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups/57b44e9c0c32e0b425252f9e

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var groupId = "groupId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.getUserGroupsById(userId, groupId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **groupId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserGroupsByIdSuccess**](GetUserGroupsByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeUserFromGroup

> RemoveUserFromGroupSuccess removeUserFromGroup(userIdToRemove, userId, groupId, accept)

Remove a user from a group

This API can be used to remove a user from a group.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a user is removed from a group using this API, all user&#39;s XMPP resources will receive the following message indicating them that a user has been removed from a group:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;group id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;delete\&quot; scope&#x3D;\&quot;user\&quot; userId&#x3D;\&quot;574ff5153448af6c2940f908\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: DELETE https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups/57b44e9c0c32e0b425252f9e/users/574ff5153448af6c2940f908

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userIdToRemove = "userIdToRemove_example"; // String | User unique identifier of the user to remove from the group (like 574ff5153448af6c2940f908)
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var groupId = "groupId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.removeUserFromGroup(userIdToRemove, userId, groupId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdToRemove** | **String**| User unique identifier of the user to remove from the group (like 574ff5153448af6c2940f908) | 
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **groupId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**RemoveUserFromGroupSuccess**](RemoveUserFromGroupSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGroupById

> UpdateGroupByIdSuccess updateGroupById(userId, groupId, body)

Update a group

This API can be used to update a group.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a group is updated using this API, all user&#39;s XMPP resources will receive the following message indicating them that a group has been updated (attributes name and comment are provided according to the updated field):        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;group id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;update\&quot; scope&#x3D;\&quot;group\&quot; name&#x3D;\&quot;Friends\&quot; comment&#x3D;\&quot;Group with by best friends\&quot; isFavorite&#x3D;\&quot;false\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/groups/57b44e9c0c32e0b425252f9e

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.GroupsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var groupId = "groupId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var body = new RainbowEnduserPortal.UpdateGroupById(); // UpdateGroupById | 
apiInstance.updateGroupById(userId, groupId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **groupId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **body** | [**UpdateGroupById**](UpdateGroupById.md)|  | 

### Return type

[**UpdateGroupByIdSuccess**](UpdateGroupByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

