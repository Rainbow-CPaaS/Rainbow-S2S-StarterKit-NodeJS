# S2SApi.ConversationApi

All URIs are relative to *http://localhost:4000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationChatstate**](ConversationApi.md#conversationChatstate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/chatstate/{state} | Send a chat state



## conversationChatstate

> conversationChatstate(cnxId, cvId, state)

Send a chat state

Send a conversation state

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.ConversationApi();
var cnxId = "cnxId_example"; // String | Connection id
var cvId = "cvId_example"; // String | Conversation id
var state = "state_example"; // String | Chatstate value
apiInstance.conversationChatstate(cnxId, cvId, state).then(function() {
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
 **state** | **String**| Chatstate value | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

