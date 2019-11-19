# RainbowEnduserPortal.JoinCompanyRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelJoinCompanyRequest**](JoinCompanyRequestsApi.md#cancelJoinCompanyRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/requests/{joinCompanyRequestId}/cancel | Cancel a join company request
[**getJoinCompanyRequestById**](JoinCompanyRequestsApi.md#getJoinCompanyRequestById) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/requests/{joinCompanyRequestId} | Get a join company request
[**getJoinCompanyRequests**](JoinCompanyRequestsApi.md#getJoinCompanyRequests) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/requests | Get all join company requests
[**resendJoinCompanyRequest**](JoinCompanyRequestsApi.md#resendJoinCompanyRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/requests/{joinCompanyRequestId}/re-send | Re-send a join company request
[**sendJoinCompanyRequest**](JoinCompanyRequestsApi.md#sendJoinCompanyRequest) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/join-companies/requests | Request to join a company



## cancelJoinCompanyRequest

> CancelJoinCompanyRequestSuccess cancelJoinCompanyRequest(userId, joinCompanyRequestId)

Cancel a join company request

This API can be used by logged in user to cancel a request to join a company he sent.       Request must be pending or declined (otherwise error 409 is returned).       Once request has been canceled, administrators won&#39;t be able to accept or decline it anymore.       All company admins are notified with an XMPP message that the request has been canceled:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/users/5819e52ccf95fa196aa3f38a/join-companies/requests/5819ed7c9547b313509237d6/cancel

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyRequestsApi();
var userId = "userId_example"; // String | User unique identifier (like 5819e52ccf95fa196aa3f38a)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.cancelJoinCompanyRequest(userId, joinCompanyRequestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 5819e52ccf95fa196aa3f38a) | 
 **joinCompanyRequestId** | **String**| Join company request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**CancelJoinCompanyRequestSuccess**](CancelJoinCompanyRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompanyRequestById

> GetJoinCompanyRequestByIdSuccess getJoinCompanyRequestById(userId, joinCompanyRequestId, accept)

Get a join company request

This API allows to get a join company request sent by the user (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/requests][0]).       This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL).    User must be the one who sent the request (requestingUserId).       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/5819e52ccf95fa196aa3f38a/join-companies/requests/5819ed7c9547b313509237d6  [0]: #api-enduser_join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyRequestsApi();
var userId = "userId_example"; // String | User unique identifier (like 5819e52ccf95fa196aa3f38a)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompanyRequestById(userId, joinCompanyRequestId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 5819e52ccf95fa196aa3f38a) | 
 **joinCompanyRequestId** | **String**| Join company request unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetJoinCompanyRequestByIdSuccess**](GetJoinCompanyRequestByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJoinCompanyRequests

> GetJoinCompanyRequestsSuccess getJoinCompanyRequests(userId, accept, opts)

Get all join company requests

This API allows to list all join company requests sent by the user (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/join-companies/requests][0]).       This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/5819e52ccf95fa196aa3f38a/join-companies/requests  [0]: #api-enduser_join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyRequestsApi();
var userId = "userId_example"; // String | User unique identifier (like 5819e52ccf95fa196aa3f38a)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less requests details in response. > - `small`: id, requestingUserId, requestedCompanyId, status > - `medium`: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, status, requestingDate > - `full`: all request fields
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'status': "status_example", // String | List all join company requests having the provided status(es)
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getJoinCompanyRequests(userId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 5819e52ccf95fa196aa3f38a) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less requests details in response. &gt; - &#x60;small&#x60;: id, requestingUserId, requestedCompanyId, status &gt; - &#x60;medium&#x60;: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, status, requestingDate &gt; - &#x60;full&#x60;: all request fields | [optional] 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **status** | **String**| List all join company requests having the provided status(es) | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetJoinCompanyRequestsSuccess**](GetJoinCompanyRequestsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendJoinCompanyRequest

> ResendJoinCompanyRequestSuccess resendJoinCompanyRequest(userId, joinCompanyRequestId)

Re-send a join company request

This API can be used by logged in user to re-send a request to join a company.       This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL).    User must be in **Default** company and have only &#x60;user&#x60; role.       If request is canceled or declined, it is set back to pending and then re-sent.    If request is accepted or auto-accepted, error 409 is returned.       All company admins will receive a new email notification.    All company admins are notified with an XMPP message that the request has been re-sent:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;re-send\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; status&#x3D;&#39;pending&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/users/5819e52ccf95fa196aa3f38a/join-companies/requests/5819ed7c9547b313509237d6/re-send

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyRequestsApi();
var userId = "userId_example"; // String | User unique identifier (like 5819e52ccf95fa196aa3f38a)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.resendJoinCompanyRequest(userId, joinCompanyRequestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 5819e52ccf95fa196aa3f38a) | 
 **joinCompanyRequestId** | **String**| Join company request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**ResendJoinCompanyRequestSuccess**](ResendJoinCompanyRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendJoinCompanyRequest

> SendJoinCompanyRequestSuccess sendJoinCompanyRequest(userId, body)

Request to join a company

This API allows logged in user to send a request to join a company.       This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL).    User must be in **Default** company and have only &#x60;user&#x60; role.       This API can be called with one of these three parameters, depending of the use case:   * &#x60;requestedCompanyId&#x60;: in the case the company can be found by the user (public company), the user can send the join company request directly using the companyId of the requested company.    In that case, all users having role/admin type company_admin for the requested company will be notified (they will receive an email and a XMPP message (see below)). * &#x60;requestedCompanyAdminId&#x60;: in the case the company can not be found by the user (private company), the user must know the loginEmail of a company_admin of the company he wants to join.    He will first have to invite this company_admin by email (invite user process, see API [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user][0]).    Once the company_admin will be in user&#39;s contact, he will be able to request to join company_admin&#39;s company using company_admin id.    All users having role/admin type company_admin for the requested company_admin&#39;s company will be notified (they will receive an email and a XMPP message (see below)). * &#x60;requestedCompanyLinkId&#x60;: in the case the user received a joinCompanyLink Id from a company admin (generated with [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/links][1]), he can use it to send the join company request to the associated company.    All users having role/admin type company_admin for the company associated to the joinCompanyInvite will be notified (they will receive an email and a XMPP message (see below)).  The XMPP message company_admins receive when a user send a join company request is the following:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_user@openrainbow.com&#39;            to&#x3D;&#39;jid_company_admin@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;create\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; All company&#39;s company_admins will be able to:   * list of all join company requests received for their company with the API [GET /api/rainbow/admin/v1.0/companies/:companyId/join-companies/requests(?status&#x3D;pending|accepted|declined|canceled)][2] * get a given join company request with the API [GET /api/rainbow/admin/v1.0/companies/:companyId/join-companies/requests/:joinCompanyRequestId][3] * accept a join company request using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/requests/:joinCompanyRequestId/accept][4]   Once accepted, requesting user is moved from Default company to the requested company.    The following XMPP message is sent to requesting user:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_user@openrainbow.com&#39;            to&#x3D;&#39;jid_company_admin@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    The following XMPP message is sent to all company&#39;s company_admins (including the administrator who accepted the request if superadmin, organisation_admin or bp_admin):        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_user@openrainbow.com&#39;            to&#x3D;&#39;jid_company_admin@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; * decline a join company request using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/requests/:joinCompanyRequestId/decline][5]   The following XMPP message is sent to requesting user:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_user@openrainbow.com&#39;            to&#x3D;&#39;jid_company_admin@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    The following XMPP message is sent to all company&#39;s company_admins (including the administrator who declined the request if superadmin, organisation_admin or bp_admin):        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_user@openrainbow.com&#39;            to&#x3D;&#39;jid_company_admin@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Once the join company request has been declined, requesting user won&#39;t be able to re-sent a join company request to this company.    Company&#39;s company_admin are able to accept a declined request using accept API.  User requesting to join a company is able to:   * list all join company requests he sent, with their status, using the API [GET /api/rainbow/enduser/v1.0/users/:userId/join-companies/requests(?status&#x3D;pending|accepted|declined)][6] * get a join company request he sent, using the API [GET /api/rainbow/enduser/v1.0/users/:userId/join-companies/requests/:joinCompanyRequestId][7] * re-send a join company request notification to all company&#39;s company_admins (only by email) using API [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user/:invitationId/re-send][8]   [0]: #api-notifications_emails-enduser_InviteByEndUser [1]: /admin/#api-join_companies_links-PostJoinCompaniesLinks [2]: /admin/#api-join_company_requests-GetJoinCompanyRequests [3]: /admin/#api-join_company_requests-GetJoinCompanyRequestById [4]: /admin/#api-join_company_requests-PostAcceptJoinCompanyReq [5]: /admin/#api-join_company_requests-PostDeclineJoinCompanyReq [6]: #api-enduser_join_company-enduser_GetJoinCompanyRequests [7]: #api-enduser_join_company-enduser_GetJoinCompanyRequestById [8]: #api-enduser_notifications_emails-enduser_ResendInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.JoinCompanyRequestsApi();
var userId = "userId_example"; // String | User unique identifier (like 5819e52ccf95fa196aa3f38a)
var body = new RainbowEnduserPortal.SendJoinCompanyRequest(); // SendJoinCompanyRequest | 
apiInstance.sendJoinCompanyRequest(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 5819e52ccf95fa196aa3f38a) | 
 **body** | [**SendJoinCompanyRequest**](SendJoinCompanyRequest.md)|  | 

### Return type

[**SendJoinCompanyRequestSuccess**](SendJoinCompanyRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

