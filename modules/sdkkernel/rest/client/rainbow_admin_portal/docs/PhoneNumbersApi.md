# RainbowAdminPortal.PhoneNumbersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneNumbersAnalyze**](PhoneNumbersApi.md#phoneNumbersAnalyze) | **POST** /api/rainbow/admin/v1.0/phone-numbers/analyze | Analyze phone number



## phoneNumbersAnalyze

> PhoneNumbersAnalyzeSuccess phoneNumbersAnalyze(body)

Analyze phone number

This API allows to analyze a phone number using google libphonenumber.    This API can be used for debugging purpose.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PhoneNumbersApi();
var body = new RainbowAdminPortal.PhoneNumbersAnalyze(); // PhoneNumbersAnalyze | 
apiInstance.phoneNumbersAnalyze(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PhoneNumbersAnalyze**](PhoneNumbersAnalyze.md)|  | 

### Return type

[**PhoneNumbersAnalyzeSuccess**](PhoneNumbersAnalyzeSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

