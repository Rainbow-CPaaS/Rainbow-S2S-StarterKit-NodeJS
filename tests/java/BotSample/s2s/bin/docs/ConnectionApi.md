# ConnectionApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionCreate**](ConnectionApi.md#connectionCreate) | **POST** /api/rainbow/ucs/v1.0/connections | Create a new user connection
[**connectionDelete**](ConnectionApi.md#connectionDelete) | **DELETE** /api/rainbow/ucs/v1.0/connections/{id} | Delete a connection
[**connectionIndex**](ConnectionApi.md#connectionIndex) | **GET** /api/rainbow/ucs/v1.0/connections | List all user connections
[**connectionShow**](ConnectionApi.md#connectionShow) | **GET** /api/rainbow/ucs/v1.0/connections/{id} | Get the data of a connection


<a name="connectionCreate"></a>
# **connectionCreate**
> ConnectionCreateResponse connectionCreate(connectionCreate)

Create a new user connection

Create a new user connection. NOTE: If a connection with a same &#39;resource&#39; or &#39;callback_url&#39; already exists for a given user, this connection is reused. In such a case, the &#39;callback_url&#39; may be updated

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConnectionApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConnectionApi apiInstance = new ConnectionApi();
ConnectionCreate connectionCreate = new ConnectionCreate(); // ConnectionCreate | Connection creation data
try {
    ConnectionCreateResponse result = apiInstance.connectionCreate(connectionCreate);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConnectionApi#connectionCreate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionCreate** | [**ConnectionCreate**](ConnectionCreate.md)| Connection creation data | [optional]

### Return type

[**ConnectionCreateResponse**](ConnectionCreateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="connectionDelete"></a>
# **connectionDelete**
> connectionDelete(id)

Delete a connection

Delete a connection

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConnectionApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConnectionApi apiInstance = new ConnectionApi();
String id = "id_example"; // String | Connection id
try {
    apiInstance.connectionDelete(id);
} catch (ApiException e) {
    System.err.println("Exception when calling ConnectionApi#connectionDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Connection id |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="connectionIndex"></a>
# **connectionIndex**
> Connections connectionIndex()

List all user connections

List all user connections

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConnectionApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConnectionApi apiInstance = new ConnectionApi();
try {
    Connections result = apiInstance.connectionIndex();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConnectionApi#connectionIndex");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Connections**](Connections.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="connectionShow"></a>
# **connectionShow**
> Connection connectionShow(id)

Get the data of a connection

Get the data of a connection

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.ConnectionApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

ConnectionApi apiInstance = new ConnectionApi();
String id = "id_example"; // String | Connection id
try {
    Connection result = apiInstance.connectionShow(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConnectionApi#connectionShow");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Connection id |

### Return type

[**Connection**](Connection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

