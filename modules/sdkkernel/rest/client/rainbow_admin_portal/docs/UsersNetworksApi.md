# RainbowAdminPortal.UsersNetworksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminUsersPostUserNetworks**](UsersNetworksApi.md#adminUsersPostUserNetworks) | **POST** /api/rainbow/admin/v1.0/users/{userId}/networks | Add users to user network



## adminUsersPostUserNetworks

> AdminUsersPostUserNetworksSuccess adminUsersPostUserNetworks(userId, body)

Add users to user network

This API can be used to add users to requested user networks.       BETA: this API is currently in beta. Restriction: only 1 user can be provided in users array (others are ignored)       &#x60;superadmin&#x60; can set user network from any users existing in Rainbow.    &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; can only set user network for users being in companies being End Customers of their BP company (i.e. all the companies having bpId equal to their companyId) and their own BP company.    &#x60;organization_admin&#x60; can only set user network for users being in companies under their organisation.    &#x60;company_admin&#x60; can only set user network for users being in their company.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersNetworksApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var body = new RainbowAdminPortal.AdminUsersPostUserNetworks(); // AdminUsersPostUserNetworks | 
apiInstance.adminUsersPostUserNetworks(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **body** | [**AdminUsersPostUserNetworks**](AdminUsersPostUserNetworks.md)|  | 

### Return type

[**AdminUsersPostUserNetworksSuccess**](AdminUsersPostUserNetworksSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

