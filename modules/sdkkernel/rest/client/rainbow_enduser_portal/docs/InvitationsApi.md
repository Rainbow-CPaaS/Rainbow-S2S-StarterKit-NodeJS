# RainbowEnduserPortal.InvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptUserInvitation**](InvitationsApi.md#acceptUserInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId}/accept | Accept a user invitation
[**cancelUserInvitation**](InvitationsApi.md#cancelUserInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId}/cancel | Cancel a user invitation
[**createUserBulkInvitations**](InvitationsApi.md#createUserBulkInvitations) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations/bulk | Create user invitations by bulk
[**createUserInvitation**](InvitationsApi.md#createUserInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations | Create a user invitation
[**declineUserInvitation**](InvitationsApi.md#declineUserInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId}/decline | Decline a user invitation
[**deleteUserInvitation**](InvitationsApi.md#deleteUserInvitation) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId} | Delete a user invitation
[**getAllReceivedInvitation**](InvitationsApi.md#getAllReceivedInvitation) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/invitations/received | Get all user&#39;s received invitations
[**getAllSentInvition**](InvitationsApi.md#getAllSentInvition) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/invitations/sent | Get all user&#39;s sent invitations
[**getUserInvitation**](InvitationsApi.md#getUserInvitation) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId} | Get a user invitation
[**resendUserInvitation**](InvitationsApi.md#resendUserInvitation) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/invitations/{invitationId}/re-send | Re-send a user invitation



## acceptUserInvitation

> AcceptUserInvitationSuccess acceptUserInvitation(userId, invitationId)

Accept a user invitation

This API can be used to accept an invitation sent by another Rainbow user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Once invitation is accepted, invited and inviting user will be in each other roster and will be mutually visible (search API, GET users, GET users/:userId, ...).       Inviting and invited user are both notified with an XMPP message that the invitation has been accepted.    For inviting user, type is &#x60;sent&#x60;.    For invited user, type is &#x60;received&#x60;.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;accepted&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/57cd5922d341df5812bbcb72/accept

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.acceptUserInvitation(userId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**AcceptUserInvitationSuccess**](AcceptUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelUserInvitation

> CancelUserInvitationSuccess cancelUserInvitation(userId, invitationId)

Cancel a user invitation

This API can be used to cancel an invitation sent to a user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Invitation can only be canceled if it is pending.    If invited user exists in Rainbow, he can&#39;t use the canceled invitation anymore to accept inviting user visibility request.    If invited user does not have a Rainbow account, he can still use the invitationId of a canceled invitation to register in Rainbow (this validates his email address) but once registered he won&#39;t be added to invited user&#39;s roster.       Invited user is notified with an XMPP message that the invitation has been canceled.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    If invited user exist in Rainbow, he is also notified that the invitation has been canceled with the following message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/57cd5922d341df5812bbcb72/cancel

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.cancelUserInvitation(userId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**CancelUserInvitationSuccess**](CancelUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createUserBulkInvitations

> CreateUserBulkInvitationsSuccess createUserBulkInvitations(userId, body)

Create user invitations by bulk

This API allows logged in user to send invitations to other users by bulk (up to 100 emails).       The invitations are sent asynchronously. Only synchronous validation is performed on the provided emails (format, ...). The results of this synchronous validation ir returned directly in the response, for all the asynchronous validations the client will not be aware of the errors.    The client will be notified though XMPP notifications for each created invitations.       Same rules applies than for API POST /api/rainbow/enduser/v1.0/users/:userId/invitations, except that only invitation by email is implemented.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.CreateUserBulkInvitations(); // CreateUserBulkInvitations | 
apiInstance.createUserBulkInvitations(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**CreateUserBulkInvitations**](CreateUserBulkInvitations.md)|  | 

### Return type

[**CreateUserBulkInvitationsSuccess**](CreateUserBulkInvitationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserInvitation

> CreateUserInvitationSuccess createUserInvitation(userId, body)

Create a user invitation

This API allows logged in user to invite another user.       At the end of the process, if invited user accepts the invitation, invited user and inviting user will be searchable mutually and will be in each other rosters.       **Note** It&#39;s not possible to invite users having only the role &#x60;guest&#x60;. (CPAAS user)   From **1.53.0**, a user can be embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. It is not a user with the role &#x60;guest&#x60;. This user gets the role &#x60;user&#x60; and the flag &#x60;guestMode&#x60; is set to true, waiting for the user finalizes his account. Besides, his &#x60;visibility&#x60; is &#39;none&#39;. We can&#39;t invite this kind of user to join the logged in network. (HTTP error 403509)   Here are some details about this API and user invitation features.    Users can be invited:   * by &#x60;email&#x60;:    * If the provided email corresponds to the loginEmail of a Rainbow user, a visibility request is sent (if this Rainbow user is not in logged in user roster).      * An InviteUser entry is stored in database (with a generated invitationId).     * The invited user receive an email with a validation link (containing the invitationId).     * The invited user is notified with an XMPP message (containing the invitationId).      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; type&#x3D;&#39;received&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     * The inviting user is notified with an XMPP message (containing the invitationId) (useful for multi-device).      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; type&#x3D;&#39;sent&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     * The list of all visibility requests received by the logged in user (invited user side) can be retrieved with the API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/received(?status&#x3D;pending|accepted|auto-accepted|declined)][0]     * The list of all visibility requests sent by the logged in user (inviting user side) can be retrieved with the API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/sent(?status&#x3D;pending|accepted|auto-accepted|declined)][1]     * The inviting user can re-send a visibility request notification (only by email) using API [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user/:invitationId/re-send][2]     * To accept the visibility request (invited user side), client has to call API [POST /api/rainbow/enduser/v1.0/users/:userId/invitations/:invitationId/accept][3]   Once accepted, invited and inviting user will be in each other roster and will be mutually visible (search API, GET users, GET users/:userId, ...)     * To decline the visibility request (invited user side), client has to call API [POST /api/rainbow/enduser/v1.0/users/:userId/invitations/:invitationId/decline][4]   * If the provided email is not known in Rainbow, an invitation is sent to this email to invite the person to create a Rainbow account      * An InviteUser entry is stored in database (with a generated invitationId).     * The invited user receive an email with a creation link (containing the invitationId).     * The inviting user is notified with an XMPP message (containing the invitationId) (useful for multi-device).      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;create\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     * The list of all visibility requests sent by the logged in user (inviting user side) can be retrieved with the API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/sent(?status&#x3D;pending|accepted|auto-accepted|declined)][1]     * The inviting user can re-send a visibility request notification (only by email) using API [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user/:invitationId/re-send][2]     * To create his Rainbow account, the invited user has to use API \&quot;Self register a user\&quot; ([POST /api/rainbow/enduser/v1.0/users/self-register][5]) * by phoneNumber (&#x60;invitedPhoneNumber&#x60;):    * No match is done on potential existing Rainbow users.   * An InviteUser entry is stored in database (with a generated invitationId).   * No email is sent to invited user. It is **up to clients calling this API to send an SMS to the invited user&#39;s phone** (with the invitationId).   * The inviting user is notified with an XMPP message (containing the invitationId) (useful for multi-device).      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;create\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;   * If the invitedPhoneNumber correspond to a user already existing in Rainbow, he **will not** be able to see the request using the API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/received(?status&#x3D;pending|accepted|auto-accepted|declined)][0], as no match is done between the invitedPhoneNumber and a potential user existing in Rainbow   * The list of all visibility requests sent by the logged in user (inviting user side) can be retrieved with the API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/sent(?status&#x3D;pending|accepted|auto-accepted|declined)][1]   * The inviting user can re-send a visibility request notification done by phoneNumber using API [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user/:invitationId/re-send][2], however it is still **up to client to send an SMS to the invited user&#39;s phone** (the API only updates the field lastNotificationDate). If needed, it is **up to clients to re-send the SMS to the invited user&#39;s phone**.   * To create his Rainbow account, the invited user has to use API \&quot;Self register a user\&quot; using the associated invitationId ([POST /api/rainbow/enduser/v1.0/users/self-register][5]) * by Rainbow user id (&#x60;invitedUserId&#x60;):    * if no user is found with the provided invitedUserId, an error 404 is returned   * otherwise, a visibility request is sent (if this Rainbow user is not in logged in user roster).    Same documentation than existing user invited by email apply (see above).     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/5821f986394c356580c3c86d/invitations  [0]: #api-enduser_invitations-enduser_users_GetReceivedInvites [1]: #api-enduser_invitations-enduser_users_GetSentInvites [2]: #api-enduser_notifications_emails-enduser_ResendInvite [3]: #api-enduser_invitations-enduser_users_AcceptInvites [4]: #api-enduser_invitations-enduser_users_DeclineInvites [5]: #api-enduser_users-enduser_SelfRegisterUsers

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.CreateUserInvitation(); // CreateUserInvitation | 
apiInstance.createUserInvitation(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**CreateUserInvitation**](CreateUserInvitation.md)|  | 

### Return type

[**CreateUserInvitationSuccess**](CreateUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## declineUserInvitation

> DeclineUserInvitationSuccess declineUserInvitation(userId, invitationId)

Decline a user invitation

This API can be used to decline an invitation sent by another Rainbow user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Invited user is notified with an XMPP message that the invitation has been declined.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;declined&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Inviting user is not notified and can&#39;t know that invited user has declined the invitation (it will still be listed as &#x60;pending&#x60; by API [GET /api/rainbow/enduser/v1.0/users/:userId/invitations/sent(?status&#x3D;pending|accepted|auto-accepted|declined)][0]).       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/57cd5922d341df5812bbcb72/decline  [0]: #api-enduser_invitations-enduser_users_GetSentInvites

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.declineUserInvitation(userId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 

### Return type

[**DeclineUserInvitationSuccess**](DeclineUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserInvitation

> DeleteUserInvitationSuccess deleteUserInvitation(userId, invitationId, accept)

Delete a user invitation

This API can be used to delete an invitation sent to/received from another Rainbow user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       User requesting deletion is notified with an XMPP message that the invitation has been deleted.    The XMPP message is the following:   * If the inviting user deletes the invitation:      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; **action&#x3D;\&quot;delete\&quot;** **type&#x3D;&#39;sent&#39;** status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; * If the invited user deletes the invitation:      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; **action&#x3D;\&quot;delete\&quot;** **type&#x3D;&#39;received&#39;** status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Note that the invitation is not deleted on server side, it is simply hidden (the same database entry is used for both inviting and invited users). This allows the invitation to be still available to the other user if only one of the inviting / invited user delete the invitation for himself.       Example: DELETE https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/57cd5922d341df5812bbcb72

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.deleteUserInvitation(userId, invitationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteUserInvitationSuccess**](DeleteUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllReceivedInvitation

> GetAllReceivedInvitationSuccess getAllReceivedInvitation(userId, accept, opts)

Get all user&#39;s received invitations

This API can be used to retrieve the list of invitations received by the user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/received?status&#x3D;pending

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 573b46a305a4c22a19b216ce)
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all invitations having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less invitation details in response. > - `small`: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, status > - `medium`: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, invitingUserEmail, status, invitingDate, acceptationDate, declinationDate > - `full`: all invitation fields
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getAllReceivedInvitation(userId, accept, opts).then(function(data) {
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
 **status** | **String**| List all invitations having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less invitation details in response. &gt; - &#x60;small&#x60;: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, status &gt; - &#x60;medium&#x60;: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, invitingUserEmail, status, invitingDate, acceptationDate, declinationDate &gt; - &#x60;full&#x60;: all invitation fields | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetAllReceivedInvitationSuccess**](GetAllReceivedInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSentInvition

> GetAllSentInvitionSuccess getAllSentInvition(userId, accept, opts)

Get all user&#39;s sent invitations

This API can be used to retrieve the list invitations sent by the user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Inviting user can&#39;t know that invited user has declined the invitation: declined invitations are still listed as &#x60;pending&#x60;.       Example 1: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/sent?status&#x3D;pending    Example 2: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/sent?status&#x3D;accepted&amp;status&#x3D;auto-accepted

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 573b46a305a4c22a19b216ce)
var accept = "accept_example"; // String | application/json
var opts = {
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all invitations having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less invitation details in response. > - `small`: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, status > - `medium`: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, invitingUserEmail, status, invitingDate, acceptationDate, declinationDate > - `full`: all invitation fields
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getAllSentInvition(userId, accept, opts).then(function(data) {
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
 **status** | **String**| List all invitations having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less invitation details in response. &gt; - &#x60;small&#x60;: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, status &gt; - &#x60;medium&#x60;: id, invitedUserId, invitedUserEmail, invitedPhoneNumber, invitingUserId, invitingUserEmail, status, invitingDate, acceptationDate, declinationDate &gt; - &#x60;full&#x60;: all invitation fields | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetAllSentInvitionSuccess**](GetAllSentInvitionSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserInvitation

> GetUserInvitationSuccess getUserInvitation(userId, invitationId, accept)

Get a user invitation

This API can be used to get an invitation sent/received by/from another Rainbow user.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       The user can only retrieve invitations for which he is the inviting user of the invited user.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/invitations/57cd5922d341df5812bbcb72

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var accept = "accept_example"; // String | application/json
apiInstance.getUserInvitation(userId, invitationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserInvitationSuccess**](GetUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendUserInvitation

> ResendUserInvitationSuccess resendUserInvitation(userId, invitationId, body)

Re-send a user invitation

This API can be used to re-send a user invitation which has already been sent.       Logged in user must be the one who sent the invitation (otherwise error 403 is returned).    An invitation can only be re-sent after a given period since last notification (1 hour by default).    If invitation is canceled or failed, it is set back to pending and then re-sent.    If invitation is accepted or auto-accepted, error 409 is returned.    If invitation is declined, it is set back to pending and re-sent if the last notification was sent since a given period (1 week by default).       Users are notified with an XMPP message that the invitation has been re-sent:   * Inviting user side:      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; **action&#x3D;\&quot;re-send\&quot;** **type&#x3D;&#39;sent&#39;** status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; * Invitied user side:      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; **action&#x3D;\&quot;re-send\&quot;** **type&#x3D;&#39;received&#39;** status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;     Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/5821f986394c356580c3c86d/invitations/57cd5922d341df5812bbcb72/re-send

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.InvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
var body = new RainbowEnduserPortal.ResendUserInvitation(); // ResendUserInvitation | 
apiInstance.resendUserInvitation(userId, invitationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **invitationId** | **String**| Group unique identifier (like 57b44e9c0c32e0b425252f9e) | 
 **body** | [**ResendUserInvitation**](ResendUserInvitation.md)|  | 

### Return type

[**ResendUserInvitationSuccess**](ResendUserInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

