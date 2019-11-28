# RainbowEnduserPortal.UpdateConversationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Conversation unique identifier. | 
**creationDate** | **Date** | Conversation creation date. | 
**peerId** | **String** | userId or roomId of the peer involved in the conversation. | 
**mute** | **Boolean** | true if conversation is muted, false otherwise | [default to false]
**isFavorite** | **Boolean** | Is conversation flagged as favorite. | [default to false]
**type** | **String** | Type of the conversation peer:   * &#x60;user&#x60; for User to User conversation type, * &#x60;room&#x60; for User to Room conversation type. * &#x60;bot&#x60; for User to Bot service conversation type.   | 



## Enum: TypeEnum


* `user` (value: `"user"`)

* `room` (value: `"room"`)

* `bot` (value: `"bot"`)




