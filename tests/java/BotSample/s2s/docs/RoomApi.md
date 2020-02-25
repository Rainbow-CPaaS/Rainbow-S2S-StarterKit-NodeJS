# RoomApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roomJoin**](RoomApi.md#roomJoin) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/rooms/{roomId}/join | Join a room


<a name="roomJoin"></a>
# **roomJoin**
> RoomStatus roomJoin(cnxId, roomId)

Join a room

Join a room

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.s2s.ApiClient;
import com.ale.rainbow.s2s.client.s2s.ApiException;
import com.ale.rainbow.s2s.client.s2s.Configuration;
import com.ale.rainbow.s2s.client.s2s.auth.*;
import com.ale.rainbow.s2s.client.s2s.models.*;
import com.ale.rainbow.s2s.client.s2s.api.RoomApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://openrainbow.com:443");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    RoomApi apiInstance = new RoomApi(defaultClient);
    String cnxId = "cnxId_example"; // String | Connection id
    String roomId = "roomId_example"; // String | Room id
    try {
      RoomStatus result = apiInstance.roomJoin(cnxId, roomId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RoomApi#roomJoin");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **roomId** | **String**| Room id |

### Return type

[**RoomStatus**](RoomStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

