# SamlAuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSamlAssertion**](SamlAuthenticationApi.md#getSamlAssertion) | **GET** /api/rainbow/authentication/v1.0/saml/{companyId}/assert | IDP logout response
[**getSamlAssertionConfiguration**](SamlAuthenticationApi.md#getSamlAssertionConfiguration) | **GET** /api/rainbow/authentication/v1.0/saml/{companyId}/metadata.xml | Get assertion configuration for a company
[**getSamlLogin**](SamlAuthenticationApi.md#getSamlLogin) | **GET** /api/rainbow/authentication/v1.0/saml/login | Initiate an SAML authentication
[**getSamlLogout**](SamlAuthenticationApi.md#getSamlLogout) | **GET** /api/rainbow/authentication/v1.0/saml/logout | Close SAML session
[**postSamlAssertion**](SamlAuthenticationApi.md#postSamlAssertion) | **POST** /api/rainbow/authentication/v1.0/saml/{companyId}/assert | IDP authentication response


<a name="getSamlAssertion"></a>
# **getSamlAssertion**
> getSamlAssertion(companyId, accept)

IDP logout response

This API allows IDP server to respond to SAML logout request or ask for SAML logout.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.SamlAuthenticationApi;


SamlAuthenticationApi apiInstance = new SamlAuthenticationApi();
String companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
String accept = "accept_example"; // String | application/json
try {
    apiInstance.getSamlAssertion(companyId, accept);
} catch (ApiException e) {
    System.err.println("Exception when calling SamlAuthenticationApi#getSamlAssertion");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) |
 **accept** | **String**| application/json |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/unknown

<a name="getSamlAssertionConfiguration"></a>
# **getSamlAssertionConfiguration**
> GetSamlAssertionConfigurationSuccess getSamlAssertionConfiguration(companyId, accept)

Get assertion configuration for a company

This API allows an IDP server to retrieve ASSERTION configuration to callback Rainbow SP after an SAML authentication request

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.SamlAuthenticationApi;


SamlAuthenticationApi apiInstance = new SamlAuthenticationApi();
String companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
String accept = "accept_example"; // String | application/json
try {
    GetSamlAssertionConfigurationSuccess result = apiInstance.getSamlAssertionConfiguration(companyId, accept);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SamlAuthenticationApi#getSamlAssertionConfiguration");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) |
 **accept** | **String**| application/json |

### Return type

[**GetSamlAssertionConfigurationSuccess**](GetSamlAssertionConfigurationSuccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

<a name="getSamlLogin"></a>
# **getSamlLogin**
> getSamlLogin(companyId, challenge)

Initiate an SAML authentication

This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.SamlAuthenticationApi;


SamlAuthenticationApi apiInstance = new SamlAuthenticationApi();
String companyId = "companyId_example"; // String | User company identifier: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid=user1@company.com
String challenge = "challenge_example"; // String | challenge for application authentication: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid=user1@company.com
try {
    apiInstance.getSamlLogin(companyId, challenge);
} catch (ApiException e) {
    System.err.println("Exception when calling SamlAuthenticationApi#getSamlLogin");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| User company identifier: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com |
 **challenge** | **String**| challenge for application authentication: this value can be retrieve using GET /api/rainbow/authentication/v1.0/urls?uid&#x3D;user1@company.com |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/unknown

<a name="getSamlLogout"></a>
# **getSamlLogout**
> getSamlLogout()

Close SAML session

This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.SamlAuthenticationApi;


SamlAuthenticationApi apiInstance = new SamlAuthenticationApi();
try {
    apiInstance.getSamlLogout();
} catch (ApiException e) {
    System.err.println("Exception when calling SamlAuthenticationApi#getSamlLogout");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/unknown

<a name="postSamlAssertion"></a>
# **postSamlAssertion**
> PostSamlAssertionSuccess postSamlAssertion(companyId, body)

IDP authentication response

This API allows IDP server to provide the identity of a user which have performed an SAML authentication (If the user suceeded in the authentication process). This identity provided by the IDP will be used to retrieve the associated Rainbow user.

### Example
```java
// Import classes:
//import com.ale.rainbow.s2s.client.auth.ApiException;
//import com.ale.rainbow.s2s.client.auth.api.SamlAuthenticationApi;


SamlAuthenticationApi apiInstance = new SamlAuthenticationApi();
String companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
PostSamlAssertion body = new PostSamlAssertion(); // PostSamlAssertion | 
try {
    PostSamlAssertionSuccess result = apiInstance.postSamlAssertion(companyId, body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SamlAuthenticationApi#postSamlAssertion");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) |
 **body** | [**PostSamlAssertion**](PostSamlAssertion.md)|  |

### Return type

[**PostSamlAssertionSuccess**](PostSamlAssertionSuccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

