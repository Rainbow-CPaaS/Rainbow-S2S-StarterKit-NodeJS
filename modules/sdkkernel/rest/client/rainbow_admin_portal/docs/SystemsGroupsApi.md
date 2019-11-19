# RainbowAdminPortal.SystemsGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystemsFromGroupId**](SystemsGroupsApi.md#deleteSystemsFromGroupId) | **DELETE** /api/rainbow/admin/v1.0/systems/{systemId}/groups/{groupId} | Remove a system from a group
[**deleteSystemsGroupId**](SystemsGroupsApi.md#deleteSystemsGroupId) | **DELETE** /api/rainbow/admin/v1.0/systems/groups/{groupId} | Delete a systems group
[**getSystemsGroupId**](SystemsGroupsApi.md#getSystemsGroupId) | **GET** /api/rainbow/admin/v1.0/systems/groups/{groupId} | Get systems group data
[**getSystemsGroups**](SystemsGroupsApi.md#getSystemsGroups) | **GET** /api/rainbow/admin/v1.0/systems/groups | Get all systems groups
[**postSystemsGroups**](SystemsGroupsApi.md#postSystemsGroups) | **POST** /api/rainbow/admin/v1.0/systems/groups | Create a systems group
[**putSystemsGroupId**](SystemsGroupsApi.md#putSystemsGroupId) | **PUT** /api/rainbow/admin/v1.0/systems/{systemId}/groups/{groupId} | Add a new system to a group
[**putSystemsGroupNameId**](SystemsGroupsApi.md#putSystemsGroupNameId) | **PUT** /api/rainbow/admin/v1.0/systems/groups/{groupId} | Rename a systems group



## deleteSystemsFromGroupId

> DeleteSystemsFromGroupIdSuccess deleteSystemsFromGroupId(systemId, groupId, accept, contentType)

Remove a system from a group

Remove system to a group. If the system doesn&#39;t exist in the group, an error is raised (404 Not found)    A systems group is a logical set of systems (pabx), sharing the same dial plan and linked through a private network.    Systems belonging to this group may either belonging to the same Site, or belonging from several sites under the same company.    Waiting for a real use case, it is possible to federate inside the same group, systems belonging to companies under the same organization.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var systemId = "systemId_example"; // String | System unique identifier
var groupId = "groupId_example"; // String | SystemsGroup unique identifier
var accept = "accept_example"; // String | application/json
var contentType = "contentType_example"; // String | application/json
apiInstance.deleteSystemsFromGroupId(systemId, groupId, accept, contentType).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier | 
 **groupId** | **String**| SystemsGroup unique identifier | 
 **accept** | **String**| application/json | 
 **contentType** | **String**| application/json | 

### Return type

[**DeleteSystemsFromGroupIdSuccess**](DeleteSystemsFromGroupIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSystemsGroupId

> DeleteSystemsGroupIdSuccess deleteSystemsGroupId(groupId, accept)

Delete a systems group

Delete a systems groups.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var groupId = "groupId_example"; // String | SystemsGroup unique identifier
var accept = "accept_example"; // String | application/json
apiInstance.deleteSystemsGroupId(groupId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| SystemsGroup unique identifier | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteSystemsGroupIdSuccess**](DeleteSystemsGroupIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsGroupId

> GetSystemsGroupIdSuccess getSystemsGroupId(groupId, accept)

Get systems group data

A systems group is a logical set of systems (pabx), sharing the same dial plan and linked through a private network.    Systems belonging to this group may either belonging to the same Site, or belonging from several sites under the same company.       According with api permission, the response is not the same.    - Superadmin, Support and organization_admin must see all Systems inside the group.    - bp_admin, company_admin may see Systems hosted by sites under his company.    - site_admin only see systems of his site, inside the group&gt;.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var groupId = "groupId_example"; // String | SystemsGroup unique identifier
var accept = "accept_example"; // String | application/json
apiInstance.getSystemsGroupId(groupId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| SystemsGroup unique identifier | 
 **accept** | **String**| application/json | 

### Return type

[**GetSystemsGroupIdSuccess**](GetSystemsGroupIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsGroups

> GetSystemsGroupsSuccess getSystemsGroups(accept, opts)

Get all systems groups

Get all systems groups.    A systems group is a logical set of systems (pabx), sharing the same dial plan and linked through a private network.    Systems belonging to this group may either belonging to the same Site, or belonging from several sites under the same company.    According with api permission, the response is not the same.    - Superadmin and Support see all SystemsGroups    - bp_admin, organization_admin and company_admin may see several SystemsGroups, **but some systems could be hidden for company_admin**.    - site_admin only see SystemsGroups hosting some systems of his site, **but some systems could be hidden as they are hosted by another site**.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'name': "name_example", // String | Allows to filter groups list on the given keyword(s) on field name. The filtering is **not case insensitive** and on partial name match: all groups containing the provided name value will be returned (whatever the position of the match). Ex: if filtering is done on comp, group with the following names are match the filter 'My Group', 'Group', 'A Group 1', 'Group of', ...
  'format': "format_example", // String | Should allow to retrieve more or less group details in response. But in fact whatever the choice:    - `small`: _id, name, companies, systems (all SystemsGroup fields)    - `medium`: all SystemsGroup fields    - `full`: all SystemsGroup fields
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort company list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting company list.
};
apiInstance.getSystemsGroups(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **name** | **String**| Allows to filter groups list on the given keyword(s) on field name. The filtering is **not case insensitive** and on partial name match: all groups containing the provided name value will be returned (whatever the position of the match). Ex: if filtering is done on comp, group with the following names are match the filter &#39;My Group&#39;, &#39;Group&#39;, &#39;A Group 1&#39;, &#39;Group of&#39;, ... | [optional] 
 **format** | **String**| Should allow to retrieve more or less group details in response. But in fact whatever the choice:    - &#x60;small&#x60;: _id, name, companies, systems (all SystemsGroup fields)    - &#x60;medium&#x60;: all SystemsGroup fields    - &#x60;full&#x60;: all SystemsGroup fields | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort company list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting company list. | [optional] 

### Return type

[**GetSystemsGroupsSuccess**](GetSystemsGroupsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSystemsGroups

> PostSystemsGroupsSuccess postSystemsGroups(body)

Create a systems group

A systems group is a logical set of systems (pabx), sharing the same dial plan and linked through a private network.    Systems belonging to this group may either belonging to the same Site, or belonging from several sites under the same company.    Waiting for a real use case, it is possible to federate inside the same group, systems belonging to companies under the same organization.    It&#39;s not possible to include multi-tenant systems (isCentrex &#x3D; true) inside a systems group.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A multi-tenant system can&#39;t be set inside a systems group. That does not make sense.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var body = new RainbowAdminPortal.PostSystemsGroups(); // PostSystemsGroups | 
apiInstance.postSystemsGroups(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostSystemsGroups**](PostSystemsGroups.md)|  | 

### Return type

[**PostSystemsGroupsSuccess**](PostSystemsGroupsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSystemsGroupId

> PutSystemsGroupIdSuccess putSystemsGroupId(systemId, groupId)

Add a new system to a group

Add a new system to a group. If the system already exists in the group or inside another one, an error is raised (409 Conflict)    A systems group is a logical set of systems (pabx), sharing the same dial plan and linked through a private network.    Systems belonging to this group may either belonging to the same Site, or belonging from several sites under the same company.    Waiting for a real use case, it is possible to federate inside the same group, systems belonging to companies under the same organization.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A multi-tenant system can&#39;t be set inside a systems group. That does not make sense.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var systemId = "systemId_example"; // String | System unique identifier
var groupId = "groupId_example"; // String | SystemsGroup unique identifier
apiInstance.putSystemsGroupId(systemId, groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier | 
 **groupId** | **String**| SystemsGroup unique identifier | 

### Return type

[**PutSystemsGroupIdSuccess**](PutSystemsGroupIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putSystemsGroupNameId

> PutSystemsGroupNameIdSuccess putSystemsGroupNameId(groupId, body)

Rename a systems group

Only allow a systems group renaming.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsGroupsApi();
var groupId = "groupId_example"; // String | SystemsGroup unique identifier
var body = new RainbowAdminPortal.PutSystemsGroupNameId(); // PutSystemsGroupNameId | 
apiInstance.putSystemsGroupNameId(groupId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| SystemsGroup unique identifier | 
 **body** | [**PutSystemsGroupNameId**](PutSystemsGroupNameId.md)|  | 

### Return type

[**PutSystemsGroupNameIdSuccess**](PutSystemsGroupNameIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

