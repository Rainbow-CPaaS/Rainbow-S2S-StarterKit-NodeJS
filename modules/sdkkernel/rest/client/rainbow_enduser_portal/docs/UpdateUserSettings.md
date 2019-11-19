# RainbowEnduserPortal.UpdateUserSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**presence** | **String** | Setting for manual user presence (used to go back to this presence when user logs in, instead of default (online)) | [optional] [default to &#39;online&#39;]
**displayNameOrderFirstNameFirst** | **Boolean** | Setting for user display name order   * true: firstname first * false: lastname first   | [optional] [default to true]
**activeAlarm** | **String** | Setting for active user alarm sound | [optional] [default to &#39;relax1&#39;]
**activeNotif** | **String** | Setting for active user notification sound | [optional] [default to &#39;notif1&#39;]
**protectionAgainstMailTypeOffline** | **Boolean** | Allow never receiving unsolicited emails of type &#39;offLine&#39; | [optional] [default to false]



## Enum: PresenceEnum


* `online` (value: `"online"`)

* `away` (value: `"away"`)

* `invisible` (value: `"invisible"`)

* `dnd` (value: `"dnd"`)




