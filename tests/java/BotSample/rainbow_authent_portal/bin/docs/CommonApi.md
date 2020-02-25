# CommonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetrics**](CommonApi.md#deleteMetrics) | **DELETE** /api/rainbow/metrics | Clear performance metrics
[**getApiRainbowAuthenticationV10About**](CommonApi.md#getApiRainbowAuthenticationV10About) | **GET** /api/rainbow/authentication/v1.0/about | About authentication portal
[**getApiRainbowPing**](CommonApi.md#getApiRainbowPing) | **GET** /api/rainbow/ping | Get authentication portal status report
[**getMetrics**](CommonApi.md#getMetrics) | **GET** /api/rainbow/metrics | Get performance metrics
[**putApiRainbowLogsLevels**](CommonApi.md#putApiRainbowLogsLevels) | **PUT** /api/rainbow/logs/levels | Change log level


<a name="deleteMetrics"></a>
# **deleteMetrics**
> DeleteMetricsSuccess deleteMetrics(accept)

Clear performance metrics

Clear metrics

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.CommonApi;


CommonApi apiInstance = new CommonApi();
String accept = "accept_example"; // String | application/json.  Then the result is in JSON format. For other cases the result is in text format.
try {
    DeleteMetricsSuccess result = apiInstance.deleteMetrics(accept);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommonApi#deleteMetrics");
    e.printStackTrace();
}
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

<a name="getApiRainbowAuthenticationV10About"></a>
# **getApiRainbowAuthenticationV10About**
> GetApiRainbowAuthenticationV10AboutSuccess getApiRainbowAuthenticationV10About(accept)

About authentication portal

Get portal information (module name, version)

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.CommonApi;


CommonApi apiInstance = new CommonApi();
String accept = "accept_example"; // String | application/json
try {
    GetApiRainbowAuthenticationV10AboutSuccess result = apiInstance.getApiRainbowAuthenticationV10About(accept);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommonApi#getApiRainbowAuthenticationV10About");
    e.printStackTrace();
}
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

<a name="getApiRainbowPing"></a>
# **getApiRainbowPing**
> GetApiRainbowPingSuccess getApiRainbowPing(accept)

Get authentication portal status report

This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.CommonApi;


CommonApi apiInstance = new CommonApi();
String accept = "accept_example"; // String | application/json
try {
    GetApiRainbowPingSuccess result = apiInstance.getApiRainbowPing(accept);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommonApi#getApiRainbowPing");
    e.printStackTrace();
}
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

<a name="getMetrics"></a>
# **getMetrics**
> GetMetricsSuccess getMetrics(accept)

Get performance metrics

Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.CommonApi;


CommonApi apiInstance = new CommonApi();
String accept = "accept_example"; // String | application/json.  Then the result is in  JSON format. For other cases the result is in text format.
try {
    GetMetricsSuccess result = apiInstance.getMetrics(accept);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommonApi#getMetrics");
    e.printStackTrace();
}
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

<a name="putApiRainbowLogsLevels"></a>
# **putApiRainbowLogsLevels**
> PutApiRainbowLogsLevelsSuccess putApiRainbowLogsLevels(body)

Change log level

Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.CommonApi;


CommonApi apiInstance = new CommonApi();
PutApiRainbowLogsLevels body = new PutApiRainbowLogsLevels(); // PutApiRainbowLogsLevels | 
try {
    PutApiRainbowLogsLevelsSuccess result = apiInstance.putApiRainbowLogsLevels(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommonApi#putApiRainbowLogsLevels");
    e.printStackTrace();
}
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

