# RainbowAdminPortal.AdminPutRainbowOffersDefault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Offer name. | [optional] 
**description** | **String** | Offer description. | [optional] 
**technicalDescription** | **String** | Offer technical description.    &#x60;technicalDescription&#x60; must be unique. | [optional] 
**profileId** | **String** | Id of the profile linked to this offer. | 
**canBeSold** | **Boolean** | Indicates if the offer can be sold to customers.    Some offers will not be sold (Essential, Beta, ...).    If canBeSold is true, zuoraOfferId, zuoraProductRatePlanId and zuoraProductRatePlanChargeId have to be set. | [optional] [default to false]
**businessModel** | **String** | Indicates the business model associated to this offer (number of users, usage, ...)   * &#x60;nb_users&#x60;: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * &#x60;usage&#x60;: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * &#x60;flat_fee&#x60;: Offers having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). This should be the business model for some specific business offers like HDS. * &#x60;none&#x60;: no business model. Should be used for offers which are not sold (like Essential, Beta, ...).   | [optional] [default to &#39;none&#39;]
**businessSpecific** | **[String]** | Indicates if the offer is related to specific(s) business (for verticals like HDS)   * &#x60;NONE&#x60;: This offer can be used if the company does not have a businessSpecific field. * &#x60;HDS&#x60;: This offer can only used if the company have a businessSpecific HDS (HealthCare).   | [optional] 
**autoSubscribe** | **Boolean** | Indicates if the offer has to be automatically subscribed at company creation. | [optional] [default to false]
**isExclusive** | **Boolean** | Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won&#39;t be possible to assign a second exclusive offer). | [optional] [default to false]
**provisioningNeeded** | [**[AdminPutRainbowOffersDefaultProvisioningNeeded]**](AdminPutRainbowOffersDefaultProvisioningNeeded.md) | Array of Objects which indicates if account must be provisioned on other components when subscribing to this offer. | [optional] 
**zuoraOfferId** | **String** | ID of the related offer in Zuora (if offer can be sold) | [optional] 
**zuoraProductRatePlanId** | **String** | ID of the ProductRatePlanId to use when creating a subscription for the related offer in Zuora (if offer can be sold) | [optional] 
**zuoraProductRatePlanChargeId** | **String** | ID of the ProductRatePlanChargeId to use when creating a subscription for the related offer in Zuora (if offer can be sold) | [optional] 
**sapReference** | **String** | Reference of the offer on SAP side. | [optional] 
**offerReference** | **String** | Key used for referencing the offer. Well know offer References are: RB-Essential, RB-Business, RB-Enterprise, RB-Conference. | [optional] 
**isPrepaid** | **Boolean** | Indicates if the offer is a prepaid offer | [optional] 
**prepaidDuration** | **Number** | Prepaid offer duration (in month). Mandatory if isPrepaid has been set | [optional] 



## Enum: BusinessModelEnum


* `nb_users` (value: `"nb_users"`)

* `usage` (value: `"usage"`)

* `flat_fee` (value: `"flat_fee"`)

* `none` (value: `"none"`)




