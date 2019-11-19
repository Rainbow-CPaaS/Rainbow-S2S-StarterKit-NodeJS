# RainbowEnduserPortal.SendUserRoomInvitationCancelation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario** | **String** | Which are the goals of this invitation to cancel. | [optional] [default to &#39;pstn-conference&#39;]
**confId** | **String** | Conference unique identifier (only useful for scenario pstn-conference). | 
**users** | **String** | A list of rainbow userId (only useful for scenario pstn-conference) | 
**emails** | **String** | A list of guest user. Persons don&#39;t have a Rainbow account or can&#39;t be found. | 
**lang** | **String** | Language of the email notification if user language value is not available (only useful for scenario pstn-conference). | [optional] [default to &#39;en&#39;]
**noMail** | **Boolean** | Bypass emails delivery. Supply instead all data available to build custom emails. (only useful for scenario pstn-conference) | [optional] 



## Enum: ScenarioEnum


* `chat` (value: `"chat"`)

* `pstn-conference` (value: `"pstn-conference"`)

* `video-conference` (value: `"video-conference"`)




