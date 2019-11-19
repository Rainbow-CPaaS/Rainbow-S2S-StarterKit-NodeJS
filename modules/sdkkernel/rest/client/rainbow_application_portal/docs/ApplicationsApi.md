# RainbowApplicationPortal.ApplicationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsApplicationsDeleteApps**](ApplicationsApi.md#applicationsApplicationsDeleteApps) | **DELETE** /api/rainbow/applications/v1.0/applications/{appId} | Delete an application.
[**applicationsApplicationsGetApps**](ApplicationsApi.md#applicationsApplicationsGetApps) | **GET** /api/rainbow/applications/v1.0/applications | Get all applications created by the user.
[**applicationsApplicationsGetApps_0**](ApplicationsApi.md#applicationsApplicationsGetApps_0) | **GET** /api/rainbow/applications/v1.0/applications/{appId} | Get an application data.
[**applicationsApplicationsPostApps**](ApplicationsApi.md#applicationsApplicationsPostApps) | **POST** /api/rainbow/applications/v1.0/applications | Create an application.
[**applicationsApplicationsPutApps**](ApplicationsApi.md#applicationsApplicationsPutApps) | **PUT** /api/rainbow/applications/v1.0/applications/{appId} | Update an application.
[**applicationsApplicationsRequestDeployApp**](ApplicationsApi.md#applicationsApplicationsRequestDeployApp) | **PUT** /api/rainbow/applications/v1.0/applications/{appId}/request-deploy | Request the deployment of an application.
[**applicationsApplicationsRestartApp**](ApplicationsApi.md#applicationsApplicationsRestartApp) | **PUT** /api/rainbow/applications/v1.0/applications/{appId}/restart | Restart an application.
[**applicationsApplicationsStopApp**](ApplicationsApi.md#applicationsApplicationsStopApp) | **PUT** /api/rainbow/applications/v1.0/applications/{appId}/stop | Stop an application.



## applicationsApplicationsDeleteApps

> ApplicationsApplicationsDeleteAppsSuccess applicationsApplicationsDeleteApps(appId, accept)

Delete an application.

Rainbow developers can delete their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
var accept = "accept_example"; // String | application/json
apiInstance.applicationsApplicationsDeleteApps(appId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **accept** | **String**| application/json | 

### Return type

[**ApplicationsApplicationsDeleteAppsSuccess**](ApplicationsApplicationsDeleteAppsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationsApplicationsGetApps

> ApplicationsApplicationsGetAppsSuccess applicationsApplicationsGetApps(accept, opts)

Get all applications created by the user.

This API can be used to retrieve the list of applications created by the user.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'name': "name_example", // String | Allows to filter applications by name.
  'env': "env_example", // String | Allows to filter applications by environnement (Allowed values: not_deployed, in_deployment, deployed).
  'state': "state_example", // String | Allows to filter applications by state. (Allowed values: new, active, blocked, deleted, stopped). Can be a comma separated string.
  'type': "type_example", // String | Allows to filter applications by type (Allowed values: web, mobile, desktop, server, bot, iot, admin).
  'ownerId': "ownerId_example", // String | Only for superadmin/app_superadmin users. Allows to filter applications by ownerId .
  'subscriptionStatus': "subscriptionStatus_example", // String | Allows to filter applications by subscription status. (Allowed values: creating, active, alerting, hold, terminating, terminated, failed, unknown). Can be a comma separated string.
  'format': "format_example", // String | Allows to retrieve more or less application details in response.    - `small`: appId, name, state, type, ownerId    - `medium`: appId, name, state, type, origin, dateOfCreation, env, activity, ownerId    - `full`: appId, name, ownerId, appSecret, state, env, type, kpi, activity, origin, dateOfCreation, dateOfLastTokenWhenRenew, dateOfDeploymentRequest, dateOfDeployment,deployReason, deployedByUserId, isRainbowClientDefault, isNoIdApplication, profileId, platform, subscriptions
  'limit': 3.4, // Number | Allow to specify the number of applications to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first application to retrieve (first app if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort applications list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting applications list.
};
apiInstance.applicationsApplicationsGetApps(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **name** | **String**| Allows to filter applications by name. | [optional] 
 **env** | **String**| Allows to filter applications by environnement (Allowed values: not_deployed, in_deployment, deployed). | [optional] 
 **state** | **String**| Allows to filter applications by state. (Allowed values: new, active, blocked, deleted, stopped). Can be a comma separated string. | [optional] 
 **type** | **String**| Allows to filter applications by type (Allowed values: web, mobile, desktop, server, bot, iot, admin). | [optional] 
 **ownerId** | **String**| Only for superadmin/app_superadmin users. Allows to filter applications by ownerId . | [optional] 
 **subscriptionStatus** | **String**| Allows to filter applications by subscription status. (Allowed values: creating, active, alerting, hold, terminating, terminated, failed, unknown). Can be a comma separated string. | [optional] 
 **format** | **String**| Allows to retrieve more or less application details in response.    - &#x60;small&#x60;: appId, name, state, type, ownerId    - &#x60;medium&#x60;: appId, name, state, type, origin, dateOfCreation, env, activity, ownerId    - &#x60;full&#x60;: appId, name, ownerId, appSecret, state, env, type, kpi, activity, origin, dateOfCreation, dateOfLastTokenWhenRenew, dateOfDeploymentRequest, dateOfDeployment,deployReason, deployedByUserId, isRainbowClientDefault, isNoIdApplication, profileId, platform, subscriptions | [optional] 
 **limit** | **Number**| Allow to specify the number of applications to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first application to retrieve (first app if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort applications list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting applications list. | [optional] 

### Return type

[**ApplicationsApplicationsGetAppsSuccess**](ApplicationsApplicationsGetAppsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationsApplicationsGetApps_0

> ApplicationsApplicationsGetAppsSuccess applicationsApplicationsGetApps_0(appId, accept)

Get an application data.

Rainbow users can see their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
var accept = "accept_example"; // String | application/json
apiInstance.applicationsApplicationsGetApps_0(appId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **accept** | **String**| application/json | 

### Return type

[**ApplicationsApplicationsGetAppsSuccess**](ApplicationsApplicationsGetAppsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationsApplicationsPostApps

> ApplicationsApplicationsPostAppsSuccess applicationsApplicationsPostApps(body)

Create an application.

Rainbow users can create their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var body = new RainbowApplicationPortal.ApplicationsApplicationsPostApps(); // ApplicationsApplicationsPostApps | 
apiInstance.applicationsApplicationsPostApps(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicationsApplicationsPostApps**](ApplicationsApplicationsPostApps.md)|  | 

### Return type

[**ApplicationsApplicationsPostAppsSuccess**](ApplicationsApplicationsPostAppsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applicationsApplicationsPutApps

> ApplicationsApplicationsPutAppsSuccess applicationsApplicationsPutApps(appId, body)

Update an application.

Rainbow users can update their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
var body = new RainbowApplicationPortal.ApplicationsApplicationsPutApps(); // ApplicationsApplicationsPutApps | 
apiInstance.applicationsApplicationsPutApps(appId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 
 **body** | [**ApplicationsApplicationsPutApps**](ApplicationsApplicationsPutApps.md)|  | 

### Return type

[**ApplicationsApplicationsPutAppsSuccess**](ApplicationsApplicationsPutAppsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applicationsApplicationsRequestDeployApp

> ApplicationsApplicationsRequestDeployAppSuccess applicationsApplicationsRequestDeployApp(appId)

Request the deployment of an application.

Rainbow users can update their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
apiInstance.applicationsApplicationsRequestDeployApp(appId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 

### Return type

[**ApplicationsApplicationsRequestDeployAppSuccess**](ApplicationsApplicationsRequestDeployAppSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationsApplicationsRestartApp

> ApplicationsApplicationsRestartAppSuccess applicationsApplicationsRestartApp(appId)

Restart an application.

Rainbow developers can restart their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
apiInstance.applicationsApplicationsRestartApp(appId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 

### Return type

[**ApplicationsApplicationsRestartAppSuccess**](ApplicationsApplicationsRestartAppSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationsApplicationsStopApp

> ApplicationsApplicationsStopAppSuccess applicationsApplicationsStopApp(appId)

Stop an application.

Rainbow users can stop their own applications.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsApi();
var appId = "appId_example"; // String | Application unique identifier (like 578bb08dc0d8c107725ef8c4)
apiInstance.applicationsApplicationsStopApp(appId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application unique identifier (like 578bb08dc0d8c107725ef8c4) | 

### Return type

[**ApplicationsApplicationsStopAppSuccess**](ApplicationsApplicationsStopAppSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

