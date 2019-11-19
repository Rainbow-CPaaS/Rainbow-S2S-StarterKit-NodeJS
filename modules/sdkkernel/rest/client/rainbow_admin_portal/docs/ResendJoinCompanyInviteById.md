# RainbowAdminPortal.ResendJoinCompanyInviteById

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customMessage** | **String** | Custom message that inviting user can add in email body | [optional] 
**customDisplayName** | **String** | Custom admin display name to use in the email sent to the user invited to join the company.    The admin display name is used as the email sender (from:), in the email subject and in the email body ({{admin_displayname}} invites you to join his company {{company_name}}.)    If &#x60;customDisplayName&#x60; is not provided, the display name of the logged in admin who calls this API is used. | [optional] 


