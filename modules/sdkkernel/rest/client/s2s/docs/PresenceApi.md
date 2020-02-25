# S2SApi.PresenceApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**presenceShow**](PresenceApi.md#presenceShow) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences/{userId} | Probe a user&#39;s presence
[**presenceUpdate**](PresenceApi.md#presenceUpdate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences | Set the user&#39;s presence


<a name="presenceShow"></a>
# **presenceShow**
> Presence presenceShow(cnxId, userId)

Probe a user&#39;s presence

Probe a user&#39;s presence

### Example
```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.PresenceApi();
var cnxId = "cnxId_example"; // String | Connection id
var userId = "userId_example"; // String | User id
apiInstance.presenceShow(cnxId, userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **userId** | **String**| User id | 

### Return type

[**Presence**](Presence.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceUpdate"></a>
# **presenceUpdate**
> presenceUpdate(cnxId, opts)

Set the user&#39;s presence

A user presence preference could be managed with the following API :  **_/api/rainbow/enduser/v1.0/users/{userId}/settings**  The mapping between this presence setting and the **show/status** fields of the presence stanza is show here :  | setting   | show | status    | | --------- | ---- | --------- | | away      | xa   | away      | | invisible | xa   | n/a       |  | dnd       | dnd  | n/a       |  | online    | n/a  | mode&#x3D;auto |   Moreover, the Rainbow webclient sends presence stanzas with the following **show/status** fields to show user (keyboard/focus) state :  | state    | show | status | | -------- | ---- | ------ | | inactive | away | n/a    | | active   | n/a  | n/a    | 

### Example
```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.PresenceApi();
var cnxId = "cnxId_example"; // String | Connection id
var opts = {
  'presenceUpdate': new S2SApi.PresenceUpdate() // PresenceUpdate | Presence data
};
apiInstance.presenceUpdate(cnxId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **presenceUpdate** | [**PresenceUpdate**](PresenceUpdate.md)| Presence data | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

