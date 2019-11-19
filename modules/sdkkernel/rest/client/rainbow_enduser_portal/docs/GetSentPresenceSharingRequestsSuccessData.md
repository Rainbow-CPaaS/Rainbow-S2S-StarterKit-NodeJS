# RainbowEnduserPortal.GetSentPresenceSharingRequestsSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Object**](.md) |  | 
**id** | **String** | Presence Request unique Id | 
**fromUserId** | **String** | Initiator of the presence request unique Rainbow Id | 
**toUserId** | **String** | User for which we need the presence unique Rainbow Id | 
**requestDate** | **Date** | Date of presence request creation | 
**acceptationDate** | **Date** | Date of presence request acceptation | 
**status** | **String** | Presence request status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;* &#x60;pending&#x60;: Presence request has been sent by inviting user and not yet accepted by invited user * &#x60;accepted&#x60;: Presence request has been accepted by a Rainbow user of my network   | 


