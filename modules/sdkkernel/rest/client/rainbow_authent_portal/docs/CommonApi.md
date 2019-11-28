# RainbowAuthenticationPortal.CommonApi

All URIs are relative to *https://openrainbow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetrics**](CommonApi.md#deleteMetrics) | **DELETE** /api/rainbow/metrics | Clear performance metrics
[**getApiRainbowAuthenticationV10About**](CommonApi.md#getApiRainbowAuthenticationV10About) | **GET** /api/rainbow/authentication/v1.0/about | About authentication portal
[**getApiRainbowPing**](CommonApi.md#getApiRainbowPing) | **GET** /api/rainbow/ping | Get authentication portal status report
[**getMetrics**](CommonApi.md#getMetrics) | **GET** /api/rainbow/metrics | Get performance metrics
[**putApiRainbowLogsLevels**](CommonApi.md#putApiRainbowLogsLevels) | **PUT** /api/rainbow/logs/levels | Change log level



## deleteMetrics

> DeleteMetricsSuccess deleteMetrics(accept)

Clear performance metrics

Clear metrics

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.CommonApi();
var accept = "accept_example"; // String | application/json.  Then the result is in JSON format. For other cases the result is in text format.
apiInstance.deleteMetrics(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json.  Then the result is in JSON format. For other cases the result is in text format. | 

### Return type

[**DeleteMetricsSuccess**](DeleteMetricsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## getApiRainbowAuthenticationV10About

> GetApiRainbowAuthenticationV10AboutSuccess getApiRainbowAuthenticationV10About(accept)

About authentication portal

Get portal information (module name, version)

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.CommonApi();
var accept = "accept_example"; // String | application/json
apiInstance.getApiRainbowAuthenticationV10About(accept).then(function(data) {
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

[**GetApiRainbowAuthenticationV10AboutSuccess**](GetApiRainbowAuthenticationV10AboutSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiRainbowPing

> GetApiRainbowPingSuccess getApiRainbowPing(accept)

Get authentication portal status report

This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.CommonApi();
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

Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.CommonApi();
var accept = "accept_example"; // String | application/json.  Then the result is in  JSON format. For other cases the result is in text format.
apiInstance.getMetrics(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json.  Then the result is in  JSON format. For other cases the result is in text format. | 

### Return type

[**GetMetricsSuccess**](GetMetricsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## putApiRainbowLogsLevels

> PutApiRainbowLogsLevelsSuccess putApiRainbowLogsLevels(putApiRainbowLogsLevels)

Change log level

Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)

### Example

```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.CommonApi();
var putApiRainbowLogsLevels = new RainbowAuthenticationPortal.PutApiRainbowLogsLevels(); // PutApiRainbowLogsLevels | 
apiInstance.putApiRainbowLogsLevels(putApiRainbowLogsLevels).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putApiRainbowLogsLevels** | [**PutApiRainbowLogsLevels**](PutApiRainbowLogsLevels.md)|  | 

### Return type

[**PutApiRainbowLogsLevelsSuccess**](PutApiRainbowLogsLevelsSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

