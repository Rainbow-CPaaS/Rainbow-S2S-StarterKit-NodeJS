# RainbowAdminPortal.RoomsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRainbowAdminV10Rooms**](RoomsApi.md#getApiRainbowAdminV10Rooms) | **GET** /api/rainbow/admin/v1.0/rooms | Get all rooms id



## getApiRainbowAdminV10Rooms

> GetApiRainbowAdminV10RoomsSuccess getApiRainbowAdminV10Rooms(accept, opts)

Get all rooms id

Display a list of short room description including: **id** - room identifier, **name** - room name   

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RoomsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'limit': 3.4, // Number | Allow to specify the number of rooms to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first room to retrieve (first room if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort room list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting company list.
};
apiInstance.getApiRainbowAdminV10Rooms(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **limit** | **Number**| Allow to specify the number of rooms to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first room to retrieve (first room if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort room list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting company list. | [optional] 

### Return type

[**GetApiRainbowAdminV10RoomsSuccess**](GetApiRainbowAdminV10RoomsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

