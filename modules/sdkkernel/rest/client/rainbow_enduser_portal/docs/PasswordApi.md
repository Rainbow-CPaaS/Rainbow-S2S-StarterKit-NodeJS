# RainbowEnduserPortal.PasswordApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePassword**](PasswordApi.md#changePassword) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/change-password | Update user password
[**resetPassword**](PasswordApi.md#resetPassword) | **PUT** /api/rainbow/enduser/v1.0/users/reset-password | Reset user password



## changePassword

> ChangePasswordSuccess changePassword(userId, body)

Update user password

This API can be used to update password of logged in user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Note than when user password is changed, all its previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.PasswordApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5).
var body = new RainbowEnduserPortal.ChangePassword(); // ChangePassword | 
apiInstance.changePassword(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5). | 
 **body** | [**ChangePassword**](ChangePassword.md)|  | 

### Return type

[**ChangePasswordSuccess**](ChangePasswordSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetPassword

> ResetPasswordSuccess resetPassword(body)

Reset user password

This API can be used by a user to reset his password (i.e. change his password when he does not remember his current password).    This API requires a temporary user token to validate that this is well the user who reset his password.    Clients have to first call POST /api/rainbow/enduser/v1.0/notifications/emails/reset-password so that user receive an email with a temporary token.    User enters this token and his new password, and Clients have to call PUT /api/rainbow/enduser/v1.0/users/:userId/reset-password with this code and the new password.       Note than when user password is reset, all user&#39;s previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.PasswordApi();
var body = new RainbowEnduserPortal.ResetPassword(); // ResetPassword | 
apiInstance.resetPassword(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetPassword**](ResetPassword.md)|  | 

### Return type

[**ResetPasswordSuccess**](ResetPasswordSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

