# RainbowEnduserPortal.NotificationsImApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendIm**](NotificationsImApi.md#sendIm) | **POST** /api/rainbow/enduser/v1.0/notifications/im | Send an IM to a Rainbow user



## sendIm

> SendImSuccess sendIm(body)

Send an IM to a Rainbow user

This API allows to send an instant message (IM) from the logged in user to another Rainbow user.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.NotificationsImApi();
var body = new RainbowEnduserPortal.SendIm(); // SendIm | 
apiInstance.sendIm(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendIm**](SendIm.md)|  | 

### Return type

[**SendImSuccess**](SendImSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

