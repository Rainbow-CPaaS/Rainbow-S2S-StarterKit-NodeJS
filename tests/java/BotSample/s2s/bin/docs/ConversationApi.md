# ConversationApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationChatstate**](ConversationApi.md#conversationChatstate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/chatstate/{state} | Send a chat state
[**conversationCreate**](ConversationApi.md#conversationCreate) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations | Create a conversation
[**conversationDelete**](ConversationApi.md#conversationDelete) | **DELETE** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{id} | Delete a conversation
[**conversationIndex**](ConversationApi.md#conversationIndex) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations | Get all conversations
[**conversationShow**](ConversationApi.md#conversationShow) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{id} | Get a conversation


<a name="conversationChatstate"></a>
# **conversationChatstate**
> conversationChatstate(cnxId, cvId, state)

Send a chat state

Send a conversation state

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConversationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConversationApi apiInstance = new ConversationApi();
String cnxId = "cnxId_example"; // String | Connection id
String cvId = "cvId_example"; // String | Conversation id
String state = "state_example"; // String | Chatstate value
try {
    apiInstance.conversationChatstate(cnxId, cvId, state);
} catch (ApiException e) {
    System.err.println("Exception when calling ConversationApi#conversationChatstate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **cvId** | **String**| Conversation id |
 **state** | **String**| Chatstate value | [enum: active, composing, paused, inactive, gone]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="conversationCreate"></a>
# **conversationCreate**
> Conversation conversationCreate(cnxId, conversationCreate)

Create a conversation

Create a conversation

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConversationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConversationApi apiInstance = new ConversationApi();
String cnxId = "cnxId_example"; // String | Connection id
ConversationCreate conversationCreate = new ConversationCreate(); // ConversationCreate | Conversation data
try {
    Conversation result = apiInstance.conversationCreate(cnxId, conversationCreate);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConversationApi#conversationCreate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **conversationCreate** | [**ConversationCreate**](ConversationCreate.md)| Conversation data | [optional]

### Return type

[**Conversation**](Conversation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="conversationDelete"></a>
# **conversationDelete**
> conversationDelete(cnxId, id)

Delete a conversation

Delete a conversation

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConversationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConversationApi apiInstance = new ConversationApi();
String cnxId = "cnxId_example"; // String | Connection id
String id = "id_example"; // String | Conversation id
try {
    apiInstance.conversationDelete(cnxId, id);
} catch (ApiException e) {
    System.err.println("Exception when calling ConversationApi#conversationDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **id** | **String**| Conversation id |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="conversationIndex"></a>
# **conversationIndex**
> Conversations conversationIndex(cnxId)

Get all conversations

Get all conversations

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConversationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConversationApi apiInstance = new ConversationApi();
String cnxId = "cnxId_example"; // String | Connection id
try {
    Conversations result = apiInstance.conversationIndex(cnxId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConversationApi#conversationIndex");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |

### Return type

[**Conversations**](Conversations.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="conversationShow"></a>
# **conversationShow**
> Conversation conversationShow(cnxId, id)

Get a conversation

Get a conversation

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConversationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConversationApi apiInstance = new ConversationApi();
String cnxId = "cnxId_example"; // String | Connection id
String id = "id_example"; // String | Conversation id
try {
    Conversation result = apiInstance.conversationShow(cnxId, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConversationApi#conversationShow");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **id** | **String**| Conversation id |

### Return type

[**Conversation**](Conversation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

