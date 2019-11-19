# RainbowAdminPortal.RainbowProfilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDeleteRainbowProfiles**](RainbowProfilesApi.md#adminDeleteRainbowProfiles) | **DELETE** /api/rainbow/admin/v1.0/profiles/{profileId} | Delete a profile
[**adminDeleteRainbowProfilesFeatures**](RainbowProfilesApi.md#adminDeleteRainbowProfilesFeatures) | **DELETE** /api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId} | Delete a feature from a profile
[**adminGetRainbowProfileById**](RainbowProfilesApi.md#adminGetRainbowProfileById) | **GET** /api/rainbow/admin/v1.0/profiles/{profileId} | Get a profile
[**adminPostRainbowProfiles**](RainbowProfilesApi.md#adminPostRainbowProfiles) | **POST** /api/rainbow/admin/v1.0/profiles | Create a profile
[**adminPostRainbowProfilesFeatures**](RainbowProfilesApi.md#adminPostRainbowProfilesFeatures) | **POST** /api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId} | Add a feature to a profile
[**adminPutRainbowProfiles**](RainbowProfilesApi.md#adminPutRainbowProfiles) | **PUT** /api/rainbow/admin/v1.0/profiles/{profileId} | Update a profile
[**adminPutRainbowProfilesFeatures**](RainbowProfilesApi.md#adminPutRainbowProfilesFeatures) | **PUT** /api/rainbow/admin/v1.0/profiles/{profileId}/features/{featureId} | Update a feature in a profile
[**getApiRainbowAdminV10Profiles**](RainbowProfilesApi.md#getApiRainbowAdminV10Profiles) | **GET** /api/rainbow/admin/v1.0/profiles | Get all profiles



## adminDeleteRainbowProfiles

> AdminDeleteRainbowProfilesSuccess adminDeleteRainbowProfiles(profileId, accept)

Delete a profile

This API can be used to delete a profile.    Deletion of profile is not allowed if this profile is associated to offers or company subscriptions

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var profileId = "profileId_example"; // String | Profile unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowProfiles(profileId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowProfilesSuccess**](AdminDeleteRainbowProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminDeleteRainbowProfilesFeatures

> AdminDeleteRainbowProfilesFeaturesSuccess adminDeleteRainbowProfilesFeatures(featureId, profileId, accept)

Delete a feature from a profile

This API can be used to remove a feature from a profile.    Example: DELETE https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var featureId = "featureId_example"; // String | Id of the feature to remove from the profile.
var profileId = "profileId_example"; // String | Profile unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowProfilesFeatures(featureId, profileId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Id of the feature to remove from the profile. | 
 **profileId** | **String**| Profile unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowProfilesFeaturesSuccess**](AdminDeleteRainbowProfilesFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowProfileById

> AdminGetRainbowProfileByIdSuccess adminGetRainbowProfileById(profileId, accept)

Get a profile

Get a profile from its id    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/profile/5745b147f0674c7c43417997

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var profileId = "profileId_example"; // String | Profile unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowProfileById(profileId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowProfileByIdSuccess**](AdminGetRainbowProfileByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostRainbowProfiles

> AdminPostRainbowProfilesSuccess adminPostRainbowProfiles(body)

Create a profile

This API can be used to create a profile.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var body = new RainbowAdminPortal.AdminPostRainbowProfiles(); // AdminPostRainbowProfiles | 
apiInstance.adminPostRainbowProfiles(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminPostRainbowProfiles**](AdminPostRainbowProfiles.md)|  | 

### Return type

[**AdminPostRainbowProfilesSuccess**](AdminPostRainbowProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPostRainbowProfilesFeatures

> AdminPostRainbowProfilesFeaturesSuccess adminPostRainbowProfilesFeatures(featureId, profileId, body)

Add a feature to a profile

This API can be used to add a feature to a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var featureId = "featureId_example"; // String | Id of the feature to add in the profile.
var profileId = "profileId_example"; // String | Profile unique identifier.
var body = new RainbowAdminPortal.AdminPostRainbowProfilesFeatures(); // AdminPostRainbowProfilesFeatures | 
apiInstance.adminPostRainbowProfilesFeatures(featureId, profileId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Id of the feature to add in the profile. | 
 **profileId** | **String**| Profile unique identifier. | 
 **body** | [**AdminPostRainbowProfilesFeatures**](AdminPostRainbowProfilesFeatures.md)|  | 

### Return type

[**AdminPostRainbowProfilesFeaturesSuccess**](AdminPostRainbowProfilesFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowProfiles

> AdminPutRainbowProfilesSuccess adminPutRainbowProfiles(profileId, body)

Update a profile

This API can be used to update a profile.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var profileId = "profileId_example"; // String | Profile unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowProfiles(); // AdminPutRainbowProfiles | 
apiInstance.adminPutRainbowProfiles(profileId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile unique identifier. | 
 **body** | [**AdminPutRainbowProfiles**](AdminPutRainbowProfiles.md)|  | 

### Return type

[**AdminPutRainbowProfilesSuccess**](AdminPutRainbowProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowProfilesFeatures

> AdminPutRainbowProfilesFeaturesSuccess adminPutRainbowProfilesFeatures(featureId, profileId, body)

Update a feature in a profile

This API can be used to update a feature for a profile.    Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/profiles/57cd90ddc04fd92e232ae258/features/5745b147f0674c7c43417997

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var featureId = "featureId_example"; // String | Id of the feature to update in the profile.
var profileId = "profileId_example"; // String | Profile unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowProfilesFeatures(); // AdminPutRainbowProfilesFeatures | 
apiInstance.adminPutRainbowProfilesFeatures(featureId, profileId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**| Id of the feature to update in the profile. | 
 **profileId** | **String**| Profile unique identifier. | 
 **body** | [**AdminPutRainbowProfilesFeatures**](AdminPutRainbowProfilesFeatures.md)|  | 

### Return type

[**AdminPutRainbowProfilesFeaturesSuccess**](AdminPutRainbowProfilesFeaturesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApiRainbowAdminV10Profiles

> GetApiRainbowAdminV10ProfilesSuccess getApiRainbowAdminV10Profiles(accept, opts)

Get all profiles

List available profiles which can be subscribed by companies (through offers) and assigned to users.    Marketing Rainbow offers are linked to one of these profiles.    When a subscription to an offer is done for a company, the company is linked to the related profile.    When a user is associated to one of the company subscriptions, the user is linked to the related profile.    If restrictions are defined for a feature in featuresList of the profile, these restrictions are applied when user / company try to use this feature.    Profiles with isCpaasProfile field equal to true can be linked to applications profile. The featuresList defined in the application profile will be applied to users using this application.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowProfilesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less profile details in response.    - `small`: id name    - `medium`: id name description    - `full`: all profile fields
  'name': "name_example", // String | Allows to filter profile list on field name.
  'isCpaasProfile': "isCpaasProfile_example", // String | Allows to filter profile list on field isCpaasProfile.    Note that app_superadmin users can only list profiles with isCpaasProfile equal to true.
  'limit': 3.4, // Number | Allow to specify the number of profiles to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first profile to retrieve (first profile if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort profile list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting profile list.
};
apiInstance.getApiRainbowAdminV10Profiles(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less profile details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description    - &#x60;full&#x60;: all profile fields | [optional] 
 **name** | **String**| Allows to filter profile list on field name. | [optional] 
 **isCpaasProfile** | **String**| Allows to filter profile list on field isCpaasProfile.    Note that app_superadmin users can only list profiles with isCpaasProfile equal to true. | [optional] 
 **limit** | **Number**| Allow to specify the number of profiles to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first profile to retrieve (first profile if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort profile list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting profile list. | [optional] 

### Return type

[**GetApiRainbowAdminV10ProfilesSuccess**](GetApiRainbowAdminV10ProfilesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

