# RainbowAdminPortal.AdminPostLinkEcToBpInvite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitedCompanyId** | **String** | Id of the end customer company to link to BP company | 
**lang** | **String** | Force language of the email notification if not available.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * provided language in parameter &#x60;lang&#x60; is used if provided, * else inviting company admin language is used if language is available, * otherwise English is used.   [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**invitedToBeBpIr** | **Boolean** | if invitedToBeBpIr is set to true, when accepting invitation, the invited end customer company will become a BP company with type &#x60;IR&#x60;.    Note : To use invitedToBeBpIr, the inviting company should be a BP company with type &#x60;VAD&#x60;. | [optional] 
**customMessage** | **String** | Custom message that inviting admin can add in email body | [optional] 


