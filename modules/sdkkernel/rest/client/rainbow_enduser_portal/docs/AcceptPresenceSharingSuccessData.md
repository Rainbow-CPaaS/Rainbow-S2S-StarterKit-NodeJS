# RainbowEnduserPortal.AcceptPresenceSharingSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Presence Request unique Id | 
**fromUserId** | **String** | Initiator of the presence request unique Rainbow Id | 
**toUserId** | **String** | User for which we need the presence unique Rainbow Id | 
**requestDate** | **Date** | Date of presence request creation | 
**acceptationDate** | **Date** | Date of presence request acceptation | 
**status** | **String** | Presence request status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;* &#x60;pending&#x60;: Presence request has been sent by inviting user and not yet accepted by invited user * &#x60;accepted&#x60;: Presence request has been accepted by a Rainbow user of my network * &#x60;declined&#x60;: Presence request has been declined by a Rainbow user of my network * &#x60;canceled&#x60;: Presence request has been canceled by a Rainbow user of my network * &#x60;interrupted&#x60;: Once accepted, Presence subscription can be interrupted  When the presence request is cancelled or declined, it is deleted in the database, then &#x60;canceled&#x60;&#x60;declined&#x60; status can&#39;t be used for filtering purpose. | 


