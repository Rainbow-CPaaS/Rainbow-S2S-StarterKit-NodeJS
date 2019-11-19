# RainbowEnduserPortal.GetUserDataByIdSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastName** | **String** | User last name | 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | 
**isTerminated** | **Boolean** | Indicates if the Rainbow account of this user has been deleted | 
**lastOfflineMailReceivedDate** | **Date** | The last time the user has received a message to connect to Rainbow from the logged in user | 
**displayName** | **String** | User display name (firstName + lastName concatenated on server side) | 
**timezone** | **String** | User timezone name | 
**jidIm** | **String** | User Jabber IM identifier | 
**lastUpdateDate** | **Date** | Date of last user update (whatever the field updated) | 
**jobTitle** | **String** | User job title | 
**companyName** | **String** | User company name | 
**roles** | **[String]** | DEPRECATED (will be removed in a future release).    List of user roles (Array of String) | 
**language** | **String** | User language (ISO 639-1 code format, with possibility of regional variation. Ex: both &#39;en&#39; and &#39;en-US&#39; are supported) | 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | 
**phoneNumbers** | [**[GetUserDataByIdSuccessPhoneNumbers]**](GetUserDataByIdSuccessPhoneNumbers.md) | Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).   | 
**jidTel** | **String** | User Jabber TEL identifier | 
**loginEmail** | **String** | DEPRECATED (will be removed in a future release).    User email address (used for login) | 
**emails** | [**[GetUserDataByIdSuccessEmails]**](GetUserDataByIdSuccessEmails.md) | Array of user emails addresses objects | 
**guestMode** | **Boolean** | Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. | 
**id** | **String** | User unique identifier | 
**state** | **String** | When country is &#39;USA&#39;, a state can be defined. Else it is not managed. | [optional] 
**nickName** | **String** | User nickName | 
**tags** | **[String]** | An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    &#x60;tags&#x60; can only be set by users who have administrator rights on the user. The user can&#39;t modify the tags.    The tags are only visible by the user and all users belonging to his organisation/company. | 
**firstName** | **String** | User first name | 
**companyId** | **String** | User company unique identifier | 
**lastAvatarUpdateDate** | **Date** | Date of last user avatar create/update, null if no avatar | 



## Enum: StateEnum


* `ALABAMA` (value: `"ALABAMA"`)

* `ALASKA` (value: `"ALASKA"`)

* `....` (value: `"...."`)

* `NEW_YORK` (value: `"NEW_YORK"`)

* `WYOMING` (value: `"WYOMING"`)




