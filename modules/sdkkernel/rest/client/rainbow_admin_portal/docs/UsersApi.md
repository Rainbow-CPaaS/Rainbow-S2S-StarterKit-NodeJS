# RainbowAdminPortal.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsers**](UsersApi.md#deleteUsers) | **DELETE** /api/rainbow/admin/v1.0/users/{userId} | Delete a user
[**getUsers**](UsersApi.md#getUsers) | **GET** /api/rainbow/admin/v1.0/users | Get all users
[**getUsersId**](UsersApi.md#getUsersId) | **GET** /api/rainbow/admin/v1.0/users/{userId} | Get a user data
[**postUsers**](UsersApi.md#postUsers) | **POST** /api/rainbow/admin/v1.0/users | Create a user
[**putUsers**](UsersApi.md#putUsers) | **PUT** /api/rainbow/admin/v1.0/users/{userId} | Update a user



## deleteUsers

> DeleteUsersSuccess deleteUsers(userId, accept)

Delete a user

This API can be used to delete a user.       **BP Admin** and **BP Finance** users can only delete users being in a company linked to their BP company.    **Admin** users can only delete users being in their own company. (superadmin, organization_admin, company_admin)       Depending current user initialization, the behaviour to follow may change   * user never initialized and never logged, user with the role &#39;guest&#39;:    * delete the user from xmpp and database  * user currently initialized or logged at least one time    * change loginEmail, change rainbow password, change jid_password, warn deleted user clients for disconnection   * delete personal phone numbers and free system phone numbers   * flag pending invite as canceled   * flag join company requests as canceled   * for all rooms where the user privilege is not &#39;moderator&#39; or not le last, he gets the status &#39;deleted&#39;   * for all rooms where the user is the last moderator, the room is &#39;archived&#39;, that is to say all users of the room get the status &#39;unsubscribed&#39;   * delete avatar and warn clients   * set user flag &#39;isTerminated&#39; and move him to the dedicated company &#39;Terminated&#39;   The following XMPP message is sent to all users being in deleted user&#39;s roster:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;useraccount id&#x3D;\&quot;56c5c19f94141765119f896c\&quot; action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60;    **Only a migration script is planned to delete permanently a user &#39;terminated&#39; after a legal delay time.**

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
apiInstance.deleteUsers(userId, accept).then(function(data) {
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

[**DeleteUsersSuccess**](DeleteUsersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> GetUsersSuccess getUsers(accept, opts)

Get all users

This API allows administrators to list users.       Users with &#x60;superadmin&#x60;, &#x60;support&#x60; role can retrieve users from any company.    Users with &#x60;support&#x60; role can retrieve lastLoginIOSDate and lastLoginAndroidDate providing format option &#x60;full&#x60;.       Users with &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; role retrieve only users from company being End Customers of their BP company (i.e. all the companies having bpId equal to their companyId).       Users with &#x60;admin&#x60; role retrieve only users belonging to companies they can manage. That is to say:   * an organization_admin gets all users belonging to each companies he manages (i.e. companies having organisationId equal to his organisationId) * a company_admin gets all users being in his company * a site_admin gets all users being in his company     Note:   * To hide GUEST, the filter roles&#x3D;user is applied by default. Then all multi-roles like &#x60;admin&#x60;, &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; stay retrievable. To get only guest belonging to a company, use GET /api/rainbow/admin/v1.0/users?roles&#x3D;guest     This API can return more or less user information using format option in query string arguments (default is small).    This API implement pagination, using limit and offset options in query string arguments (default is limit on 100 users). Result sorting can also be done using sort and order options (default is sort on displayName on ascending order).       This API allows to filter results on several criterion by providing appropriate options in query string arguments (displayName, companyName, loginEmail, jid_im, jid_tel, companyId).       Examples:   * basic: GET https://openrainbow.com/api/rainbow/admin/v1.0/users * with format options: GET https://openrainbow.com/api/rainbow/admin/v1.0/users?format&#x3D;full * with pagination options: GET https://openrainbow.com/api/rainbow/admin/v1.0/users?limit&#x3D;10&amp;offset&#x3D;20&amp;sortField&#x3D;loginEmail&amp;sortOrder&#x3D;-1 * with filter options: GET https://openrainbow.com/api/rainbow/admin/v1.0/users?displayName&#x3D;john doe&amp;companyId&#x3D;56d6f0d441255dd54b5b61b3 56b89d26f7ab94c69ad41584  

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'searchEmail': "searchEmail_example", // String | Allows to filter users list on the loginEmail field using the word provided in this option.
  'companyId': "companyId_example", // String | Allows to filter users list on the companyIds provided in this option.       In the case of `admin` (without superadmin, support roles), provided companyIds should correspond to companies visible by logged in user's company (if some of the provided companyId are not visible by logged in user's company, users from these companies will not be returned).
  'roles': "roles_example", // String | Allows to filter users list on the role(s) provided in this option.       This allow for example to get all users with role bp_admin.    By default, only users having (at least) the role `user` are listed.
  'isTerminated': "isTerminated_example", // String | Allows to filter users list on the status 'isTerminated'.       By default, terminated users are not listed.
  'format': "format_example", // String | Allows to retrieve more or less user details in response.    - `small`: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - `medium`: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - `full`: all user fields
  'limit': 3.4, // Number | Allow to specify the number of users to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first user to retrieve (first user if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort user list based on the given field.
  'sortOrder': 3.4, // Number | Specify order when sorting user list.
  'displayName': "displayName_example", // String | Allows to filter users list on the given keyword(s) on field displayName.
  'useEmails': true, // Boolean | used with displayName, allows to filter users list on the given keyword(s) on field displayName for loginEmails too.
  'companyName': "companyName_example", // String | Allows to filter users list on the given keyword(s) on field companyName.
  'loginEmail': "loginEmail_example", // String | Allows to filter users list on the loginEmails provided in this option.
  'email': "email_example", // String | Allows to filter users list on the emails provided in this option.
  'visibility': "visibility_example", // String | Allows to filter users list on the visibility(ies) provided in this option.
  'organisationId': "organisationId_example", // String | Allows to filter users list on the organisationIds provided in this option.       Option is reserved for superAdmin or admin allowed to manage the given organisationId.
  'siteId': "siteId_example", // String | Allows to filter users list on the siteIds provided in this option.       Option is reserved for superAdmin or admin allowed to manage the given siteIds.
  'jidIm': "jidIm_example", // String | Allows to filter users list on the jid_ims provided in this option.
  'jidTel': "jidTel_example" // String | Allows to filter users list on the jid_tels provided in this option.
};
apiInstance.getUsers(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **searchEmail** | **String**| Allows to filter users list on the loginEmail field using the word provided in this option. | [optional] 
 **companyId** | **String**| Allows to filter users list on the companyIds provided in this option.       In the case of &#x60;admin&#x60; (without superadmin, support roles), provided companyIds should correspond to companies visible by logged in user&#39;s company (if some of the provided companyId are not visible by logged in user&#39;s company, users from these companies will not be returned). | [optional] 
 **roles** | **String**| Allows to filter users list on the role(s) provided in this option.       This allow for example to get all users with role bp_admin.    By default, only users having (at least) the role &#x60;user&#x60; are listed. | [optional] 
 **isTerminated** | **String**| Allows to filter users list on the status &#39;isTerminated&#39;.       By default, terminated users are not listed. | [optional] 
 **format** | **String**| Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: all user fields | [optional] 
 **limit** | **Number**| Allow to specify the number of users to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first user to retrieve (first user if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort user list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting user list. | [optional] 
 **displayName** | **String**| Allows to filter users list on the given keyword(s) on field displayName. | [optional] 
 **useEmails** | **Boolean**| used with displayName, allows to filter users list on the given keyword(s) on field displayName for loginEmails too. | [optional] 
 **companyName** | **String**| Allows to filter users list on the given keyword(s) on field companyName. | [optional] 
 **loginEmail** | **String**| Allows to filter users list on the loginEmails provided in this option. | [optional] 
 **email** | **String**| Allows to filter users list on the emails provided in this option. | [optional] 
 **visibility** | **String**| Allows to filter users list on the visibility(ies) provided in this option. | [optional] 
 **organisationId** | **String**| Allows to filter users list on the organisationIds provided in this option.       Option is reserved for superAdmin or admin allowed to manage the given organisationId. | [optional] 
 **siteId** | **String**| Allows to filter users list on the siteIds provided in this option.       Option is reserved for superAdmin or admin allowed to manage the given siteIds. | [optional] 
 **jidIm** | **String**| Allows to filter users list on the jid_ims provided in this option. | [optional] 
 **jidTel** | **String**| Allows to filter users list on the jid_tels provided in this option. | [optional] 

### Return type

[**GetUsersSuccess**](GetUsersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersId

> GetUsersIdSuccess getUsersId(userId, accept, opts)

Get a user data

This API can be used to get a user.       Users with &#x60;superadmin&#x60;, &#x60;support&#x60; role can retrieve any user whatever the company.    Users with &#x60;support&#x60; role retrieve additional data lastLoginIOSDate and lastLoginAndroidDate.       Users with &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; role can only retrieve users from company being End Customers of their BP company (i.e. all the companies having bpId equal to their companyId).       Users with &#x60;admin&#x60; role can only retrieve users belonging to companies they can manage. That is to say:   * an organization_admin can only get users belonging to a company he can manage (i.e. companies having organisationId equal to his organisationId) * a company_admin can only get a user being in his company * a site_admin can only get a user being in his company     Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/users/56c5cb38e8078d7512c43985

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less user details in response.    - `small`: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - `medium`: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - `full`: all user fields
};
apiInstance.getUsersId(userId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: all user fields | [optional] 

### Return type

[**GetUsersIdSuccess**](GetUsersIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postUsers

> PostUsersSuccess postUsers(body)

Create a user

This api creates a user in Rainbow application.       Jabber identifiers (IM and TEL) are generated and user is created in XMPP server.       Users with &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; role can only create users in companies being End Customers of their BP company (i.e. all the companies having bpId equal to their companyId).       Users with &#x60;admin&#x60; role can only create users in companies they can manage. That is to say:   - an organization_admin can create users only in a company he can manage (i.e. companies having organisationId equal to his organisationId)   - a company_admin can only create users in his company   - a site_admin can&#39;t create users       **Admin** users can only set roles &#x60;guest&#x60;, &#x60;user&#x60; and &#x60;admin&#x60;.       Note that phone numbers linked to a system (pbx) can&#39;t be added in user&#39;s phoneNumbers using this API. System phone numbers are created by administrators or by PCG and can be linked to Rainbow user using: [PUT /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId}][0]      In some cases, creating a user with GUEST role may be sufficient. Here are GUEST role specificity:   * GUEST is a single role that can&#39;t be modified * Created by a COMPANY ADMIN only, in his company * Has limited rights to chat, audio and video conversations * Is never notified by email * Can&#39;t receive welcome message by Emily * Can&#39;t manage its password (reset) * By default, can&#39;t be search inside or outside his company * Can&#39;t be moved to another company * Definitely deleted (his user experience is not kept: conversations ...)   [0]: #api-admin_systems_phone_numbers-PutSystemPhoneNumbers

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');

var apiInstance = new RainbowAdminPortal.UsersApi();
var body = new RainbowAdminPortal.PostUsers(); // PostUsers | 
apiInstance.postUsers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostUsers**](PostUsers.md)|  | 

### Return type

[**PostUsersSuccess**](PostUsersSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUsers

> PutUsersSuccess putUsers(userId, body)

Update a user

This API can be used to update data of a user.    Unlike end-user PUT /users/id API, this admin API allows to update these fields: &#x60;loginEmail&#x60;, &#x60;password&#x60;, &#x60;roles&#x60;, &#x60;accountType&#x60; and &#x60;isActive&#x60;.    In case of user password update, if user account was locked (because of too many login attempts failures), user account will be unlocked once password is changed.       **BP Admin** and **BP Finance** users can only update users being in a company linked to their BP company.    **Admin** users can only update users being in their own company.    **Support** users can only update user password.    Whatever user&#39;s admin roles, user can&#39;t update his own loginEmail.    A user can&#39;t modify his own roles.       A presence stanza is sent to updated user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;     &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;         &lt;data/&gt;     &lt;/x&gt; &lt;/presence&gt; &#x60;&#x60;&#x60;    Note that phone numbers linked to a system (pbx) can&#39;t be added in user&#39;s phoneNumbers using this API. System phone numbers are created by administrators or by PCG and can be linked to Rainbow user using: [PUT /api/rainbow/admin/v1.0/systems/:systemId/phone-numbers/:phoneNumberId][0]   In some cases, creating a user with GUEST role may be sufficient. Here are GUEST role specificity:   * GUEST is a single role that can&#39;t be modified * Created by a COMPANY ADMIN only, in his company * Has limited rights to chat, audio and video conversations * Is never notified by email * Can&#39;t receive welcome message by Emily * Can&#39;t manage its password (reset) * By default, can&#39;t be search inside or outside his company * Can&#39;t be moved to another company * Definitely deleted (his user experience is not kept: conversations ...)     Note than when user password is changed, all its previously generated JWT are revoked and jid_password of its jid_im and jid_tel is updated with a new password. All connected jid_im and jid_tel resources are also disconnected.    Therefore, clients have to login again with this user in order to retrieve a new valid JWT and its new jid_password.       The following XMPP message is sent to user&#39;s jid_im to warn that the password has changed:        &#x60;&#x60;&#x60;html &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;     from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;     to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;     xmlns&#x3D;\&quot;jabber:client\&quot;&gt;     &lt;userpassword action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot; &lt;/message&gt; &#x60;&#x60;&#x60;  [0]: #api-admin_systems_phone_numbers-PutSystemPhoneNumbers

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var body = new RainbowAdminPortal.PutUsers(); // PutUsers | 
apiInstance.putUsers(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56c5c19f94141765119f896c) | 
 **body** | [**PutUsers**](PutUsers.md)|  | 

### Return type

[**PutUsersSuccess**](PutUsersSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

