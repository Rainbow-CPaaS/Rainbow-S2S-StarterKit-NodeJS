# RainbowAdminPortal.JoinCompanyRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJoinCompanyRequestById**](JoinCompanyRequestsApi.md#getJoinCompanyRequestById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId} | Get a join company request
[**getJoinCompanyRequests**](JoinCompanyRequestsApi.md#getJoinCompanyRequests) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests | Get all join company requests
[**postAcceptJoinCompanyReq**](JoinCompanyRequestsApi.md#postAcceptJoinCompanyReq) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId}/accept | Accept a join company request
[**postDeclineJoinCompanyReq**](JoinCompanyRequestsApi.md#postDeclineJoinCompanyReq) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId}/decline | Decline a join company request



## getJoinCompanyRequestById

> GetJoinCompanyRequestByIdSuccess getJoinCompanyRequestById(companyId, joinCompanyRequestId, accept)

Get a join company request

This API can be used by company &#x60;admin&#x60; users to get a join company request by id (must have been received by his company) (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getJoinCompanyRequestById(companyId, joinCompanyRequestId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
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

> GetJoinCompanyRequestsSuccess getJoinCompanyRequests(companyId, accept, opts)

Get all join company requests

This API can be used by company &#x60;admin&#x60; users to list join company requests received for his company by Rainbow users who want to join his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests?status&#x3D;pending  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less requests details in response.    - `small`: id, requestingUserId, requestedCompanyId, status    - `medium`: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, requestedCompanyName, status, requestingDate    - `full`: all request fields
  'limit': 3.4, // Number | Allow to specify the number of requests to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort requests list based on the given field.
  'sortOrder': 3.4, // Number | Specify order when sorting requests list.
  'status': "status_example" // String | List all join company requests having the provided status(es)
};
apiInstance.getJoinCompanyRequests(companyId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less requests details in response.    - &#x60;small&#x60;: id, requestingUserId, requestedCompanyId, status    - &#x60;medium&#x60;: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, requestedCompanyName, status, requestingDate    - &#x60;full&#x60;: all request fields | [optional] 
 **limit** | **Number**| Allow to specify the number of requests to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort requests list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting requests list. | [optional] 
 **status** | **String**| List all join company requests having the provided status(es) | [optional] 

### Return type

[**GetJoinCompanyRequestsSuccess**](GetJoinCompanyRequestsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAcceptJoinCompanyReq

> PostAcceptJoinCompanyReqSuccess postAcceptJoinCompanyReq(companyId, joinCompanyRequestId)

Accept a join company request

This API can be used by company &#x60;admin&#x60; users to accept a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       To accept the join company request, the user must still be in default company (may evolve in the future)       Once accepted, requesting user will be moved from Default company to company admin&#39;s company.    The user profile will be associated to the company subscription of the default offer (Essential).       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;     &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;         &lt;data/&gt;     &lt;/x&gt;     &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt; &lt;/presence&gt; &#x60;&#x60;&#x60;       When an admin accept a join company request, he and all company admins of this company are notified that the request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;accepted&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Requesting user is notified that his request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;       status&#x3D;&#39;accepted&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Note that if the requesting user has also been invited by an admin to join this company (join company invitation), the invitation is auto-accepted.       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/accept  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.postAcceptJoinCompanyReq(companyId, joinCompanyRequestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **joinCompanyRequestId** | **String**| Join company request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**PostAcceptJoinCompanyReqSuccess**](PostAcceptJoinCompanyReqSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDeclineJoinCompanyReq

> PostDeclineJoinCompanyReqSuccess postDeclineJoinCompanyReq(companyId, joinCompanyRequestId)

Decline a join company request

This API can be used by company &#x60;admin&#x60; users to decline a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       When an admin decline a join company request, requesting user is notified that his request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       When an admin decline a join company request, he and all company admins of this company are notified that the request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/decline  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.JoinCompanyRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var joinCompanyRequestId = "joinCompanyRequestId_example"; // String | Join company request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.postDeclineJoinCompanyReq(companyId, joinCompanyRequestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **joinCompanyRequestId** | **String**| Join company request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**PostDeclineJoinCompanyReqSuccess**](PostDeclineJoinCompanyReqSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

