# RainbowEnduserPortal.CountriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountries**](CountriesApi.md#getCountries) | **GET** /api/rainbow/enduser/v1.0/countries | Get list of countries



## getCountries

> GetCountriesSuccess getCountries()

Get list of countries

This API allows to retrieve the list of countries supported by Rainbow Server.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.CountriesApi();
apiInstance.getCountries().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCountriesSuccess**](GetCountriesSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

