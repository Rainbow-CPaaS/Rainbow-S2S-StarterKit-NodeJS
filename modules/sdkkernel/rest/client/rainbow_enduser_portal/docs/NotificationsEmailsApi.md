# RainbowEnduserPortal.NotificationsEmailsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendOfflineUserConnectionRequestByEmail**](NotificationsEmailsApi.md#sendOfflineUserConnectionRequestByEmail) | **POST** /api/rainbow/enduser/v1.0/notifications/emails/offline | Ask a user offline to connect again via an email
[**sendResetPasswordEmail**](NotificationsEmailsApi.md#sendResetPasswordEmail) | **POST** /api/rainbow/enduser/v1.0/notifications/emails/reset-password | Reset-password email
[**sendSelfRegisterEmail**](NotificationsEmailsApi.md#sendSelfRegisterEmail) | **POST** /api/rainbow/enduser/v1.0/notifications/emails/self-register | Self-register email



## sendOfflineUserConnectionRequestByEmail

> SendOfflineUserConnectionRequestByEmailSuccess sendOfflineUserConnectionRequestByEmail(body)

Ask a user offline to connect again via an email

This API allows to warn a user to answer to an IM, when this other user is to slow to answer. We have to wait a while before sending this email. (default: 15 days. Rainbow parameter) We have also to wait a while between two attempts. (default: 7 days. Rainbow parameter) These parameters are available through user&#39;s settings API.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.NotificationsEmailsApi();
var body = new RainbowEnduserPortal.SendOfflineUserConnectionRequestByEmail(); // SendOfflineUserConnectionRequestByEmail | 
apiInstance.sendOfflineUserConnectionRequestByEmail(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendOfflineUserConnectionRequestByEmail**](SendOfflineUserConnectionRequestByEmail.md)|  | 

### Return type

[**SendOfflineUserConnectionRequestByEmailSuccess**](SendOfflineUserConnectionRequestByEmailSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendResetPasswordEmail

> SendResetPasswordEmailSuccess sendResetPasswordEmail(body)

Reset-password email

This API allows to send a reset-password email to a user. A temporary user token is generated and send in the email body. This token is required in the reset password validation workflow (see documentation of related API: (PUT /api/rainbow/enduser/v1.0/users/:userId/reset-password) for more information).**Note: A rainbow user with the role &#39;guest&#39; can&#39;t reset his password**

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.NotificationsEmailsApi();
var body = new RainbowEnduserPortal.SendResetPasswordEmail(); // SendResetPasswordEmail | 
apiInstance.sendResetPasswordEmail(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendResetPasswordEmail**](SendResetPasswordEmail.md)|  | 

### Return type

[**SendResetPasswordEmailSuccess**](SendResetPasswordEmailSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendSelfRegisterEmail

> SendSelfRegisterEmailSuccess sendSelfRegisterEmail(body)

Self-register email

This API allows to send a self-register email to a user. A temporary user token is generated and send in the email body. This token is required in the self register validation workflow (see documentation of related API: ([POST /api/rainbow/enduser/v1.0/users/self-register][0]) for more information).  [0]: #api-enduser_users-enduser_SelfRegisterUsers

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.NotificationsEmailsApi();
var body = new RainbowEnduserPortal.SendSelfRegisterEmail(); // SendSelfRegisterEmail | 
apiInstance.sendSelfRegisterEmail(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendSelfRegisterEmail**](SendSelfRegisterEmail.md)|  | 

### Return type

[**SendSelfRegisterEmailSuccess**](SendSelfRegisterEmailSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

