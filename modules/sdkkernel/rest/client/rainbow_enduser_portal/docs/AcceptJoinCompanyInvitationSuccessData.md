# RainbowEnduserPortal.AcceptJoinCompanyInvitationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **String** | Name of the company for which the join company invitation is (not updated if company name change after invitation creation) | 
**acceptationDate** | **Date** | Date when the join company invitation has been accepted by the user (if applicable) | 
**requestedNotificationLanguage** | **String** | Requested notification language (used to re-send email request in that language) | 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**companyId** | **String** | Id of the company for which the join company invitation is | 
**invitedUserId** | **String** | Unique Id of the Rainbow user invited to join the company (only if invited user already exists in Rainbow) | 
**declinationDate** | **Date** | Date when the join company invitation has been declined by the user (if applicable) | 
**invitedUserLoginEmail** | **String** | Email of the Rainbow user invited to join the company | 
**id** | **String** | Join company invitation unique Id | 
**invitingAdminId** | **String** | Inviting company admin unique Rainbow Id | 
**invitingAdminLoginEmail** | **String** | Inviting company admin loginEmail | 
**invitationDate** | **Date** | Date the join company invitation was created | 
**status** | **String** | Join company invitation status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;auto-accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;, &#x60;failed&#x60; | 


