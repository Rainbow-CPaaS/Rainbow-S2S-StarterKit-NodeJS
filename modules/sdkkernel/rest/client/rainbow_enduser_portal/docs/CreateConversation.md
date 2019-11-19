# RainbowEnduserPortal.CreateConversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peerId** | **String** | ID of another user, ID of a room or ID of a bot, according to value of &#x60;type&#x60; field:   * **user ID:** id returned in user objects by GET /users and GET /search APIs (like 56d0277a0261b53142a5c000). user ID is also available in user vCard via a proprietary field name &#39;rainbowId&#39;. * **room ID:** id returned in room objects using /rooms APIs. * **bot ID:** id returned in bot objects using /bots APIs.     peerId must be an existing userId / roomId / botId, otherwise a 404 Not Found is returned. | 
**type** | **String** | Conversation type:   * user: User to user, * room: User to room, * bot: User to bot   | 
**mute** | **Boolean** | true if conversation is muted, false otherwise | [optional] [default to false]
**isFavorite** | **Boolean** | Is conversation flagged as favorite. | [optional] [default to false]



## Enum: TypeEnum


* `user` (value: `"user"`)

* `room` (value: `"room"`)

* `bot` (value: `"bot"`)




