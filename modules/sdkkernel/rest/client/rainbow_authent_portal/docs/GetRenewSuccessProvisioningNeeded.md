# RainbowAuthenticationPortal.GetRenewSuccessProvisioningNeeded

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mediaType** | **String** | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;JANUS&#x60;. Corresponds to the media type to use when provisioning the company account on WebRTC Conferencing component. | [optional] 
**pgiEnterpriseId** | **String** | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;PGI&#x60;. Corresponds to an enterpriseId to use when provisioning the company account on PSTN Conferencing component. | [optional] 
**providerType** | **String** | If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the internal component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when the subscription is created). | 


<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `webrtc` (value: `"webrtc"`)




<a name="PgiEnterpriseIdEnum"></a>
## Enum: PgiEnterpriseIdEnum


* `testEnterpriseId` (value: `"testEnterpriseId"`)

* `internalEnterpriseId` (value: `"internalEnterpriseId"`)

* `genericEnterpriseId` (value: `"genericEnterpriseId"`)




<a name="ProviderTypeEnum"></a>
## Enum: ProviderTypeEnum


* `PGI` (value: `"PGI"`)

* `JANUS` (value: `"JANUS"`)




