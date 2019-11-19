# RainbowEnduserPortal.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMyself**](UsersApi.md#deleteMyself) | **DELETE** /api/rainbow/enduser/v1.0/users/{userId} | Deleted by himself
[**getConnectedUserData**](UsersApi.md#getConnectedUserData) | **GET** /api/rainbow/enduser/v1.0/users/me | Get logged in user data
[**getUserByJid**](UsersApi.md#getUserByJid) | **GET** /api/rainbow/enduser/v1.0/users/jids/{jid_im} | Get user data by jid_im
[**getUserDataById**](UsersApi.md#getUserDataById) | **GET** /api/rainbow/enduser/v1.0/users/{userId} | Get user data
[**getUserNetwork**](UsersApi.md#getUserNetwork) | **GET** /api/rainbow/enduser/v1.0/users/networks | Get user network
[**getUsersByloginEmails**](UsersApi.md#getUsersByloginEmails) | **POST** /api/rainbow/enduser/v1.0/users/loginemails | Get users by list of loginemail
[**registerMyself**](UsersApi.md#registerMyself) | **POST** /api/rainbow/enduser/v1.0/users/self-register | Self register a user
[**removeContactFromUserNetwork**](UsersApi.md#removeContactFromUserNetwork) | **DELETE** /api/rainbow/enduser/v1.0/users/networks/{userId} | Remove one contact from the user network
[**searchUsersByJids**](UsersApi.md#searchUsersByJids) | **POST** /api/rainbow/enduser/v1.0/users/jids | Search a list of users by jid_ims
[**updateUser**](UsersApi.md#updateUser) | **PUT** /api/rainbow/enduser/v1.0/users/{userId} | Update user data



## deleteMyself

> DeleteMyselfSuccess deleteMyself(userId, accept)

Deleted by himself

This API can be used to delete a user.    Depending current user initialization, the behaviour to follow may change   * user never initialized and never logged:    * delete the user from xmpp and database  * user currently initialized or logged at least one time    * The credentials of the account are destroyed to avoid a malicious reconnection. Then, change loginEmail, change rainbow password, change jid_password. All Rainbow clients connected using this account are disconnected   * Cancel pending invites from this user, to join rainbow   * set user flag &#39;isTerminated&#39; and move him to the dedicated company &#39;Terminated&#39;   * Rainbow sends a notification email to the professional email of the deleted account   * The deleted account remains visible by other Rainbow users. But It is no more possible to interact with it (no chat, no calls). Messages associated to the deleted user are still visible by other active Rainbow users   * A deleted user can&#39;t be find in the search   The following XMPP message is sent to all users being in deleted user&#39;s roster:        &#x60;&#x60;&#x60;html    &lt;message id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot; type&#x3D;\&quot;management\&quot;        from&#x3D;\&quot;pcloud_enduser_1@openrainbow.com/172440802160413612281463752830017532\&quot;        to&#x3D;\&quot;5abb735b2d3c4e50adde276c50ec489c@@openrainbow.com\&quot;        xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;useraccount id&#x3D;\&quot;56c5c19f94141765119f896c\&quot; action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    **Only a migration script is planned to delete permanently a user &#39;terminated&#39; after a legal delay time.**

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
apiInstance.deleteMyself(userId, accept).then(function(data) {
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

[**DeleteMyselfSuccess**](DeleteMyselfSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectedUserData

> GetConnectedUserDataSuccess getConnectedUserData(accept)

Get logged in user data

This API can be used to get logged in user data.       This API is especially useful for OAuth authentication, as logged in user data are not sent back to the OAuth client.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var accept = "accept_example"; // String | application/json
apiInstance.getConnectedUserData(accept).then(function(data) {
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

[**GetConnectedUserDataSuccess**](GetConnectedUserDataSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserByJid

> GetUserByJidSuccess getUserByJid(jidIm, accept, opts)

Get user data by jid_im

This API can be used to get a user from its jid_im.       According to the user found, the fields which can be returned (according to the requested format) are not the same.    This depends on logged in user&#39;s visibility on the found user (logged in user himself, user visible by logged in user, or user unknown by logged in user).    See documentation of &#x60;format&#x60; query string parameter for the details of the fields which can be returned.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/jids/ 64c84652b5784b1c8fcc4b752fb061d8@openrainbow.com

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var jidIm = "jidIm_example"; // String | Wanted jid identifier
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less user details in response.   * When found user is the logged in user himself, the following fields are returned depending on the requested format:    - `small`: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated, isInDefaultCompany, calendars, isADSearchAvailable    - `medium`: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, isInDefaultCompany, calendars, isADSearchAvailable    - `full`: all user fields + isInDefaultCompany, calendars, isADSearchAvailable * When found user is not the logged in user's, but in logged in user's network, logged in user's company or in a company visible by logged in user's company, the following fields are returned depending on the requested format:    - `small`: id, displayName, firstName, lastName, companyId, companyName, isTerminated    - `medium`: id, displayName, firstName, lastName, jid_im, jid_tel, companyId, companyName, isTerminated, lastAvatarUpdateDate, lastUpdateDate, guestMode    - `full`: id, loginEmail, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, roles, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate * When found user is unknown by the the logged in user, the following fields are returned depending on the requested format:    - `small`: id, firstName, lastName, companyId, companyName, isTerminated    - `medium`: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode    - `full`: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode  
};
apiInstance.getUserByJid(jidIm, accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jidIm** | **String**| Wanted jid identifier | 
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less user details in response.   * When found user is the logged in user himself, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated, isInDefaultCompany, calendars, isADSearchAvailable    - &#x60;medium&#x60;: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, isInDefaultCompany, calendars, isADSearchAvailable    - &#x60;full&#x60;: all user fields + isInDefaultCompany, calendars, isADSearchAvailable * When found user is not the logged in user&#39;s, but in logged in user&#39;s network, logged in user&#39;s company or in a company visible by logged in user&#39;s company, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, displayName, firstName, lastName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, displayName, firstName, lastName, jid_im, jid_tel, companyId, companyName, isTerminated, lastAvatarUpdateDate, lastUpdateDate, guestMode    - &#x60;full&#x60;: id, loginEmail, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, roles, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate * When found user is unknown by the the logged in user, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, firstName, lastName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode   | [optional] 

### Return type

[**GetUserByJidSuccess**](GetUserByJidSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserDataById

> GetUserDataByIdSuccess getUserDataById(userId, accept, opts)

Get user data

This API can be used to get a user.       According to the user found, the fields which can be returned (according to the requested format) are not the same.    This depends on logged in user&#39;s visibility on the found user (logged in user himself, user visible by logged in user, or user unknown by logged in user).    See documentation of &#x60;format&#x60; query string parameter for the details of the fields which can be returned.       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56c5cb38e8078d7512c43985

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less user details in response.   * When found user is the logged in user himself, the following fields are returned depending on the requested format:    - `small`: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated, isInDefaultCompany, calendars, isADSearchAvailable    - `medium`: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, isInDefaultCompany, calendars, isADSearchAvailable    - `full`: all user fields + isInDefaultCompany, calendars, isADSearchAvailable * When found user is not the logged in user's, but in logged in user's network, logged in user's company or in a company visible by logged in user's company, the following fields are returned depending on the requested format:    - `small`: id, displayName, firstName, lastName, companyId, companyName, isTerminated    - `medium`: id, displayName, firstName, lastName, jid_im, jid_tel, companyId, companyName, isTerminated, lastAvatarUpdateDate, lastUpdateDate, guestMode    - `full`: id, loginEmail, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, roles, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate * When found user is unknown by the the logged in user, the following fields are returned depending on the requested format:    - `small`: id, firstName, lastName, companyId, companyName, isTerminated    - `medium`: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode    - `full`: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode  
};
apiInstance.getUserDataById(userId, accept, opts).then(function(data) {
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
 **format** | **String**| Allows to retrieve more or less user details in response.   * When found user is the logged in user himself, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, loginEmail, firstName, lastName, displayName, companyId, companyName, isTerminated, isInDefaultCompany, calendars, isADSearchAvailable    - &#x60;medium&#x60;: id, loginEmail, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, isInDefaultCompany, calendars, isADSearchAvailable    - &#x60;full&#x60;: all user fields + isInDefaultCompany, calendars, isADSearchAvailable * When found user is not the logged in user&#39;s, but in logged in user&#39;s network, logged in user&#39;s company or in a company visible by logged in user&#39;s company, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, displayName, firstName, lastName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, displayName, firstName, lastName, jid_im, jid_tel, companyId, companyName, isTerminated, lastAvatarUpdateDate, lastUpdateDate, guestMode    - &#x60;full&#x60;: id, loginEmail, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, roles, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate * When found user is unknown by the the logged in user, the following fields are returned depending on the requested format:    - &#x60;small&#x60;: id, firstName, lastName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode   | [optional] 

### Return type

[**GetUserDataByIdSuccess**](GetUserDataByIdSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserNetwork

> GetUserNetworkSuccess getUserNetwork(accept, opts)

Get user network

This API allows to list user&#39;s roster.       A field showPresence is added in the response for all users to indicate if the presence is shared between logged in user and this user.

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example" // String | Allows to retrieve more or less user details in response.    - `small`: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - `medium`: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - `full`: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate
};
apiInstance.getUserNetwork(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less user details in response.    - &#x60;small&#x60;: id, firstName, lastName, displayName, companyId, companyName, isTerminated    - &#x60;medium&#x60;: id, firstName, lastName, displayName, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode    - &#x60;full&#x60;: id, firstName, lastName, displayName, nickName, title, jobTitle, emails, phoneNumbers, country, state, language, timezone, jid_im, jid_tel, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate | [optional] 

### Return type

[**GetUserNetworkSuccess**](GetUserNetworkSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersByloginEmails

> GetUsersByloginEmailsSuccess getUsersByloginEmails(body)

Get users by list of loginemail

This API allows also to search a list of users by loginEmails.       Only basic fields of users are returned in the response (id, loginEmail, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode).    To retrieve more details about the users, use the APIs [GET /api/rainbow/enduser/v1.0/users/:userId][0] or [GET /api/rainbow/enduser/v1.0/users/jids/{jid_im}][1]      The maximum number of loginEmails allowed to be provided is 1000 (an error is returned if more than 1000 emails are provided in loginEmail array).  [0]: #operation/GetUsersId [1]: #operation/GetUserJid

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var body = new RainbowEnduserPortal.GetUsersByloginEmails(); // GetUsersByloginEmails | 
apiInstance.getUsersByloginEmails(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetUsersByloginEmails**](GetUsersByloginEmails.md)|  | 

### Return type

[**GetUsersByloginEmailsSuccess**](GetUsersByloginEmailsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerMyself

> RegisterMyselfSuccess registerMyself(body)

Self register a user

This api allows a user to self register in Rainbow application.       This API handles the following use cases:   * User can self-register by himself, without invitation to join Rainbow from another user or a from a company administrator. In this case:    * A temporary user token is required to validate that this is well the user who create his account, and that his email address is valid. Field temporaryToken must be used, and invitationId and joinCompanyInvitationId must not be set.   * Clients have to first call [POST /api/rainbow/enduser/v1.0/notifications/emails/self-register][0] so that user receive an email with a temporary token.   * User enters this token and his data (only loginEmail and password are mandatory), and Clients have to call this API ([POST /api/rainbow/enduser/v1.0/users/self-register][1]) with this code and user data. * User can register from an invitation sent by another Rainbow user, in this case:    * This API requires the invitation id to validate that this is well the email invited by the inviting user who send the invitation email. Field invitationId must be used, and temporaryToken and joinCompanyInvitationId must not be set.   * Inviting Rainbow user has to call [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user][2] so that invited user receives an email with a link containing the invitation id.   * Invited user clicks on this URL, enters his data (only loginEmail and password are mandatory), and Clients have to call this API ([POST /api/rainbow/enduser/v1.0/users/self-register][1]) with the invitationId coming from the URL query string.   * Once user will finish his initialization (isInitialized false -&gt; true), user will be added in inviting user roster, inviting user will receive the following XMPP message indicating that invitation has been accepted, and both users (invited and inviting) will receive a chat message from each other.      &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;userinvite id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;update\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;   * Note that loginEmail provided by the user can be different than the one being in the invitation. * User can register from an invitation sent by a company administrator to join his company in Rainbow, in this case:    * This API requires the join company invitation id to validate that this is well the email invited by the company administrator who send the invitation email. Field joinCompanyInvitationId must be used, and temporaryToken and invitationId must not be set.   * Company administrator has to call [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][3] so that invited user receives an email with a link containing the join company invitation id.   * Invited user clicks on this URL, enters his data (only loginEmail and password are mandatory), and Clients have to call this API ([POST /api/rainbow/enduser/v1.0/users/self-register][1]) with the joinCompanyInvitationId coming from the URL query string.   * Once user is created, user will be added in administrator&#39;s company. All company administrators receive the following XMPP message indicating that invitation has been accepted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; status&#x3D;&#39;auto-accepted&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;   * Note that loginEmail provided by the user can be different than the one being in the invitation.     In every cases, if temporaryToken, invitationId or joinCompanyInvitationId are valid, user is created in rainbow (Jabber identifiers (IM and TEL) are generated, vCard is created, default users are added to his roster, and user is created in mongoDB database).       If joinCompanyInvitationId is used, created user it attached to the company related to this invitation.    If joinCompanyInvitationId is not used and loginEmail of registering user matches a company domain (from userSelfRegisterAllowedDomains), created user it attached to this company.    If joinCompanyInvitationId is not used but a pending join company invitation exit for loginEmail of registering user, created user is attached to this company and all company admins of this company are notified with the XMPP message described above that the invitation has been accepted.    Otherwise, created user is attached to a \&quot;Default\&quot; company.       If visibility field is not specified, company visibility is used (company visibility &#x3D; public &#x3D;&gt; user visibility &#x3D; public / company visibility &#x3D; private or organization &#x3D;&gt; user visibility &#x3D; private)    From **1.53.0**, a user can be embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. The self-register API is used to embed this kind of user via an &#39;invitationId&#39;. A user is created with the flag guestMode &#x3D; true. Now, in case of loginEmail conflict, the http error 409 supplies this flag. \&quot;errorDetails\&quot;: \&quot;User with loginEmail &#x3D; user1@company.com already exists.\&quot;, \&quot;errorDetailsCode\&quot;: 409000, \&quot;errorDetailsData\&quot;: { \&quot;guestMode\&quot;: false } From **1.56.0** release, users can give to their coworkers a public URL to share an INSTANT meeting for chat, pstn-conference, webRTC-conference Sharing an unique URL to join the meeting means:   * Each user has a personal UUID. In the api documentation, this UUID is called **openInviteId**. It can be generated on demand. * The public URL is based on this openInviteId (ex: https://web.openrainbow.com/#/invite?invitationId&#x3D;0fc06e0ce4a849fcbe214ae5e1107417&amp;scenario&#x3D;public-url) * Refer to /api/rainbow/enduser/v1.0/users/:userId/open-invites/xxxx API(s) to manage the openInviteId  The goal of this api is to embed on the fly a user not yet created as Rainbow user in the room bind with a given openInviteId (body parameter). Many error cases may occur:   * The openInviteId is not valid HTTP error 404 Not Found (detail: 40400) * If no room is currently binded or when the room to join is no more active (deleted or archived), an HTTP error 404 Not Found (detail: 404116) is returned. * If the maximum of users for a room is reached, an HTTP error 403 (detail: 403621 - Forecast a maximum quota reached..) is returned   [0]: #api-enduser_notifications_emails-EmailSelfRegister [1]: #api-enduser_users-enduser_SelfRegisterUsers [2]: #api-enduser_notifications_emails-enduser_InviteByEndUser [3]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');

var apiInstance = new RainbowEnduserPortal.UsersApi();
var body = new RainbowEnduserPortal.RegisterMyself(); // RegisterMyself | 
apiInstance.registerMyself(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterMyself**](RegisterMyself.md)|  | 

### Return type

[**RegisterMyselfSuccess**](RegisterMyselfSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeContactFromUserNetwork

> RemoveContactFromUserNetworkSuccess removeContactFromUserNetwork(userId, accept)

Remove one contact from the user network

This API allows to remove a contact from the user&#39;s network. According with RFC 6121 (XMPP instant messaging and presence) the user receives two stanza to warn it two items of the roster are removed        &#x60;&#x60;&#x60;html &lt;iq xmlns&#x3D;&#39;jabber:client&#39; to&#x3D;&#39;4084a3b277644118be3403720287f978@openrainbow.com/web_win_1.42.3_nbyfPPcN&#39;  from&#x3D;&#39;4084a3b277644118be3403720287f978@openrainbow.com&#39; type&#x3D;&#39;set&#39;  id&#x3D;&#39;push6688530438275184641&#39;&gt;  &lt;query ver&#x3D;&#39;9cc9aac832027d7a7eeaa15432ab3a8165d35e79&#39; xmlns&#x3D;&#39;jabber:iq:roster&#39;&gt;  &lt;item subscription&#x3D;&#39;remove&#39; jid&#x3D;&#39;tel_9852572291364ec5a7043d68ea72a033@openrainbow.com&#39;&gt;  &lt;/query&gt;  &lt;iq&gt;  &lt;iq xmlns&#x3D;&#39;jabber:client&#39;  to&#x3D;&#39;4084a3b277644118be3403720287f978@openrainbow.com/web_win_1.42.3_nbyfPPcN&#39;  from&#x3D;&#39;4084a3b277644118be3403720287f978@openrainbow.com&#39; type&#x3D;&#39;set&#39;  id&#x3D;&#39;push11277218838955800577&#39;&gt;  &lt;query ver&#x3D;&#39;9cc9aac832027d7a7eeaa15432ab3a8165d35e79&#39; xmlns&#x3D;&#39;jabber:iq:roster&#39;&gt;  &lt;item subscription&#x3D;&#39;remove&#39; jid&#x3D;&#39;9852572291364ec5a7043d68ea72a033@openrainbow.com&#39;&gt;  &lt;/query&gt;  &lt;iq&gt; &#x60;&#x60;&#x60; If a request to share the contact presence is ongoing, from the user to his contact, it is cancelled and two XMPP events are sent.   One for the user:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;sent&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    One for the contact removed:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;presencehandshake id&#x3D;&#39;57cd5922d341df5812bbcb72&#39; action&#x3D;\&quot;delete\&quot; type&#x3D;&#39;received&#39; status&#x3D;&#39;canceled&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; For more information about presence subscription, refer to : [POST /api/rainbow/enduser/v1.0/users/:userId/presences][0]  [0]: /enduser/#api-presences-enduser_users_PostPresencesReq

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56c5c19f94141765119f896c)
var accept = "accept_example"; // String | application/json
apiInstance.removeContactFromUserNetwork(userId, accept).then(function(data) {
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

[**RemoveContactFromUserNetworkSuccess**](RemoveContactFromUserNetworkSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchUsersByJids

> SearchUsersByJidsSuccess searchUsersByJids(body)

Search a list of users by jid_ims

This API allows also to search a list of users by jid_ims.       Only basic fields of users are returned in the response (id, firstName, lastName, companyId, companyName, jid_im, lastAvatarUpdateDate, lastUpdateDate, isTerminated, guestMode).    To retrieve more details about the users, use the APIs [GET /api/rainbow/enduser/v1.0/users/:userId][0] or [GET /api/rainbow/enduser/v1.0/users/jids/{jid_im}][1]      The maximum number of jid_ims allowed to be provided is 1000 (an error is returned if more than 1000 jids are provided in jid_im array).  [0]: #operation/GetUsersId [1]: #operation/GetUserJid

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var body = new RainbowEnduserPortal.SearchUsersByJids(); // SearchUsersByJids | 
apiInstance.searchUsersByJids(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchUsersByJids**](SearchUsersByJids.md)|  | 

### Return type

[**SearchUsersByJidsSuccess**](SearchUsersByJidsSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> UpdateUserSuccess updateUser(userId, body)

Update user data

This API can be used to update data of logged in user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       A presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60;    When user flag isInitialized is set from false to true (end of user registration wizard):   * the user will receive a welcome IM from Emily (translated using user language field is set, otherwise in English) * if the user used the invitationId from an email invitation sent by a Rainbow user:    * invited user and inviting user jid_im are added to mutual rosters   * a conversation entry is created between the invited user and this inviting user, and reciprocally   * an IM message is sent from the invited user to this inviting user (translated using invited user language field is set, otherwise in English)   * the corresponding user invitation is flagged as accepted and both invited user and inviting user are notified with an XMPP message that invitation has been accepted * if the user was invited by one or several Rainbow users, but the user didn&#39;t use the invitationId from any email invitations (user registered using a token, use case mostly for the case of mobile apps). In that case, all pending registering invites are automatically accepted:    * invited user and all inviting users jid_im are added to mutual rosters   * conversation entries is created between the invited user and all inviting users, and reciprocally   * an IM message is sent from the invited user to each inviting users (translated using invited user language field is set, otherwise in English)   * the corresponding user invitations are flagged as auto-accepted and both invited user and inviting users are notified with an XMPP message that invitation has been accepted    Note that phone numbers linked to a system (pbx) can&#39;t be added in user&#39;s phoneNumbers using this API. System phone numbers are created by administrators or by PCG and can be linked to Rainbow user using:    Admin API (administrator only): [PUT /api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId}][0]   From **1.53.0**, a user can be embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. The self-register API is used to embed this kind of user via an &#39;invitationId&#39;. A user is created with the flag guestMode &#x3D; true. This API allows to reset this flag only.  [0]: /admin/#api-systems_phone_numbers-PutSystemPhoneNumbers

### Example

```javascript
var RainbowEnduserPortal = require('rainbow_enduser_portal');
var defaultClient = RainbowEnduserPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowEnduserPortal.UsersApi();
var userId = "userId_example"; // String | User unique identifier (like 56f42c1914e2a8a91b99e595)
var body = new RainbowEnduserPortal.UpdateUser(); // UpdateUser | 
apiInstance.updateUser(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User unique identifier (like 56f42c1914e2a8a91b99e595) | 
 **body** | [**UpdateUser**](UpdateUser.md)|  | 

### Return type

[**UpdateUserSuccess**](UpdateUserSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

