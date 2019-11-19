# RainbowApplicationPortal.ApplicationsDevelopersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsDevelopersPostConfirm**](ApplicationsDevelopersApi.md#applicationsDevelopersPostConfirm) | **POST** /api/rainbow/applications/v1.0/developers/confirm | Confirm that a user has requested a developer account creation.



## applicationsDevelopersPostConfirm

> ApplicationsDevelopersPostConfirmSuccess applicationsDevelopersPostConfirm(body)

Confirm that a user has requested a developer account creation.

This API can be used to confirm that a user has requested a developer account creation. Used only in the 2 steps onboarding scenario. See (#applications/developers:applications/developers/PostRegister). To confirm the user has the role app_admin, an email is sent to the user. The email contains this url, and the user must used it to confirm it&#39;s registration.

### Example

```javascript
var RainbowApplicationPortal = require('rainbow_application_portal');
var defaultClient = RainbowApplicationPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowApplicationPortal.ApplicationsDevelopersApi();
var body = new RainbowApplicationPortal.ApplicationsDevelopersPostConfirm(); // ApplicationsDevelopersPostConfirm | 
apiInstance.applicationsDevelopersPostConfirm(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicationsDevelopersPostConfirm**](ApplicationsDevelopersPostConfirm.md)|  | 

### Return type

[**ApplicationsDevelopersPostConfirmSuccess**](ApplicationsDevelopersPostConfirmSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

