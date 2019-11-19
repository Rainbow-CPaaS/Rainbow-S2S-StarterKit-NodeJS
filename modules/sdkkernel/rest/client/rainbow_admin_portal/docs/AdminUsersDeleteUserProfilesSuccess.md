# RainbowAdminPortal.AdminUsersDeleteUserProfilesSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptionId** | **String** | Id of company subscription to which user profile is assigned (one of the subscriptions available to user&#39;s company) | 
**offerId** | **String** | Id of the offer to which company subscription is attached | 
**offerName** | **String** | Name of the offer to which company subscription is attached | 
**offerDescription** | **String** | Description of the offer to which company subscription is attached | 
**offerTechnicalDescription** | **String** | Technical description of the subscribed offer | 
**offerReference** | **String** | Key used for referencing the subscribed offer. Well know offer References are: RB-Essential, RB-Business, RB-Enterprise, RB-Conference. | 
**profileId** | **String** | Id of the profile to which company subscription is attached | 
**profileName** | **String** | Name of the profile to which company subscription is attached | 
**status** | **String** | Status of the company subscription to which user profile is assigned       Possible values: &#x60;active&#x60;, &#x60;alerting&#x60;, &#x60;hold&#x60;, &#x60;terminated&#x60; | 
**isDefault** | **Boolean** | Indicates if this profile is linked to user&#39;s company&#39;s subscription to default offer (i.e. Essential) | 
**canBeSold** | **Boolean** | Indicates if this profile is linked a subscription for a paid offer.    Some offers are not be sold (Essential, Beta, Demo, ...).    If canBeSold is true, the subscription is billed. | 
**businessModel** | **String** | Indicates the business model associated to the subscribed offer (number of users, usage, ...)   * &#x60;nb_users&#x60;: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * &#x60;usage&#x60;: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * &#x60;none&#x60;: no business model. Used for offers which are not sold (like Essential, Beta, ...).   | 
**isExclusive** | **Boolean** | Indicates if this profile is relative to a subscription for an exclusive offer (if the user has already an exclusive offer assigned, it won&#39;t be possible to assign a second exclusive offer).    Used on GUI side to know if the subscription to assign to a user profile has to be displayed as a radio button or as a check box. | 
**isPrepaid** | **Boolean** | Indicates if this profile is relative to a subscription for a prepaid offer | 
**expirationDate** | **Date** | Expiration date of the subscription to the prepaid offer (creationDate + prepaidDuration) | 
**provisioningNeeded** | [**[AdminUsersDeleteUserProfilesSuccessProvisioningNeeded]**](AdminUsersDeleteUserProfilesSuccessProvisioningNeeded.md) | Indicates if provisioning is needed on other component when assigning the user profile to this subscription (depends of thus subscribed offer) | 
**assignationDate** | **String** | Date when the subscription was attached to user profile | 



## Enum: BusinessModelEnum


* `nb_users` (value: `"nb_users"`)

* `usage` (value: `"usage"`)

* `none` (value: `"none"`)




