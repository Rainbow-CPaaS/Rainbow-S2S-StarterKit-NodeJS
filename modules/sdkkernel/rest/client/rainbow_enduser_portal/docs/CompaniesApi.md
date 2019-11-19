# RainbowEnduserPortal.CompaniesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompany**](CompaniesApi.md#createCompany) | **POST** /api/rainbow/enduser/v1.0/companies | Create a company
[**getCompanies**](CompaniesApi.md#getCompanies) | **GET** /api/rainbow/enduser/v1.0/companies | Get all companies
[**getCompanyAdministrators**](CompaniesApi.md#getCompanyAdministrators) | **GET** /api/rainbow/enduser/v1.0/companies/{companyId}/administrators | Get company administrators
[**getCompanyById**](CompaniesApi.md#getCompanyById) | **GET** /api/rainbow/enduser/v1.0/companies/{companyId} | Get a company data



## createCompany

> CreateCompanySuccess createCompany(body)

Create a company

A user belonging to the &#39;Default&#39; company is able to create his own company.    Then he is automatically moved to it and becomes the &#39;company_admin&#39; of it.       **The company&#39;s name is checked and must be unique.    The logged in user musn&#39;t have already an admin or superadmin role**      The company is created with visibility&#x3D;&#39;public&#39; and userSelfRegisterEnabled&#x3D;false. The user, promoted to &#39;company_admin&#39;, can then update these values if we want using API [PUT /api/rainbow/admin/v1.0/companies/:companyId][0].       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allows clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60;  [0]: /admin/#api-companies-PutCompanies

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.CompaniesApi();
var body = new RainbowEnduserPortal.CreateCompany(); // CreateCompany | 
apiInstance.createCompany(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCompany**](CreateCompany.md)|  | 

### Return type

[**CreateCompanySuccess**](CreateCompanySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCompanies

> GetCompaniesSuccess getCompanies(accept, opts)

Get all companies

This API allows users to get all companies.       Users with &#x60;user&#x60; role can only retrieve their own company and companies they can see (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       Users with &#x60;analytics&#x60; can retrieve all companies, but only the following fields are returned: &#x60;id&#x60;, &#x60;creationDate&#x60;, &#x60;status&#x60;, &#x60;statusUpdatedDate&#x60;, &#x60;visibility&#x60;, &#x60;visibleBy&#x60;, &#x60;organisationId&#x60;   Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies?name&#x3D;My com&amp;format&#x3D;medium&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.CompaniesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less company details in response. > - `small`: id, name > - `medium`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape > - `full`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape
  'sortField': "sortField_example", // String | Sort items list based on the given field
  'limit': 3.4, // Number | Allow to specify the number of items to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset > total, no results are returned.
  'sortOrder': 3.4, // Number | Specify order when sorting items list.
  'name': "name_example", // String | Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter 'My company', 'Company', 'A comp 1', 'Comp of comps', ...
  'status': "status_example", // String | Allows to filter companies list on the provided status(es)
  'visibility': "visibility_example", // String | Allows to filter companies list on the provided visibility(ies)
  'organisationId': "organisationId_example", // String | Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) `superadmin`, `support`, `bp_admin` or `admin`
  'isBP': true, // Boolean | Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) `superadmin`, `support`, `bp_admin` or `admin`.
  'hasBP': true, // Boolean | Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) `superadmin`, `support` or `bp_admin`.    Users with role `bp_admin` can only use this filter with value `false`.
  'bpType': "bpType_example" // String | Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role `superadmin`, `support` or `bp_admin` can use this filter.
};
apiInstance.getCompanies(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape | [optional] 
 **sortField** | **String**| Sort items list based on the given field | [optional] 
 **limit** | **Number**| Allow to specify the number of items to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting items list. | [optional] 
 **name** | **String**| Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ... | [optional] 
 **status** | **String**| Allows to filter companies list on the provided status(es) | [optional] 
 **visibility** | **String**| Allows to filter companies list on the provided visibility(ies) | [optional] 
 **organisationId** | **String**| Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60; | [optional] 
 **isBP** | **Boolean**| Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;. | [optional] 
 **hasBP** | **Boolean**| Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;. | [optional] 
 **bpType** | **String**| Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter. | [optional] 

### Return type

[**GetCompaniesSuccess**](GetCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyAdministrators

> GetCompanyAdministratorsSuccess getCompanyAdministrators(companyId, accept, opts)

Get company administrators

This API allows users to list users being administrator of a company.       **Users can only retrieve administrators of their own company and administrators of companies visible by their own company** (companies being in user&#39;s company organisation and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, and companies having user&#39;s companyId in &#x60;visibleBy&#x60;).       This API implement pagination, using limit and offset options in query string arguments (default is limit on 100 users). Result sorting can also be done using sort and order options (default is sort on displayName on ascending order).       Examples:   * basic: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators * with pagination options: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators?limit&#x3D;10&amp;offset&#x3D;20&amp;sortField&#x3D;firstName&amp;sortOrder&#x3D;-1  

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less user details in response.    - `small`: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - `medium`: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - `full`: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate
};
apiInstance.getCompanyAdministrators(companyId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of administrators is requested | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate | [optional] 

### Return type

[**GetCompanyAdministratorsSuccess**](GetCompanyAdministratorsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyById

> GetCompanyByIdSuccess getCompanyById(companyId, accept, opts)

Get a company data

This API allows user to get a company data.       **Users can only retrieve their own company and companies they can see** (companies with &#x60;visibility&#x60;&#x3D;&#x60;public&#x60;, companies having user&#39;s companyId in &#x60;visibleBy&#x60; field, companies being in user&#39;s company organization and having &#x60;visibility&#x60;&#x3D;&#x60;organization&#x60;, BP company of user&#39;s company).       If user request his own company, &#x60;numberUsers&#x60; field is returned with the number of Rainbow users being in this company.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/companies/569d0ef3ef7816921f7e94fa

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less company details in response. > - `small`: id, name > - `medium`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape > - `full`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    **When a user wants data of his own company in 'full' mode, he gets all fields except subscriptions and fields related to a business partner managing this company.**
  'name': "name_example", // String | Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter 'My company', 'Company', 'A comp 1', 'Comp of comps', ...
  'status': "status_example", // String | Allows to filter companies list on the provided status(es)
  'visibility': "visibility_example", // String | Allows to filter companies list on the provided visibility(ies)
  'organisationId': "organisationId_example", // String | Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) `superadmin`, `support`, `bp_admin` or `admin`
  'isBP': true, // Boolean | Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) `superadmin`, `support`, `bp_admin` or `admin`.
  'hasBP': true, // Boolean | Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) `superadmin`, `support` or `bp_admin`.    Users with role `bp_admin` can only use this filter with value `false`.
  'bpType': "bpType_example" // String | Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role `superadmin`, `support` or `bp_admin` can use this filter.
};
apiInstance.getCompanyById(companyId, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less company details in response. &gt; - &#x60;small&#x60;: id, name &gt; - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape &gt; - &#x60;full&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    **When a user wants data of his own company in &#39;full&#39; mode, he gets all fields except subscriptions and fields related to a business partner managing this company.** | [optional] 
 **name** | **String**| Allows to filter companies list on the given keyword(s) on field name.       The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ... | [optional] 
 **status** | **String**| Allows to filter companies list on the provided status(es) | [optional] 
 **visibility** | **String**| Allows to filter companies list on the provided visibility(ies) | [optional] 
 **organisationId** | **String**| Allows to filter companies list on the organisationIds provided in this option.       This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60; | [optional] 
 **isBP** | **Boolean**| Allows to filter companies list on isBP field:   * true returns only Business Partner companies, * false return only companies which are not Business Partner.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;bp_admin&#x60; or &#x60;admin&#x60;. | [optional] 
 **hasBP** | **Boolean**| Allows to filter companies list on companies being linked or not to a BP:   * true returns only companies linked to a BP (BP IR companies are also returned), * false return only companies which are not linked to a BP.     This filter can only be used if user has role(s) &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60;.    Users with role &#x60;bp_admin&#x60; can only use this filter with value &#x60;false&#x60;. | [optional] 
 **bpType** | **String**| Allows to filter companies list on bpType field.    This filter allow to get all the Business Partner companies from a given bpType.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;bp_admin&#x60; can use this filter. | [optional] 

### Return type

[**GetCompanyByIdSuccess**](GetCompanyByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

