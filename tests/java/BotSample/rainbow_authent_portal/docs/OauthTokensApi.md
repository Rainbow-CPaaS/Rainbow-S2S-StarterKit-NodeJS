# OauthTokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOAuthToken**](OauthTokensApi.md#deleteOAuthToken) | **DELETE** /api/rainbow/authentication/v1.0/oauth/tokens/{tokenId} | Delete an OAuth token
[**getOAuthToken**](OauthTokensApi.md#getOAuthToken) | **GET** /api/rainbow/authentication/v1.0/oauth/tokens | Get all OAuth token
[**getOAuthTokenById**](OauthTokensApi.md#getOAuthTokenById) | **GET** /api/rainbow/authentication/v1.0/oauth/tokens/{tokenId} | Get an OAuth token


<a name="deleteOAuthToken"></a>
# **deleteOAuthToken**
> DeleteOAuthTokenSuccess deleteOAuthToken(tokenId, accept)

Delete an OAuth token

This API allows users to revoke OAuth token they have previously granted for applications. &lt;br/&gt; &lt;br/&gt; Once an OAuth token is revoked, the application for which this token has been issued will no longer be able to use Rainbow APIs in the name of the user.

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.OauthTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    OauthTokensApi apiInstance = new OauthTokensApi(defaultClient);
    String tokenId = "tokenId_example"; // String | OAuth token unique identifier (like 5c6c32532204570d233816d2)
    String accept = "accept_example"; // String | application/json
    try {
      DeleteOAuthTokenSuccess result = apiInstance.deleteOAuthToken(tokenId, accept);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OauthTokensApi#deleteOAuthToken");
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
 **tokenId** | **String**| OAuth token unique identifier (like 5c6c32532204570d233816d2) |
 **accept** | **String**| application/json |

### Return type

[**DeleteOAuthTokenSuccess**](DeleteOAuthTokenSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Server error |  -  |

<a name="getOAuthToken"></a>
# **getOAuthToken**
> GetOAuthTokenSuccess getOAuthToken(accept, format, limit, offset, sortField, sortOrder)

Get all OAuth token

This API allows users to list all OAuth tokens they have generated. &lt;br/&gt; &lt;br/&gt; An OAuth token is generated when an application logs a user using OAuth 2.0 protocol. An OAuth token gives the possibility for the application to use Rainbow APIs in the name of the user (delegation).

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.OauthTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    OauthTokensApi apiInstance = new OauthTokensApi(defaultClient);
    String accept = "accept_example"; // String | application/json
    String format = "small"; // String | Allows to retrieve more or less OAuth token details in response. <br/> - `small`: id, appId, appName, userId <br/> - `medium`: id, appId, appName, userId, scope, creationDate, accessTokenIssuedAt, refreshTokenExpiresAt <br/> - `full`: all OAuth token fields
    BigDecimal limit = new BigDecimal(); // BigDecimal | Allow to specify the number of OAuth tokens to retrieve.
    BigDecimal offset = new BigDecimal(); // BigDecimal | Allow to specify the position of first OAuth token to retrieve (first OAuth token if not specified). Warning: if offset > total, no results are returned.
    String sortField = "\"appName\""; // String | Sort OAuth tokens list based on the given field.
    BigDecimal sortOrder = new BigDecimal(); // BigDecimal | Specify order when sorting OAuth tokens list.
    try {
      GetOAuthTokenSuccess result = apiInstance.getOAuthToken(accept, format, limit, offset, sortField, sortOrder);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OauthTokensApi#getOAuthToken");
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
 **accept** | **String**| application/json |
 **format** | **String**| Allows to retrieve more or less OAuth token details in response. &lt;br/&gt; - &#x60;small&#x60;: id, appId, appName, userId &lt;br/&gt; - &#x60;medium&#x60;: id, appId, appName, userId, scope, creationDate, accessTokenIssuedAt, refreshTokenExpiresAt &lt;br/&gt; - &#x60;full&#x60;: all OAuth token fields | [optional] [default to small] [enum: small, medium, full]
 **limit** | **BigDecimal**| Allow to specify the number of OAuth tokens to retrieve. | [optional] [default to 100.0d]
 **offset** | **BigDecimal**| Allow to specify the position of first OAuth token to retrieve (first OAuth token if not specified). Warning: if offset &gt; total, no results are returned. | [optional]
 **sortField** | **String**| Sort OAuth tokens list based on the given field. | [optional] [default to &quot;appName&quot;]
 **sortOrder** | **BigDecimal**| Specify order when sorting OAuth tokens list. | [optional] [default to 1.0d] [enum: -1, 1]

### Return type

[**GetOAuthTokenSuccess**](GetOAuthTokenSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**500** | Server error |  -  |

<a name="getOAuthTokenById"></a>
# **getOAuthTokenById**
> GetOAuthTokenByIdSuccess getOAuthTokenById(tokenId, accept)

Get an OAuth token

This API allows users to get an OAuth token.

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.OauthTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    OauthTokensApi apiInstance = new OauthTokensApi(defaultClient);
    String tokenId = "tokenId_example"; // String | OAuth token unique identifier (like 5c6c32532204570d233816d2)
    String accept = "accept_example"; // String | application/json
    try {
      GetOAuthTokenByIdSuccess result = apiInstance.getOAuthTokenById(tokenId, accept);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OauthTokensApi#getOAuthTokenById");
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
 **tokenId** | **String**| OAuth token unique identifier (like 5c6c32532204570d233816d2) |
 **accept** | **String**| application/json |

### Return type

[**GetOAuthTokenByIdSuccess**](GetOAuthTokenByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Server error |  -  |

