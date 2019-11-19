# RainbowEnduserPortal.JoinCompanyInvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptJoinCompanyInvitation**](JoinCompanyInvitationsApi.md#acceptJoinCompanyInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId}/accept | Accept a join company invitation
[**declineJoinCompanyInvitation**](JoinCompanyInvitationsApi.md#declineJoinCompanyInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId}/decline | Decline a join company invitation
[**getJoinCompanyInvitationById**](JoinCompanyInvitationsApi.md#getJoinCompanyInvitationById) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId} | Get a join company invitation
[**getJoinCompanyInvitations**](JoinCompanyInvitationsApi.md#getJoinCompanyInvitations) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations | Get all join company invitations



## acceptJoinCompanyInvitation

> AcceptJoinCompanyInvitationSuccess acceptJoinCompanyInvitation(userId, invitationId)

Accept a join company invitation

This API allows to accept a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       To accept the join company invitation, the user must be in default company (may evolve in the future)       When the user accepts a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Once accepted, invited user&#39;s &#x60;companyId&#x60; and &#x60;companyName&#x60; data are updated.    User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60; If invitation has flag invitedToBeCompanyAdmin set to true, user will join this company as company_admin (added role admin + adminType company_admin)    If invitation has flag invitedToBeBpAdmin set to true, user will join this company as bp_admin (added role bp_admin)       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/accept   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyInvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.acceptJoinCompanyInvitation(userId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**AcceptJoinCompanyInvitationSuccess**](AcceptJoinCompanyInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## declineJoinCompanyInvitation

> DeclineJoinCompanyInvitationSuccess declineJoinCompanyInvitation(userId, invitationId)

Decline a join company invitation

This API allows to decline a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Invitation must be pending (otherwise error 409 is returned).       When the user declines a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/decline   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyInvitationsApi();
var userId = "userId_example"; // String | User unique identifier
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.declineJoinCompanyInvitation(userId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**DeclineJoinCompanyInvitationSuccess**](DeclineJoinCompanyInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompanyInvitationById

> GetJoinCompanyInvitationByIdSuccess getJoinCompanyInvitationById(userId, invitationId, accept)

Get a join company invitation

This API allows to get a join company invitation received by the user using its invitationId (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6  [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyInvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompanyInvitationById(userId, invitationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetJoinCompanyInvitationByIdSuccess**](GetJoinCompanyInvitationByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompanyInvitations

> GetJoinCompanyInvitationsSuccess getJoinCompanyInvitations(userId, accept, opts)

Get all join company invitations

This API allows to list all join company invitations received by the user (invitations sent by admins using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       When the user is invited to join a company by an administrator, he receives the following XMPP message to notify him that a join company invitation has been received:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;pending    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;accepted&amp;status&#x3D;auto-accepted   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyInvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all join company invitations having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less invitation details in response.    - `small`: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - `medium`: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - `full`: all join company invitation fields
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getJoinCompanyInvitations(userId, accept, opts).then(function(data) {
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
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **status** | **String**| List all join company invitations having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less invitation details in response.    - &#x60;small&#x60;: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - &#x60;medium&#x60;: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - &#x60;full&#x60;: all join company invitation fields | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetJoinCompanyInvitationsSuccess**](GetJoinCompanyInvitationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

