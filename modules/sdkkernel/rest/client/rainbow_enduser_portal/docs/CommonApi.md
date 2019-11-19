# RainbowEnduserPortal.CommonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetrics**](CommonApi.md#deleteMetrics) | **DELETE** /api/rainbow/metrics | Clear performance metrics
[**getApiRainbowEnduserV10About**](CommonApi.md#getApiRainbowEnduserV10About) | **GET** /api/rainbow/enduser/v1.0/about | About enduser portal
[**getApiRainbowPing**](CommonApi.md#getApiRainbowPing) | **GET** /api/rainbow/ping | Get enduser portal status report
[**getMetrics**](CommonApi.md#getMetrics) | **GET** /api/rainbow/metrics | Get performance metrics
[**putApiRainbowLogsLevels**](CommonApi.md#putApiRainbowLogsLevels) | **PUT** /api/rainbow/logs/levels | Change log level



## deleteMetrics

> DeleteMetricsSuccess deleteMetrics(accept)

Clear performance metrics

Clear metrics

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CommonApi();
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
- **Accept**: application/json, text/plain


## getApiRainbowEnduserV10About

> GetApiRainbowEnduserV10AboutSuccess getApiRainbowEnduserV10About(accept)

About enduser portal

Get portal information (module name, version)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CommonApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowEnduserV10About(accept).then(function(data) {
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

[**GetApiRainbowEnduserV10AboutSuccess**](GetApiRainbowEnduserV10AboutSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiRainbowPing

> GetApiRainbowPingSuccess getApiRainbowPing(accept)

Get enduser portal status report

This API allows to check enduser portal status.       If no XMPP connections are available and/or if no database connection is available, an error 503 Service Unavailable is returned.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CommonApi();
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
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CommonApi();
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
- **Accept**: application/json, text/plain


## putApiRainbowLogsLevels

> PutApiRainbowLogsLevelsSuccess putApiRainbowLogsLevels(body)

Change log level

Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CommonApi();
var body = new RainbowEnduserPortal.PutApiRainbowLogsLevels(); // PutApiRainbowLogsLevels | 
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

