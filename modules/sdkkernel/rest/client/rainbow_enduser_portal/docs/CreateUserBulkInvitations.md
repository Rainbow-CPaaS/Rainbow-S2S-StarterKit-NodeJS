# RainbowEnduserPortal.CreateUserBulkInvitations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **[String]** | Array of invited email addresses.    Each email address must match the regex /^[a-zA-Z0-9_\\+-]+(\\.[a-zA-Z0-9_\\+-]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.([a-zA-Z]{2,4})$/, otherwise the email is considered as invalid. | [optional] 
**lang** | **String** | Force language of the email notification if not available.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * invited user language is used if invited user exists in Rainbow and his language is available, * else provided language in parameter &#x60;lang&#x60; is used if provided, * else inviting user language is used if language is available, * otherwise English is used.   [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**customMessage** | **String** | Custom message that inviting user can add in email body.    The message will be the same for all emails. | [optional] 


