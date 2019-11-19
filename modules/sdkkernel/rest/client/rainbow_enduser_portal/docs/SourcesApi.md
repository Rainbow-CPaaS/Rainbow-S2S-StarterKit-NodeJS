# RainbowEnduserPortal.SourcesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSource**](SourcesApi.md#createSource) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/sources | Create a source
[**deleteSource**](SourcesApi.md#deleteSource) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId} | Delete a source
[**getAllSourcesByUserId**](SourcesApi.md#getAllSourcesByUserId) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/sources | Get all sources by userId
[**getSourceData**](SourcesApi.md#getSourceData) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId} | Get a source data
[**updateSourceData**](SourcesApi.md#updateSourceData) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId} | Update a source data



## createSource

> CreateSourceSuccess createSource(userId, body)

Create a source

A client could have one or more mobile devices as a source of contacts with his contacts stored in.    Also a source of contacts could be Microsoft Outlook / Linkedin or Facebook.    Contacts could be used for constructing recommendation rules.       SourceId must be unique for a given user.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SourcesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var body = new RainbowEnduserPortal.CreateSource(); // CreateSource | 
apiInstance.createSource(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **body** | [**CreateSource**](CreateSource.md)|  | 

### Return type

[**CreateSourceSuccess**](CreateSourceSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSource

> DeleteSourceSuccess deleteSource(userId, sourceId, accept)

Delete a source

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SourcesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c4aebe31d144d947e385db)
var accept = "accept_example"; // String | application/json
apiInstance.deleteSource(userId, sourceId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c4aebe31d144d947e385db) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteSourceSuccess**](DeleteSourceSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSourcesByUserId

> GetAllSourcesByUserIdSuccess getAllSourcesByUserId(userId, accept, opts)

Get all sources by userId

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SourcesApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less source details in response. > - `small`: id, sourceId > - `medium`: id, sourceId, os > - `full`: all source fields
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4 // Number | Specify order when sorting items list.
};
apiInstance.getAllSourcesByUserId(userId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less source details in response. &gt; - &#x60;small&#x60;: id, sourceId &gt; - &#x60;medium&#x60;: id, sourceId, os &gt; - &#x60;full&#x60;: all source fields | [optional] 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 

### Return type

[**GetAllSourcesByUserIdSuccess**](GetAllSourcesByUserIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceData

> GetSourceDataSuccess getSourceData(userId, sourceId, accept)

Get a source data

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SourcesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c4aebe31d144d947e385db)
var accept = "accept_example"; // String | application/json
apiInstance.getSourceData(userId, sourceId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c4aebe31d144d947e385db) | 
 **accept** | **String**| application/json | 

### Return type

[**GetSourceDataSuccess**](GetSourceDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSourceData

> UpdateSourceDataSuccess updateSourceData(userId, sourceId, body)

Update a source data

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.SourcesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c4aebe31d144d947e385d
var body = new RainbowEnduserPortal.UpdateSourceData(); // UpdateSourceData | 
apiInstance.updateSourceData(userId, sourceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c4aebe31d144d947e385d | 
 **body** | [**UpdateSourceData**](UpdateSourceData.md)|  | 

### Return type

[**UpdateSourceDataSuccess**](UpdateSourceDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

