# AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiRainbowAuthenticationV10Validator**](AuthenticationApi.md#getApiRainbowAuthenticationV10Validator) | **GET** /api/rainbow/authentication/v1.0/validator | Validate user JWT
[**getBasicLogin**](AuthenticationApi.md#getBasicLogin) | **GET** /api/rainbow/authentication/v1.0/login | Login user
[**getLogout**](AuthenticationApi.md#getLogout) | **GET** /api/rainbow/authentication/v1.0/logout | Logout user
[**getRenew**](AuthenticationApi.md#getRenew) | **GET** /api/rainbow/authentication/v1.0/renew | Renew user JWT


<a name="getApiRainbowAuthenticationV10Validator"></a>
# **getApiRainbowAuthenticationV10Validator**
> GetApiRainbowAuthenticationV10ValidatorSuccess getApiRainbowAuthenticationV10Validator(accept)

Validate user JWT

This API allows to get a validation status on a token.

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    String accept = "accept_example"; // String | application/json
    try {
      GetApiRainbowAuthenticationV10ValidatorSuccess result = apiInstance.getApiRainbowAuthenticationV10Validator(accept);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#getApiRainbowAuthenticationV10Validator");
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

### Return type

[**GetApiRainbowAuthenticationV10ValidatorSuccess**](GetApiRainbowAuthenticationV10ValidatorSuccess.md)

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

<a name="getBasicLogin"></a>
# **getBasicLogin**
> GetBasicLoginSuccess getBasicLogin(xRainbowAppAuth, accept, xRainbowClient, xRainbowClientVersion)

Login user

This API allows Rainbow users to login. &lt;br/&gt; &lt;br/&gt; Application is also authenticated during the user login. &lt;br/&gt; &lt;br/&gt; If login is successful, the API returns a &lt;b&gt;JSON Web Token&lt;/b&gt; (&lt;abbr title&#x3D;\&quot;JSON Web Token\&quot;&gt;JWT&lt;/abbr&gt;) which has to be provided by clients for all Rainbow APIs requiring user authentication: &lt;ul&gt;     &lt;li&gt;The JWT is valid only for a given time period.&lt;/li&gt;     &lt;li&gt;The JWT can be renewed a few times using API &lt;a href&#x3D;\&quot;#api-authentication-GetRenew\&quot;&gt;GET /api/rainbow/authentication/v1.0/renew&lt;/a&gt;.&lt;/li&gt;     &lt;li&gt;The maximum number of renew is given in the JWT payload, as well as the current number of time the token has been renewed (see below).&lt;/li&gt;     &lt;li&gt;Once the JWT expired, or if the maximum of token renew has been reached, user must login again using this API.&lt;/li&gt; &lt;/ul&gt; The JWT returned contains the following data in payload: &lt;pre&gt;&lt;code class&#x3D;\&quot;language-json\&quot;&gt;{       \&quot;countRenewed\&quot;: 0,  // Number of times the token has been renewed       \&quot;maxTokenRenew\&quot;: 5,  // Number of times the token can be renewed       \&quot;user\&quot;: {           \&quot;id\&quot;: \&quot;572756967bfbca0d0e09a6b4\&quot;,  // Logged in user id           \&quot;loginEmail\&quot;: \&quot;user@company.com\&quot;  // Logged in user loginEmail       },       \&quot;app\&quot;: {           \&quot;id\&quot;: \&quot;598983029db9b5b14693a6f0\&quot;,  // Application id used for the authentication           \&quot;name\&quot;: \&quot;My App\&quot;  // Application name       },       \&quot;iat\&quot;: 1463588327,  // (Issued At) Time at which the JWT was issued       \&quot;exp\&quot;: 2183588327  // (Expiration Time) Expiration time after which the JWT won&#39;t be accepted }&lt;/code&gt;&lt;/pre&gt; &lt;br/&gt; &lt;br/&gt; If login / password combination is wrong, an error 401 is return. &lt;br/&gt; If appId / appSecret combination is wrong, an error 401 is return. &lt;br/&gt;The following login protection is implemented: &lt;ul&gt;     &lt;li&gt;After a given number of login failure (5 by default), the user account is &lt;b&gt;locked&lt;/b&gt; for a given time period (60 min by default).&lt;/li&gt;     &lt;li&gt;As long as the maximum number of login failure has not been reached, a 401 error with errorDetailsCode &lt;code&gt;401500&lt;/code&gt; is returned.&lt;/li&gt;     &lt;li&gt;Once the maximum number of login attempts has been reached, a 401 error with errorDetailsCode &lt;code&gt;401501&lt;/code&gt; is returned: the user account is locked for the given time period.&lt;/li&gt;     &lt;li&gt;While the user account is locked, the same response with errorDetailsCode &lt;code&gt;401501&lt;/code&gt; will be returned for each new login attempt for this user account     (even if a good login / password combination is provided). If the login / password combination is wrong, the locked time period restarts from this new wrong attempt.&lt;/li&gt;     &lt;li&gt;Once the locked time period is over, a login with the good credentials will be allowed.&lt;/li&gt;     &lt;li&gt;While the account is locked, the user can reset his password. In that case, his account will be unlocked and he will be able to login with his new password.&lt;/li&gt;     &lt;li&gt;While the account is locked, a superadmin / support / admin (organisation or company level) user can set a new password for this account. In that case, this account will be unlocked     and the user will be able to login with this new password.&lt;/li&gt; &lt;/ul&gt; &lt;dl&gt;     &lt;dt&gt;Warning&lt;/dt&gt;     &lt;dd&gt;login url is case sensitive (lowercase). For example, /Login or /LOGIN won&#39;t work.&lt;/dd&gt;     &lt;dd&gt;login will be forbidden for a certain delay if too much consecutive wrong password errors occurs, after this user has to request a password change or just wait (see implementation details above).&lt;/dd&gt; &lt;/dl&gt; &lt;br/&gt;

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure HTTP basic authorization: Basic
    HttpBasicAuth Basic = (HttpBasicAuth) defaultClient.getAuthentication("Basic");
    Basic.setUsername("YOUR USERNAME");
    Basic.setPassword("YOUR PASSWORD");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    String xRainbowAppAuth = "xRainbowAppAuth_example"; // String | Basic <base64encode(appId:sha256(appSecretuserPassword))> (concatenation of appSecret and userPassword, hashed with sha256)
    String accept = "accept_example"; // String | application/json
    String xRainbowClient = "xRainbowClient_example"; // String | the app used
    String xRainbowClientVersion = "xRainbowClientVersion_example"; // String | 1.10.7
    try {
      GetBasicLoginSuccess result = apiInstance.getBasicLogin(xRainbowAppAuth, accept, xRainbowClient, xRainbowClientVersion);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#getBasicLogin");
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
 **xRainbowAppAuth** | **String**| Basic &lt;base64encode(appId:sha256(appSecretuserPassword))&gt; (concatenation of appSecret and userPassword, hashed with sha256) |
 **accept** | **String**| application/json |
 **xRainbowClient** | **String**| the app used | [optional] [enum: web_win, desk_win, desk_osx, desk_s4b, android, ios, sdk_android, sdk_ios, sdk_node, sdk_web, sdk_net]
 **xRainbowClientVersion** | **String**| 1.10.7 | [optional]

### Return type

[**GetBasicLoginSuccess**](GetBasicLoginSuccess.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**401** | Unauthorized |  -  |
**500** | Server error |  -  |

<a name="getLogout"></a>
# **getLogout**
> GetLogoutSuccess getLogout(accept)

Logout user

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    String accept = "accept_example"; // String | application/json
    try {
      GetLogoutSuccess result = apiInstance.getLogout(accept);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#getLogout");
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

### Return type

[**GetLogoutSuccess**](GetLogoutSuccess.md)

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

<a name="getRenew"></a>
# **getRenew**
> GetRenewSuccess getRenew(accept)

Renew user JWT

This API allows Rainbow users to renew their JSON Web Token (&lt;abbr title&#x3D;\&quot;JSON Web Token\&quot;&gt;JWT&lt;/abbr&gt;), thus extending the expiration date of their current JWT. &lt;br/&gt; &lt;br/&gt; This API requires user to be authenticated with a valid non expired JWT. &lt;br/&gt; If so, a new JWT is returned, with the expiration date starting from now. &lt;br/&gt; &lt;br/&gt; &lt;b&gt;Warning:&lt;/b&gt; The JWT can only be renewed a given number of times, after this user has to login again to get a new token using API &lt;a href&#x3D;\&quot;#api-authentication-GetLogin\&quot;&gt;GET /api/rainbow/authentication/v1.0/login&lt;/a&gt;. &lt;br/&gt; The maximum number of renew is given in the JWT, as well as the current number of time the token has been renewed.

### Example
```java
// Import classes:
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    String accept = "accept_example"; // String | application/json
    try {
      GetRenewSuccess result = apiInstance.getRenew(accept);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#getRenew");
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

### Return type

[**GetRenewSuccess**](GetRenewSuccess.md)

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

