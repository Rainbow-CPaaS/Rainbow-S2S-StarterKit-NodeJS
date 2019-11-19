# RainbowEnduserPortal.UpdateUserPhoneNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | User phone number (as entered by user).    Not mandatory if the PhoneNumber to update is a PhoneNumber linked to a system (pbx) | 
**country** | **String** | Phone number country (ISO 3166-1 alpha3 format).       Used to compute &#x60;numberE164&#x60; field from number field. If not provided, user country is used by default. | [optional] 
**type** | **String** | Phone number type | 
**deviceType** | **String** | Phone number device type | 
**shortNumber** | **String** | **[Only for update of PhoneNumbers linked to a system (pbx)]**      Short phone number (corresponds to the number monitored by PCG).    Read only field, only used by server to find the related system PhoneNumber to update (couple &#x60;shortNumber&#x60;/&#x60;systemId&#x60;). | [optional] 
**systemId** | **String** | **[Only for update of PhoneNumbers linked to a system (pbx)]**      Unique identifier of the system in Rainbow database to which the system PhoneNumbers belong.    Read only field, only used by server to find the related system PhoneNumber to update (couple &#x60;shortNumber&#x60;/&#x60;systemId&#x60;). | [optional] 
**internalNumber** | **String** | **[Only for update of PhoneNumbers linked to a system (pbx)]**      Internal phone number. Usable within a PBX group. By default, it is equal to &#x60;shortNumber&#x60;.    Admins and users can modify this internalNumber field.    &#x60;internalNumber&#x60; must be unique in the whole system group to which the related PhoneNumber belong (an error 409 is raised if someone tries to update internalNumber to a number already used by another PhoneNumber in the same system group). | [optional] 



## Enum: TypeEnum


* `home` (value: `"home"`)

* `work` (value: `"work"`)

* `other` (value: `"other"`)





## Enum: DeviceTypeEnum


* `landline` (value: `"landline"`)

* `mobile` (value: `"mobile"`)

* `fax` (value: `"fax"`)

* `other` (value: `"other"`)




