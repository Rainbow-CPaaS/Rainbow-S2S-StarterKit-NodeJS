# RainbowAdminPortal.PutPcgPbxPhoneNbShortNb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shortNumber** | **String** | Short phone number | [optional] 
**voiceMailNumber** | **String** | Voice mail phone number | [optional] 
**pbxUserId** | **String** | Pbx&#39;s user Id | [optional] 
**companyPrefix** | **String** | When a multi-tenant system is connected, this is the company access number [multi-company call + company Area, ex: 8210, 8211] | [optional] 
**companyName** | **String** | When a multi-tenant system is connected, this is the company name | [optional] 
**_number** | **String** | Raw phone number (DDI) _Note:_ If numberE164 can&#39;t be computed from number and country fields, an error 400 is returned (ex: wrong phone number, phone number not matching country code, ...) | [optional] 
**internalNumber** | **String** | Internal phone number | [optional] 
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




