# RainbowAdminPortal.PutSystemPhoneNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | Phone number country (ISO 3166-1 alpha3 format) | [optional] 
**isMonitored** | **Boolean** | Specifies if the PhoneNumber is monitored by agent (i.e. telephony events are notified to Rainbow user through XMPP) | [optional] 
**userId** | **String** | Rainbow userId to which is linked the phoneNumber | [optional] 
**internalNumber** | **String** | Internal phone number. Usable within a PBX group. By default, it is equal to &#x60;shortNumber&#x60;.    &#x60;internalNumber&#x60; must be unique in the whole system group to which the related PhoneNumber belong (an error 409 is raised if someone tries to update internalNumber to a number already used by another PhoneNumber in the same system group). | [optional] 
**_number** | **String** | Raw phone number (DDI) _Note:_ If numberE164 can&#39;t be computed from number and country fields, an error 400 is returned (ex: wrong phone number, phone number not matching country code, ...) | [optional] 
**type** | **String** | Phone number type | [optional] [default to &#39;work&#39;]
**deviceType** | **String** | Phone number device type | [optional] [default to &#39;landline&#39;]
**firstName** | **String** | firstname | [optional] 
**lastName** | **String** | lastname | [optional] 
**deviceName** | **String** | device name | [optional] 



## Enum: TypeEnum


* `home` (value: `"home"`)

* `work` (value: `"work"`)

* `other` (value: `"other"`)





## Enum: DeviceTypeEnum


* `landline` (value: `"landline"`)

* `mobile` (value: `"mobile"`)

* `fax` (value: `"fax"`)

* `other` (value: `"other"`)




