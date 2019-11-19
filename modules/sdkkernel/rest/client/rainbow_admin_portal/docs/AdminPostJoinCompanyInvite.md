# RainbowAdminPortal.AdminPostJoinCompanyInvite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email of the Rainbow user the company admin invite in his company       One of &#x60;email&#x60; or &#x60;invitedUserId&#x60; is mandatory. | [optional] 
**invitedUserId** | **String** | Id of the Rainbow user the company admin invite in his company       One of &#x60;email&#x60; or &#x60;invitedUserId&#x60; is mandatory. | [optional] 
**lang** | **String** | Force language of the email notification if not available.       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * invited user language is used if email matches an existing Rainbow user and his language is available, * else provided language in parameter &#x60;lang&#x60; is used if provided, * else inviting company admin language is used if language is available, * otherwise English is used.   [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**customMessage** | **String** | Custom message that inviting user can add in email body | [optional] 
**customDisplayName** | **String** | Custom admin display name to use in the email sent to the user invited to join the company.    The admin display name is used as the email sender (from:), in the email subject and in the email body ({{admin_displayname}} invites you to join his company {{company_name}}.)    If &#x60;customDisplayName&#x60; is not provided, the display name of the logged in admin who calls this API is used. | [optional] 
**invitedToBeCompanyAdmin** | **Boolean** | If invitedToBeCompanyAdmin is set to true, when user accepts the join company invitation he will be company_admin of this company. | [optional] 
**invitedToBeBpAdmin** | **Boolean** | If invitedToBeBpAdmin is set to true, when user accepts the join company invitation he will be bp_admin and bp_finance. This flag can only be set by &#x60;superadmin&#x60;, &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60;.    For bp_admin and bp_finance, only bp_admin/bp_finance of BP company with bpType VAD can invite bp_admins/bp_finances in other companies, bp_admin/bp_finance of BP company with bpType DR and IR can only invite bp_admin/bp_finance in their own company. | [optional] 


