# RainbowAuthenticationPortal.AuthenticationUrlsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLoginUrl**](AuthenticationUrlsApi.md#getLoginUrl) | **GET** /api/rainbow/authentication/v1.0/urls | Get user authentication URLs


<a name="getLoginUrl"></a>
# **getLoginUrl**
> GetLoginUrlSuccess getLoginUrl(uid)

Get user authentication URLs

This API allows Rainbow users to know that URL they can use to perform a login.

### Example
```javascript
var RainbowAuthenticationPortal = require('rainbow_authentication_portal');

var apiInstance = new RainbowAuthenticationPortal.AuthenticationUrlsApi();
var uid = "uid_example"; // String | Rainbow user unique identifier: typically his login email
apiInstance.getLoginUrl(uid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**| Rainbow user unique identifier: typically his login email | 

### Return type

[**GetLoginUrlSuccess**](GetLoginUrlSuccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

