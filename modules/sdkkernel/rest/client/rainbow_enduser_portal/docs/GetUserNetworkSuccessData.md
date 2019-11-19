# RainbowEnduserPortal.GetUserNetworkSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showPresence** | **Boolean** | True when the user agreed to show his presence | 
**id** | **String** | User unique identifier | 
**loginEmail** | **String** | DEPRECATED (will be removed in a future release).    User email address (used for login) | 
**firstName** | **String** | User first name | 
**lastName** | **String** | User last name | 
**displayName** | **String** | User display name (firstName + lastName concatenated on server side) | 
**nickName** | **String** | User nickName | 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | 
**jobTitle** | **String** | User job title | 
**tags** | **[String]** | An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    &#x60;tags&#x60; can only be set by users who have administrator rights on the user. The user can&#39;t modify the tags.    The tags are only visible by the user and all users belonging to his organisation/company. | 
**emails** | [**[GetUserNetworkSuccessEmails]**](GetUserNetworkSuccessEmails.md) | Array of user emails addresses objects | 
**phoneNumbers** | [**[GetUserNetworkSuccessPhoneNumbers]**](GetUserNetworkSuccessPhoneNumbers.md) | Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).   | 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | 
**state** | **String** | When country is &#39;USA&#39;, a state can be defined. Else it is not managed. | [optional] 
**language** | **String** | User language (ISO 639-1 code format, with possibility of regional variation. Ex: both &#39;en&#39; and &#39;en-US&#39; are supported) | 
**timezone** | **String** | User timezone name | 
**jidIm** | **String** | User Jabber IM identifier | 
**jidTel** | **String** | User Jabber TEL identifier | 
**companyId** | **String** | User company unique identifier | 
**companyName** | **String** | User company name | 
**roles** | **[String]** | DEPRECATED (will be removed in a future release).    List of user roles (Array of String) | 
**lastUpdateDate** | **Date** | Date of last user update (whatever the field updated) | 
**lastAvatarUpdateDate** | **Date** | Date of last user avatar create/update, null if no avatar | 
**isTerminated** | **Boolean** | Indicates if the Rainbow account of this user has been deleted | 
**guestMode** | **Boolean** | Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration. | 
**lastOfflineMailReceivedDate** | **Date** | The last time the user has received a message to connect to Rainbow from the logged in user | 



## Enum: StateEnum


* `ALABAMA` (value: `"ALABAMA"`)

* `ALASKA` (value: `"ALASKA"`)

* `....` (value: `"...."`)

* `NEW_YORK` (value: `"NEW_YORK"`)

* `WYOMING` (value: `"WYOMING"`)




