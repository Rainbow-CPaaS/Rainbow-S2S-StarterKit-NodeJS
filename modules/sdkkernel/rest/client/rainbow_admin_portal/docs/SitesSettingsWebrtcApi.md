# RainbowAdminPortal.SitesSettingsWebrtcApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSiteIceServers**](SitesSettingsWebrtcApi.md#deleteSiteIceServers) | **DELETE** /api/rainbow/admin/v1.0/sites/{siteId}/settings/iceservers/{iceServerId} | Delete an ICE server
[**postSiteIceServers**](SitesSettingsWebrtcApi.md#postSiteIceServers) | **POST** /api/rainbow/admin/v1.0/sites/{siteId}/settings/iceservers | Create an ICE server
[**putSiteIceServers**](SitesSettingsWebrtcApi.md#putSiteIceServers) | **PUT** /api/rainbow/admin/v1.0/sites/{siteId}/settings/iceservers/{iceServerId} | Update an ICE server



## deleteSiteIceServers

> DeleteSiteIceServersSuccess deleteSiteIceServers(iceServerId, siteId, accept, contentType)

Delete an ICE server

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
apiInstance.deleteSiteIceServers(iceServerId, siteId, accept, contentType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 

### Return type

[**DeleteSiteIceServersSuccess**](DeleteSiteIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSiteIceServers

> PostSiteIceServersSuccess postSiteIceServers(siteId, body)

Create an ICE server

For the &#39;Enterprise (E1)&#39; offer, the premium offer, the Multi-Layer organization is defined. It describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS.    The site is a geographical entity. It can own specific settings like a WebRTC configuration.    When a mobile or desktop Rainbow client has to use this media, it has to use the API \&quot;Enduser Settings WebRTC\&quot; ([GET /api/rainbow/enduser/v1.0/settings/iceservers][0]), to get setting.    When the end user is liked to a site, ICE server settings of this site are given when its exist. Else a fallback is searched.  [0]: /enduser/#api-settings_WebRTC

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSettingsWebrtcApi();
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PostSiteIceServers(); // PostSiteIceServers | 
apiInstance.postSiteIceServers(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PostSiteIceServers**](PostSiteIceServers.md)|  | 

### Return type

[**PostSiteIceServersSuccess**](PostSiteIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSiteIceServers

> PutSiteIceServersSuccess putSiteIceServers(iceServerId, siteId, body)

Update an ICE server

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSettingsWebrtcApi();
var iceServerId = "iceServerId_example"; // String | ICE server unique identifier (like 5734a186070f38215854b61f)
var siteId = "siteId_example"; // String | Site unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutSiteIceServers(); // PutSiteIceServers | 
apiInstance.putSiteIceServers(iceServerId, siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iceServerId** | **String**| ICE server unique identifier (like 5734a186070f38215854b61f) | 
 **siteId** | **String**| Site unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutSiteIceServers**](PutSiteIceServers.md)|  | 

### Return type

[**PutSiteIceServersSuccess**](PutSiteIceServersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

