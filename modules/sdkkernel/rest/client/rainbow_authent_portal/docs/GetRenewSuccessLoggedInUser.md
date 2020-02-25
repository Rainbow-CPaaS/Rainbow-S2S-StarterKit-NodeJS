# RainbowAuthenticationPortal.GetRenewSuccessLoggedInUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | User country (ISO 3166-1 alpha3 format) | 
**createdByAdmin** | [**GetBasicLoginSuccessLoggedInUserCreatedByAdmin**](GetBasicLoginSuccessLoggedInUserCreatedByAdmin.md) |  | [optional] 
**lastName** | **String** | User last name | 
**initializationDate** | **Date** | User initialization date | 
**invitedBy** | [**GetBasicLoginSuccessLoggedInUserCreatedByAdmin**](GetBasicLoginSuccessLoggedInUserCreatedByAdmin.md) |  | [optional] 
**organisationId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to an organization | 
**isTerminated** | **Boolean** | Indicates if the Rainbow account of this user has been deleted | 
**displayName** | **String** | User display name (firstName + lastName concatenated on server side) | 
**jidIm** | **String** | User Jabber IM identifier | 
**lastUpdateDate** | **Date** | Date of last user update (whatever the field updated) | 
**timezone** | **String** | User timezone name | [optional] 
**companyName** | **String** | User company name | 
**jobTitle** | **String** | User job title | [optional] 
**roles** | **[String]** | List of user roles (Array of String) | 
**isInitialized** | **Boolean** | Is user initialized | 
**language** | **String** | User language (ISO 639-1 code format, with possibility of regional variation. Ex: both &#39;en&#39; and &#39;en-US&#39; are supported) | [optional] 
**lastLoginDate** | **Date** | Date of last user login (defined even if user is logged out) | 
**firstLoginDate** | **Date** | Date of first user login (only set the first time user logs in, null if user never logged in) | 
**isActive** | **Boolean** | Is user active | 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | [optional] 
**jidTel** | **String** | User Jabber TEL identifier | 
**phoneNumbers** | [**[GetRenewSuccessPhoneNumbers]**](GetRenewSuccessPhoneNumbers.md) | Array of user phone numbers objects. &lt;br/&gt; Phone number objects can: &lt;ul&gt;     &lt;li&gt; be created by user (information filled by user),&lt;/li&gt;     &lt;li&gt; come from association with a system (pbx) device (association is done by admin).&lt;/li&gt; &lt;/ul&gt; | 
**emails** | [**[GetRenewSuccessEmails]**](GetRenewSuccessEmails.md) | Array of user emails addresses objects | 
**loginEmail** | **String** | User email address (used for login) | 
**timeToLive** | **Number** | Duration in second to wait before automatically starting a user deletion from the creation date. &lt;br/&gt; Once the timeToLive has been reached, the user won&#39;t be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment. &lt;br/&gt; Value -1 means timeToLive is disable (i.e. user account will not expire). | [optional] 
**createdBySelfRegister** | **Boolean** | true if user has been created using self register | 
**guestMode** | **Boolean** | Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. | 
**id** | **String** | User unique identifier | 
**isADSearchAvailable** | **Boolean** | Is ActiveDirectory (Office365) search available for this user | 
**adminType** | **String** | In case of user&#39;s is &#39;admin&#39;, define the subtype (organisation_admin, company_admin, site_admin (default undefined) | 
**visibility** | **String** | User visibility &lt;/br&gt; Define if the user can be searched by users being in other companies and if the user can search users being in other companies. &lt;br/&gt; Visibility can be: - &#x60;same_than_company&#x60;: The same visibility than the user&#39;s company&#39;s is applied to the user. When this user visibility is used, if the visibility of the company is changed the user&#39;s visibility will use this company new visibility. - &#x60;public&#x60;: User can be searched by external users / can search external users. User can invite external users / can be invited by external users - &#x60;private&#x60;: User **can&#39;t** be searched by external users / can search external users. User can invite external users / can be invited by external users - &#x60;closed&#x60;: User **can&#39;t** be searched by external users / **can&#39;t** search external users. User can invite external users / can be invited by external users - &#x60;isolated&#x60;: User **can&#39;t** be searched by external users / **can&#39;t** search external users. User **can&#39;t** invite external users / **can&#39;t** be invited by external users - &#x60;none&#x60;:  Default value reserved for guest. User **can&#39;t** be searched by **any users** (even within the same company) / can search external users. User can invite external users / can be invited by external users  External users mean public user not being in user&#39;s company nor user&#39;s organisation nor a company visible by user&#39;s company. | 
**nickName** | **String** | User nickName | [optional] 
**profiles** | [**[GetRenewSuccessProfiles]**](GetRenewSuccessProfiles.md) | User profile Objects. | 
**loggedSince** | **Date** | Date of last user login (null if user is logged out) | 
**creationDate** | **Date** | User creation date | 
**isInDefaultCompany** | **Boolean** | Is user in default company | 
**jidPassword** | **String** | User Jabber TEL identifier | 
**tags** | **[String]** | An Array of free tags associated to the user. &lt;br/&gt; A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters. &lt;br/&gt; &#x60;tags&#x60; can only be set by users who have administrator rights on the user. The user can&#39;t modify the tags. &lt;br/&gt; The tags are visible by the user and all users belonging to his organisation/company, and can be used with the search API to search the user based on his tags. | [optional] 
**firstName** | **String** | User first name | 
**companyId** | **String** | User company unique identifier | 
**siteId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to a site | 
**userInfo2** | **String** | 2nd Free field that admin can use to link their users to their IS/IT tools / to perform analytics (this field is output in the CDR file) | [optional] 
**userInfo1** | **String** | Free field that admin can use to link their users to their IS/IT tools / to perform analytics (this field is output in the CDR file) | [optional] 
**activationDate** | **Date** | User activation date | 
**lastAvatarUpdateDate** | **Date** | Date of last user avatar create/update, null if no avatar | 


<a name="VisibilityEnum"></a>
## Enum: VisibilityEnum


* `same_than_company` (value: `"same_than_company"`)

* `public` (value: `"public"`)

* `private` (value: `"private"`)

* `closed` (value: `"closed"`)

* `isolated` (value: `"isolated"`)

* `none` (value: `"none"`)




