# RainbowAdminPortal.LinkEcToBpInvitationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminPostAcceptLinkEcToBpInvitation**](LinkEcToBpInvitationsApi.md#adminPostAcceptLinkEcToBpInvitation) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/accept | Accept an invitation
[**adminPostDeclineLinkEcToBpInvitation**](LinkEcToBpInvitationsApi.md#adminPostDeclineLinkEcToBpInvitation) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/decline | Decline an invitation
[**adminPostLinkEcToBpInvite**](LinkEcToBpInvitationsApi.md#adminPostLinkEcToBpInvite) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations | Create an invitation to link EC to BP
[**getLinkECToBPInvitations**](LinkEcToBpInvitationsApi.md#getLinkECToBPInvitations) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations | Get all invitations
[**getLinkECToBPInviteById**](LinkEcToBpInvitationsApi.md#getLinkECToBPInviteById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId} | Get an invitation
[**putCancelLinkEcToBpInviteById**](LinkEcToBpInvitationsApi.md#putCancelLinkEcToBpInviteById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/cancel | Cancel an invitation
[**resendLinkEcToBpInviteById**](LinkEcToBpInvitationsApi.md#resendLinkEcToBpInviteById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/re-send | Re-send an invitation



## adminPostAcceptLinkEcToBpInvitation

> AdminPostAcceptLinkEcToBpInvitationSuccess adminPostAcceptLinkEcToBpInvitation(companyId, invitationId)

Accept an invitation

This API allows to accept an invitation received by company admins of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise accept request will be rejected with a 409 Conflict error       The &#x60;companyId&#x60; provided in URL should be the End Customer companyId. Otherwise, accept request will be rejected with a 400 Bad Request error.       Once accepted, invited company&#39;s &#x60;bpId&#x60; is updated with the id of the BP company.    If company was invited to be BP IR (invitedToBeBpIr&#x3D;true), invited company&#39;s &#x60;isBP&#x60; and &#x60;bpType&#x60; are updated to true and &#x60;IR&#x60;.    Also, if company was invited to be BP IR, if admin that accepts invitation is only &#x60;company_admin&#x60; of the invited company, he will be promoted to &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; of this company.       When a end customer company admin accepts an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobpinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39;       status&#x3D;&#39;accepted&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/accept   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.adminPostAcceptLinkEcToBpInvitation(companyId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**AdminPostAcceptLinkEcToBpInvitationSuccess**](AdminPostAcceptLinkEcToBpInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostDeclineLinkEcToBpInvitation

> AdminPostDeclineLinkEcToBpInvitationSuccess adminPostDeclineLinkEcToBpInvitation(companyId, invitationId)

Decline an invitation

This API allows to decline an invitation received by company administrators of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise decline request will be rejected with a 409 Conflict error       The &#x60;companyId&#x60; provided in URL should be the End Customer companyId. Otherwise, decline request will be rejected with a 400 Bad Request error.       When a end customer company admin declines an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobpinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39;       status&#x3D;&#39;declined&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/decline   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.adminPostDeclineLinkEcToBpInvitation(companyId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**AdminPostDeclineLinkEcToBpInvitationSuccess**](AdminPostDeclineLinkEcToBpInvitationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostLinkEcToBpInvite

> AdminPostLinkEcToBpInviteSuccess adminPostLinkEcToBpInvite(companyId, body)

Create an invitation to link EC to BP

This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;) to create an invitation to link an End customer company to a BP company.       All company administrators of the provided end customer and BP companyId are notified about the created invitation with an email notification (only end customer company admins) and with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobpinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.AdminPostLinkEcToBpInvite(); // AdminPostLinkEcToBpInvite | 
apiInstance.adminPostLinkEcToBpInvite(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**AdminPostLinkEcToBpInvite**](AdminPostLinkEcToBpInvite.md)|  | 

### Return type

[**AdminPostLinkEcToBpInviteSuccess**](AdminPostLinkEcToBpInviteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLinkECToBPInvitations

> GetLinkECToBPInvitationsSuccess getLinkECToBPInvitations(companyId, accept, opts)

Get all invitations

This API can be used by &#x60;admin&#x60; users to list invitations they sent/received to link End customer company to BP company.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status&#x3D;pending    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status&#x3D;accepted&amp;status&#x3D;auto-accepted

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'status': "status_example", // String | List all invitations having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less invitation details in response. 'small': '_id invitingCompanyId invitedCompanyId invitingAdminId status', 'medium': '_id invitingCompanyId invitingCompanyName invitedCompanyId invitedCompanyName invitingAdminId invitingAdminLoginEmail status lastNotificationDate invitationDate acceptationDate declinationDate', // All fields 'full': all fields
  'limit': 3.4, // Number | Allow to specify the number of invitations to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort invitation list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting invitation list.
};
apiInstance.getLinkECToBPInvitations(companyId, accept, opts).then(function(data) {
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
 **status** | **String**| List all invitations having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less invitation details in response. &#39;small&#39;: &#39;_id invitingCompanyId invitedCompanyId invitingAdminId status&#39;, &#39;medium&#39;: &#39;_id invitingCompanyId invitingCompanyName invitedCompanyId invitedCompanyName invitingAdminId invitingAdminLoginEmail status lastNotificationDate invitationDate acceptationDate declinationDate&#39;, // All fields &#39;full&#39;: all fields | [optional] 
 **limit** | **Number**| Allow to specify the number of invitations to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort invitation list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting invitation list. | [optional] 

### Return type

[**GetLinkECToBPInvitationsSuccess**](GetLinkECToBPInvitationsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLinkECToBPInviteById

> GetLinkECToBPInviteByIdSuccess getLinkECToBPInviteById(companyId, invitationId, accept)

Get an invitation

This API can be used by &#x60;admin&#x60; users to get an invitation he sent/received to link an end customer company to a BP.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getLinkECToBPInviteById(companyId, invitationId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetLinkECToBPInviteByIdSuccess**](GetLinkECToBPInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putCancelLinkEcToBpInviteById

> PutCancelLinkEcToBpInviteByIdSuccess putCancelLinkEcToBpInviteById(companyId, invitationId)

Cancel an invitation

This API can be used by BP admins to cancel an invitation already sent to link an EC company to their BP company.       Invitation must be pending, declined or failed (otherwise error 409 is returned).       The &#x60;companyId&#x60; provided in URL should be the BP companyId. Otherwise, cancel request will be rejected with a 400 Bad Request error.       Once invitation has been canceled, it will not be possible to accept or decline it anymore.       All company admins are notified with an XMPP message that the invitation has been canceled:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobpinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;canceled&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/cancel

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.putCancelLinkEcToBpInviteById(companyId, invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**PutCancelLinkEcToBpInviteByIdSuccess**](PutCancelLinkEcToBpInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendLinkEcToBpInviteById

> ResendLinkEcToBpInviteByIdSuccess resendLinkEcToBpInviteById(companyId, invitationId, body)

Re-send an invitation

This API can be used by BP admins to re-send an invitation already sent to link an EC company to their BP company.       If invitation is canceled or declined or failed, it is set back to pending and then re-sent.    If invitation is accepted or auto-accepted, error 409 is returned.       The &#x60;companyId&#x60; provided in URL should be the BP companyId. Otherwise, re-send request will be rejected with a 400 Bad Request error.       Invited company administrators receive a new email notification.    All company admins are notified with an XMPP message that the invitation has been re-sent:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobpinvite action&#x3D;\&quot;re-send\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/re-send

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var invitationId = "invitationId_example"; // String | Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
var body = new RainbowAdminPortal.ResendLinkEcToBpInviteById(); // ResendLinkEcToBpInviteById | 
apiInstance.resendLinkEcToBpInviteById(companyId, invitationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **invitationId** | **String**| Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6) | 
 **body** | [**ResendLinkEcToBpInviteById**](ResendLinkEcToBpInviteById.md)|  | 

### Return type

[**ResendLinkEcToBpInviteByIdSuccess**](ResendLinkEcToBpInviteByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

