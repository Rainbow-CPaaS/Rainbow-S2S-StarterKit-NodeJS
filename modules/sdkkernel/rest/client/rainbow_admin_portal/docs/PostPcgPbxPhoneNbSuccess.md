# RainbowAdminPortal.PostPcgPbxPhoneNbSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | Phone number country (ISO 3166-1 alpha2 format) | 
**id** | **String** | Phone number unique identifier | 
**shortNumber** | **String** | Short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX. | 
**internalNumber** | **String** | Internal phone number.    Usable within a PBX group. | 
**voiceMailNumber** | **String** | Voice mail phone number | 
**_number** | **String** | DDI phone number | 
**numberE164** | **String** | E.164 phone number (computed by server if number is set) | 
**pbxUserId** | **String** | Pbx&#39;s user Id | 
**userId** | **String** | Rainbow userId to which the phone number is linked | 
**jidIm** | **String** | jid_im of the Rainbow user to which the phone number is linked | 
**jidTel** | **String** | jid_tel of the Rainbow user to which the phone number is linked | 
**jidPassword** | **String** | jid_password of the Rainbow user to which the phone number is linked | 
**type** | **String** | Phone number type, one of &#x60;home&#x60;, &#x60;work&#x60;, &#x60;other&#x60; | 
**deviceType** | **String** | Phone number device type, one of &#x60;landline&#x60;, &#x60;mobile&#x60;, &#x60;fax&#x60;, &#x60;other&#x60; | 
**isFromSystem** | **String** | Boolean indicating if the phoneNumber is linked to a system (pbx) | 
**pbxId** | **String** | pbx unique identifier | 
**firstName** | **String** | firstname | 
**lastName** | **String** | lastname | 
**deviceName** | **String** | devicename | 
**systemId** | **String** | System unique identifier | 
**isMonitored** | **Boolean** | Specifies if the PhoneNumber is monitored by agent (i.e. telephony events are notified to Rainbow user through XMPP) | 
**isNomadic** | **Boolean** | Specifies if Nomadic set is selected. | 


