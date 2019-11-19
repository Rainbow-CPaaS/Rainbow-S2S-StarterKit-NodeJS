# RainbowEnduserPortal.FavoritesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFavorite**](FavoritesApi.md#createFavorite) | **POST** /api/rainbow/enduser/v1.0/users/{userId}/favorites | Add a favorite to user&#39;s favorite list
[**enduserUsersGetFavorites**](FavoritesApi.md#enduserUsersGetFavorites) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/favorites | Get all users&#39;s favorite
[**getUserFavoritesById**](FavoritesApi.md#getUserFavoritesById) | **GET** /api/rainbow/enduser/v1.0/users/{userId}/favorites/{favoriteId} | Get a favorite by Id
[**removeFavorites**](FavoritesApi.md#removeFavorites) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId}/favorites/{favoriteId} | Remove a favorite from a user&#39;s favorites list
[**updateFavorite**](FavoritesApi.md#updateFavorite) | **PUT** /api/rainbow/enduser/v1.0/users/{userId}/favorites | Move favorite to position x in favorite list



## createFavorite

> CreateFavoriteSuccess createFavorite(userId, body)

Add a favorite to user&#39;s favorite list

This API can be used to add a favorite in user&#39;s favorites list.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Tree kinds of favorites are managed: user to user, user to room and user to bot. Favorite field type indicates for each favorite if it is related to a user, a room or to a bot.       When a favorite is added in users&#39;s favorite using this API, all user&#39;s XMPP resources will receive the following message indicating that a new favorite has been created:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;favorite id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;create\&quot; type &#x3D; \&quot;user\&quot; position &#x3D; 4, peer_id &#x3D;\&quot;574ff5153448af6c2940f908\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/favorites?position&#x3D;1

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.FavoritesApi();
var userId = "userId_example"; // String | User unique identifier (like 56d0277a0261b53142a5cab5).
var body = new RainbowEnduserPortal.CreateFavorite(); // CreateFavorite | 
apiInstance.createFavorite(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56d0277a0261b53142a5cab5). | 
 **body** | [**CreateFavorite**](CreateFavorite.md)|  | 

### Return type

[**CreateFavoriteSuccess**](CreateFavoriteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enduserUsersGetFavorites

> EnduserUsersGetFavoritesSuccess enduserUsersGetFavorites(userId, accept)

Get all users&#39;s favorite

This API can be used to retrieve the list of user&#39;s favorites. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/favorites

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.FavoritesApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
apiInstance.enduserUsersGetFavorites(userId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **accept** | **String**| application/json | 

### Return type

[**EnduserUsersGetFavoritesSuccess**](EnduserUsersGetFavoritesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFavoritesById

> GetUserFavoritesByIdSuccess getUserFavoritesById(userId, favoriteId, accept)

Get a favorite by Id

This API can be used to retrieve a specific user&#39;s favorite by Id.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/favorites/57b44e9c0c32e0b425252f9e/89b44e9c0c32e0b425252fbc

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.FavoritesApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var favoriteId = "favoriteId_example"; // String | Favorite unique identifier (like 5c2e275ad7ad4634939a7264)
var accept = "accept_example"; // String | application/json
apiInstance.getUserFavoritesById(userId, favoriteId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **favoriteId** | **String**| Favorite unique identifier (like 5c2e275ad7ad4634939a7264) | 
 **accept** | **String**| application/json | 

### Return type

[**GetUserFavoritesByIdSuccess**](GetUserFavoritesByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeFavorites

> RemoveFavoritesSuccess removeFavorites(userId, favoriteId, accept)

Remove a favorite from a user&#39;s favorites list

This API can be used to remove a favorite from a user&#39;s favorites list.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a favorite is removed from users&#39;s favorites using this API, all user&#39;s XMPP resources will receive the following message indicating that a favorite has been deleted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;favorite id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;delete\&quot; type &#x3D; \&quot;user\&quot; peer_id &#x3D;\&quot;574ff5153448af6c2940f908\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: DELETE https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/favorites/574ff5153448af6c2940f908

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.FavoritesApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var favoriteId = "favoriteId_example"; // String | Favorite unique identifier (like 5c2e275ad7ad4634939a7264)
var accept = "accept_example"; // String | application/json
apiInstance.removeFavorites(userId, favoriteId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **favoriteId** | **String**| Favorite unique identifier (like 5c2e275ad7ad4634939a7264) | 
 **accept** | **String**| application/json | 

### Return type

[**RemoveFavoritesSuccess**](RemoveFavoritesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFavorite

> UpdateFavoriteSuccess updateFavorite(userId)

Move favorite to position x in favorite list

This API can be used to update a favorite&#39;s position in favorite list.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a favorite is update from users&#39;s favorites using this API, all user&#39;s XMPP resources will receive the following message indicating that a user has been added in a group:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;favorite id&#x3D;\&quot;57b44e9c0c32e0b425252f9e\&quot; action&#x3D;\&quot;update\&quot; type &#x3D; \&quot;user\&quot; position &#x3D; \&quot;6\&quot; peer_id &#x3D;\&quot;574ff5153448af6c2940f908\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/favorites/58d0277a0261b53142a5cab5?position&#x3D;12

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.FavoritesApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
apiInstance.updateFavorite(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 

### Return type

[**UpdateFavoriteSuccess**](UpdateFavoriteSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

