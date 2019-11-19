# RainbowAdminPortal.PostUsersPhoneNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | User phone number (as entered by user) | 
**country** | **String** | Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field.       If not provided, user country is used by default. | 
**type** | **String** | Phone number type | 
**deviceType** | **String** | Phone number device type | 



## Enum: TypeEnum


* `home` (value: `"home"`)

* `work` (value: `"work"`)

* `other` (value: `"other"`)





## Enum: DeviceTypeEnum


* `landline` (value: `"landline"`)

* `mobile` (value: `"mobile"`)

* `fax` (value: `"fax"`)

* `other` (value: `"other"`)




