# RainbowEnduserPortal.RoomsCustomDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateRoomCustomData**](RoomsCustomDataApi.md#updateRoomCustomData) | **PUT** /api/rainbow/enduser/v1.0/rooms/{roomId}/custom-data | Manage custom data



## updateRoomCustomData

> UpdateRoomCustomDataSuccess updateRoomCustomData(roomId, body)

Manage custom data

**Only a moderator is allowed to set or reset custom data**

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.RoomsCustomDataApi();
var roomId = "roomId_example"; // String | Room unique identifier (like 56f3f51a76e0bf767ed45325)
var body = new RainbowEnduserPortal.UpdateRoomCustomData(); // UpdateRoomCustomData | 
apiInstance.updateRoomCustomData(roomId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | **String**| Room unique identifier (like 56f3f51a76e0bf767ed45325) | 
 **body** | [**UpdateRoomCustomData**](UpdateRoomCustomData.md)|  | 

### Return type

[**UpdateRoomCustomDataSuccess**](UpdateRoomCustomDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

