# RainbowEnduserPortal.SendUsersJoinRoomInvitationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confEndPoint** | [**Object**](.md) |  | 
**scenario** | **String** | Which is the goal of this invitation. | 
**guestEmails** | **[String]** | List of email address for which an email is sent to invite the receiver to create his Rainbow account before joining the room. | 
**attendees** | [**Object**](.md) |  | 
**invalidUsers** | **String** | List of invalid userId (not well formed or not Rainbow user) | 
**status** | **String** | If at least, one userId is valid or an email is well formed, status is \&quot;Invitations successfully sent\&quot;. Else an error 400 Bad request is returned. | 



## Enum: ScenarioEnum


* `chat` (value: `"chat"`)

* `pstn-conference` (value: `"pstn-conference"`)

* `video-conference` (value: `"video-conference"`)




