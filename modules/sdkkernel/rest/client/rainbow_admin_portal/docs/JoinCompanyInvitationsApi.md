# RainbowAdminPortal.JoinCompanyInvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminPostJoinCompanyInvite**](JoinCompanyInvitationsApi.md#adminPostJoinCompanyInvite) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations | Create a join company invitation
[**getJoinCompanyInvitations**](JoinCompanyInvitationsApi.md#getJoinCompanyInvitations) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations | Get all join company invitations
[**getJoinCompanyInviteById**](JoinCompanyInvitationsApi.md#getJoinCompanyInviteById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations/{invitationId} | Get a join company invitation
[**putCancelJoinCompanyInviteById**](JoinCompanyInvitationsApi.md#putCancelJoinCompanyInviteById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations/{invitationId}/cancel | Cancel a join company invitation
[**putFailedJoinCompanyInviteById**](JoinCompanyInvitationsApi.md#putFailedJoinCompanyInviteById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations/{invitationId}/failed | Tag as failed a join company invitation
[**resendJoinCompanyInviteById**](JoinCompanyInvitationsApi.md#resendJoinCompanyInviteById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/invitations/{invitationId}/re-send | Re-send a join company invitation



## adminPostJoinCompanyInvite

> AdminPostJoinCompanyInviteSuccess adminPostJoinCompanyInvite(companyId, body)

Create a join company invitation

This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;, &#x60;bp_finance&#x60;, &#x60;organization_admin&#x60;, &#x60;company_admin&#x60;)    This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;, &#x60;bp_finance&#x60;, &#x60;organization_admin&#x60;, &#x60;company_admin&#x60;) users to create a join company invitation to a Rainbow user for a given company.       &gt; &#x60;superadmin&#x60; can invite users to join all Rainbow companies    &gt;    &gt; &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; can only invite users to join their own company or End Customer companies for which their company is the BP company.    &gt; &#x60;organization_admin&#x60; can only invite users to join companies being under their organisation.    &gt; &#x60;company_admin&#x60; can only invite users to join their company.       ### Users can be invited:    #### by &#x60;email&#x60;    * by &#x60;email&#x60;:    * if no user is found with the provided email as loginEmail:      * an invitation to create his account in Rainbow and join the company is sent to the provided email address.     * User will be able to create his account using API [POST /api/rainbow/enduser/v1.0/users/self-register][0].     * InvitationId from the email link should be provided as joinCompanyInvitationId parameter of this API.    In that case, the join company invitation will be accepted and the user is created in the inviting company.     * If joinCompanyInvitationId is not provided, if the user registers with the same loginEmail than the join company invitation email, the join company invitation is auto-accepted and the user is created directly in the inviting company.     * If previous join company invitation has already been sent for another company to this email, the previous one is deleted and is replaced by a new join company invitation for the provided companyId.    In this case, admins of the other company are notified with the following XMPP message:         &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;delete\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39;       status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;   * if the loginEmail of a Rainbow user matches the provided email:      * user can only be invited if he is in the default company (otherwise an error is thrown)     * an invitation to join admin&#39;s company is sent by email and with an XMPP message:         &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;       status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;           * It is possible for an existing Rainbow user to be invited by several admins of different companies.     * Invited user is able to list join company invitations he received using API [GET /api/rainbow/enduser/v1.0/users/:userId/join-companies/invitations][1]     * Invited user is able to accept a join company invitation using API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/invitations/:invitationId/accept][2]     * Invited user is able to decline a join company invitation using API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/invitations/:invitationId/decline][3] * by Rainbow user id (&#x60;invitedUserId&#x60;):    * if no user is found with the provided invitedUserId, an error 404 is returned   * otherwise, an invitation to join admin&#39;s company is sent by email and with an XMPP message.    Same documentation than existing user invited by email apply (see above).     For every use cases detailed above, all company administrators of the provided companyId are notified about the join company request creation with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations  [0]: /enduser/#api-users-enduser_SelfRegisterUsers [1]: #api-join_company_invitations-enduser_GetJoinCompanyInvitations [2]: #api-join_company_invitations-enduser_PostAcceptJoinCompanyInvitation [3]: #api-join_company_invitations-enduser_PostDeclineJoinCompanyInvitation

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.AdminPostJoinCompanyInvite(); // AdminPostJoinCompanyInvite | 
apiInstance.adminPostJoinCompanyInvite(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**AdminPostJoinCompanyInvite**](AdminPostJoinCompanyInvite.md)|  | 

### Return type

[**AdminPostJoinCompanyInviteSuccess**](AdminPostJoinCompanyInviteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getJoinCompanyInvitations

> GetJoinCompanyInvitationsSuccess getJoinCompanyInvitations(companyId, accept, opts)

Get all join company invitations

This API can be used by company &#x60;admin&#x60; users to list invitations he sent to Rainbow users so that they join his company.       Join company invitations allow users to join the related company using:   * API [POST /api/rainbow/enduser/v1.0/users/self-register][0] if invited email does not exist in Rainbow, * API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/invitations/:invitationId/accept][1] if invited email matched an existing Rainbow user&#39;s loginEmail.     Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations?status&#x3D;pending    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations?status&#x3D;accepted&amp;status&#x3D;auto-accepted  [0]: /enduser/#api-users-enduser_SelfRegisterUsers [1]: /enduser/#api-join_company_invitations-enduser_PostAcceptJoinCompanyInvitation

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'status': "status_example", // String | List all join company invitations having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less invitation details in response.    - `small`: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - `medium`: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - `full`: all join company invitation fields
  'limit': 3.4, // Number | Allow to specify the number of invitations to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort invitation list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting invitation list.
};
apiInstance.getJoinCompanyInvitations(companyId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 
 **status** | **String**| List all join company invitations having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less invitation details in response.    - &#x60;small&#x60;: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - &#x60;medium&#x60;: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - &#x60;full&#x60;: all join company invitation fields | [optional] 
 **limit** | **Number**| Allow to specify the number of invitations to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort invitation list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting invitation list. | [optional] 

### Return type

[**GetJoinCompanyInvitationsSuccess**](GetJoinCompanyInvitationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompanyInviteById

> GetJoinCompanyInviteByIdSuccess getJoinCompanyInviteById(companyId, invitationId, accept)

Get a join company invitation

This API can be used by company &#x60;admin&#x60; users to get a join company invitation he sent to a Rainbow user so that he join his company.       Join company invitations allow users to join the related company using:   * API [POST /api/rainbow/enduser/v1.0/users/self-register][0] if invited email does not exist in Rainbow, * API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/invitations/:invitationId/accept][1] if invited email matched an existing Rainbow user&#39;s loginEmail.     Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations/5819ed7c9547b313509237d6  [0]: /enduser/#api-users-enduser_SelfRegisterUsers [1]: /enduser/#api-join_company_invitations-enduser_PostAcceptJoinCompanyInvitation

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompanyInviteById(companyId, invitationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetJoinCompanyInviteByIdSuccess**](GetJoinCompanyInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putCancelJoinCompanyInviteById

> PutCancelJoinCompanyInviteByIdSuccess putCancelJoinCompanyInviteById(companyId, invitationId, body)

Cancel a join company invitation

This API can be used by company &#x60;admin&#x60; users to cancel a join company invitation already sent for his company to a given user / email.       Invitation must be pending, declined or failed (otherwise error 409 is returned).       Once invitation has been canceled, user won&#39;t be able to accept or decline it anymore.       All company admins are notified with an XMPP message that the invitation has been canceled:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;canceled&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       User (if he exist) is notified with an XMPP message that the invitation has been canceled:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;canceled&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations/5819ed7c9547b313509237d6/cancel

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
var body = new RainbowAdminPortal.PutCancelJoinCompanyInviteById(); // PutCancelJoinCompanyInviteById | 
apiInstance.putCancelJoinCompanyInviteById(companyId, invitationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **body** | [**PutCancelJoinCompanyInviteById**](PutCancelJoinCompanyInviteById.md)|  | 

### Return type

[**PutCancelJoinCompanyInviteByIdSuccess**](PutCancelJoinCompanyInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putFailedJoinCompanyInviteById

> PutFailedJoinCompanyInviteByIdSuccess putFailedJoinCompanyInviteById(companyId, invitationId)

Tag as failed a join company invitation

This API can be used by a &#x60;superadmin&#x60; to tag an invitation sent by companies &#x60;admin&#x60; as &#39;failed&#39;.    This API can only be used by a superadmin    Only invitations with the status &#39;pending&#39; can be tagged.       Inviting admin is notified with an XMPP message that the invitation has been failed.    The XMPP message is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot;      type&#x3D;&#39;sent&#39; status&#x3D;&#39;failed&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;    

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.putFailedJoinCompanyInviteById(companyId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**PutFailedJoinCompanyInviteByIdSuccess**](PutFailedJoinCompanyInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendJoinCompanyInviteById

> ResendJoinCompanyInviteByIdSuccess resendJoinCompanyInviteById(companyId, invitationId, body)

Re-send a join company invitation

This API can be used by company &#x60;admin&#x60; users to re-send a join company invitation already sent for his company to a given user / email.       If invitation is canceled or declined or failed, it is set back to pending and then re-sent.    If invitation is accepted or auto-accepted, error 409 is returned.       Invited user receives a new email notification.    All company admins are notified with an XMPP message that the invitation has been re-sent:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;re-send\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       User (if he exist) is notified with an XMPP message that the invitation has been re-sent:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyinvite action&#x3D;\&quot;re-send\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/invitations/5819ed7c9547b313509237d6/re-send

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
var body = new RainbowAdminPortal.ResendJoinCompanyInviteById(); // ResendJoinCompanyInviteById | 
apiInstance.resendJoinCompanyInviteById(companyId, invitationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Join company invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **body** | [**ResendJoinCompanyInviteById**](ResendJoinCompanyInviteById.md)|  | 

### Return type

[**ResendJoinCompanyInviteByIdSuccess**](ResendJoinCompanyInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

