# RainbowEnduserPortal.ConversationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConversation**](ConversationsApi.md#createConversation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/conversations | Create a conversation
[**deleteConversation**](ConversationsApi.md#deleteConversation) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId} | Delete a conversation
[**getConversations**](ConversationsApi.md#getConversations) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/conversations | Get all conversations
[**markAllUnreadConversationAsRead**](ConversationsApi.md#markAllUnreadConversationAsRead) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}/markallread | Mark all unread messages in the conversation as read
[**sendConversationContentByEmail**](ConversationsApi.md#sendConversationContentByEmail) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}/downloads | Download a conversation
[**updateConversation**](ConversationsApi.md#updateConversation) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId} | Update a conversation



## createConversation

> CreateConversationSuccess createConversation(userId, body)

Create a conversation

This API can be used to create a conversation for a given user with either another rainbow user, a room or with a bot. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Tree kinds of conversations are managed: user to user, user to room and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or to a bot.       If the conversation is successfully created, http code 201 is returned. If the conversation already exists, http code 200 is returned.    Peer data and lastMessage information are returned in response (lastMessage information can exist if conversation with messages is deleted and then re-created later).       Example: POST http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5).
var body = new RainbowEnduserPortal.CreateConversation(); // CreateConversation | 
apiInstance.createConversation(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5). | 
 **body** | [**CreateConversation**](CreateConversation.md)|  | 

### Return type

[**CreateConversationSuccess**](CreateConversationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConversation

> DeleteConversationSuccess deleteConversation(userId, conversationId, accept)

Delete a conversation

This API can be used to delete a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is deleted using this API, all user&#39;s XMPP resources will receive the following message indicating them that a conversation has been deleted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;conversation id&#x3D;\&quot;573f1883f8a74ed086816789\&quot; action&#x3D;\&quot;delete\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       Example: DELETE http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations/56d85476ebe1b48b115d4311

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
var conversationId = "conversationId_example"; // String | Conversation unique identifier (like 56d0277a0261b53142a5c000).
var accept = "accept_example"; // String | application/json
apiInstance.deleteConversation(userId, conversationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5) | 
 **conversationId** | **String**| Conversation unique identifier (like 56d0277a0261b53142a5c000). | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteConversationSuccess**](DeleteConversationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversations

> GetConversationsSuccess getConversations(userId, accept)

Get all conversations

This API can be used to retrieve the list of user&#39;s conversations. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a client starts, it has to get all conversations using this API.    It is up to clients to manage the set of conversations currently active (when a new conversation is initiated or a conversation is deleted by the user) using the conversations APIs [POST /api/rainbow/enduser/v1.0/users/:userId/conversations][0] and [DELETE /api/rainbow/enduser/v1.0/users/:userId/conversations][1].       This API calls XMPP server for each conversation to get the last IM with the peerId, the date of the last message, the number of unread messages, the number of unreceived messages and the call information if last message is a call log. If no xmpp data has been found, lastMessageText is set to \&quot;\&quot;, lastMessageDate is set to null, unreceivedMessageNumber and unreadMessageNumber are set to 0.       The conversation list is not sorted by the API. Each client has to handle conversations sorting: according to creationDate, lastMessageDate field, call log and presence state, it should be able to rank conversations in the desired order.       Three kinds of conversations are managed: user to user, user to room, and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or a bot.       Example: GET http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations  [0]: #api-enduser_conversations-enduser_users_PostConversations [1]: #api-enduser_conversations-enduser_users_DeleteConversations

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
apiInstance.getConversations(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **accept** | **String**| application/json | 

### Return type

[**GetConversationsSuccess**](GetConversationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markAllUnreadConversationAsRead

> MarkAllUnreadConversationAsReadSuccess markAllUnreadConversationAsRead(userId, conversationId)

Mark all unread messages in the conversation as read

This API can be used to mark all unread messages in a conversation as read. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
var conversationId = "conversationId_example"; // String | Conversation unique identifier (like 56d0277a0261b53142a5c000).
apiInstance.markAllUnreadConversationAsRead(userId, conversationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5) | 
 **conversationId** | **String**| Conversation unique identifier (like 56d0277a0261b53142a5c000). | 

### Return type

[**MarkAllUnreadConversationAsReadSuccess**](MarkAllUnreadConversationAsReadSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendConversationContentByEmail

> SendConversationContentByEmailSuccess sendConversationContentByEmail(userId, conversationId)

Download a conversation

This API can be used to backup a conversation between a rainbow user and another one, or between a user and a room. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)   * Two kinds of conversations are allowed: user to user, user to room. User to bot is not allowed yet. * An email is sent to the endUser email address.  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
var conversationId = "conversationId_example"; // String | Conversation unique identifier (like 56d0277a0261b53142a5c000).
apiInstance.sendConversationContentByEmail(userId, conversationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5) | 
 **conversationId** | **String**| Conversation unique identifier (like 56d0277a0261b53142a5c000). | 

### Return type

[**SendConversationContentByEmailSuccess**](SendConversationContentByEmailSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateConversation

> UpdateConversationSuccess updateConversation(userId, conversationId, body)

Update a conversation

This API can be used to update a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is updated, all user&#39;s XMPP resources will receive the following message, containing the up-to-date conversation data:        &#x60;&#x60;&#x60;html &lt;﻿message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;d7601d6d-30a4-4adc-86be-42705a01f766_3\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;425fc895cac04b079261cee2fdc4f8ad@opentouch.cloud\&quot;            xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;﻿no-store xmlns&#x3D;\&quot;urn:xmpp:hints\&quot;/&gt;        &lt;conversation id&#x3D;\&quot;56d0000a0261b53142a5c022\&quot; action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;peerId&gt;56d0277a0261b53142a5c000&lt;/peerId&gt;            &lt;type&gt;user&lt;/type&gt;            &lt;mute&gt;false&lt;/mute&gt;            &lt;isFavorite&gt;true&lt;/mute&gt;        &lt;/conversation&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       For legacy reasons, when a conversation is muted/unmuted using this API, all user&#39;s XMPP resources will also receive the following message indicating them that a conversation has been muted/unmuted:    Mute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;mute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; Unmute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;unmute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ConversationsApi();
var userId = "userId_example"; // String | User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
var conversationId = "conversationId_example"; // String | Conversation unique identifier (like 56d0277a0261b53142a5c000).
var body = new RainbowEnduserPortal.UpdateConversation(); // UpdateConversation | 
apiInstance.updateConversation(userId, conversationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5) | 
 **conversationId** | **String**| Conversation unique identifier (like 56d0277a0261b53142a5c000). | 
 **body** | [**UpdateConversation**](UpdateConversation.md)|  | 

### Return type

[**UpdateConversationSuccess**](UpdateConversationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

