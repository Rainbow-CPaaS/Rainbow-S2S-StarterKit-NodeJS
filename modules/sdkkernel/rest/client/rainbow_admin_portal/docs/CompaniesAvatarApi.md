# RainbowAdminPortal.CompaniesAvatarApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminCompaniesDeleteAvatar**](CompaniesAvatarApi.md#adminCompaniesDeleteAvatar) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/avatar | Delete company&#39;s avatar
[**adminCompaniesGetAvatar**](CompaniesAvatarApi.md#adminCompaniesGetAvatar) | **GET** /api/avatar/{companyId} | Get company&#39;s avatar
[**adminCompaniesPostAvatar**](CompaniesAvatarApi.md#adminCompaniesPostAvatar) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/avatar | Upload company&#39;s avatar



## adminCompaniesDeleteAvatar

> AdminCompaniesDeleteAvatarSuccess adminCompaniesDeleteAvatar(companyId, accept)

Delete company&#39;s avatar

This API can be used to delete avatar image for a given companyId.       Only a superadmin is allowed to handle avatars for &#39;Default&#39; and &#39;Terminated&#39; companies.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesAvatarApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var accept = "accept_example"; // String | application/json
apiInstance.adminCompaniesDeleteAvatar(companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of administrators is requested | 
 **accept** | **String**| application/json | 

### Return type

[**AdminCompaniesDeleteAvatarSuccess**](AdminCompaniesDeleteAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminCompaniesGetAvatar

> AdminCompaniesGetAvatarSuccess adminCompaniesGetAvatar(companyId, opts)

Get company&#39;s avatar

This API can be used to retrieve company&#39;s avatar (logo).    Example: GET https://openrainbow.com/api/avatar/56c5c19f94141765119f896c?size&#x3D;128       Clients can request avatars in a given size by specifying size query string parameter.    Avatar file can be resized from 1px to its original resolution, with a maximum of 2048px:   * If no size option is requested, avatar is returned by default with resolution of 80px. * Max requestable size is 2048. **If a higher resolution is requested, the default size is returned instead, i.e. 80px.** * Original avatars resolution can&#39;t be increased. If uploaded avatar size is 128 x 128 px, even is client request avatar with size 256, the original avatar file will be returned (128px).  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesAvatarApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var opts = {
  'size': 3.4 // Number | Specify avatar size in pixels (square size x size).
};
apiInstance.adminCompaniesGetAvatar(companyId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of administrators is requested | 
 **size** | **Number**| Specify avatar size in pixels (square size x size). | [optional] 

### Return type

[**AdminCompaniesGetAvatarSuccess**](AdminCompaniesGetAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminCompaniesPostAvatar

> AdminCompaniesPostAvatarSuccess adminCompaniesPostAvatar(companyId)

Upload company&#39;s avatar

This API can be used to upload avatar image for a given companyId       Rules:   * Avatar file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If company already has an avatar, the existing one is overwritten. * By default, avatar file size is limited to 4194304 bytes (4 MB) (this limit can be changed by integration team in admin portal config file). * When an avatar is uploaded, the field &#x60;lastAvatarUpdateDate&#x60; of the company is updated to the current date.  Only a superadmin is allowed to handle avatars for &#39;Default&#39; and &#39;Terminated&#39; companies.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesAvatarApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
apiInstance.adminCompaniesPostAvatar(companyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of administrators is requested | 

### Return type

[**AdminCompaniesPostAvatarSuccess**](AdminCompaniesPostAvatarSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

