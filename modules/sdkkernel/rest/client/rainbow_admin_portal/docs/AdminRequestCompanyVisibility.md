# RainbowAdminPortal.AdminRequestCompanyVisibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the company administrator for which the visibility request is sent.    This email must match a Rainbow company administrator, otherwise a 403 error is returned and the email is not sent. | 
**lang** | **String** | Language of the email notification.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] [default to &#39;en&#39;]


