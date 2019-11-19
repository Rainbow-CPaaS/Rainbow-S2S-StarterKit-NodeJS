# RainbowAdminPortal.SystemsPhoneNumbersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemPhoneNumbers**](SystemsPhoneNumbersApi.md#getSystemPhoneNumbers) | **GET** /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers | Get all system phone numbers
[**getSystemPhoneNumbersId**](SystemsPhoneNumbersApi.md#getSystemPhoneNumbersId) | **GET** /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId} | Get a system phone number
[**putSystemPhoneNumbers**](SystemsPhoneNumbersApi.md#putSystemPhoneNumbers) | **PUT** /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId} | Update a system phone number



## getSystemPhoneNumbers

> GetSystemPhoneNumbersSuccess getSystemPhoneNumbers(systemId, accept, opts)

Get all system phone numbers

This API allows to list all phoneNumbers associated to a given system (pbx).       Users with &#x60;superadmin&#x60; or &#x60;support&#x60; role can retrieve phoneNumbers from any system.    &#x60;bp_admin&#x60; can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin&#39;s company is the BP company.    Users with &#x60;admin&#x60; role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their&#39;s reach.    _Notes:_* &#x60;systemId&#x60; field returned in response corresponds to portal&#39;s internal mongoDB id, while &#x60;pbxId&#x60; is the id handled by PCG. * This API is paginated. * phoneNumbers list can be filtered on the following fields:    * &#x60;shortNumber&#x60;: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**shortNumber&#x3D;123**   * &#x60;internalNumber&#x60;: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**internalNumber&#x3D;123**   * &#x60;pbxUserId&#x60;: allow to retrieve only phoneNumbers having the provided pbxUserId value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**pbxUserId&#x3D;123**   * &#x60;isMonitored&#x60;: allow to retrieve only phoneNumbers for which monitoring in Rainbow application is activated (true) or deactivated (false).    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isMonitored&#x3D;true**   * &#x60;isAssignedToUser&#x60;: allow to retrieve only phoneNumbers being associated (true) or not (false) to a Rainbow user.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser&#x3D;true**   * &#x60;userId&#x60;: allow to retrieve only phoneNumbers being associated to the requested Rainbow user id.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**userId&#x3D;57960e4fa1ab69c4243415b1**   * &#x60;companyPrefix&#x60;: allow to retrieve only phoneNumbers having the provided companyPrefix value. **See below &#39;Sharing a system between several companies&#39;**   Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**companyPrefix&#x3D;8210****This filter is not taken in account for role admin.**  * Filters can be combined.    Example: retrieve the list of phoneNumbers being associated to a Rainbow user and for which monitoring is enabled in Rainbow application: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser&#x3D;true**&amp;**isMonitored&#x3D;true**        **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When directoryNumber are got from this system two more data are available: \&quot;companyName\&quot;, \&quot;companyPrefix\&quot;.   These data are stored and it&#39;s now possible to get all phoneNumbers having the given \&quot;companyPrefix\&quot;.    A company-admin can only see, then give to a rainbow user, numbers of his company.   

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsPhoneNumbersApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'shortNumber': "shortNumber_example", // String | Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value.
  'internalNumber': "internalNumber_example", // String | Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value.
  'pbxUserId': "pbxUserId_example", // String | Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value.
  'companyPrefix': "companyPrefix_example", // String | When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named 'tenantCallNumber' in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the 'tenantCallNumber' 8210 (exact match)  
  'isMonitored': true, // Boolean | Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value.
  'name': "name_example", // String | Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value.
  'deviceName': "deviceName_example", // String | Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value.
  'isAssignedToUser': true, // Boolean | Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !== null * false: return all phoneNumbers having userId === null  
  'format': "format_example", // String | Allows to retrieve more or less phone numbers details in response.    - `small`: id shortNumber internalNumber numberE164    - `medium`: id shortNumber internalNumber voiceMailNumber number numberE164 isFromSystem pbxId systemId    - `full`: all phone numbers fields
  'limit': 3.4, // Number | Allow to specify the number of phone numbers to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort phone numbers list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting phone numbers list.
};
apiInstance.getSystemPhoneNumbers(systemId, accept, opts).then(function(data) {
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
 **shortNumber** | **String**| Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value. | [optional] 
 **internalNumber** | **String**| Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value. | [optional] 
 **pbxUserId** | **String**| Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value. | [optional] 
 **companyPrefix** | **String**| When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named &#39;tenantCallNumber&#39; in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the &#39;tenantCallNumber&#39; 8210 (exact match)   | [optional] 
 **isMonitored** | **Boolean**| Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value. | [optional] 
 **name** | **String**| Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value. | [optional] 
 **deviceName** | **String**| Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value. | [optional] 
 **isAssignedToUser** | **Boolean**| Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !&#x3D;&#x3D; null * false: return all phoneNumbers having userId &#x3D;&#x3D;&#x3D; null   | [optional] 
 **format** | **String**| Allows to retrieve more or less phone numbers details in response.    - &#x60;small&#x60;: id shortNumber internalNumber numberE164    - &#x60;medium&#x60;: id shortNumber internalNumber voiceMailNumber number numberE164 isFromSystem pbxId systemId    - &#x60;full&#x60;: all phone numbers fields | [optional] 
 **limit** | **Number**| Allow to specify the number of phone numbers to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort phone numbers list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting phone numbers list. | [optional] 

### Return type

[**GetSystemPhoneNumbersSuccess**](GetSystemPhoneNumbersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemPhoneNumbersId

> GetSystemPhoneNumbersIdSuccess getSystemPhoneNumbersId(systemId, phoneNumberId, accept)

Get a system phone number

This API allows to retrieve a specific phoneNumber associated to a given system (pbx).       Users with &#x60;superadmin&#x60; or &#x60;support&#x60; role can retrieve phoneNumbers from any system.    &#x60;bp_admin&#x60; can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin&#39;s company is the BP company.    Users with &#x60;admin&#x60; role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their&#39;s reach.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When a company-admin or a site-admin wants to get one of the directoryNumber of this system we have to check if the \&quot;tenantCallNumber\&quot; of his company matches with \&quot;companyPrefix\&quot;.   Else an HTTP error 404 Not Found is thrown.   

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsPhoneNumbersApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var phoneNumberId = "phoneNumberId_example"; // String | PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.getSystemPhoneNumbersId(systemId, phoneNumberId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **phoneNumberId** | **String**| PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 

### Return type

[**GetSystemPhoneNumbersIdSuccess**](GetSystemPhoneNumbersIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putSystemPhoneNumbers

> PutSystemPhoneNumbersSuccess putSystemPhoneNumbers(systemId, phoneNumberId, body)

Update a system phone number

This API allows to update a phone number for a given system (pbx).       It can be used to link a system phoneNumber to a Rainbow user by setting &#x60;userId&#x60; parameter. If &#x60;userId&#x60; parameter is provided, jid_im, jid_tel and jid_password of the corresponding user are automatically set in phoneNumber.    It can also be used to enable monitoring of this phoneNumber by PCG (set &#x60;isMonitored&#x60; parameter to true). **Note that**&#x60;pbxId&#x60;, &#x60;systemId&#x60;, &#x60;shortNumber&#x60; and &#x60;pbxUserId&#x60; can&#39;t be modified.       When the phoneNumber is updated with this API, PCG is notified on its corresponding JID pbxpcg with the following XMPP iq:        &#x60;&#x60;&#x60;html &lt;iq id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;           from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;           to&#x3D;\&quot;pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\&quot;           xmlns&#x3D;\&quot;jabber:client\&quot;&gt;      &lt;config xmlns&#x3D;\&quot;urn:xmpp:pbxagent:config:1\&quot;&gt;          &lt;user action&#x3D;\&quot;update\&quot;/&gt;             &lt;shortNumber&gt;1001&lt;/shortNumber&gt;             &lt;internalNumber&gt;20001&lt;/internalNumber&gt;             &lt;voiceMailNumber&gt;9999&lt;/voiceMailNumber&gt;             &lt;numberE164&gt;+33300001001&lt;/numberE164&gt;             &lt;isMonitored&gt;false&lt;/isMonitored&gt;             &lt;userId&gt;57960e4fa1ab69c4243415b1&lt;/userId&gt;             &lt;jid_im&gt;82fc7375cf34403a9c711ae7eda0929f@openrainbow.com&lt;/jid_im&gt;             &lt;jid_tel&gt;tel_82fc7375cf34403a9c711ae7eda0929f@openrainbow.com&lt;/jid_tel&gt;             &lt;jid_password&gt;fd6806bca74942598f57c288b0d50baa&lt;/jid_password&gt;      &lt;/config&gt; &lt;/iq&gt; &#x60;&#x60;&#x60;       The API waits that PCG has taken into account the phoneNumber update before processing the update in database and sending the response to client.       Users with &#x60;superadmin&#x60; role can update phoneNumbers objects of any system.    &#x60;bp_admin&#x60; can only update phoneNumbers linked to systems of End Customer companies for which their bp_admin&#39;s company is the BP company.    Users with &#x60;admin&#x60; role (and not having superadmin) can only update phoneNumbers objects on systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their&#39;s reach.       Example: PUT https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   It&#39;s not possible to update the internalNumber for a phone number supplied by this kind of system.   The specific error \&quot;internalNumber 3000 is readonly because it belongs to a multi-tenant system\&quot;,\&quot;errorDetailsCode\&quot;: 409553 is thrown.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.SystemsPhoneNumbersApi();
var systemId = "systemId_example"; // String | System unique identifier (like 569ce8c8f9336c471b98eda1)
var phoneNumberId = "phoneNumberId_example"; // String | PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutSystemPhoneNumbers(); // PutSystemPhoneNumbers | 
apiInstance.putSystemPhoneNumbers(systemId, phoneNumberId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| System unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **phoneNumberId** | **String**| PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutSystemPhoneNumbers**](PutSystemPhoneNumbers.md)|  | 

### Return type

[**PutSystemPhoneNumbersSuccess**](PutSystemPhoneNumbersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

