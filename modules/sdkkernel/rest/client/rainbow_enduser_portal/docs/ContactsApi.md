# RainbowEnduserPortal.ContactsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactsApi.md#createContact) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts | Create a contact
[**getContact**](ContactsApi.md#getContact) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts/{contactId} | Get a contact data
[**getContacts**](ContactsApi.md#getContacts) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts | Get contacts list
[**updateContact**](ContactsApi.md#updateContact) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts/{contactId} | Change a contact data



## createContact

> CreateContactSuccess createContact(userId, sourceId, body)

Create a contact

Create a contact for a given user&#39;s source

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ContactsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c5c19f94141765119f896c)
var body = new RainbowEnduserPortal.CreateContact(); // CreateContact | 
apiInstance.createContact(userId, sourceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c5c19f94141765119f896c) | 
 **body** | [**CreateContact**](CreateContact.md)|  | 

### Return type

[**CreateContactSuccess**](CreateContactSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContact

> GetContactSuccess getContact(userId, sourceId, contactId, accept)

Get a contact data

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ContactsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c4aebe31d144d947e385db)
var contactId = "contactId_example"; // String | Contact unique identifier (like 56e2f711c747f92e39c630c9)
var accept = "accept_example"; // String | application/json
apiInstance.getContact(userId, sourceId, contactId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c4aebe31d144d947e385db) | 
 **contactId** | **String**| Contact unique identifier (like 56e2f711c747f92e39c630c9) | 
 **accept** | **String**| application/json | 

### Return type

[**GetContactSuccess**](GetContactSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContacts

> GetContactsSuccess getContacts(userId, sourceId, accept, opts)

Get contacts list

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ContactsApi();
var userId = "userId_example"; // String | User unique identifier (like 56c4a4c331d144d947e385da)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less contact details in response. > - `small`: id, contactId > - `medium`: id, contactId, firstName, lastName, displayName, company, jobTitle > - `full`: all contact fields
};
apiInstance.getContacts(userId, sourceId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c4a4c331d144d947e385da) | 
 **sourceId** | **String**| Source unique identifier (like 56c5c19f94141765119f896c) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less contact details in response. &gt; - &#x60;small&#x60;: id, contactId &gt; - &#x60;medium&#x60;: id, contactId, firstName, lastName, displayName, company, jobTitle &gt; - &#x60;full&#x60;: all contact fields | [optional] 

### Return type

[**GetContactsSuccess**](GetContactsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContact

> UpdateContactSuccess updateContact(userId, sourceId, contactId, body)

Change a contact data

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ContactsApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c5c19f94141765119f896c)
var contactId = "contactId_example"; // String | Contact unique identifier (like 56e2f711c747f92e39c630c9)
var body = new RainbowEnduserPortal.UpdateContact(); // UpdateContact | 
apiInstance.updateContact(userId, sourceId, contactId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5) | 
 **sourceId** | **String**| Source unique identifier (like 56c5c19f94141765119f896c) | 
 **contactId** | **String**| Contact unique identifier (like 56e2f711c747f92e39c630c9) | 
 **body** | [**UpdateContact**](UpdateContact.md)|  | 

### Return type

[**UpdateContactSuccess**](UpdateContactSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

