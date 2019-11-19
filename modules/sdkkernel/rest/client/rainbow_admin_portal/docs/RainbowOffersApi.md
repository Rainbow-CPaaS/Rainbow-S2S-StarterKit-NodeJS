# RainbowAdminPortal.RainbowOffersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDeleteRainbowOffers**](RainbowOffersApi.md#adminDeleteRainbowOffers) | **DELETE** /api/rainbow/admin/v1.0/offers/{offerId} | Delete an offer
[**adminGetRainbowOfferById**](RainbowOffersApi.md#adminGetRainbowOfferById) | **GET** /api/rainbow/admin/v1.0/offers/{offerId} | Get an offer
[**adminGetRainbowOffers**](RainbowOffersApi.md#adminGetRainbowOffers) | **GET** /api/rainbow/admin/v1.0/offers/default | Get default offer
[**adminPostRainbowOffers**](RainbowOffersApi.md#adminPostRainbowOffers) | **POST** /api/rainbow/admin/v1.0/offers | Create an offer
[**adminPutRainbowOffers**](RainbowOffersApi.md#adminPutRainbowOffers) | **PUT** /api/rainbow/admin/v1.0/offers/{offerId} | Update an offer
[**adminPutRainbowOffersDefault**](RainbowOffersApi.md#adminPutRainbowOffersDefault) | **PUT** /api/rainbow/admin/v1.0/offers/default/{offerId} | Set an offer as default
[**getApiRainbowAdminV10Offers**](RainbowOffersApi.md#getApiRainbowAdminV10Offers) | **GET** /api/rainbow/admin/v1.0/offers | Get all offers



## adminDeleteRainbowOffers

> AdminDeleteRainbowOffersSuccess adminDeleteRainbowOffers(offerId, accept)

Delete an offer

This API can be used to delete an offer.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var offerId = "offerId_example"; // String | Offer unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminDeleteRainbowOffers(offerId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Offer unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminDeleteRainbowOffersSuccess**](AdminDeleteRainbowOffersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowOfferById

> AdminGetRainbowOfferByIdSuccess adminGetRainbowOfferById(offerId, accept)

Get an offer

Get an offer from its id    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/offers/58072f646237427a3687dc90

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var offerId = "offerId_example"; // String | Offer unique identifier.
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowOfferById(offerId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Offer unique identifier. | 
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowOfferByIdSuccess**](AdminGetRainbowOfferByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetRainbowOffers

> AdminGetRainbowOffersSuccess adminGetRainbowOffers(accept)

Get default offer

Get the default Rainbow offer (Essential)    Default offer is the offer which related profile is automatically assigned to newly created companies and users.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/offers/default

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var accept = "accept_example"; // String | application/json
apiInstance.adminGetRainbowOffers(accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 

### Return type

[**AdminGetRainbowOffersSuccess**](AdminGetRainbowOffersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminPostRainbowOffers

> AdminPostRainbowOffersSuccess adminPostRainbowOffers(body)

Create an offer

This API can be used to create an offer.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var body = new RainbowAdminPortal.AdminPostRainbowOffers(); // AdminPostRainbowOffers | 
apiInstance.adminPostRainbowOffers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminPostRainbowOffers**](AdminPostRainbowOffers.md)|  | 

### Return type

[**AdminPostRainbowOffersSuccess**](AdminPostRainbowOffersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowOffers

> AdminPutRainbowOffersSuccess adminPutRainbowOffers(offerId, body)

Update an offer

This API can be used to update an offer.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var offerId = "offerId_example"; // String | Offer unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowOffers(); // AdminPutRainbowOffers | 
apiInstance.adminPutRainbowOffers(offerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Offer unique identifier. | 
 **body** | [**AdminPutRainbowOffers**](AdminPutRainbowOffers.md)|  | 

### Return type

[**AdminPutRainbowOffersSuccess**](AdminPutRainbowOffersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminPutRainbowOffersDefault

> AdminPutRainbowOffersDefaultSuccess adminPutRainbowOffersDefault(offerId, body)

Set an offer as default

This API can be used to change default Rainbow offer.    The flag isDefault of previous default offer is set to false, and the flag isDefault of the specified offer is set to true.    Previous default offer stays default offer for companies having already this subscription as default.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var offerId = "offerId_example"; // String | Offer unique identifier.
var body = new RainbowAdminPortal.AdminPutRainbowOffersDefault(); // AdminPutRainbowOffersDefault | 
apiInstance.adminPutRainbowOffersDefault(offerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerId** | **String**| Offer unique identifier. | 
 **body** | [**AdminPutRainbowOffersDefault**](AdminPutRainbowOffersDefault.md)|  | 

### Return type

[**AdminPutRainbowOffersDefaultSuccess**](AdminPutRainbowOffersDefaultSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApiRainbowAdminV10Offers

> GetApiRainbowAdminV10OffersSuccess getApiRainbowAdminV10Offers(accept, opts)

Get all offers

List available offers which can be subscribed by companies.    This corresponds to Marketing Rainbow offers. They are linked to a profile.    If the offers are charged (i.e. can be sold), field canBeSold has to be set to true, and associated IDs in Zuora catalog offers has to be set (fields zuoraOfferId, zuoraProductRatePlanId and zuoraProductRatePlanChargeId).    When a subscription to a charged offer is done for a company, a subscription is created in Zuora for the related Zuora offer.       In all cases (i.e. even if the offer is not charged), when a subscription to an offer is done for a company, the subscription is added to the company subscriptions list. Each subscription entry contains the subscribed Rainbow OfferId and the related profileId.       If the profile associated to an offer is changed, existing company subscriptions are still linked to the previous profile.

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.RainbowOffersApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'businessSpecific': "businessSpecific_example", // String | Allows to filter offer list on field businessSpecific.
  'format': "format_example", // String | Allows to retrieve more or less offer details in response.    - `small`: id name    - `medium`: id name description    - `full`: all offer fields
  'name': "name_example", // String | Allows to filter offer list on field name.
  'canBeSold': true, // Boolean | Allows to filter offer list on field canBeSold.
  'autoSubscribe': true, // Boolean | Allows to filter offer list on field autoSubscribe.
  'isExclusive': true, // Boolean | Allows to filter offer list on field isExclusive.
  'isPrepaid': true, // Boolean | Allows to filter offer list on field isPrepaid.
  'profileId': true, // Boolean | Allows to filter offer list on field profileId.
  'offerReference': true, // Boolean | Allows to filter offer list on field offerReference.
  'sapReference': true, // Boolean | Allows to filter offer list on field sapReference.
  'limit': 3.4, // Number | Allow to specify the number of offers to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first offer to retrieve (first offer if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort offer list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting offer list.
};
apiInstance.getApiRainbowAdminV10Offers(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **businessSpecific** | **String**| Allows to filter offer list on field businessSpecific. | [optional] 
 **format** | **String**| Allows to retrieve more or less offer details in response.    - &#x60;small&#x60;: id name    - &#x60;medium&#x60;: id name description    - &#x60;full&#x60;: all offer fields | [optional] 
 **name** | **String**| Allows to filter offer list on field name. | [optional] 
 **canBeSold** | **Boolean**| Allows to filter offer list on field canBeSold. | [optional] 
 **autoSubscribe** | **Boolean**| Allows to filter offer list on field autoSubscribe. | [optional] 
 **isExclusive** | **Boolean**| Allows to filter offer list on field isExclusive. | [optional] 
 **isPrepaid** | **Boolean**| Allows to filter offer list on field isPrepaid. | [optional] 
 **profileId** | **Boolean**| Allows to filter offer list on field profileId. | [optional] 
 **offerReference** | **Boolean**| Allows to filter offer list on field offerReference. | [optional] 
 **sapReference** | **Boolean**| Allows to filter offer list on field sapReference. | [optional] 
 **limit** | **Number**| Allow to specify the number of offers to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first offer to retrieve (first offer if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort offer list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting offer list. | [optional] 

### Return type

[**GetApiRainbowAdminV10OffersSuccess**](GetApiRainbowAdminV10OffersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

