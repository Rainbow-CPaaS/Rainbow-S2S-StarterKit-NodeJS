# RainbowAdminPortal.NotificationsImApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationsIM**](NotificationsImApi.md#notificationsIM) | **POST** /api/rainbow/admin/v1.0/notifications/im | Send an IM to a Rainbow user
[**notificationsIMBot**](NotificationsImApi.md#notificationsIMBot) | **POST** /api/rainbow/admin/v1.0/notifications/im/bot | Send an IM to a Rainbow user from a bot



## notificationsIM

> NotificationsIMSuccess notificationsIM(body)

Send an IM to a Rainbow user

This API allows superadmin to send an instant message (IM) from a Rainbow user (who can be himself) to another Rainbow user.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.NotificationsImApi();
var body = new RainbowAdminPortal.NotificationsIM(); // NotificationsIM | 
apiInstance.notificationsIM(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationsIM**](NotificationsIM.md)|  | 

### Return type

[**NotificationsIMSuccess**](NotificationsIMSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## notificationsIMBot

> NotificationsIMBotSuccess notificationsIMBot(body)

Send an IM to a Rainbow user from a bot

This API allows superadmin to send an instant message (IM) from a Rainbow bot to another Rainbow user.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.NotificationsImApi();
var body = new RainbowAdminPortal.NotificationsIMBot(); // NotificationsIMBot | 
apiInstance.notificationsIMBot(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationsIMBot**](NotificationsIMBot.md)|  | 

### Return type

[**NotificationsIMBotSuccess**](NotificationsIMBotSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

