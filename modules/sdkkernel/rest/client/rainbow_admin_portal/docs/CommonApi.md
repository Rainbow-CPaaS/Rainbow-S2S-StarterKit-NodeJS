# RainbowAdminPortal.CommonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetrics**](CommonApi.md#deleteMetrics) | **DELETE** /api/rainbow/metrics | Clear performance metrics
[**getApiRainbowAdminV10About**](CommonApi.md#getApiRainbowAdminV10About) | **GET** /api/rainbow/admin/v1.0/about | About admin portal
[**getApiRainbowPcgV10About**](CommonApi.md#getApiRainbowPcgV10About) | **GET** /api/rainbow/pcg/v1.0/about | About pcg portal
[**getApiRainbowPing**](CommonApi.md#getApiRainbowPing) | **GET** /api/rainbow/ping | Get admin portal status report
[**getMetrics**](CommonApi.md#getMetrics) | **GET** /api/rainbow/metrics | Get performance metrics
[**putApiRainbowLogsLevels**](CommonApi.md#putApiRainbowLogsLevels) | **PUT** /api/rainbow/logs/levels | Change log level



## deleteMetrics

> DeleteMetricsSuccess deleteMetrics(accept)

Clear performance metrics

Clear metrics

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var accept = "accept_example"; // String | application/json. Then the result is in JSON format. For other cases the result is in text format.
apiInstance.deleteMetrics(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json. Then the result is in JSON format. For other cases the result is in text format. | 

### Return type

[**DeleteMetricsSuccess**](DeleteMetricsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## getApiRainbowAdminV10About

> GetApiRainbowAdminV10AboutSuccess getApiRainbowAdminV10About(accept)

About admin portal

Get portal information (module name, version)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowAdminV10About(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetApiRainbowAdminV10AboutSuccess**](GetApiRainbowAdminV10AboutSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiRainbowPcgV10About

> GetApiRainbowPcgV10AboutSuccess getApiRainbowPcgV10About(accept)

About pcg portal

Get portal information (module name, version)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowPcgV10About(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetApiRainbowPcgV10AboutSuccess**](GetApiRainbowPcgV10AboutSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiRainbowPing

> GetApiRainbowPingSuccess getApiRainbowPing(accept)

Get admin portal status report

This API allows to check admin portal status.       If no XMPP connections are available and/or if no database connection is available, an error 503 Service Unavailable is returned.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowPing(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**GetApiRainbowPingSuccess**](GetApiRainbowPingSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetrics

> GetMetricsSuccess getMetrics(accept)

Get performance metrics

Get portal performance metrics      It allows to show Node specific metrics like:   * processCpuTotal * processStartTime * osMemoryHeap * processOpenFileDescriptors * processMaxFileDescriptors * eventLoopLag * processHandles * processRequests * heapSizeAndUsed * heapSpacesSizeAndUsed * version  Node metrics probes are launched every 10 seconds.      A first custom metric is available to probe portal Rest API performance (an histogram of response time)      When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var accept = "accept_example"; // String | application/json. Then the result is in JSON format. For other cases the result is in text format.
apiInstance.getMetrics(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json. Then the result is in JSON format. For other cases the result is in text format. | 

### Return type

[**GetMetricsSuccess**](GetMetricsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## putApiRainbowLogsLevels

> PutApiRainbowLogsLevelsSuccess putApiRainbowLogsLevels(body)

Change log level

Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.CommonApi();
var body = new RainbowAdminPortal.PutApiRainbowLogsLevels(); // PutApiRainbowLogsLevels | 
apiInstance.putApiRainbowLogsLevels(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutApiRainbowLogsLevels**](PutApiRainbowLogsLevels.md)|  | 

### Return type

[**PutApiRainbowLogsLevelsSuccess**](PutApiRainbowLogsLevelsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

