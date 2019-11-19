# RainbowEnduserPortal.CreateConversationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peerId** | **String** | userId or roomId of the peer involved in the conversation. | 
**lastName** | **String** | If conversation type is &#x60;user&#x60;, last name of the peer user | 
**displayName** | **String** | If conversation type is &#x60;user&#x60;, display name of the peer user (firstName + lastName concatenated on server side) | 
**jidIm** | **String** | User, Room or Bot Jabber IM identifier | 
**mute** | **Boolean** | true if conversation is muted, false otherwise | [default to false]
**lastMessageText** | **String** | If available, text of the last message for this conversation (otherwise empty string) | [optional] 
**creationDate** | **Date** | Conversation creation date. | 
**type** | **String** | Type of the conversation peer:   * &#x60;user&#x60; for User to User conversation type, * &#x60;room&#x60; for User to Room conversation type. * &#x60;bot&#x60; for User to Bot service conversation type.   | 
**unreceivedMessageNumber** | **String** | If available, number of unreceived messages for this conversation (otherwise 0) | [optional] 
**loginEmail** | **String** | If conversation type is &#x60;user&#x60;, email address (login) of the peer user | 
**call** | [**Object**](.md) |  | [optional] 
**firstName** | **String** | If conversation type is &#x60;user&#x60;, first name of the peer user | 
**lastMessageDate** | **Date** | If available, date of the last message for this conversation (otherwise null) | [optional] 
**name** | **String** | If conversation type is &#x60;room&#x60; or &#x60;bot&#x60;, name of the peer room/bot | 
**topic** | **String** | If conversation type is &#x60;room&#x60;, topic of the peer room | 
**unreadMessageNumber** | **String** | If available, number of unread messages for this conversation (otherwise 0) | [optional] 
**id** | **String** | Conversation unique identifier. | 
**isFavorite** | **Boolean** | Is conversation flagged as favorite. | [default to false]
**lastAvatarUpdateDate** | **String** | User last avatar update date | 



## Enum: TypeEnum


* `user` (value: `"user"`)

* `room` (value: `"room"`)

* `bot` (value: `"bot"`)




