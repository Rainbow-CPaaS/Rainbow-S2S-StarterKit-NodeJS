# RainbowAdminPortal.PcgPbxsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPbxId**](PcgPbxsApi.md#getPbxId) | **GET** /api/rainbow/pcg/v1.0/pbxs/{pbxId} | Get a pbx data
[**getPbxs**](PcgPbxsApi.md#getPbxs) | **GET** /api/rainbow/pcg/v1.0/pbxs | Get all pbxs



## getPbxId

> GetPbxIdSuccess getPbxId(pbxId, accept)

Get a pbx data

This API allows to retrieve a specific pbx (system) using pbxId field.    It is dedicated to PCG component.       _Note:_ id field returned in response corresponds to portal&#39;s internal mongoDB id, while pbxId is the id handled by PCG.       When the pbx (system) is updated from admin API, PCG is notified on its corresponding JID pbxpcg with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;           from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;           to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\&quot;           xmlns&#x3D;\&quot;jabber:client\&quot;&gt;      &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;&gt;          &lt;pbx action&#x3D;\&quot;update\&quot;/&gt;      &lt;/config&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       When the pbx (system) is deleted from admin API, PCG is notified with the following XMPP IQ.    PCG **must acknowledge this IQ** so that admin delete effectively the system: once IQ is acknowledged by PCG, the system is deleted from mongoDB, jid_pbxagent and jid_pbxpcg XMPP accounts are deleted from XMPP, and all phoneNumbers objects linked to this system are deleted (therefore PCG don&#39;t have to call delete for all deleted system&#39;s phoneNumbers).        &#x60;&#x60;&#x60;html &lt;iq id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;           from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;           to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com/pbxpcg\&quot;           xmlns&#x3D;\&quot;jabber:client\&quot;&gt;      &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;&gt;          &lt;pbx action&#x3D;\&quot;delete\&quot;&gt;      &lt;/config&gt; &lt;/iq&gt; &#x60;&#x60;&#x60;    

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier known by PCG
var accept = "accept_example"; // String | application/json
apiInstance.getPbxId(pbxId, accept).then(function(data) {
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

[**GetPbxIdSuccess**](GetPbxIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxs

> GetPbxsSuccess getPbxs(accept, opts)

Get all pbxs

This API allows to list all pbxs (systems).    It is dedicated to PCG component.       _Note:_ id field returned in response corresponds to portal&#39;s internal mongoDB id, while pbxId is the id handled by PCG.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less pbxs details in response.    - `small`: id pbxId version creationDate    - `medium`: id name pbxId serialNumber version status creationDate    - `full`: all pbxs fields
  'sortField': "sortField_example", // String | Sort pbxs list based on the given field.
  'limit': 3.4, // Number | Allow to specify the number of systems to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset > total, no results are returned.
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
apiInstance.getPbxs(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less pbxs details in response.    - &#x60;small&#x60;: id pbxId version creationDate    - &#x60;medium&#x60;: id name pbxId serialNumber version status creationDate    - &#x60;full&#x60;: all pbxs fields | [optional] 
 **sortField** | **String**| Sort pbxs list based on the given field. | [optional] 
 **limit** | **Number**| Allow to specify the number of systems to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first system to retrieve (first site if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
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

[**GetPbxsSuccess**](GetPbxsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

