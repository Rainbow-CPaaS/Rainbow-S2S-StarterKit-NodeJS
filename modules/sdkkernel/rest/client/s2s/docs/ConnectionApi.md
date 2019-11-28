# S2SApi.ConnectionApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionCreate**](ConnectionApi.md#connectionCreate) | **POST** /api/rainbow/ucs/v1.0/connections | Create a new user connection
[**connectionDelete**](ConnectionApi.md#connectionDelete) | **DELETE** /api/rainbow/ucs/v1.0/connections/{id} | Delete a connection
[**connectionIndex**](ConnectionApi.md#connectionIndex) | **GET** /api/rainbow/ucs/v1.0/connections | List all user connections
[**connectionShow**](ConnectionApi.md#connectionShow) | **GET** /api/rainbow/ucs/v1.0/connections/{id} | Get the data of a connection



## connectionCreate

> ConnectionCreateResponse connectionCreate(opts)

Create a new user connection

Create a new user connection. NOTE: If a connection with a same &#39;resource&#39; or &#39;callback_url&#39; already exists for a given user, this connection is reused. In such a case, the &#39;callback_url&#39; may be updated

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.ConnectionApi();
var opts = {
  'connectionCreate': new S2SApi.ConnectionCreate() // ConnectionCreate | Connection creation data
};
apiInstance.connectionCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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


## connectionDelete

> connectionDelete(id)

Delete a connection

Delete a connection

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.ConnectionApi();
var id = "id_example"; // String | Connection id
apiInstance.connectionDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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


## connectionIndex

> Connections connectionIndex()

List all user connections

List all user connections

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.ConnectionApi();
apiInstance.connectionIndex().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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


## connectionShow

> Connection connectionShow(id)

Get the data of a connection

Get the data of a connection

### Example

```javascript
var S2SApi = require('s2_s_api');
var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new S2SApi.ConnectionApi();
var id = "id_example"; // String | Connection id
apiInstance.connectionShow(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

