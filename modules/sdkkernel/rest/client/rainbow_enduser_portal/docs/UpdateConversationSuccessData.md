# RainbowEnduserPortal.UpdateConversationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peerId** | **String** | userId or roomId of the peer involved in the conversation. | 
**mute** | **Boolean** | true if conversation is muted, false otherwise | [default to false]
**id** | **String** | Conversation unique identifier. | 
**creationDate** | **Date** | Conversation creation date. | 
**type** | **String** | Type of the conversation peer:   * &#x60;user&#x60; for User to User conversation type, * &#x60;room&#x60; for User to Room conversation type. * &#x60;bot&#x60; for User to Bot service conversation type.   | 
**isFavorite** | **Boolean** | Is conversation flagged as favorite. | [default to false]



## Enum: TypeEnum


* `user` (value: `"user"`)

* `room` (value: `"room"`)

* `bot` (value: `"bot"`)




