# RainbowEnduserPortal.SendResetPasswordEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email of the user requesting a reset-password email with a temporary token | 
**lang** | **String** | Language of the email notification if user language value is not available.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * user language is used if his language is available, * else provided language in parameter &#x60;lang&#x60; is used if provided, * otherwise English is used.   [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] [default to &#39;en&#39;]


