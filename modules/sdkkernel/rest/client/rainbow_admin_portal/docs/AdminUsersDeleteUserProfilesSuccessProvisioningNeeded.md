# RainbowAdminPortal.AdminUsersDeleteUserProfilesSuccessProvisioningNeeded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **String** | If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when Business Store confirms through the callback that the subscription is created). | 
**mediaType** | **String** | Only set if provisioningNeeded is set and the element of the array has providerType &#x60;JANUS&#x60;. Corresponds to the media type to use when provisioning the company account on JANUS component. | [optional] 
**provisioningOngoing** | **Boolean** | Boolean indicating if the account is being provisioned on the other component. If set to false, the account has been successfully created on the component. | 
**provisioningStartDate** | **String** | Provisioning starting date | 



## Enum: ProviderTypeEnum


* `PGI` (value: `"PGI"`)

* `JANUS` (value: `"JANUS"`)





## Enum: MediaTypeEnum


* `webrtc` (value: `"webrtc"`)




