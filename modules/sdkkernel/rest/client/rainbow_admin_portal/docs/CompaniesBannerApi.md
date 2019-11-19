# RainbowAdminPortal.CompaniesBannerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminCompaniesDeleteBanner**](CompaniesBannerApi.md#adminCompaniesDeleteBanner) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId}/banner | Delete company&#39;s banner
[**adminCompaniesGetBanner**](CompaniesBannerApi.md#adminCompaniesGetBanner) | **GET** /api/banner/{companyId} | Get company&#39;s banner
[**adminCompaniesPostBanner**](CompaniesBannerApi.md#adminCompaniesPostBanner) | **POST** /api/rainbow/admin/v1.0/companies/{companyId}/banner | Upload company&#39;s banner



## adminCompaniesDeleteBanner

> AdminCompaniesDeleteBannerSuccess adminCompaniesDeleteBanner(companyId, accept)

Delete company&#39;s banner

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

var apiInstance = new RainbowAdminPortal.CompaniesBannerApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var accept = "accept_example"; // String | application/json
apiInstance.adminCompaniesDeleteBanner(companyId, accept).then(function(data) {
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

[**AdminCompaniesDeleteBannerSuccess**](AdminCompaniesDeleteBannerSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminCompaniesGetBanner

> AdminCompaniesGetBannerSuccess adminCompaniesGetBanner(companyId, opts)

Get company&#39;s banner

This API can be used to retrieve company&#39;s banner in addition to the logo retrieved via /api/avatar/{companyId}.    Example: GET https://openrainbow.com/api/banner/56c5c19f94141765119f896c?size&#x3D;128       Clients can request banners in a given size by specifying size query string parameter.    Banner file can be resized from 1px to its original resolution:   * If no size option is requested, banner is returned by default with resolution of 80px. * Max requestable size is 2048. **If a higher resolution is requested, the default size is returned instead, i.e. 80px.** * Original banner resolution can&#39;t be increased. If uploaded banner size is 128 x 128 px, even is client request banner with size 256, the original avatar file will be returned (128px).  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesBannerApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var opts = {
  'size': 3.4 // Number | Specify avatar size in pixels (square size x size).
};
apiInstance.adminCompaniesGetBanner(companyId, opts).then(function(data) {
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

[**AdminCompaniesGetBannerSuccess**](AdminCompaniesGetBannerSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminCompaniesPostBanner

> AdminCompaniesPostBannerSuccess adminCompaniesPostBanner(companyId)

Upload company&#39;s banner

This API can be used to upload banner image for a given companyId       Rules:   * Banner file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If company already has a banner, the existing one is overwritten. * By default, banner file size is limited to 10485760 bytes (10 MB) (this limit can be changed by integration team in admin portal config file). * When a banner is uploaded, the field &#x60;lastBannerUpdateDate&#x60; of the company is updated to the current date.  Only a superadmin is allowed to handle banner for &#39;Default&#39; and &#39;Terminated&#39; companies.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesBannerApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
apiInstance.adminCompaniesPostBanner(companyId).then(function(data) {
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

[**AdminCompaniesPostBannerSuccess**](AdminCompaniesPostBannerSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

