# RainbowAdminPortal.PcgPbxsPhoneNumbersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePcgPbxPhoneNbShortNb**](PcgPbxsPhoneNumbersApi.md#deletePcgPbxPhoneNbShortNb) | **DELETE** /api/rainbow/pcg/v1.0/pbxs/{pbxId}/phone-numbers/short-number/{shortNumber} | Delete a pbx phone number
[**getPcgPbxPhoneNb**](PcgPbxsPhoneNumbersApi.md#getPcgPbxPhoneNb) | **GET** /api/rainbow/pcg/v1.0/pbxs/{pbxId}/phone-numbers | Get all pbx phone numbers
[**getPcgPbxPhoneNbShortNb**](PcgPbxsPhoneNumbersApi.md#getPcgPbxPhoneNbShortNb) | **GET** /api/rainbow/pcg/v1.0/pbxs/{pbxId}/phone-numbers/short-number/{shortNumber} | Get a pbx phone number
[**postPcgPbxPhoneNb**](PcgPbxsPhoneNumbersApi.md#postPcgPbxPhoneNb) | **POST** /api/rainbow/pcg/v1.0/pbxs/{pbxId}/phone-numbers | Create a pbx phone number
[**putPcgPbxPhoneNbShortNb**](PcgPbxsPhoneNumbersApi.md#putPcgPbxPhoneNbShortNb) | **PUT** /api/rainbow/pcg/v1.0/pbxs/{pbxId}/phone-numbers/short-number/{shortNumber} | Update a pbx phone number



## deletePcgPbxPhoneNbShortNb

> DeletePcgPbxPhoneNbShortNbSuccess deletePcgPbxPhoneNbShortNb(pbxId, shortNumber, accept)

Delete a pbx phone number

This API allows to delete a phone number for a given pbx (system) using short number value.    It is dedicated to PCG component.       If the deleted phoneNumber was assigned to a Rainbow user (&#x60;userId&#x60; field), the phoneNumber is automatically de-associated to this user.       Example: DELETE https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers/short-number/1001

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsPhoneNumbersApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23)
var shortNumber = "shortNumber_example"; // String | Phone number's short number
var accept = "accept_example"; // String | application/json
apiInstance.deletePcgPbxPhoneNbShortNb(pbxId, shortNumber, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23) | 
 **shortNumber** | **String**| Phone number&#39;s short number | 
 **accept** | **String**| application/json | 

### Return type

[**DeletePcgPbxPhoneNbShortNbSuccess**](DeletePcgPbxPhoneNbShortNbSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPcgPbxPhoneNb

> GetPcgPbxPhoneNbSuccess getPcgPbxPhoneNb(pbxId, accept, opts)

Get all pbx phone numbers

This API allows to list all phoneNumbers associated to a given pbx (system).    It is dedicated to PCG component.       _Notes:_* &#x60;systemId&#x60; field returned in response corresponds to portal&#39;s internal mongoDB id, while &#x60;pbxId&#x60; is the id handled by PCG. * This API is not paginated: all phoneNumbers from the requested pbx are returned. * phoneNumbers list can be filtered on the following fields:    * &#x60;shortNumber&#x60;: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**shortNumber&#x3D;123**   * &#x60;internalNumber&#x60;: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**internalNumber&#x3D;123**   * &#x60;pbxUserId&#x60;: allow to retrieve only phoneNumbers having the provided pbxUserId value.    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**pbxUserId&#x3D;123**   * &#x60;isMonitored&#x60;: allow to retrieve only phoneNumbers for which monitoring in Rainbow application is activated (true) or deactivated (false).    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**isMonitored&#x3D;true**   * &#x60;isAssignedToUser&#x60;: allow to retrieve only phoneNumbers being associated (true) or not (false) to a Rainbow user.    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**isAssignedToUser&#x3D;true**   * &#x60;firstName or lastName&#x60;: allow to retrieve only phoneNumbers where firstname or lastName starts with the provided keyword(s).    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**name&#x3D;david**   * &#x60;deviceName&#x60;: allow to retrieve only phoneNumbers having the provided deviceName value.    Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**deviceName&#x3D;8082**   * &#x60;companyPrefix&#x60;: allow to retrieve only phoneNumbers having the provided companyPrefix value. **See below &#39;Sharing a system between several companies&#39;**   Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**companyPrefix&#x3D;8210**  * Filters can be combined.    Example: retrieve the list of phoneNumbers being associated to a Rainbow user and for which monitoring is enabled in Rainbow application: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers?**isAssignedToUser&#x3D;true**&amp;**isMonitored&#x3D;true**&amp;limit&#x3D;100&amp;offset&#x3D;0        **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When the PCG handles a directoryNumber from this system (create/update) two more data are available: \&quot;companyName\&quot;, \&quot;companyPrefix\&quot;.   These data are stored and it&#39;s now possible to get all phoneNumbers having the given \&quot;companyPrefix\&quot;.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsPhoneNumbersApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less phone numbers details in response.    - `small`: id shortNumber isMonitored    - `medium`: id shortNumber pbxUserId pbxId isMonitored firstName lastName deviceName jid_im jid_tel jid_password    - `full`: all phone numbers fields
  'shortNumber': "shortNumber_example", // String | Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value.
  'internalNumber': "internalNumber_example", // String | Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value.
  'pbxUserId': "pbxUserId_example", // String | Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value.
  'companyPrefix': "companyPrefix_example", // String | When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named 'tenantCallNumber' in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the 'tenantCallNumber' 8210 (exact match)  
  'isMonitored': true, // Boolean | Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value.
  'name': "name_example", // String | Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value.
  'deviceName': "deviceName_example", // String | Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value.
  'isAssignedToUser': true, // Boolean | Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !== null * false: return all phoneNumbers having userId === null  
  'limit': 3.4, // Number | Allow to specify the number of phone numbers to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort phone numbers list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting phone numbers list.
};
apiInstance.getPcgPbxPhoneNb(pbxId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less phone numbers details in response.    - &#x60;small&#x60;: id shortNumber isMonitored    - &#x60;medium&#x60;: id shortNumber pbxUserId pbxId isMonitored firstName lastName deviceName jid_im jid_tel jid_password    - &#x60;full&#x60;: all phone numbers fields | [optional] 
 **shortNumber** | **String**| Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value. | [optional] 
 **internalNumber** | **String**| Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value. | [optional] 
 **pbxUserId** | **String**| Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value. | [optional] 
 **companyPrefix** | **String**| When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named &#39;tenantCallNumber&#39; in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the &#39;tenantCallNumber&#39; 8210 (exact match)   | [optional] 
 **isMonitored** | **Boolean**| Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value. | [optional] 
 **name** | **String**| Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value. | [optional] 
 **deviceName** | **String**| Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value. | [optional] 
 **isAssignedToUser** | **Boolean**| Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !&#x3D;&#x3D; null * false: return all phoneNumbers having userId &#x3D;&#x3D;&#x3D; null   | [optional] 
 **limit** | **Number**| Allow to specify the number of phone numbers to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort phone numbers list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting phone numbers list. | [optional] 

### Return type

[**GetPcgPbxPhoneNbSuccess**](GetPcgPbxPhoneNbSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPcgPbxPhoneNbShortNb

> GetPcgPbxPhoneNbShortNbSuccess getPcgPbxPhoneNbShortNb(pbxId, shortNumber, accept)

Get a pbx phone number

This API allows to retrieve a specific phoneNumber associated to a given pbx (system) using short number value.    It is dedicated to PCG component.       _Note:_&#x60;systemId&#x60; field returned in response corresponds to portal&#39;s internal mongoDB id, while &#x60;pbxId&#x60; is the id handled by PCG.       Example: GET https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers/short-number/1001

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsPhoneNumbersApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23)
var shortNumber = "shortNumber_example"; // String | Phone number's short number
var accept = "accept_example"; // String | application/json
apiInstance.getPcgPbxPhoneNbShortNb(pbxId, shortNumber, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23) | 
 **shortNumber** | **String**| Phone number&#39;s short number | 
 **accept** | **String**| application/json | 

### Return type

[**GetPcgPbxPhoneNbShortNbSuccess**](GetPcgPbxPhoneNbShortNbSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPcgPbxPhoneNb

> PostPcgPbxPhoneNbSuccess postPcgPbxPhoneNb(pbxId, body)

Create a pbx phone number

This API allows to create a phone number for a given pbx (system).    It is dedicated to PCG component.       _Note:_&#x60;pbxId&#x60; is the id handled by PCG, while &#x60;systemId&#x60; field (returned in response) corresponds to portal&#39;s internal mongoDB id of related system document (auto-filled by server during phone number creation).       When the phone number object is updated from admin API (Rainbow user association / dissociation, isMonitored flag updated, numberE164 filled, ...), PCG is notified on its corresponding JID pbxpcg with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;           from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;           to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\&quot;           xmlns&#x3D;\&quot;jabber:client\&quot;&gt;      &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;&gt;          &lt;user device&#x3D;\&quot;1001\&quot; action&#x3D;\&quot;update\&quot;/&gt;      &lt;/config&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsPhoneNumbersApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23)
var body = new RainbowAdminPortal.PostPcgPbxPhoneNb(); // PostPcgPbxPhoneNb | 
apiInstance.postPcgPbxPhoneNb(pbxId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23) | 
 **body** | [**PostPcgPbxPhoneNb**](PostPcgPbxPhoneNb.md)|  | 

### Return type

[**PostPcgPbxPhoneNbSuccess**](PostPcgPbxPhoneNbSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putPcgPbxPhoneNbShortNb

> PutPcgPbxPhoneNbShortNbSuccess putPcgPbxPhoneNbShortNb(pbxId, shortNumber, body)

Update a pbx phone number

This API allows to update a phone number for a given pbx (system) using short number value.    It is dedicated to PCG component.    _Notes:_* &#x60;pbxId&#x60; is the id handled by PCG, while &#x60;systemId&#x60; field (returned in response) corresponds to portal&#39;s internal mongoDB id of related system document (auto-filled by server during phone number creation). * &#x60;pbxId&#x60; and &#x60;systemId&#x60; can&#39;t be modified.        Example: PUT https://openrainbow.com/api/rainbow/pcg/v1.0/pbxs/pbxagent_315e5b2dbf8746fd93660df375933c23/phone-numbers/short-number/1001

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.PcgPbxsPhoneNumbersApi();
var pbxId = "pbxId_example"; // String | Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23)
var shortNumber = "shortNumber_example"; // String | Phone number's short number
var body = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNb(); // PutPcgPbxPhoneNbShortNb | 
apiInstance.putPcgPbxPhoneNbShortNb(pbxId, shortNumber, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbxId** | **String**| Pbx unique identifier (known by PCG, and corresponding to a system known by admin portal, ex: pbxagent_315e5b2dbf8746fd93660df375933c23) | 
 **shortNumber** | **String**| Phone number&#39;s short number | 
 **body** | [**PutPcgPbxPhoneNbShortNb**](PutPcgPbxPhoneNbShortNb.md)|  | 

### Return type

[**PutPcgPbxPhoneNbShortNbSuccess**](PutPcgPbxPhoneNbShortNbSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

