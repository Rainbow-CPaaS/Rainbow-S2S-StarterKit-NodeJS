# RainbowEnduserPortal.CreateUserBulkInvitationsSuccessOngoing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address to invite | 
**index** | **Number** | Position of the email address to invite in the input emails array | 
**errors** | [**[CreateUserBulkInvitationsSuccessErrors]**](CreateUserBulkInvitationsSuccessErrors.md) | Errors which has occurred during the validation of this email. Should always be empty, otherwise the email would be in the failed array. | 
**status** | **String** | Status of the email invitation. Should always be ongoing, as the treatment is asynchronous and there is currently no way for the client to know the progression of the bulk invitations. | 


