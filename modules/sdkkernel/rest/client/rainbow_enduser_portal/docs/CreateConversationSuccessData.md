# RainbowEnduserPortal.CreateConversationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Conversation unique identifier. | 
**creationDate** | **Date** | Conversation creation date. | 
**peerId** | **String** | userId or roomId of the peer involved in the conversation. | 
**mute** | **Boolean** | true if conversation is muted, false otherwise | [default to false]
**isFavorite** | **Boolean** | Is conversation flagged as favorite. | [default to false]
**type** | **String** | Type of the conversation peer:   * &#x60;user&#x60; for User to User conversation type, * &#x60;room&#x60; for User to Room conversation type. * &#x60;bot&#x60; for User to Bot service conversation type.   | 
**loginEmail** | **String** | If conversation type is &#x60;user&#x60;, email address (login) of the peer user | 
**firstName** | **String** | If conversation type is &#x60;user&#x60;, first name of the peer user | 
**lastName** | **String** | If conversation type is &#x60;user&#x60;, last name of the peer user | 
**displayName** | **String** | If conversation type is &#x60;user&#x60;, display name of the peer user (firstName + lastName concatenated on server side) | 
**jidIm** | **String** | User, Room or Bot Jabber IM identifier | 
**lastAvatarUpdateDate** | **String** | User last avatar update date | 
**name** | **String** | If conversation type is &#x60;room&#x60; or &#x60;bot&#x60;, name of the peer room/bot | 
**topic** | **String** | If conversation type is &#x60;room&#x60;, topic of the peer room | 
**lastMessageText** | **String** | If available, text of the last message for this conversation (otherwise empty string) | [optional] 
**lastMessageDate** | **Date** | If available, date of the last message for this conversation (otherwise null) | [optional] 
**unreceivedMessageNumber** | **String** | If available, number of unreceived messages for this conversation (otherwise 0) | [optional] 
**unreadMessageNumber** | **String** | If available, number of unread messages for this conversation (otherwise 0) | [optional] 
**call** | [**Object**](.md) |  | [optional] 



## Enum: TypeEnum


* `user` (value: `"user"`)

* `room` (value: `"room"`)

* `bot` (value: `"bot"`)




