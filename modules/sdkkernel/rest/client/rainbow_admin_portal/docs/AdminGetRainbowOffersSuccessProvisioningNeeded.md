# RainbowAdminPortal.AdminGetRainbowOffersSuccessProvisioningNeeded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **String** | If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when Business Store confirms through the callback that the subscription is created). | 
**pgiEnterpriseId** | **String** | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;PGI&#x60;. Corresponds to an enterpriseId to use when provisioning the company account on PGI component. | [optional] 
**mediaType** | **String** | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;JANUS&#x60;. Corresponds to the media type to use when provisioning the company account on JANUS component. | [optional] 



## Enum: ProviderTypeEnum


* `PGI` (value: `"PGI"`)

* `JANUS` (value: `"JANUS"`)





## Enum: PgiEnterpriseIdEnum


* `testEnterpriseId` (value: `"testEnterpriseId"`)

* `internalEnterpriseId` (value: `"internalEnterpriseId"`)

* `genericEnterpriseId` (value: `"genericEnterpriseId"`)





## Enum: MediaTypeEnum


* `webrtc` (value: `"webrtc"`)




