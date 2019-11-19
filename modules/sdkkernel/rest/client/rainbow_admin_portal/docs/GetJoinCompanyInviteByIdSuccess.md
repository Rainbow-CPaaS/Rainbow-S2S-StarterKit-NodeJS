# RainbowAdminPortal.GetJoinCompanyInviteByIdSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Join company invitation unique Id | 
**companyId** | **String** | Id of the company for which the join company invitation is | 
**companyName** | **String** | Name of the company for which the join company invitation is (not updated if company name change after invitation creation) | 
**invitedUserId** | **String** | Unique Id of the Rainbow user invited to join the company (only if invited user already exists in Rainbow) | 
**invitedUserLoginEmail** | **String** | Email of the Rainbow user invited to join the company | 
**invitingAdminId** | **String** | Inviting company admin unique Rainbow Id | 
**invitingAdminLoginEmail** | **String** | Inviting company admin loginEmail | 
**invitationDate** | **Date** | Date the join company invitation was created | 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**requestedNotificationLanguage** | **String** | Requested notification language (used to re-send email request in that language) | 
**status** | **String** | Join company invitation status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;auto-accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;, &#x60;failed&#x60; | 
**acceptationDate** | **Date** | Date when the join company invitation has been accepted by the user (if applicable) | 
**declinationDate** | **Date** | Date when the join company invitation has been declined by the user (if applicable) | 


