# RainbowAuthentPortal.GetRenewSuccessLoggedInUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastName** | **String** | User last name | 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | 
**createdByAdmin** | [**GetBasicLoginSuccessLoggedInUserCreatedByAdmin**](GetBasicLoginSuccessLoggedInUserCreatedByAdmin.md) |  | 
**initializationDate** | **Date** | User initialization date | 
**organisationId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to an organization | 
**invitedBy** | [**GetBasicLoginSuccessLoggedInUserCreatedByAdmin**](GetBasicLoginSuccessLoggedInUserCreatedByAdmin.md) |  | 
**isTerminated** | **Boolean** | Indicates if the Rainbow account of this user has been deleted | 
**displayName** | **String** | User display name (firstName + lastName concatenated on server side) | 
**timezone** | **String** | User timezone name | 
**jidIm** | **String** | User Jabber IM identifier | 
**lastUpdateDate** | **Date** | Date of last user update (whatever the field updated) | 
**jobTitle** | **String** | User job title | 
**roles** | **[String]** | List of user roles (Array of String) | 
**companyName** | **String** | User company name | 
**isInitialized** | **Boolean** | Is user initialized | 
**language** | **String** | User language (ISO 639-1 code format, with possibility of regional variation. Ex: both &#39;en&#39; and &#39;en-US&#39; are supported) | 
**lastLoginDate** | **Date** | Date of last user login (defined even if user is logged out) | 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | 
**isActive** | **Boolean** | Is user active | 
**firstLoginDate** | **Date** | Date of first user login (only set the first time user logs in, null if user never logged in) | 
**phoneNumbers** | [**[GetRenewSuccessPhoneNumbers]**](GetRenewSuccessPhoneNumbers.md) | Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).   | 
**jidTel** | **String** | User Jabber TEL identifier | 
**loginEmail** | **String** | User email address (used for login) | 
**emails** | [**[GetRenewSuccessEmails]**](GetRenewSuccessEmails.md) | Array of user emails addresses objects | 
**createdBySelfRegister** | **Boolean** | true if user has been created using self register | 
**guestMode** | **Boolean** | Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. | 
**id** | **String** | User unique identifier | 
**adminType** | **String** | In case of user&#39;s is &#39;admin&#39;, define the subtype (organisation_admin, company_admin, site_admin (default undefined) | 
**nickName** | **String** | User nickName | 
**loggedSince** | **Date** | Date of last user login (null if user is logged out) | 
**creationDate** | **Date** | User creation date | 
**isInDefaultCompany** | **Boolean** | Is user in default company    Only returned if retrieved user data corresponds to logged in user or if logged in user is admin of the retreived user | 
**jidPassword** | **String** | User Jabber TEL identifier | 
**firstName** | **String** | User first name | 
**companyId** | **String** | User company unique identifier | 
**siteId** | **String** | In addition to User companyId, optional identifier to indicate the user belongs also to a site | 
**activationDate** | **Date** | User activation date | 
**lastAvatarUpdateDate** | **Date** | Date of last user avatar create/update, null if no avatar | 


