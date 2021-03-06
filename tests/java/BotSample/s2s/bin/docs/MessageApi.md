# MessageApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageCreate**](MessageApi.md#messageCreate) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | Send a new message
[**messageIndex**](MessageApi.md#messageIndex) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | List the messages of a conversation
[**messageReadReceipt**](MessageApi.md#messageReadReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/read | Send a read receipt
[**messageReceivedReceipt**](MessageApi.md#messageReceivedReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/received | Send a received receipt


<a name="messageCreate"></a>
# **messageCreate**
> MessageCreateResponse messageCreate(cnxId, cvId, messageCreate)

Send a new message

Send a new message to a recipient identified by a conversation Id. **Caution**: prior to sending a message to a room, you will have to &#39;join&#39; it

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.MessageApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

MessageApi apiInstance = new MessageApi();
String cnxId = "cnxId_example"; // String | Connection id
String cvId = "cvId_example"; // String | Conversation id
MessageCreate messageCreate = new MessageCreate(); // MessageCreate | Message data
try {
    MessageCreateResponse result = apiInstance.messageCreate(cnxId, cvId, messageCreate);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessageApi#messageCreate");
    e.printStackTrace();
}
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

<a name="messageIndex"></a>
# **messageIndex**
> List&lt;Message&gt; messageIndex(cnxId, cvId)

List the messages of a conversation

Paginated list the messages of a conversation

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.MessageApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

MessageApi apiInstance = new MessageApi();
String cnxId = "cnxId_example"; // String | Connection id
String cvId = "cvId_example"; // String | Conversation id
try {
    List<Message> result = apiInstance.messageIndex(cnxId, cvId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MessageApi#messageIndex");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **cvId** | **String**| Conversation id |

### Return type

[**List&lt;Message&gt;**](Message.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="messageReadReceipt"></a>
# **messageReadReceipt**
> messageReadReceipt(cnxId, cvId, id)

Send a read receipt

Send a message read receipt

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.MessageApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

MessageApi apiInstance = new MessageApi();
String cnxId = "cnxId_example"; // String | Connection id
String cvId = "cvId_example"; // String | Conversation id
String id = "id_example"; // String | Message id
try {
    apiInstance.messageReadReceipt(cnxId, cvId, id);
} catch (ApiException e) {
    System.err.println("Exception when calling MessageApi#messageReadReceipt");
    e.printStackTrace();
}
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

<a name="messageReceivedReceipt"></a>
# **messageReceivedReceipt**
> messageReceivedReceipt(cnxId, cvId, id)

Send a received receipt

Send a message received receipt

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.MessageApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

MessageApi apiInstance = new MessageApi();
String cnxId = "cnxId_example"; // String | Connection id
String cvId = "cvId_example"; // String | Conversation id
String id = "id_example"; // String | Message id
try {
    apiInstance.messageReceivedReceipt(cnxId, cvId, id);
} catch (ApiException e) {
    System.err.println("Exception when calling MessageApi#messageReceivedReceipt");
    e.printStackTrace();
}
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

