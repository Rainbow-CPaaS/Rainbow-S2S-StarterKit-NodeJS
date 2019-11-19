# RainbowEnduserPortal.CreateUserBulkInvitationsSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Status of the bulk operation.    &#x60;ongoing&#x60;: there is at least 1 email to send    &#x60;failed&#x60;: there is no email to send and errors occurred with the synchronous validation of the provided emails | 
**report** | [**CreateUserBulkInvitationsSuccessReport**](CreateUserBulkInvitationsSuccessReport.md) |  | 
**counters** | [**CreateUserBulkInvitationsSuccessCounters**](CreateUserBulkInvitationsSuccessCounters.md) |  | 



## Enum: StatusEnum


* `ongoing` (value: `"ongoing"`)

* `failed` (value: `"failed"`)




