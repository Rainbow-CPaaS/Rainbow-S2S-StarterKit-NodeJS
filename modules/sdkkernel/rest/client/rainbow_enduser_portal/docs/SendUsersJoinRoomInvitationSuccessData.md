# RainbowEnduserPortal.SendUsersJoinRoomInvitationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario** | **String** | Which is the goal of this invitation. | 
**status** | **String** | If at least, one userId is valid or an email is well formed, status is \&quot;Invitations successfully sent\&quot;. Else an error 400 Bad request is returned. | 
**confEndPoint** | [**Object**](.md) |  | 
**attendees** | [**Object**](.md) |  | 
**guestEmails** | **[String]** | List of email address for which an email is sent to invite the receiver to create his Rainbow account before joining the room. | 
**invalidUsers** | **String** | List of invalid userId (not well formed or not Rainbow user) | 



## Enum: ScenarioEnum


* `chat` (value: `"chat"`)

* `pstn-conference` (value: `"pstn-conference"`)

* `video-conference` (value: `"video-conference"`)




