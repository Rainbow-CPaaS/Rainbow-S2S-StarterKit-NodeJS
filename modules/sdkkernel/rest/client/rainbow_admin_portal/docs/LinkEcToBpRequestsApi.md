# RainbowAdminPortal.LinkEcToBpRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminPostAcceptLinkEcToBpRequest**](LinkEcToBpRequestsApi.md#adminPostAcceptLinkEcToBpRequest) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests/{requestId}/accept | Accept a request
[**adminPostDeclineLinkEcToBpRequest**](LinkEcToBpRequestsApi.md#adminPostDeclineLinkEcToBpRequest) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests/{requestId}/decline | Decline a request
[**adminPostLinkEcToBpRequest**](LinkEcToBpRequestsApi.md#adminPostLinkEcToBpRequest) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests | Create a request to link EC to BP
[**getLinkECToBPRequestById**](LinkEcToBpRequestsApi.md#getLinkECToBPRequestById) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests/{requestId} | Get a request
[**getLinkECToBPRequests**](LinkEcToBpRequestsApi.md#getLinkECToBPRequests) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests | Get all requests
[**postCancelLinkEcToBpRequestById**](LinkEcToBpRequestsApi.md#postCancelLinkEcToBpRequestById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests/{requestId}/cancel | Cancel a request
[**resendLinkEcToBpRequestById**](LinkEcToBpRequestsApi.md#resendLinkEcToBpRequestById) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests/{requestId}/re-send | Re-send a request



## adminPostAcceptLinkEcToBpRequest

> AdminPostAcceptLinkEcToBpRequestSuccess adminPostAcceptLinkEcToBpRequest(companyId, requestId)

Accept a request

This API allows to accept a request received by bp admins of a BP company (request sent by bp_admin or company_admin using API [POST /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests][0]). Request must be in status pending. Otherwise accept request will be rejected with a 409 Conflict error The &#x60;companyId&#x60; provided in URL should be the BP companyId. Otherwise, accept request will be rejected with a 400 Bad Request error. Once accepted, requesting company&#39;s &#x60;bpId&#x60; is updated with the id of the BP company. If company requested to be BP IR (requestedToBeBpIr&#x3D;true), requesting company&#39;s &#x60;isBP&#x60; and &#x60;bpType&#x60; are updated to true and &#x60;IR&#x60;. If request was done to be BP IR by an admin only &#x60;company_admin&#x60;, this admin will be promoted to &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; of the requesting company. When a bp_admin accepts a request, EC company administrators and BP company administrators are notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobprequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39;       status&#x3D;&#39;accepted&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/requests/5819ed7c9547b313509237d6/accept  [0]: /admin/#api-link_EC_to_BP_requests-admin_PostLinkEcToBpRequest

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var requestId = "requestId_example"; // String | Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.adminPostAcceptLinkEcToBpRequest(companyId, requestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **requestId** | **String**| Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**AdminPostAcceptLinkEcToBpRequestSuccess**](AdminPostAcceptLinkEcToBpRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostDeclineLinkEcToBpRequest

> AdminPostDeclineLinkEcToBpRequestSuccess adminPostDeclineLinkEcToBpRequest(companyId, requestId)

Decline a request

This API allows to decline a request received by bp admins of a BP company (request sent by bp_admin or company_admin using API [POST /api/rainbow/admin/v1.0/companies/{companyId}/bp-link/requests][0]). Request must be in status pending or failed. Otherwise decline request will be rejected with a 409 Conflict error The &#x60;companyId&#x60; provided in URL should be the BP companyId. Otherwise, decline request will be rejected with a 400 Bad Request error. When a bp_admin declines a request, EC company administrators and BP company administrators are notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobprequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39;       status&#x3D;&#39;declined&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/requests/5819ed7c9547b313509237d6/decline  [0]: /admin/#api-link_EC_to_BP_requests-admin_PostLinkEcToBpRequest

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var requestId = "requestId_example"; // String | Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.adminPostDeclineLinkEcToBpRequest(companyId, requestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **requestId** | **String**| Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**AdminPostDeclineLinkEcToBpRequestSuccess**](AdminPostDeclineLinkEcToBpRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostLinkEcToBpRequest

> AdminPostLinkEcToBpRequestSuccess adminPostLinkEcToBpRequest(companyId, body)

Create a request to link EC to BP

This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;, &#x60;organization_admin&#x60;, &#x60;company_admin&#x60;) to create a request to link an End customer company to a BP company. All company administrators of the provided end customer and BP companyId are notified about the created request with an email notification (only BP company admins) and with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobprequest action&#x3D;\&quot;create\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.AdminPostLinkEcToBpRequest(); // AdminPostLinkEcToBpRequest | 
apiInstance.adminPostLinkEcToBpRequest(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**AdminPostLinkEcToBpRequest**](AdminPostLinkEcToBpRequest.md)|  | 

### Return type

[**AdminPostLinkEcToBpRequestSuccess**](AdminPostLinkEcToBpRequestSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLinkECToBPRequestById

> GetLinkECToBPRequestByIdSuccess getLinkECToBPRequestById(companyId, requestId, accept)

Get a request

This API can be used by &#x60;admin&#x60; users to get a request he sent/received to link an end customer company to a BP. Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests/5819ed7c9547b313509237d6

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var requestId = "requestId_example"; // String | Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6)
var accept = "accept_example"; // String | application/json
apiInstance.getLinkECToBPRequestById(companyId, requestId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **requestId** | **String**| Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6) | 
 **accept** | **String**| application/json | 

### Return type

[**GetLinkECToBPRequestByIdSuccess**](GetLinkECToBPRequestByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLinkECToBPRequests

> GetLinkECToBPRequestsSuccess getLinkECToBPRequests(companyId, accept, opts)

Get all requests

This API can be used by &#x60;admin&#x60; users to list requests they sent/received to link End customer company to BP company. Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests?status&#x3D;pending Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests?status&#x3D;accepted&amp;status&#x3D;auto-accepted

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'status': "status_example", // String | List all Requests having the provided status(es)
  'format': "format_example", // String | Allows to retrieve more or less request details in response. 'small': '_id requestingCompanyId requestedCompanyId requestingAdminId status', 'medium': '_id requestingCompanyId requestingCompanyName requestedCompanyId requestedCompanyName requestingAdminId requestingAdminLoginEmail status lastNotificationDate requestDate acceptationDate declinationDate', // All fields 'full': all fields
  'limit': 3.4, // Number | Allow to specify the number of requests to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort request list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting request list.
};
apiInstance.getLinkECToBPRequests(companyId, accept, opts).then(function(data) {
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
 **status** | **String**| List all Requests having the provided status(es) | [optional] 
 **format** | **String**| Allows to retrieve more or less request details in response. &#39;small&#39;: &#39;_id requestingCompanyId requestedCompanyId requestingAdminId status&#39;, &#39;medium&#39;: &#39;_id requestingCompanyId requestingCompanyName requestedCompanyId requestedCompanyName requestingAdminId requestingAdminLoginEmail status lastNotificationDate requestDate acceptationDate declinationDate&#39;, // All fields &#39;full&#39;: all fields | [optional] 
 **limit** | **Number**| Allow to specify the number of requests to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort request list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting request list. | [optional] 

### Return type

[**GetLinkECToBPRequestsSuccess**](GetLinkECToBPRequestsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCancelLinkEcToBpRequestById

> PostCancelLinkEcToBpRequestByIdSuccess postCancelLinkEcToBpRequestById(companyId, requestId)

Cancel a request

This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;, &#x60;organization_admin&#x60;, &#x60;company_admin&#x60;) to cancel a request already sent to link his company to BP company. Request must be pending, declined or failed (otherwise error 409 is returned). The &#x60;companyId&#x60; provided in URL should be the requesting companyId. Otherwise, cancel request will be rejected with a 400 Bad Request error. Once request has been canceled, it will not be possible to accept or decline it anymore. All admins are notified with an XMPP message that the request has been canceled:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobprequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;      status&#x3D;&#39;canceled&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests/5819ed7c9547b313509237d6/cancel

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var requestId = "requestId_example"; // String | Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6)
apiInstance.postCancelLinkEcToBpRequestById(companyId, requestId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **requestId** | **String**| Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6) | 

### Return type

[**PostCancelLinkEcToBpRequestByIdSuccess**](PostCancelLinkEcToBpRequestByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendLinkEcToBpRequestById

> ResendLinkEcToBpRequestByIdSuccess resendLinkEcToBpRequestById(companyId, requestId, body)

Re-send a request

This API can be used by admin (&#x60;superadmin&#x60;, &#x60;bp_admin&#x60;, &#x60;organization_admin&#x60;, &#x60;company_admin&#x60;) to re-send a request already sent to link his company to BP company. If request is canceled, declined or failed, it is set back to pending and then re-sent. If request is accepted or auto-accepted, error 409 is returned. The &#x60;companyId&#x60; provided in URL should be the requesting companyId (e.g. end customer company). Otherwise, re-send request will be rejected with a 400 Bad Request error. Request company (BP company) administrators receive a new email notification. All admins are notified with an XMPP message that the request has been re-sent:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;linkectobprequest action&#x3D;\&quot;re-send\&quot; id&#x3D;&#39;57cd5922d341df5812bbcb72&#39;       status&#x3D;&#39;pending&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/requests/5819ed7c9547b313509237d6/re-send

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.LinkEcToBpRequestsApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var requestId = "requestId_example"; // String | Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6)
var body = new RainbowAdminPortal.ResendLinkEcToBpRequestById(); // ResendLinkEcToBpRequestById | 
apiInstance.resendLinkEcToBpRequestById(companyId, requestId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **requestId** | **String**| Link End customer to BP request unique identifier (like 5819ed7c9547b313509237d6) | 
 **body** | [**ResendLinkEcToBpRequestById**](ResendLinkEcToBpRequestById.md)|  | 

### Return type

[**ResendLinkEcToBpRequestByIdSuccess**](ResendLinkEcToBpRequestByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

