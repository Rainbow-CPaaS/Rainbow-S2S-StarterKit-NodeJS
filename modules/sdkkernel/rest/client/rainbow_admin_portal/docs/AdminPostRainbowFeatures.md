# RainbowAdminPortal.AdminPostRainbowFeatures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Feature name. | 
**uniqueRef** | **String** | Feature unique reference (to be used for controls on limitations linked to this feature in server/client code)    Can only be set during feature creation | 
**type** | **String** | Feature type.    Used in offers APIs to check if a limitation value is allowed for a given feature.    It won&#39;t be possible to set limitMin&#x3D;5 in an offer for a feature having type&#x3D;boolean (only true/false are allowed). | 
**description** | **String** | Feature description. | [optional] 



## Enum: TypeEnum


* `boolean` (value: `"boolean"`)

* `number` (value: `"number"`)

* `string` (value: `"string"`)

* `undefined` (value: `"undefined"`)




