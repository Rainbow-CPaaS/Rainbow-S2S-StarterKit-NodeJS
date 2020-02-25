

# PostSamlAssertionSuccessProvisioningNeeded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mediaType** | [**MediaTypeEnum**](#MediaTypeEnum) | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;JANUS&#x60;. Corresponds to the media type to use when provisioning the company account on WebRTC Conferencing component. |  [optional]
**pgiEnterpriseId** | [**PgiEnterpriseIdEnum**](#PgiEnterpriseIdEnum) | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;PGI&#x60;. Corresponds to an enterpriseId to use when provisioning the company account on PSTN Conferencing component. |  [optional]
**providerType** | [**ProviderTypeEnum**](#ProviderTypeEnum) | If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the internal component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when the subscription is created). | 



## Enum: MediaTypeEnum

Name | Value
---- | -----
WEBRTC | &quot;webrtc&quot;



## Enum: PgiEnterpriseIdEnum

Name | Value
---- | -----
TESTENTERPRISEID | &quot;testEnterpriseId&quot;
INTERNALENTERPRISEID | &quot;internalEnterpriseId&quot;
GENERICENTERPRISEID | &quot;genericEnterpriseId&quot;



## Enum: ProviderTypeEnum

Name | Value
---- | -----
PGI | &quot;PGI&quot;
JANUS | &quot;JANUS&quot;



