# RainbowEnduserPortal.CancelJoinCompanyRequestSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedCompanyId** | **String** | Unique Id of the company the requesting user wants to join | 
**requestingUserId** | **String** | Requesting user unique Rainbow Id | 
**requestingUserLoginEmail** | **String** | Requesting user email | 
**requestingDate** | **Date** | Date the request was created | 
**requestedCompanyInvitationId** | **String** | If the request was sent using a JoinCompanyInvite id, this field is set with this Id | 
**requestedCompanyName** | **String** | Name of the company the requesting user wants to join | 
**requestedNotificationLanguage** | **String** | Requested notification language to use if language of company admin is not defined (used to re-send email request in that language) | 
**id** | **String** | Join company request unique Id | 
**requestedToCompanyAdmin** | [**CancelJoinCompanyRequestSuccessDataRequestedToCompanyAdmin**](CancelJoinCompanyRequestSuccessDataRequestedToCompanyAdmin.md) |  | [optional] 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**status** | **String** | Request status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60; | 


