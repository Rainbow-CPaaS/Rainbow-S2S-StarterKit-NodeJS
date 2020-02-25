# PresenceApi

All URIs are relative to *http://openrainbow.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**presenceShow**](PresenceApi.md#presenceShow) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences/{userId} | Probe a user&#39;s presence
[**presenceUpdate**](PresenceApi.md#presenceUpdate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences | Set the user&#39;s presence


<a name="presenceShow"></a>
# **presenceShow**
> Presence presenceShow(cnxId, userId)

Probe a user&#39;s presence

Probe a user&#39;s presence

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.PresenceApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

PresenceApi apiInstance = new PresenceApi();
String cnxId = "cnxId_example"; // String | Connection id
String userId = "userId_example"; // String | User id
try {
    Presence result = apiInstance.presenceShow(cnxId, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PresenceApi#presenceShow");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **userId** | **String**| User id |

### Return type

[**Presence**](Presence.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceUpdate"></a>
# **presenceUpdate**
> presenceUpdate(cnxId, presenceUpdate)

Set the user&#39;s presence

A user presence preference could be managed with the following API :  **_/api/rainbow/enduser/v1.0/users/{userId}/settings**  The mapping between this presence setting and the **show/status** fields of the presence stanza is show here :  | setting   | show | status    | | --------- | ---- | --------- | | away      | xa   | away      | | invisible | xa   | n/a       |  | dnd       | dnd  | n/a       |  | online    | n/a  | mode&#x3D;auto |   Moreover, the Rainbow webclient sends presence stanzas with the following **show/status** fields to show user (keyboard/focus) state :  | state    | show | status | | -------- | ---- | ------ | | inactive | away | n/a    | | active   | n/a  | n/a    | 

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
//import com.ale.rainbow.s2s.client.s2s.auth.*;
//import com.ale.rainbow.s2s.client.s2s.api.PresenceApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Bearer
ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
Bearer.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.setApiKeyPrefix("Token");

PresenceApi apiInstance = new PresenceApi();
String cnxId = "cnxId_example"; // String | Connection id
PresenceUpdate presenceUpdate = new PresenceUpdate(); // PresenceUpdate | Presence data
try {
    apiInstance.presenceUpdate(cnxId, presenceUpdate);
} catch (ApiException e) {
    System.err.println("Exception when calling PresenceApi#presenceUpdate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnxId** | **String**| Connection id |
 **presenceUpdate** | [**PresenceUpdate**](PresenceUpdate.md)| Presence data | [optional]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

