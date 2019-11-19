# RainbowAdminPortal.PutCancelLinkEcToBpInviteByIdSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Link End customer to BP invitation unique Id | 
**invitingCompanyId** | **String** | Id of the BP company for which the link invitation is sent | 
**invitingCompanyName** | **String** | Name of the BP company for which the invitation is sent (not updated if company name change after invitation creation) | 
**invitedCompanyId** | **String** | Unique Id of the End customer company invited to be linked to BP company | 
**invitedCompanyName** | **String** | Name of the End customer company invited to be linked to BP company | 
**invitedToBeBpIr** | **Boolean** | Boolean indicating if invitation was sent to invite EC company to become BP IR company | 
**invitingAdminId** | **String** | Inviting company admin unique Rainbow Id | 
**invitingAdminLoginEmail** | **String** | Inviting company admin loginEmail | 
**invitationDate** | **Date** | Date the invitation was created | 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**requestedNotificationLanguage** | **String** | Requested notification language (used to re-send email request in that language) | 
**status** | **String** | Invitation status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;auto-accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;, &#x60;failed&#x60; | 
**acceptationDate** | **Date** | Date when the invitation has been accepted by the end customer company_admin | 
**declinationDate** | **Date** | Date when the invitation has been declined by the end customer company_admin | 


