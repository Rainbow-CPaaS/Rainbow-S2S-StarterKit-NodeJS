# RainbowEnduserPortal.SendUsersJoinRoomInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario** | **String** | Which is the goal of this invitation. | 
**confId** | **String** | Conference unique identifier. Only taken in account by the &#39;pstn-conference&#39; and the &#39;video-conference&#39; scenario. | 
**users** | **[String]** | A list of rainbow userId | 
**emails** | **[String]** | A list of guest user. Persons don&#39;t have a Rainbow account or can&#39;t be found. | 
**lang** | **String** | Language of the email notification if user language value is not available. | [optional] [default to &#39;en&#39;]
**instantMessage** | **String** | When the meeting is an instant meeting nor a scheduled meeting, free message reported to a mail and to an instant message. **Only taken in account by the &#39;pstn-conference&#39; and the &#39;video-conference&#39; scenario.** | [optional] 
**noMail** | **Boolean** | Bypass emails delivery. Supply instead all data available to build custom emails. **Only taken in account by the &#39;pstn-conference&#39; scenario.** | [optional] 
**update** | **Boolean** | Allow sending an email explaining this is a meeting update. **Only taken in account by the &#39;pstn-conference&#39; scenario.** | [optional] 



## Enum: ScenarioEnum


* `chat` (value: `"chat"`)

* `pstn-conference` (value: `"pstn-conference"`)

* `video-conference` (value: `"video-conference"`)




