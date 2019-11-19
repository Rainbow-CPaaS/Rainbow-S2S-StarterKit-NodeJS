# S2SApi.MessageApi

All URIs are relative to *http://localhost:4000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageCreate**](MessageApi.md#messageCreate) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | Send a new message
[**messageIndex**](MessageApi.md#messageIndex) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | List the messages of a conversation
[**messageReadReceipt**](MessageApi.md#messageReadReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/read | Send a read receipt
[**messageReceivedReceipt**](MessageApi.md#messageReceivedReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/received | Send a received receipt



## messageCreate

> MessageCreateResponse messageCreate(cnxId, cvId, opts)

Send a new message

Send a new message

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.MessageApi();
var cnxId = "cnxId_example"; // String | Connection id
var cvId = "cvId_example"; // String | Conversation id
var opts = {
  'messageCreate': new S2SApi.MessageCreate() // MessageCreate | Message data
};
apiInstance.messageCreate(cnxId, cvId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **cvId** | **String**| Conversation id | 
 **messageCreate** | [**MessageCreate**](MessageCreate.md)| Message data | [optional] 

### Return type

[**MessageCreateResponse**](MessageCreateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## messageIndex

> [Message] messageIndex(cnxId, cvId)

List the messages of a conversation

Paginated list the messages of a conversation

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.MessageApi();
var cnxId = "cnxId_example"; // String | Connection id
var cvId = "cvId_example"; // String | Conversation id
apiInstance.messageIndex(cnxId, cvId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **cvId** | **String**| Conversation id | 

### Return type

[**[Message]**](Message.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## messageReadReceipt

> messageReadReceipt(cnxId, cvId, id)

Send a read receipt

Send a message read receipt

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.MessageApi();
var cnxId = "cnxId_example"; // String | Connection id
var cvId = "cvId_example"; // String | Conversation id
var id = "id_example"; // String | Message id
apiInstance.messageReadReceipt(cnxId, cvId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **cvId** | **String**| Conversation id | 
 **id** | **String**| Message id | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## messageReceivedReceipt

> messageReceivedReceipt(cnxId, cvId, id)

Send a received receipt

Send a message received receipt

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.MessageApi();
var cnxId = "cnxId_example"; // String | Connection id
var cvId = "cvId_example"; // String | Conversation id
var id = "id_example"; // String | Message id
apiInstance.messageReceivedReceipt(cnxId, cvId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id | 
 **cvId** | **String**| Conversation id | 
 **id** | **String**| Message id | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

