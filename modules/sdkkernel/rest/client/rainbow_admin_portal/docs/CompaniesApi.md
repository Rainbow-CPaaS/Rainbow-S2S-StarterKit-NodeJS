# RainbowAdminPortal.CompaniesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCompanies**](CompaniesApi.md#deleteCompanies) | **DELETE** /api/rainbow/admin/v1.0/companies/{companyId} | Delete a company
[**getCompanies**](CompaniesApi.md#getCompanies) | **GET** /api/rainbow/admin/v1.0/companies | Get all companies
[**getCompaniesAdministrators**](CompaniesApi.md#getCompaniesAdministrators) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/administrators | Get company administrators
[**getCompaniesId**](CompaniesApi.md#getCompaniesId) | **GET** /api/rainbow/admin/v1.0/companies/{companyId} | Get a company data
[**getCompaniesServiceDescription**](CompaniesApi.md#getCompaniesServiceDescription) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/service-description | Get company service description file
[**getCompanyAppCustomisation**](CompaniesApi.md#getCompanyAppCustomisation) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/app-customisation | Get company App Customisation
[**getCompanyAppFeatureCustomisation**](CompaniesApi.md#getCompanyAppFeatureCustomisation) | **GET** /api/rainbow/admin/v1.0/companies/{companyId}/app-feature-customisation | Get company App feature Customisation
[**getDefaultCompany**](CompaniesApi.md#getDefaultCompany) | **GET** /api/rainbow/admin/v1.0/companies/default | Get default company data
[**postCompanies**](CompaniesApi.md#postCompanies) | **POST** /api/rainbow/admin/v1.0/companies | Create a company
[**putCompanies**](CompaniesApi.md#putCompanies) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId} | Update a company
[**setCompanyCustomisation**](CompaniesApi.md#setCompanyCustomisation) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/app-customisation | Set company App Customisation
[**setCompanyFeatureCustomisation**](CompaniesApi.md#setCompanyFeatureCustomisation) | **PUT** /api/rainbow/admin/v1.0/companies/{companyId}/app-feature-customisation | Set company App feature Customisation



## deleteCompanies

> DeleteCompaniesSuccess deleteCompanies(companyId, accept)

Delete a company

This API allows administrators to delete a company.       Users with &#x60;superadmin&#x60; role can delete any company (except default and terminated companies).       Users with &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; role can only delete companies of their End Customers (i.e. all the companies having bpId equal to their companyId).       Users with &#x60;admin&#x60; role can delete companies they can manage. That is to say:   * an &#x60;organization_admin&#x60; can delete companies he manages (i.e. companies having organisationId equal to his organisationId) * a &#x60;company_admin&#x60; can only delete his company     A company can be deleted only if :   * it&#39;s not the default company nor the terminated company * in case of BP company, it&#39;s not linked to EC / BP IR companies which are not themselves terminated * it&#39;s not linked to site(s) * it has no subscription(s) * it&#39;s not already seen as terminated (status equal terminated) * there are no more users in this company (except for company_admin asking to delete his company if he is alone in it)     If company has default subscriptions and/or subscriptions with status equal terminated, company won&#39;t be deleted but only disabled (status and name of company changed to terminated)    Note that following data linked to the company will be deleted too :   * join company link(s) * join company invitation(s) * join company request(s) * avatar(s) * banner(s)  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
apiInstance.deleteCompanies(companyId, accept).then(function(data) {
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

### Return type

[**DeleteCompaniesSuccess**](DeleteCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanies

> GetCompaniesSuccess getCompanies(accept, opts)

Get all companies

This API allows administrator to retrieve companies they can administrate.       Users with &#39;superadmin&#39;, &#39;support&#39; or &#39;business_admin&#39; role can retrieve all companies.       Users with admin role (and not having superadmin nor support role) can only retrieve their own company and companies they can manage, i.e.:   * organisation admins can retrieve all companies being in their organisation, * bp admins or bp finance of BP DR or BP IR companies can retrieve their company and all of their EC companies (i.e. all companies for which their company is the BP), * bp admins or bp finance of BP VAD companies can retrieve their company, all of their BP IR and EC companies, and all the EC companies linked to their BP IR companies, * company admins and site admin can only retrieve their own company.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies?name&#x3D;My com&amp;format&#x3D;small&amp;limit&#x3D;100&amp;offset&#x3D;0&amp;sortField&#x3D;name&amp;sortOrder&#x3D;-1 

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less company details in response.    - `small`: _id, name    - `medium`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape, visibility    - `full` for superadmin, support, business_admin, bp_admin and bp_finance: All fields    - `full` for admin: All fields except BP fields (bpType, bpBusinessModel, bpApplicantNumber, bpCRDid, bpHasRightToSell, bpHasRightToConnect, bpIsContractAccepted, bpContractAcceptationInfo)
  'bpId': "bpId_example", // String | Allows to filter companies list on bpId field.    This filter allow to get all the End Customer companies associated to a given Business Partner company.       Only users with role `superadmin`, `support`, `business_admin`, `bp_admin` or `bp_finance` can use this filter.    Users with role `bp_admin` or `bp_finance` can use this filter on their own company.
  'catalogId': "catalogId_example", // String | Allows to filter companies list on catalogId field.    This filter allow to get all the companies linked to a given catalogId.       Only users with role `superadmin`, `support` or `business_admin` can use this filter.
  'offerId': "offerId_example", // String | Allows to filter companies list on companies having subscribed to the provided offerId.
  'offerCanBeSold': true, // Boolean | Allows to filter companies list on companies having subscribed to offers with canBeSold=true.    This filter can only be used with the value true (false is not relevant, as all companies have a subscription to Essential which has canBeSold=false, so all companies would match offerCanBeSold=false).
  'externalReference': "externalReference_example", // String | Allows to filter companies list on companies based on externalReference field.    The search is done on externalReference starting with the input characters, case sensitive (ex: ABC will match companies with externalReference ABC, ABCD, ABC12... ; but externalReference abc, AABC, 1ABC, ... will not match).       Only users with role `superadmin`, `support`, `business_admin`, `bp_admin` or `bp_finance` can use this filter.
  'externalReference2': "externalReference2_example", // String | Allows to filter companies list on companies based on externalReference2 field.    The search is done on externalReference2 starting with the input characters, case sensitive (ex: ABC will match companies with externalReference2 ABC, ABCD, ABC12... ; but externalReference2 abc, AABC, 1ABC, ... will not match).       Only users with role `superadmin`, `support`, `business_admin`, `bp_admin` or `bp_finance` can use this filter.
  'limit': 3.4, // Number | Allow to specify the number of companies to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort company list based on the given field.
  'sortOrder': 3.4, // Number | Specify order when sorting company list.
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
 **format** | **String**| Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape, visibility    - &#x60;full&#x60; for superadmin, support, business_admin, bp_admin and bp_finance: All fields    - &#x60;full&#x60; for admin: All fields except BP fields (bpType, bpBusinessModel, bpApplicantNumber, bpCRDid, bpHasRightToSell, bpHasRightToConnect, bpIsContractAccepted, bpContractAcceptationInfo) | [optional] 
 **bpId** | **String**| Allows to filter companies list on bpId field.    This filter allow to get all the End Customer companies associated to a given Business Partner company.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;business_admin&#x60;, &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; can use this filter.    Users with role &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; can use this filter on their own company. | [optional] 
 **catalogId** | **String**| Allows to filter companies list on catalogId field.    This filter allow to get all the companies linked to a given catalogId.       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60; or &#x60;business_admin&#x60; can use this filter. | [optional] 
 **offerId** | **String**| Allows to filter companies list on companies having subscribed to the provided offerId. | [optional] 
 **offerCanBeSold** | **Boolean**| Allows to filter companies list on companies having subscribed to offers with canBeSold&#x3D;true.    This filter can only be used with the value true (false is not relevant, as all companies have a subscription to Essential which has canBeSold&#x3D;false, so all companies would match offerCanBeSold&#x3D;false). | [optional] 
 **externalReference** | **String**| Allows to filter companies list on companies based on externalReference field.    The search is done on externalReference starting with the input characters, case sensitive (ex: ABC will match companies with externalReference ABC, ABCD, ABC12... ; but externalReference abc, AABC, 1ABC, ... will not match).       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;business_admin&#x60;, &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; can use this filter. | [optional] 
 **externalReference2** | **String**| Allows to filter companies list on companies based on externalReference2 field.    The search is done on externalReference2 starting with the input characters, case sensitive (ex: ABC will match companies with externalReference2 ABC, ABCD, ABC12... ; but externalReference2 abc, AABC, 1ABC, ... will not match).       Only users with role &#x60;superadmin&#x60;, &#x60;support&#x60;, &#x60;business_admin&#x60;, &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; can use this filter. | [optional] 
 **limit** | **Number**| Allow to specify the number of companies to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first company to retrieve (first company if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort company list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting company list. | [optional] 
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


## getCompaniesAdministrators

> GetCompaniesAdministratorsSuccess getCompaniesAdministrators(companyId, accept, opts)

Get company administrators

This API allows administrators to list users being administrator of a company.       Users with &#x60;superadmin&#x60;, &#x60;support&#x60; role can list administrators from any company.       Users with &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; role can only list administrators for companies being End Customers of their BP company (i.e. all the companies having bpId equal to their companyId).       Users with &#x60;admin&#x60; role can only list administrators belonging to companies they can manage. That is to say:   * an organization_admin can get list administrators belonging to each companies he manages (i.e. companies having organisationId equal to his organisationId) * a company_admin gets list administrators being in his company * a site_admin gets nothing        This API can return more or less user information using format option in query string arguments (default is small).    This API implement pagination, using limit and offset options in query string arguments (default is limit on 100 users). Result sorting can also be done using sort and order options (default is sort on displayName on ascending order).       Examples:   * basic: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators * with format options: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators?format&#x3D;full * with pagination options: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/administrators?limit&#x3D;10&amp;offset&#x3D;20&amp;sortField&#x3D;loginEmail&amp;sortOrder&#x3D;-1  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which list of administrators is requested
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less user details in response.    - `small`: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - `medium`: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - `full`: all user fields
  'limit': 3.4, // Number | Allow to specify the number of users to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first user to retrieve (first user if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort user list based on the given field.
  'sortOrder': 3.4 // Number | Specify order when sorting user list.
};
apiInstance.getCompaniesAdministrators(companyId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: all user fields | [optional] 
 **limit** | **Number**| Allow to specify the number of users to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first user to retrieve (first user if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort user list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting user list. | [optional] 

### Return type

[**GetCompaniesAdministratorsSuccess**](GetCompaniesAdministratorsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompaniesId

> GetCompaniesIdSuccess getCompaniesId(companyId, accept, opts)

Get a company data

Users with &#39;superadmin&#39;, &#39;support&#39; or &#39;business_admin&#39; role can retrieve any company.    **Users with admin role (and not having superadmin nor support role) can only retrieve their own company and companies they manage** (case of organization_admin). They also have right to retrieve their BP company if they have one.    **Users with bp_admin of bp_finance role (and not having superadmin nor support role) can only retrieve their own company and companies they manage** (their EC companies). They also have right to retrieve their BP company if they have one. In the case of bp_admin or bp_finance of BP VAD companies, they can also retrieve EC companies being linked to their BP IR companies.       If user request his own company or a company he manages (superadmin, support, organisation admin), &#x60;numberUsers&#x60; field is returned with the number of Rainbow users being in this company.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/569d0ef3ef7816921f7e94fa

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less company details in response.    - `small`: id, name    - `medium`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape, visibility    - `full` for superadmin, support, business_admin, bp_admin and bp_finance: All fields, including (dataLocation)    - `full` for admin: All fields including BP field 'bpType' and dataLocation, but without fields (subscriptions, bsCompanyId, zuoraCompanyId, bpBusinessModel, bpApplicantNumber, bpCRDid, bpIsContractAccepted, bpContractAcceptationInfo, bpHasRightToSell, bpHasRightToConnect)
};
apiInstance.getCompaniesId(companyId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: id, name    - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape, visibility    - &#x60;full&#x60; for superadmin, support, business_admin, bp_admin and bp_finance: All fields, including (dataLocation)    - &#x60;full&#x60; for admin: All fields including BP field &#39;bpType&#39; and dataLocation, but without fields (subscriptions, bsCompanyId, zuoraCompanyId, bpBusinessModel, bpApplicantNumber, bpCRDid, bpIsContractAccepted, bpContractAcceptationInfo, bpHasRightToSell, bpHasRightToConnect) | [optional] 

### Return type

[**GetCompaniesIdSuccess**](GetCompaniesIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompaniesServiceDescription

> GetCompaniesServiceDescriptionSuccess getCompaniesServiceDescription(companyId, accept)

Get company service description file

This API allows administrators to get service description pdf file uploaded by superadmin

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which service description file is requested
var accept = "accept_example"; // String | application/json
apiInstance.getCompaniesServiceDescription(companyId, accept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which service description file is requested | 
 **accept** | **String**| application/json | 

### Return type

[**GetCompaniesServiceDescriptionSuccess**](GetCompaniesServiceDescriptionSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyAppCustomisation

> getCompanyAppCustomisation(companyId, accept)

Get company App Customisation

This API allows administrators to list the customisation elements of the UI for the company.       Retrieves the application UI customisation elements (e.g. background, foreground, text or border colors) for the given company.    The list of supported UI elements is the following (naming convention given from the desktop UI):   * mainBackgroundColor: Background color on the side of the main pane. * secondBackgroundColor: Background color inside the main pane (Bubbles, meetings, Contacts...). * asideBackgroundColor: Background color of left pane (e.g. conversations). * headerBackgroundColor: Background color of top menu (The one grouping action buttons : Life, Bubbles...). * headerContrastedBackgroundColor: Background color of hover in top menu. * tabsMenuBackgroundColor: Background color of search bars and tabs. * footerBackgroundColor: Background color of footer bar. * contrastedBackgroundColor: Default color of hover in left pane. * activeBackgroundColor: Default color of selected item in left pane. * homeTopBackgroundColor: Default color of the top background in the home page. * homeBackgroundColor: Default color of the bottom background in the home page. * buttonBackgroundColor: Background color of square button. * mainTitlesColor: Default color of titles (Bubbles, Meetings...) and selected item in top menu. * contrastedTitlesColor: Default color of text in top menu. * contrastedTextColor: Default color of text in search bars. * contrastedHoverTextColor: Default hover color of text in top menu. * textColor: Default color of text in left menu. * textHoverColor: Default hover color of text in left menu. * textActiveColor: Default color of selected text in left menu. * buttonTextColor: Default color of text in square button. * badgeCounterColor: Background color of counters (e.g. missed calls). * contrastedIconColor: Default color of icon for groups contact. * shadowsColor: Default color of shadows in main pane. * asideBorderColor: Default color of border between conversation pane and main pane. * contrastedBordersColor: Default color of borders in top menu.  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which list of custom elements is requested.
var accept = "accept_example"; // String | application/json
apiInstance.getCompanyAppCustomisation(companyId, accept).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of custom elements is requested. | 
 **accept** | **String**| application/json | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyAppFeatureCustomisation

> getCompanyAppFeatureCustomisation(companyId, accept)

Get company App feature Customisation

This API allows administrators to list the features customisation elements for the company.       Retrieves the application features customisation elements (e.g. conversation pane, menu pane, services) for the given company.    The list of supported features elements is the following (naming convention given from the desktop):   * featureConversationPane: Left pane containing conversations. * callContact: Button call a contact from conversations pane. * searchContact: Search bar in the conversations pane. * featureTopPane: Top pane containing the menu. * featureServices: Services available for the users. * meeting: Allow to create a meeting. * uploadFile: Allow user to upload a file. * shareFile: Allow user to share file with other user . * callHistory: Allow user to have a call history. * createBubble: Allow user to create bubble.  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which list of custom feature elements is requested.
var accept = "accept_example"; // String | application/json
apiInstance.getCompanyAppFeatureCustomisation(companyId, accept).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which list of custom feature elements is requested. | 
 **accept** | **String**| application/json | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDefaultCompany

> GetDefaultCompanySuccess getDefaultCompany(accept, opts)

Get default company data

This API allows to get the default Rainbow company.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/default

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less company details in response.    - `small`: _id, name    - `medium`: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    - `full` for superadmin and support: All fields    - `full` for admin: All fields except BP fields (bpType, bpBusinessModel, bpApplicantNumber, bpCRDid, bpHasRightToSell, bpHasRightToConnect, bpIsContractAccepted, bpContractAcceptationInfo)
};
apiInstance.getDefaultCompany(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less company details in response.    - &#x60;small&#x60;: _id, name    - &#x60;medium&#x60;: id, name, status, adminEmail, companyContactId, country, website, slogan, description, size, economicActivityClassification, lastAvatarUpdateDate, lastBannerUpdateDate, avatarShape    - &#x60;full&#x60; for superadmin and support: All fields    - &#x60;full&#x60; for admin: All fields except BP fields (bpType, bpBusinessModel, bpApplicantNumber, bpCRDid, bpHasRightToSell, bpHasRightToConnect, bpIsContractAccepted, bpContractAcceptationInfo) | [optional] 

### Return type

[**GetDefaultCompanySuccess**](GetDefaultCompanySuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCompanies

> PostCompaniesSuccess postCompanies(body)

Create a company

Only superadmin, BP admin, BP finance and organisation admin can create companies with this API.       Companies created by a &#x60;bp_admin&#x60; or a &#x60;bp_finance&#x60; (without organisation admin role) are automatically attached to his BP company (bpId set to BP company). They are created with the status &#x60;initializing&#x60;.    Companies created by a &#x60;bp_admin&#x60; or a &#x60;bp_finance&#x60; having also organisation admin role can be either be created in their organisation (default) or under a BP they manage in their organization (if they provide a bpId). to his BP company (bpId set to BP company). They are created with the status &#x60;initializing&#x60;.   * If BP company has &#x60;bpType&#x60; equal to &#x60;VAD&#x60;, the field &#x60;isBp&#x60; can be set to true or false: In that case, the created company will be a BP with bpType Indirect Reseller:    * If the field &#x60;isBp&#x60; is set to true, the company is created with isBP &#x3D; true, bpType &#x3D; &#39;IR&#39;, bpBusinessModel &#x3D; &#39;resell&#39; and bpHasRightToConnect &#x3D; true (it will be a BP Indirect Reseller company linked to this BP VAD company, this BP IR company will be able to have his own EC companies attached to it)   * If the field &#x60;isBp&#x60; is set to false (or not defined), the company is created with bpId &#x3D; BP companyId (it will be an End Customer company directly attached to this BP VAD company)   * The status of the company will be updated to &#x60;active&#x60; once the first invited bp_admin / bp_finance (invited using join company invitation with flag invitedToBeBpAdmin set to true) will join this company. * If BP company has &#x60;bpType&#x60; equal to &#x60;DR&#x60; or &#x60;IR&#x60;, the created company will be an End Customer company:    * The company is created with bpId &#x3D; BP companyId   * The status of the company will be updated to &#x60;active&#x60; once the first invited company_admin (invited using join company invitation with flag invitedToBeCompanyAdmin set to true) will join this company.     Companies created by a &#x60;Organisation admin&#x60; are automatically attached to his organisation.       &#x60;Users&#x60; being in Default company can create their own company using API enduser/PostCompanies [POST /api/rainbow/enduser/v1.0/companies][0]      When a company is created, a subscription to the Default offer is assigned to this company. All users of this company will be assigned to this default subscription when they are created or when they arrive in the company.       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex&#x3D;true.   A Company can&#39;t change the CENTREX status, when some sites are already created for it.  [0]: /enduser/#api-companies-enduser_PostCompanies

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var body = new RainbowAdminPortal.PostCompanies(); // PostCompanies | 
apiInstance.postCompanies(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostCompanies**](PostCompanies.md)|  | 

### Return type

[**PostCompaniesSuccess**](PostCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCompanies

> PutCompaniesSuccess putCompanies(companyId, body)

Update a company

Users with superadmin role can update any company. Users with admin role (and not having superadmin role) can only update their own company.       Default and Terminated companies can&#39;t be renamed, and their name can&#39;t be use to rename another company

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company unique identifier (like 569ce8c8f9336c471b98eda1)
var body = new RainbowAdminPortal.PutCompanies(); // PutCompanies | 
apiInstance.putCompanies(companyId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company unique identifier (like 569ce8c8f9336c471b98eda1) | 
 **body** | [**PutCompanies**](PutCompanies.md)|  | 

### Return type

[**PutCompaniesSuccess**](PutCompaniesSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCompanyCustomisation

> SetCompanyCustomisationSuccess setCompanyCustomisation(companyId)

Set company App Customisation

This API allows administrators to set or update the customisation elements of the UI for the company.       These elements (e.g. background, foreground, text or border colors) will then be available to the end user to customise graphical elements of the application&#39;s user interface.    See supported element names in above GET request.       The whole object will replace the existing one, if found.    The customisation object has some limitations:   * Element name can&#39;t exceed 50 characters. * Element value can&#39;t exceed 50 characters.     Example:   * PUT https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/app-customisation  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which update of customisation elements is requested.
apiInstance.setCompanyCustomisation(companyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which update of customisation elements is requested. | 

### Return type

[**SetCompanyCustomisationSuccess**](SetCompanyCustomisationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setCompanyFeatureCustomisation

> SetCompanyFeatureCustomisationSuccess setCompanyFeatureCustomisation(companyId)

Set company App feature Customisation

This API allows administrators to set or update the feature customisation elements for the company.       These elements (e.g. conversation pane, menu pane, services) will then be available to the end user to customise their rainbow application.    See supported element names in above GET request.       The whole object will replace the existing one, if found.    The customisation object has some limitations:   * Element name can&#39;t exceed 50 characters. * Element value can&#39;t exceed 50 characters.     Example:   * PUT https://openrainbow.com/api/rainbow/admin/v1.0/companies/5749aa51245015fe0d36e968/app-feature-customisation  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.CompaniesApi();
var companyId = "companyId_example"; // String | Company for which update of customisation elements is requested.
apiInstance.setCompanyFeatureCustomisation(companyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Company for which update of customisation elements is requested. | 

### Return type

[**SetCompanyFeatureCustomisationSuccess**](SetCompanyFeatureCustomisationSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

