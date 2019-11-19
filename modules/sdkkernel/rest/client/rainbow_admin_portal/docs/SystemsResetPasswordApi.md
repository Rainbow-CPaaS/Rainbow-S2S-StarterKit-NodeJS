# RainbowAdminPortal.SystemsResetPasswordApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postSystemsRestPassword**](SystemsResetPasswordApi.md#postSystemsRestPassword) | **POST** /api/rainbow/admin/v1.0/systems/{systemId}/reset-password | Reset CCCA jid password



## postSystemsRestPassword

> PostSystemsRestPasswordSuccess postSystemsRestPassword(systemId)

Reset CCCA jid password

It would be necessary to reset the password used by the CCCA to join rainbow infrastructure.    Among system data fields, jid_pbxagent and jid_pbxagent_password are used by the CCCA to try an authentication.    The new API :   * regenerate an activation code which is stored in the Admin portal and XMPP server (four digits) * does not change the existing pbxId * replace the system status from \&quot;activated\&quot; to \&quot;created\&quot;     To finalize CCCA authentication refer to (Get a pbx data using API [GET /api/rainbow/pcg/v1.0/pbxs/{pbxId}][0]).  [0]: #api-pcg_pbxs-GetPbxId

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsResetPasswordApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
apiInstance.postSystemsRestPassword(systemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 

### Return type

[**PostSystemsRestPasswordSuccess**](PostSystemsRestPasswordSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

