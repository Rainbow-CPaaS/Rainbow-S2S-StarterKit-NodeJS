# RainbowAdminPortal.UsersProfilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminUsersDeleteUserProfiles**](UsersProfilesApi.md#adminUsersDeleteUserProfiles) | **DELETE** /api/rainbow/admin/v1.0/users/{userId}/profiles/subscriptions/{subscriptionId} | Delete a user profile
[**adminUsersGetUserProfiles**](UsersProfilesApi.md#adminUsersGetUserProfiles) | **GET** /api/rainbow/admin/v1.0/users/{userId}/profiles | Get a user profiles
[**adminUsersPostUserProfiles**](UsersProfilesApi.md#adminUsersPostUserProfiles) | **POST** /api/rainbow/admin/v1.0/users/{userId}/profiles/subscriptions/{subscriptionId} | Add a user profile



## adminUsersDeleteUserProfiles

> AdminUsersDeleteUserProfilesSuccess adminUsersDeleteUserProfiles(userId, subscriptionId, accept)

Delete a user profile

This API can be used to un-assign a company&#39;s subscription from user profiles.       Profile linked to company&#39;s default subscription can&#39;t be removed.       &#x60;superadmin&#x60; can remove a profile from any user existing in Rainbow.    &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; can remove a profile for users being in End Customer companies linked to their BP company and from users being in their own BP company (or organisation).    &#x60;organization_admin&#x60; can only remove a profile for users being in companies under their organisation.    &#x60;company_admin&#x60; can only remove a profile for users being in their company.       Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/users/56d0277a0261b53142a5cab5/profiles/subscriptions/5808afeb4372eb19547e90cf

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersProfilesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var subscriptionId = "subscriptionId_example"; // String | Company subscription unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminUsersDeleteUserProfiles(userId, subscriptionId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **subscriptionId** | **String**| Company subscription unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminUsersDeleteUserProfilesSuccess**](AdminUsersDeleteUserProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json


## adminUsersGetUserProfiles

> AdminUsersGetUserProfilesSuccess adminUsersGetUserProfiles(userId, accept)

Get a user profiles

This API can be used to get a user&#39;s profiles.       &#x60;superadmin&#x60; and &#x60;support&#x60; can get profiles from any existing user in Rainbow.    &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; can only retrieve profiles of users being in End Customer companies linked to their BP company.    &#x60;organization_admin&#x60; can only retrieve profiles of users being in companies under their organisation.    &#x60;company_admin&#x60; can only get profiles of users being in their company.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/users/56d0277a0261b53142a5cab5/profiles

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersProfilesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var accept = "accept_example"; // String | application/json
apiInstance.adminUsersGetUserProfiles(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **accept** | **String**| application/json | 

### Return type

[**AdminUsersGetUserProfilesSuccess**](AdminUsersGetUserProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminUsersPostUserProfiles

> AdminUsersPostUserProfilesSuccess adminUsersPostUserProfiles(userId, subscriptionId)

Add a user profile

This API can be used to assign a company&#39;s subscription to user profiles (user must be in the same company than the company which own the subscription).       By default, when users are created or moved to a company, user&#39;s company&#39;s subscription to the default offer (Essential) is automatically added to user&#39;s profiles (therefore user&#39;s profiles should never be empty)       &#x60;superadmin&#x60; can add a profile from any user existing in Rainbow.    &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; can add a profile to users being in End Customer companies linked to their BP company and to users being in their own BP company (or organisation).    &#x60;organization_admin&#x60; can only add a profile to users being in companies under their organisation.    &#x60;company_admin&#x60; can only add a profile to users being in their company.       Provided subscriptionId must be one of the subscriptions available in user&#39;s company&#39;s subscriptions list (it can be the company&#39;s subscription to the default offer (Essential)).    The subscription must have the status &#x60;active&#x60; and not being synchronizing with Business Store / Zuora (&#x60;syncOngoing&#x60; equal to false), otherwise 403 errors are returned.    Subscription with businessModel &#x60;flat_fee&#x60; can not be assigned to user profiles (they are fees at company level).    If the subscription has a &#x60;maxNumberUsers&#x60; and the subscription is already assigned to this number of users, the assignation to the user is denied.    If the provided subscriptionId is already assigned to user&#39;s profiles, a conflict error is returned.       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/users/56d0277a0261b53142a5cab5/profiles/subscriptions/5808afeb4372eb19547e90cf

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersProfilesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var subscriptionId = "subscriptionId_example"; // String | Company subscription unique identifier.
apiInstance.adminUsersPostUserProfiles(userId, subscriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **subscriptionId** | **String**| Company subscription unique identifier. | 

### Return type

[**AdminUsersPostUserProfilesSuccess**](AdminUsersPostUserProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json

