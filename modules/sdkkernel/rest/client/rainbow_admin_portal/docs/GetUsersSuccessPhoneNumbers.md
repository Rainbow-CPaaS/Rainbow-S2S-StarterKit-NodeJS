# RainbowAdminPortal.GetUsersSuccessPhoneNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phoneNumberId** | **String** | Phone number unique id in directory collection. | 
**_number** | **String** | User phone number (as entered by user) | 
**numberE164** | **String** | User E.164 phone number, computed by server from number and country fields | 
**country** | **String** | Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field. | 
**isFromSystem** | **Boolean** | Boolean indicating if phone is linked to a system (pbx). | 
**shortNumber** | **String** | **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX.    Only PCG can set this field. | 
**internalNumber** | **String** | **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), internal phone number.    Usable within a PBX group.    Admins and users can modify this internalNumber field. | 
**systemId** | **String** | **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that system in Rainbow database. | 
**pbxId** | **String** | **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that pbx. | 
**type** | **String** | Phone number type, one of &#x60;home&#x60;, &#x60;work&#x60;, &#x60;other&#x60;. | 
**deviceType** | **String** | Phone number device type, one of &#x60;landline&#x60;, &#x60;mobile&#x60;, &#x60;fax&#x60;, &#x60;other&#x60;. | 


