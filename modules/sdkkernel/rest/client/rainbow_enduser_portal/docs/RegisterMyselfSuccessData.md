# RainbowEnduserPortal.RegisterMyselfSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | User unique identifier | 
**loginEmail** | **String** | User email address (used for login) | 
**firstName** | **String** | User first name | 
**lastName** | **String** | User last name | 
**displayName** | **String** | User display name (firstName + lastName concatenated on server side) | 
**nickName** | **String** | User nickName | 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | 
**jobTitle** | **String** | User job title | 
**tags** | **[String]** | An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    &#x60;tags&#x60; can only be set by users who have administrator rights on the user. The user can&#39;t modify the tags.    The tags are visible by the user and all users belonging to his organisation/company, and can be used with the search API to search the user based on his tags. | 
**emails** | [**[RegisterMyselfSuccessEmails]**](RegisterMyselfSuccessEmails.md) | Array of user emails addresses objects | 
**phoneNumbers** | [**[RegisterMyselfSuccessPhoneNumbers]**](RegisterMyselfSuccessPhoneNumbers.md) | Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).   | 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state can be defined. Else it is not managed. | [optional] 
**language** | **String** | User language (ISO 639-1 code format, with possibility of regional variation. Ex: both &#39;en&#39; and &#39;en-US&#39; are supported) | 
**timezone** | **String** | User timezone name | 
**jidIm** | **String** | User Jabber IM identifier | 
**jidTel** | **String** | User Jabber TEL identifier | 
**jidPassword** | **String** | User Jabber IM and TEL password | 
**roles** | **[String]** | List of user roles (Array of String)    Note: &#x60;company_support&#x60; role is only used for support redirection. If a user writes a #support ticket and have the role &#x60;company_support&#x60;, the ticket will be sent to ALE&#39;s support (otherwise the ticket is sent to user&#39;s company&#39;s &#x60;supportEmail&#x60; address is set, ALE otherwise). | 
**adminType** | **String** | In case of user&#39;s is &#39;admin&#39;, define the subtype (organisation_admin, company_admin, site_admin (default undefined) | 
**companyId** | **String** | User company unique identifier | 
**organisationId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to an organization | 
**siteId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to a site | 
**companyName** | **String** | User company name | 
**isActive** | **Boolean** | Is user active | 
**isInitialized** | **Boolean** | Is user initialized | 
**initializationDate** | **Date** | User initialization date | 
**activationDate** | **Date** | User activation date | 
**creationDate** | **Date** | User creation date | 
**lastUpdateDate** | **Date** | Date of last user update (whatever the field updated) | 
**lastAvatarUpdateDate** | **Date** | Date of last user avatar create/update, null if no avatar | 
**createdBySelfRegister** | **Boolean** | true if user has been created using self register | 
**createdByAdmin** | [**UpdateUserSuccessDataCreatedByAdmin**](UpdateUserSuccessDataCreatedByAdmin.md) |  | 
**invitedBy** | [**UpdateUserSuccessDataInvitedBy**](UpdateUserSuccessDataInvitedBy.md) |  | 
**firstLoginDate** | **Date** | Date of first user login (only set the first time user logs in, null if user never logged in) | 
**lastLoginDate** | **Date** | Date of last user login (defined even if user is logged out) | 
**loggedSince** | **Date** | Date of last user login (null if user is logged out) | 
**isTerminated** | **Boolean** | Indicates if the Rainbow account of this user has been deleted | 
**guestMode** | **Boolean** | Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. | 
**timeToLive** | **Number** | Duration in second to wait before automatically starting a user deletion from the creation date.    Once the timeToLive has been reached, the user won&#39;t be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment.    Value -1 means timeToLive is disable (i.e. user account will not expire). | 
**authenticationType** | **String** | User authentication type (if not set company default authentication will be used) | 



## Enum: StateEnum


* `AK` (value: `"AK"`)

* `AL` (value: `"AL"`)

* `....` (value: `"...."`)

* `NY` (value: `"NY"`)

* `WY` (value: `"WY"`)




