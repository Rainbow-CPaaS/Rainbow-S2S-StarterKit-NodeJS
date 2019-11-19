# RainbowEnduserPortal.BotsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBotById**](BotsApi.md#getBotById) | **GET** /api/rainbow/enduser/v1.0/bots/{botId} | Get a bot service data.
[**getBots**](BotsApi.md#getBots) | **GET** /api/rainbow/enduser/v1.0/bots | Get all bot services.



## getBotById

> GetBotByIdSuccess getBotById(botId, accept)

Get a bot service data.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.BotsApi();
var botId = "botId_example"; // String | Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4)
var accept = "accept_example"; // String | application/json
apiInstance.getBotById(botId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botId** | **String**| Bot Service unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **accept** | **String**| application/json | 

### Return type

[**GetBotByIdSuccess**](GetBotByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBots

> GetBotsSuccess getBots(accept, opts)

Get all bot services.

This API can be used to retrieve the list of bot services.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.BotsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less bot services details in response.    - `small`: id, name, jid    - `medium`: id, name, jid    - `full`: id, name, jid, createdByUserId, createdByLoginEmail
  'limit': 3.4, // Number | Allow to specify the number of bot services to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort bots list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting bots list.
};
apiInstance.getBots(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less bot services details in response.    - &#x60;small&#x60;: id, name, jid    - &#x60;medium&#x60;: id, name, jid    - &#x60;full&#x60;: id, name, jid, createdByUserId, createdByLoginEmail | [optional] 
 **limit** | **Number**| Allow to specify the number of bot services to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first bot to retrieve (first bot if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort bots list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting bots list. | [optional] 

### Return type

[**GetBotsSuccess**](GetBotsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

