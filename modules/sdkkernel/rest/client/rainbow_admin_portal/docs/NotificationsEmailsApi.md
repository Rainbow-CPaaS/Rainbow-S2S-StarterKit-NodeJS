# RainbowAdminPortal.NotificationsEmailsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminRequestCompanyVisibility**](NotificationsEmailsApi.md#adminRequestCompanyVisibility) | **POST** /api/rainbow/admin/v1.0/notifications/emails/request-company-visibility | Send a company visibility request



## adminRequestCompanyVisibility

> AdminRequestCompanyVisibilitySuccess adminRequestCompanyVisibility(body)

Send a company visibility request

This API allows a Rainbow company administrator to send an email to another company administrator to ask for visibility between the 2 companies.       To accept the visibility request, the administrator of the other company have to use API [POST /api/rainbow/admin/v1.0/companies/{companyId}/accept-visibility-requests][0].    Companies will be able to see each other only once the other company administrator validate the visibility request.  [0]: #api-admin_companies_visibility-PostAcceptCompanyVisibilityReq

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.NotificationsEmailsApi();
var body = new RainbowAdminPortal.AdminRequestCompanyVisibility(); // AdminRequestCompanyVisibility | 
apiInstance.adminRequestCompanyVisibility(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminRequestCompanyVisibility**](AdminRequestCompanyVisibility.md)|  | 

### Return type

[**AdminRequestCompanyVisibilitySuccess**](AdminRequestCompanyVisibilitySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

