# RainbowEnduserPortal.ContactsDeletecontactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactid**](ContactsDeletecontactApi.md#deleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactid) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts/{contactId} | Delete a contact



## deleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactid

> DeleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactidSuccess deleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactid(userId, sourceId, contactId, accept)

Delete a contact

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.ContactsDeletecontactApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5)
var sourceId = "sourceId_example"; // String | Source unique identifier (like 56c4aebe31d144d947e385db)
var contactId = "contactId_example"; // String | Contact unique identifier (like 56e2f711c747f92e39c630c9)
var accept = "accept_example"; // String | application/json
apiInstance.deleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactid(userId, sourceId, contactId, accept).then(function(data) {
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

[**DeleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactidSuccess**](DeleteApiRainbowEnduserV10UsersUseridSourcesSourceidContactsContactidSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

