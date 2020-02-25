# S2SApi.RoomApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roomJoin**](RoomApi.md#roomJoin) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/rooms/{roomId}/join | Join a room


<a name="roomJoin"></a>
# **roomJoin**
> RoomStatus roomJoin(cnxId, roomId)

Join a room

Join a room

### Example
```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.RoomApi();
var cnxId = "cnxId_example"; // String | Connection id
var roomId = "roomId_example"; // String | Room id
apiInstance.roomJoin(cnxId, roomId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **roomId** | **String**| Room id | 

### Return type

[**RoomStatus**](RoomStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

