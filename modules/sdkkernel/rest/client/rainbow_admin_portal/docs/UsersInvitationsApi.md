# RainbowAdminPortal.UsersInvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminUsersTagFailed**](UsersInvitationsApi.md#adminUsersTagFailed) | **POST** /api/rainbow/admin/v1.0/users/{userId}/invitations/{invitationId}/failed | Tag as failed a user invitation



## adminUsersTagFailed

> AdminUsersTagFailedSuccess adminUsersTagFailed(userId, invitationId)

Tag as failed a user invitation

This API can be used to tag an invitation sent by another Rainbow user as &#39;failed&#39;.    This API can only be used by a superadmin    Only invitations with the status &#39;pending&#39; and the type &#39;registration&#39; can be tagged.       Inviting user is notified with an XMPP message that the invitation has been failed.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot;      type&#x3D;&#39;sent&#39; status&#x3D;&#39;failed&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Inviting user can know that some invitations are tagged as failed by API [GET /api/rainbow/enduser/v1.0/users/{userId}/invitations/sent(?status&#x3D;pending|accepted|auto-accepted|declined|failed)][0]).  [0]: /enduser/#api-invitations-enduser_users_GetSentInvites

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersInvitationsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var invitationId = "invitationId_example"; // String | Group unique identifier (like 57b44e9c0c32e0b425252f9e)
apiInstance.adminUsersTagFailed(userId, invitationId).then(function(data) {
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

[**AdminUsersTagFailedSuccess**](AdminUsersTagFailedSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

