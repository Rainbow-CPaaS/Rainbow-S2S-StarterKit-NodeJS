# RainbowAdminPortal.SystemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSystems**](SystemsApi.md#deleteSystems) | **DELETE** /api/rainbow/admin/v1.0/systems/{systemId} | Delete a system
[**getSystems**](SystemsApi.md#getSystems) | **GET** /api/rainbow/admin/v1.0/systems | Get all systems
[**getSystemsId**](SystemsApi.md#getSystemsId) | **GET** /api/rainbow/admin/v1.0/systems/{systemId} | Get a system data
[**getSystemsIdByPbxId**](SystemsApi.md#getSystemsIdByPbxId) | **GET** /api/rainbow/admin/v1.0/systems/pbxid/{pbxId} | Get a system data by pbxId
[**postSystems**](SystemsApi.md#postSystems) | **POST** /api/rainbow/admin/v1.0/systems | Create a system
[**putSystems**](SystemsApi.md#putSystems) | **PUT** /api/rainbow/admin/v1.0/systems/{systemId} | Update a system



## deleteSystems

> DeleteSystemsSuccess deleteSystems(systemId, accept)

Delete a system

This API allows administrator to delete a given system.       &#x60;superadmin&#x60; can delete systems linked to all sites existing in Rainbow.    &#x60;bp_admin&#x60; can only delete systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only delete systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only delete systems linked to sites of their company.    &#x60;site_admin&#x60; can only delete the systems linked to the site they administrate.       **Warning**: all phoneNumbers associated to this system will be deleted, and if these phoneNumbers were associated to a Rainbow user, it won&#39;t be anymore.    jid_pbxagent and jid_pbxpcg XMPP accounts will also be deleted from XMPP.       PCG is notified of the system deletion with the following XMPP message. Once PCG has acknowledged the IQ, the system is deleted from mongoDB, jid_pbxagent and jid_pbxpcg XMPP accounts are deleted from XMPP, and all phoneNumbers objects linked to this system are deleted (therefore PCG don&#39;t have to call delete for all deleted system&#39;s phoneNumbers).        &#x60;&#x60;&#x60;html &lt;iq id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;        from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;        to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com/pbxpcg\&quot;        xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;&gt;         &lt;pbx action&#x3D;\&quot;delete\&quot;&gt;     &lt;/config&gt; &lt;/iq&gt; &#x60;&#x60;&#x60; 

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteSystems(systemId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**DeleteSystemsSuccess**](DeleteSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystems

> GetSystemsSuccess getSystems(accept, opts)

Get all systems

This API allows administrator to retrieve systems they can administrate.       &#x60;superadmin&#x60; and &#x60;support&#x60; get all systems existing in Rainbow.    &#x60;bp_admin&#x60; only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; only get systems linked to sites of their company.    &#x60;site_admin&#x60; only get the systems linked to the site they administrate.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems?type&#x3D;oxe&amp;status&#x3D;activated&amp;format&#x3D;small&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1      **Specific feature:** Sharing a system between several companies   * Since 1.47.0 release, configuring companies sharing a **multi-tenant** system is possible.    This corresponds to **OTEC-S OXEs**, which are multi-tenant.    A multi-tenant system, so called **centrex**, allows sharing a call-server between several entities by setting the flag &#x60;isCentrex&#x3D;true&#x60; on the system. This flag is set during the system creation and can&#39;t be changed (the system would have to be deleted first and then re-created without the flag isCentrex).    For Rainbow, an entity is a site with the flag &#x60;isCentrex&#x3D;true&#x60; linked to a company with the flag &#x60;isCentrex&#x3D;true&#x60; (the company and site must both have the flag isCentrex&#x3D;true to be linked to a system with isCentrex&#x3D;true).    A company with the flag isCentrex&#x3D;true can only have a single site (the site will have automatically the flag isCentrex&#x3D;true when it is created).    Getting a list having the status isCentrex&#x3D;true is possible using query parameter filter &#x60;isCentrex&#x60;. * Since 1.73.0 release, configuring companies sharing a **multi-company** system is possible.    A shared multi-company system, so called **shared**, allows sharing a call-server between several sites from different companies.    No specific configuration is applied on the PBX, the specific configuration is only on Rainbow side, by setting the flag &#x60;isShared&#x3D;true&#x60; on the system. This flag is set during the system creation and can&#39;t be changed (the system would have to be deleted first and then re-created without the flag isShared).    It is understood that this approach exposes all users of the PBX to all companies that have users on this PBX (for association, for dial by name). Anyway it seats on a PBX infra where all PBX users can directly dial (by short num and DBN) any other users of the network from their deskphones.    A site being linked to such systems can be linked to other systems (shared or not, but not centrex).    Getting a list having the status isShared&#x3D;true is possible using query parameter filter &#x60;isShared&#x60;. * It is possible to get the list of systems being shared **or** centrex using query parameter filter &#x60;isSharedOrCentrex&#x60;.  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
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
  'siteId': "siteId_example", // String | Allows to filter systems list on the siteIds provided in this option.
  'companyId': "companyId_example", // String | Allows to filter systems list on the siteIds linked to companyIds provided in this option.
  'bpId': "bpId_example", // String | Allows to filter systems list on the bpIds provided in this option.    Only `superadmin`, `support` and `bp_admin` users can use bpId filter.    `bp_admin` users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation).
  'isShared': true, // Boolean | Allows to filter systems list by the status isShared.
  'isCentrex': true, // Boolean | Allows to filter systems list by the status isCentrex.
  'isSharedOrCentrex': true, // Boolean | Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex=true, only systems having isShared=true or isCentrex=true are returned. * If isSharedOrCentrex=false, only systems having isShared=false and isCentrex=false are returned.  
  'fromCreationDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Allows to filter systems list from provided date (ISO 8601 format).
  'toCreationDate': new Date("2013-10-20T19:20:30+01:00") // Date | Allows to filter systems list until provided date (ISO 8601 format).
};
apiInstance.getSystems(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less system details in response.    - &#x60;small&#x60;: id pbxId version    - &#x60;medium&#x60;: id name pbxId serialNumber version status    - &#x60;full&#x60;: all system fields | [optional] 
 **limit** | **Number**| Allow to specify the number of systems to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort system list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting pbx list. | [optional] 
 **name** | **String**| Allows to filter systems list on field name.       The filtering is case insensitive and on partial name match: all systems **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _oxe1_, systems with the following names are match the filter &#39;OXE1&#39;, &#39;Oxe1&#39;, &#39;My oxe1&#39;, &#39;oxe12&#39;, &#39;My OXE12&#39;, ... | [optional] 
 **type** | **String**| Allows to filter systems list on the provided type(s) | [optional] 
 **status** | **String**| Allows to filter systems list on the provided status(es) | [optional] 
 **siteId** | **String**| Allows to filter systems list on the siteIds provided in this option. | [optional] 
 **companyId** | **String**| Allows to filter systems list on the siteIds linked to companyIds provided in this option. | [optional] 
 **bpId** | **String**| Allows to filter systems list on the bpIds provided in this option.    Only &#x60;superadmin&#x60;, &#x60;support&#x60; and &#x60;bp_admin&#x60; users can use bpId filter.    &#x60;bp_admin&#x60; users can only use bpId filter with bpId they manage (their own BP company or companies being in their BP organisation). | [optional] 
 **isShared** | **Boolean**| Allows to filter systems list by the status isShared. | [optional] 
 **isCentrex** | **Boolean**| Allows to filter systems list by the status isCentrex. | [optional] 
 **isSharedOrCentrex** | **Boolean**| Allows to filter systems list having the requested flag isShared **or** isCentrex.   * If isSharedOrCentrex&#x3D;true, only systems having isShared&#x3D;true or isCentrex&#x3D;true are returned. * If isSharedOrCentrex&#x3D;false, only systems having isShared&#x3D;false and isCentrex&#x3D;false are returned.   | [optional] 
 **fromCreationDate** | **Date**| Allows to filter systems list from provided date (ISO 8601 format). | [optional] 
 **toCreationDate** | **Date**| Allows to filter systems list until provided date (ISO 8601 format). | [optional] 

### Return type

[**GetSystemsSuccess**](GetSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsId

> GetSystemsIdSuccess getSystemsId(systemId, accept)

Get a system data

This API allows administrator to retrieve a given system.       &#x60;superadmin&#x60; and &#x60;support&#x60; can get all systems existing in Rainbow.    &#x60;bp_admin&#x60; can only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only get systems linked to sites of their company.    &#x60;site_admin&#x60; can only get the systems linked to the site they administrate.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSystemsId(systemId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetSystemsIdSuccess**](GetSystemsIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsIdByPbxId

> GetSystemsIdByPbxIdSuccess getSystemsIdByPbxId(pbxId, accept)

Get a system data by pbxId

This API allows administrator to retrieve a given system from its pbxId.       &#x60;superadmin&#x60; and &#x60;support&#x60; can get all systems existing in Rainbow.    &#x60;bp_admin&#x60; can only get systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only get systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only get systems linked to sites of their company.    &#x60;site_admin&#x60; can only get the systems linked to the site they administrate.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier known by PCG
var accept = "accept_example"; // String | application/json
apiInstance.getSystemsIdByPbxId(pbxId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier known by PCG | 
 **accept** | **String**| application/json | 

### Return type

[**GetSystemsIdByPbxIdSuccess**](GetSystemsIdByPbxIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSystems

> PostSystemsSuccess postSystems(body)

Create a system

This API allows administrator to create a system.    A system hosts the CCA (Call Control Agent) configuration.       &#x60;superadmin&#x60; can create systems linked to all sites existing in Rainbow.    &#x60;bp_admin&#x60; can only create systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only create systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only create systems linked to sites of their company.    &#x60;site_admin&#x60; can only create the systems linked to the site they administrate.       **Specific feature:** Sharing a system between several companies   * Since 1.47.0 release, configuring companies sharing a **multi-tenant** system is possible.    This corresponds to **OTEC-S OXEs**, which are multi-tenant.    A multi-tenant system, so called **centrex**, allows sharing a call-server between several entities by setting the flag &#x60;isCentrex&#x3D;true&#x60; on the system. This flag is set during the system creation and can&#39;t be changed (the system would have to be deleted first and then re-created without the flag isCentrex).    For Rainbow, an entity is a site with the flag &#x60;isCentrex&#x3D;true&#x60; linked to a company with the flag &#x60;isCentrex&#x3D;true&#x60; (the company and site must both have the flag isCentrex&#x3D;true to be linked to a system with isCentrex&#x3D;true).    A company with the flag isCentrex&#x3D;true can only have a single site (the site will have automatically the flag isCentrex&#x3D;true when it is created).    Getting a list having the status isCentrex&#x3D;true is possible using query parameter filter &#x60;isCentrex&#x60;. * Since 1.73.0 release, configuring companies sharing a **multi-company** system is possible.    A shared multi-company system, so called **shared**, allows sharing a call-server between several sites from different companies.    No specific configuration is applied on the PBX, the specific configuration is only on Rainbow side, by setting the flag &#x60;isShared&#x3D;true&#x60; on the system. This flag is set during the system creation and can&#39;t be changed (the system would have to be deleted first and then re-created without the flag isShared).    It is understood that this approach exposes all users of the PBX to all companies that have users on this PBX (for association, for dial by name). Anyway it seats on a PBX infra where all PBX users can directly dial (by short num and DBN) any other users of the network from their deskphones.    A site being linked to such systems can be linked to other systems (shared or not, but not centrex).    Getting a list having the status isShared&#x3D;true is possible using query parameter filter &#x60;isShared&#x60;. * It is possible to get the list of systems being shared **or** centrex using query parameter filter &#x60;isSharedOrCentrex&#x60;.  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
var body = new RainbowAdminPortal.PostSystems(); // PostSystems | 
apiInstance.postSystems(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostSystems**](PostSystems.md)|  | 

### Return type

[**PostSystemsSuccess**](PostSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSystems

> PutSystemsSuccess putSystems(systemId, body)

Update a system

This API allows administrator to update a given system.       &#x60;superadmin&#x60; can update systems linked to all sites existing in Rainbow.    &#x60;bp_admin&#x60; can only update systems linked to sites of End Customer companies for which their bp_admin&#39;s company is the BP company.    &#x60;organization_admin&#x60; can only update systems linked to sites of companies under their organisation.    &#x60;company_admin&#x60; can only update systems linked to sites of their company.    &#x60;site_admin&#x60; can only update the systems linked to the site they administrate.       When the system is updated, PCG is notified on its corresponding JID pbxpcg with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;           from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;           to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\&quot;           xmlns&#x3D;\&quot;jabber:client\&quot;&gt;      &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;/&gt;          &lt;pbx action&#x3D;\&quot;update\&quot;&gt;      &lt;/config&gt; &lt;/message&gt; &#x60;&#x60;&#x60;    Don&#39;t use this api to move a &#39;isCentrex&#39; system to another site. Use instead DELETE /api/rainbow/admin/v1.0/sites/:siteId/systems then POST /api/rainbow/admin/v1.0/sites/:siteId/systems

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutSystems(); // PutSystems | 
apiInstance.putSystems(systemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutSystems**](PutSystems.md)|  | 

### Return type

[**PutSystemsSuccess**](PutSystemsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

