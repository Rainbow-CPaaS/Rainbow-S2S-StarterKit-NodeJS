# RainbowAdminPortal.RainbowFeaturesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDeleteRainbowFeatures**](RainbowFeaturesApi.md#adminDeleteRainbowFeatures) | **DELETE** /api/rainbow/admin/v1.0/features/{featureId} | Delete a feature
[**adminGetRainbowFeatureById**](RainbowFeaturesApi.md#adminGetRainbowFeatureById) | **GET** /api/rainbow/admin/v1.0/features/{featureId} | Get a feature
[**adminGetRainbowFeatures**](RainbowFeaturesApi.md#adminGetRainbowFeatures) | **GET** /api/rainbow/admin/v1.0/features | Get all features
[**adminPostRainbowFeatures**](RainbowFeaturesApi.md#adminPostRainbowFeatures) | **POST** /api/rainbow/admin/v1.0/features | Create a feature
[**adminPutRainbowFeatures**](RainbowFeaturesApi.md#adminPutRainbowFeatures) | **PUT** /api/rainbow/admin/v1.0/features/{featureId} | Update a feature



## adminDeleteRainbowFeatures

> AdminDeleteRainbowFeaturesSuccess adminDeleteRainbowFeatures(featureId, accept)

Delete a feature

This API can be used to delete a feature.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowFeaturesApi();
var featureId = "featureId_example"; // String | Feature unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowFeatures(featureId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Feature unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowFeaturesSuccess**](AdminDeleteRainbowFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowFeatureById

> AdminGetRainbowFeatureByIdSuccess adminGetRainbowFeatureById(featureId, accept)

Get a feature

Get a feature from its id    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/features/5745b14694397864437b84a8

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowFeaturesApi();
var featureId = "featureId_example"; // String | Feature unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowFeatureById(featureId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Feature unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowFeatureByIdSuccess**](AdminGetRainbowFeatureByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowFeatures

> AdminGetRainbowFeaturesSuccess adminGetRainbowFeatures(accept, opts)

Get all features

List available features for which restrictions are applied for some Rainbow offers

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowFeaturesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less feature details in response.    - `small`: id name    - `medium`: id name description    - `full`: all feature fields
  'name': "name_example", // String | Allows to filter feature list on field name.
  'limit': 3.4, // Number | Allow to specify the number of features to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first feature to retrieve (first feature if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort feature list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting feature.
};
apiInstance.adminGetRainbowFeatures(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less feature details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description    - &#x60;full&#x60;: all feature fields | [optional] 
 **name** | **String**| Allows to filter feature list on field name. | [optional] 
 **limit** | **Number**| Allow to specify the number of features to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first feature to retrieve (first feature if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort feature list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting feature. | [optional] 

### Return type

[**AdminGetRainbowFeaturesSuccess**](AdminGetRainbowFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostRainbowFeatures

> AdminPostRainbowFeaturesSuccess adminPostRainbowFeatures(body)

Create a feature

This API can be used to create a feature.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowFeaturesApi();
var body = new RainbowAdminPortal.AdminPostRainbowFeatures(); // AdminPostRainbowFeatures | 
apiInstance.adminPostRainbowFeatures(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminPostRainbowFeatures**](AdminPostRainbowFeatures.md)|  | 

### Return type

[**AdminPostRainbowFeaturesSuccess**](AdminPostRainbowFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowFeatures

> AdminPutRainbowFeaturesSuccess adminPutRainbowFeatures(featureId, body)

Update a feature

This API can be used to update a feature.    Only feature name and description can be updated.    Type and uniqueRef can&#39;t be modified, as they are linked to restrictions applied to this feature which are controlled by servers/clients

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowFeaturesApi();
var featureId = "featureId_example"; // String | Feature unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowFeatures(); // AdminPutRainbowFeatures | 
apiInstance.adminPutRainbowFeatures(featureId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Feature unique identifier. | 
 **body** | [**AdminPutRainbowFeatures**](AdminPutRainbowFeatures.md)|  | 

### Return type

[**AdminPutRainbowFeaturesSuccess**](AdminPutRainbowFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

