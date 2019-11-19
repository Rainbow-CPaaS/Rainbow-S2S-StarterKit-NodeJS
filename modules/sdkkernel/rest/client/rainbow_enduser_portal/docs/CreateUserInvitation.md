# RainbowEnduserPortal.CreateUserInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Invited email address.       One of &#x60;email&#x60;, &#x60;invitedPhoneNumber&#x60; or &#x60;invitedUserId&#x60; is mandatory. | [optional] 
**invitedPhoneNumber** | **String** | Invited phone number.       One of &#x60;email&#x60;, &#x60;invitedPhoneNumber&#x60; or &#x60;invitedUserId&#x60; is mandatory. | [optional] 
**invitedUserId** | **String** | Invited Rainbow user unique ID       One of &#x60;email&#x60;, &#x60;invitedPhoneNumber&#x60; or &#x60;invitedUserId&#x60; is mandatory. | [optional] 
**lang** | **String** | Force language of the email notification if not available.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * invited user language is used if invited user exists in Rainbow and his language is available, * else provided language in parameter &#x60;lang&#x60; is used if provided, * else inviting user language is used if language is available, * otherwise English is used.  Not used if parameter &#x60;invitedPhoneNumber&#x60; is provided (as the SMS is sent by the client, not the server).  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**customMessage** | **String** | Custom message that inviting user can add in email body    Not used if parameter &#x60;invitedPhoneNumber&#x60; is provided (as the SMS is sent by the client, not the server). | [optional] 


