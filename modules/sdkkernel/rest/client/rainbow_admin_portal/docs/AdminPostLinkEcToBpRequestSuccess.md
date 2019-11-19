# RainbowAdminPortal.AdminPostLinkEcToBpRequestSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Link End customer to BP request unique Id | 
**requestingCompanyId** | **String** | Id of the EC company for which the link request is sent | 
**requestingCompanyName** | **String** | Name of the EC company for which the request is sent (not updated if company name change after request creation) | 
**requestedCompanyId** | **String** | Unique Id of the BP company requested to be linked to EC company | 
**requestedCompanyName** | **String** | Name of the BP company requested to be linked to EC company | 
**requestedToBeBpIr** | **Boolean** | Boolean indicating if request was sent to become BP IR company | 
**requestingAdminId** | **String** | Requesting company admin unique Rainbow Id | 
**requestingAdminLoginEmail** | **String** | Requesting company admin loginEmail | 
**requestDate** | **Date** | Date the request was created | 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**requestedNotificationLanguage** | **String** | Requested notification language (used to re-send email request in that language) | 
**status** | **String** | Request status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;auto-accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;, &#x60;failed&#x60; | 
**acceptationDate** | **Date** | Date when the request has been accepted by the bp_admin | 
**declinationDate** | **Date** | Date when the request has been declined by the bp_admin | 


