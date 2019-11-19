# RainbowAdminPortal.SitesSystemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSiteSystems**](SitesSystemsApi.md#deleteSiteSystems) | **DELETE** /api/rainbow/admin/v1.0/sites/{siteId}/systems/{systemId} | Unlink a system to a site
[**getSiteSystems**](SitesSystemsApi.md#getSiteSystems) | **GET** /api/rainbow/admin/v1.0/sites/{siteId}/systems | Get all systems linked with this site
[**postSiteSystems**](SitesSystemsApi.md#postSiteSystems) | **POST** /api/rainbow/admin/v1.0/sites/{siteId}/systems | Link a system to a site



## deleteSiteSystems

> DeleteSiteSystemsSuccess deleteSiteSystems(siteId, systemId, accept)

Unlink a system to a site

This API allows administrator to delete a link between a system and a site       &#x60;superadmin&#x60; and &#x60;support&#x60; can unlink any systems from any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only unlink systems being linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company from sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only unlink systems being linked to sites of companies under their organisation from sites of companies under their organisation.    &#x60;company_admin&#x60; can only unlink systems being linked to sites of their company from sites of their company.    Access is denied for &#x60;site_admin&#x60;.    A system could be shared by several sites.    Last site can be detached from a system only if it is multi-company or multi-tenant (&#x60;isShared&#x60;&#x3D;true or &#x60;isCentrex&#x60;&#x3D;true)

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSystemsApi();
var siteId = "siteId_example"; // String | Site unique identifier
var systemId = "systemId_example"; // String | System unique identifier
var accept = "accept_example"; // String | application/json
apiInstance.deleteSiteSystems(siteId, systemId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier | 
 **systemId** | **String**| System unique identifier | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteSiteSystemsSuccess**](DeleteSiteSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSiteSystems

> GetSiteSystemsSuccess getSiteSystems(siteId, accept, opts)

Get all systems linked with this site

This API allows administrator to retrieve systems linked to a given site       &#x60;superadmin&#x60; and &#x60;support&#x60; can get systems linked to all companies existing in Rainbow.    &#x60;bp_admin&#x60; can only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only get systems linked to sites of their company.    &#x60;site_admin&#x60; can only get the systems linked to the site they administrate.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSystemsApi();
var siteId = "siteId_example"; // String | Site unique identifier
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less system details in response.    - `small`: id pbxId version    - `medium`: id name pbxId serialNumber version status    - `full`: all system fields
  'limit': 3.4, // Number | Allow to specify the number of systems to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort system list based on the given field.
  'sortOrder': 3.4, // Number | Specify order when sorting pbx list.
  'name': "name_example", // String | Allows to filter systems list on field name.       The filtering is case insensitive and on partial name match: all systems **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _oxe1_, systems with the following names are match the filter 'OXE1', 'Oxe1', 'My oxe1', 'oxe12', 'My OXE12', ...
  'type': "type_example", // String | Allows to filter systems list on the provided type(s)
  'status': "status_example", // String | Allows to filter systems list on the provided status(es)
  'siteId2': "siteId_example", // String | Allows to filter systems list on the siteIds provided in this option.
  'companyId': "companyId_example", // String | Allows to filter systems list on the siteIds linked to companyIds provided in this option.
  'bpId': "bpId_example", // String | Allows to filter systems list on the bpIds provided in this option.    Only `superadmin`, `support` and `bp_admin` users can use bpId filter.    `bp_admin` users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation).
  'isShared': true, // Boolean | Allows to filter systems list by the status isShared.
  'isCentrex': true, // Boolean | Allows to filter systems list by the status isCentrex.
  'isSharedOrCentrex': true, // Boolean | Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex=true, only systems having isShared=true or isCentrex=true are returned. * If isSharedOrCentrex=false, only systems having isShared=false and isCentrex=false are returned.  
  'fromCreationDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Allows to filter systems list from provided date (ISO 8601 format).
  'toCreationDate': new Date("2013-10-20T19:20:30+01:00") // Date | Allows to filter systems list until provided date (ISO 8601 format).
};
apiInstance.getSiteSystems(siteId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less system details in response.    - &#x60;small&#x60;: id pbxId version    - &#x60;medium&#x60;: id name pbxId serialNumber version status    - &#x60;full&#x60;: all system fields | [optional] 
 **limit** | **Number**| Allow to specify the number of systems to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort system list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting pbx list. | [optional] 
 **name** | **String**| Allows to filter systems list on field name.       The filtering is case insensitive and on partial name match: all systems **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _oxe1_, systems with the following names are match the filter &#39;OXE1&#39;, &#39;Oxe1&#39;, &#39;My oxe1&#39;, &#39;oxe12&#39;, &#39;My OXE12&#39;, ... | [optional] 
 **type** | **String**| Allows to filter systems list on the provided type(s) | [optional] 
 **status** | **String**| Allows to filter systems list on the provided status(es) | [optional] 
 **siteId2** | **String**| Allows to filter systems list on the siteIds provided in this option. | [optional] 
 **companyId** | **String**| Allows to filter systems list on the siteIds linked to companyIds provided in this option. | [optional] 
 **bpId** | **String**| Allows to filter systems list on the bpIds provided in this option.    Only &#x60;superadmin&#x60;, &#x60;support&#x60; and &#x60;bp_admin&#x60; users can use bpId filter.    &#x60;bp_admin&#x60; users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation). | [optional] 
 **isShared** | **Boolean**| Allows to filter systems list by the status isShared. | [optional] 
 **isCentrex** | **Boolean**| Allows to filter systems list by the status isCentrex. | [optional] 
 **isSharedOrCentrex** | **Boolean**| Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex&#x3D;true, only systems having isShared&#x3D;true or isCentrex&#x3D;true are returned. * If isSharedOrCentrex&#x3D;false, only systems having isShared&#x3D;false and isCentrex&#x3D;false are returned.   | [optional] 
 **fromCreationDate** | **Date**| Allows to filter systems list from provided date (ISO 8601 format). | [optional] 
 **toCreationDate** | **Date**| Allows to filter systems list until provided date (ISO 8601 format). | [optional] 

### Return type

[**GetSiteSystemsSuccess**](GetSiteSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSiteSystems

> PostSiteSystemsSuccess postSiteSystems(siteId, body)

Link a system to a site

This API allows administrator to link a system to a given site       A PABX can be multi tenant.    When a PABX is shared, that means in our data model: &#39;A system is shared between several sites&#39;.    This API makes possible to add a link between a system and a site that belongs to the same company or not.    If the link still exists, no error is thrown.       &#x60;superadmin&#x60; and &#x60;support&#x60; can link any systems to any sites existing in Rainbow.    &#x60;bp_admin&#x60; can only link systems being already linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only link systems being already linked to sites of companies under their organisation to sites of companies under their organisation.    &#x60;company_admin&#x60; can only link systems being already linked to sites of their company to sites of their company.    Access is denied for &#x60;site_admin&#x60;.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A company in this environment can only have a single site. It has automatically the flag isCentrex &#x3D; true   Only one sytem having the flag isCentrex &#x3D; true can be linked with a site having the same flag value.   A system having the flag isCentrex &#x3D; true can be shared by several sites having the same flag value.   A specific error \&quot;Inconsistent link. A multi-tenant system must be shared by a multi-tenant company only\&quot; 43709 is thrown when we try to link an incompatible system to a site.    When set during the system creation, isCentrex flag is readonly.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SitesSystemsApi();
var siteId = "siteId_example"; // String | Site unique identifier
var body = new RainbowAdminPortal.PostSiteSystems(); // PostSiteSystems | 
apiInstance.postSiteSystems(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site unique identifier | 
 **body** | [**PostSiteSystems**](PostSiteSystems.md)|  | 

### Return type

[**PostSiteSystemsSuccess**](PostSiteSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

