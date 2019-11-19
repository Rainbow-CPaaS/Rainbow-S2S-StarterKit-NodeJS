# RainbowEnduserPortal.PresencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptPresenceSharing**](PresencesApi.md#acceptPresenceSharing) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/presences/{presenceReqId}/accept | Accept to share my presence with somebody of my network
[**cancelSubmittedPresenceSharingRequest**](PresencesApi.md#cancelSubmittedPresenceSharingRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/presences/{presenceReqId}/cancel | Cancel a presence request submitted to a user of my network
[**declinePresenceSharingRequest**](PresencesApi.md#declinePresenceSharingRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/presences/{presenceReqId}/decline | Decline to share my presence with somebody of my network
[**getPresenceSharingRequest**](PresencesApi.md#getPresenceSharingRequest) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/presences/{presenceReqId} | Get presence request between two users
[**getReceivedPresenceSharingRequests**](PresencesApi.md#getReceivedPresenceSharingRequests) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/presences/received | Get all presence requests received from users of my network
[**getSentPresenceSharingRequests**](PresencesApi.md#getSentPresenceSharingRequests) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/presences/sent | Get all presence requests sent to users of my network
[**sendPresenceSharingRequest**](PresencesApi.md#sendPresenceSharingRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/presences | Create a presence requests to a users of my network
[**stopPresenceSharing**](PresencesApi.md#stopPresenceSharing) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/presences/{presenceReqId}/interrupt | Stop sharing my presence with somebody of my network



## acceptPresenceSharing

> AcceptPresenceSharingSuccess acceptPresenceSharing(userId, presenceReqId)

Accept to share my presence with somebody of my network

This API can be used to accept the request from another Rainbow user of my network, to share XMPP presence.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Once the proposal is accepted:   * The roster of the two users is updated to take in account the presence sharing. * The presence request is updated in the database * Both users are notified with an XMPP message that the presence sharing has been accepted.    For requesting user, type is &#x60;sent&#x60;.    For requested user, type is &#x60;received&#x60;.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;accepted&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/presences/57cd5922d341df5812bbcb72/accept

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var presenceReqId = "presenceReqId_example"; // String | PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.acceptPresenceSharing(userId, presenceReqId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **presenceReqId** | **String**| PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**AcceptPresenceSharingSuccess**](AcceptPresenceSharingSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelSubmittedPresenceSharingRequest

> CancelSubmittedPresenceSharingRequestSuccess cancelSubmittedPresenceSharingRequest(userId, presenceReqId)

Cancel a presence request submitted to a user of my network

This API can be used by a user to cancel a submitted request to share the XMPP presence with another user of his network.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)   * Presence request can only be canceled when it is pending and belongs to the logged in user. * It is removed in the database * Requesting and requested user are notified with an XMPP message that the presence request has been declined.       Requesting and requested user are notified with an XMPP message that the presence request has been canceled.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    The asked user is also notified that the presence request has been canceled with the following message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/presences/57cd5922d341df5812bbcb72/cancel

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var presenceReqId = "presenceReqId_example"; // String | PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.cancelSubmittedPresenceSharingRequest(userId, presenceReqId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **presenceReqId** | **String**| PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**CancelSubmittedPresenceSharingRequestSuccess**](CancelSubmittedPresenceSharingRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## declinePresenceSharingRequest

> DeclinePresenceSharingRequestSuccess declinePresenceSharingRequest(userId, presenceReqId)

Decline to share my presence with somebody of my network

This API can be used to decline the request from another Rainbow user of my network, to share XMPP presence.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)   * Presence request can only be declined when it is pending and submitted to the logged in user. * It is removed in the database * Requesting and requested user are notified with an XMPP message that the presence request has been declined.    The logged in user is notified that the presence request has been declined (multi-device purpose) with the following message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;declined&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    The requesting user get the message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;declined&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/presences/57cd5922d341df5812bbcb72/decline

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var presenceReqId = "presenceReqId_example"; // String | PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.declinePresenceSharingRequest(userId, presenceReqId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **presenceReqId** | **String**| PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**DeclinePresenceSharingRequestSuccess**](DeclinePresenceSharingRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPresenceSharingRequest

> GetPresenceSharingRequestSuccess getPresenceSharingRequest(userId, presenceReqId, accept)

Get presence request between two users

This API can be used to get a presence request, sent or received, by or from another Rainbow user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       The user can only retrieve presence request for which he is the submitter or the receiver.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/presences/57cd5922d341df5812bbcb72

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var presenceReqId = "presenceReqId_example"; // String | PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.getPresenceSharingRequest(userId, presenceReqId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **presenceReqId** | **String**| PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**GetPresenceSharingRequestSuccess**](GetPresenceSharingRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReceivedPresenceSharingRequests

> GetReceivedPresenceSharingRequestsSuccess getReceivedPresenceSharingRequests(userId, accept, opts)

Get all presence requests received from users of my network

This API can be used to retrieve the list of presence requests received by the user from other users of his network.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)    By default results are sorted by the &#39;requestDate&#39; field.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/5703d4829ccf39843c7ef89b/presences/received?status&#x3D;pending

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 573b46a305a4c22a19b216ce)
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all presence requests having the provided status(es) When the presence request is canceled or declined, it is deleted in the database, then `canceled` an `declined` status are not available.
  'format': "format_example", // String | Allows to retrieve more or less presence request details in response. > - `small`: id, fromUserId, toUserId, status, requestDate > - `medium`: id, fromUserId, toUserId, status, requestDate, acceptationDate > - `full`: all presence request fields
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getReceivedPresenceSharingRequests(userId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 573b46a305a4c22a19b216ce) | 
 **accept** | **String**| application/json | 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **status** | **String**| List all presence requests having the provided status(es) When the presence request is canceled or declined, it is deleted in the database, then &#x60;canceled&#x60; an &#x60;declined&#x60; status are not available. | [optional] 
 **format** | **String**| Allows to retrieve more or less presence request details in response. &gt; - &#x60;small&#x60;: id, fromUserId, toUserId, status, requestDate &gt; - &#x60;medium&#x60;: id, fromUserId, toUserId, status, requestDate, acceptationDate &gt; - &#x60;full&#x60;: all presence request fields | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetReceivedPresenceSharingRequestsSuccess**](GetReceivedPresenceSharingRequestsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSentPresenceSharingRequests

> GetSentPresenceSharingRequestsSuccess getSentPresenceSharingRequests(userId, accept, opts)

Get all presence requests sent to users of my network

This API can be used to retrieve the list of presence requests sent by the user to other users of his network.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)    By default results are sorted by the &#39;requestDate&#39; field.       Example 1: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/sent?status&#x3D;pending

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 573b46a305a4c22a19b216ce)
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all invitations having the provided status(es) When the presence request is canceled or declined, it is deleted in the database, then `canceled` an `declined` status are not available.
  'format': "format_example", // String | Allows to retrieve more or less presence request details in response. > - `small`: id, fromUserId, toUserId, status, requestDate > - `medium`: id, fromUserId, toUserId, status, requestDate, acceptationDate > - `full`: all presence request fields
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getSentPresenceSharingRequests(userId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 573b46a305a4c22a19b216ce) | 
 **accept** | **String**| application/json | 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **status** | **String**| List all invitations having the provided status(es) When the presence request is canceled or declined, it is deleted in the database, then &#x60;canceled&#x60; an &#x60;declined&#x60; status are not available. | [optional] 
 **format** | **String**| Allows to retrieve more or less presence request details in response. &gt; - &#x60;small&#x60;: id, fromUserId, toUserId, status, requestDate &gt; - &#x60;medium&#x60;: id, fromUserId, toUserId, status, requestDate, acceptationDate &gt; - &#x60;full&#x60;: all presence request fields | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetSentPresenceSharingRequestsSuccess**](GetSentPresenceSharingRequestsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendPresenceSharingRequest

> SendPresenceSharingRequestSuccess sendPresenceSharingRequest(userId, body)

Create a presence requests to a users of my network

This API allows logged in user to ask another user of his network to share their XMPP presence.    Requesting and requested user are notified with an XMPP message that the presence request has been submitted.       Requesting user receives the following message.        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;create\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Requested user is also notified that a presence request is pending with the following message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;create\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.SendPresenceSharingRequest(); // SendPresenceSharingRequest | 
apiInstance.sendPresenceSharingRequest(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**SendPresenceSharingRequest**](SendPresenceSharingRequest.md)|  | 

### Return type

[**SendPresenceSharingRequestSuccess**](SendPresenceSharingRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopPresenceSharing

> StopPresenceSharingSuccess stopPresenceSharing(userId, presenceReqId)

Stop sharing my presence with somebody of my network

This API can be used to stop sharing XMPP presence after having accepted the request from another Rainbow user of my network, to share my presence.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Once the proposal is accepted:   * The roster of the two users is updated to take in account the stop of presence sharing. * The presence request is deleted in the database * Both users are notified with an XMPP message that the presence sharing has been interrupted.    For requesting user, type is &#x60;sent&#x60;.    For requested user, type is &#x60;received&#x60;.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;interrupted&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/presences/57cd5922d341df5812bbcb72/accept

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PresencesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var presenceReqId = "presenceReqId_example"; // String | PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.stopPresenceSharing(userId, presenceReqId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **presenceReqId** | **String**| PresenceReq unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**StopPresenceSharingSuccess**](StopPresenceSharingSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

