# RainbowEnduserPortal.SendJoinCompanyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedCompanyId** | **String** | Id of the company the user wants to join.       One of &#x60;requestedCompanyId&#x60;, &#x60;requestedCompanyAdminId&#x60; or &#x60;requestedCompanyLinkId&#x60; is mandatory. | [optional] 
**requestedCompanyAdminId** | **String** | Id of the company_admin of the company the user wants to join.       One of &#x60;requestedCompanyId&#x60;, &#x60;requestedCompanyAdminId&#x60; or &#x60;requestedCompanyLinkId&#x60; is mandatory. | [optional] 
**requestedCompanyLinkId** | **String** | Id of the join company invite associated to the company the user wants to join.       One of &#x60;requestedCompanyId&#x60;, &#x60;requestedCompanyAdminId&#x60; or &#x60;requestedCompanyLinkId&#x60; is mandatory. | [optional] 
**lang** | **String** | Language of the email notification to use if language of company admin is not defined.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] [default to &#39;en&#39;]


