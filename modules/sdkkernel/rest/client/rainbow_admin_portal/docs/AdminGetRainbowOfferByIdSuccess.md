# RainbowAdminPortal.AdminGetRainbowOfferByIdSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Offer unique identifier | 
**name** | **String** | Offer name | 
**description** | **String** | Offer description | 
**technicalDescription** | **String** | Offer technical description | 
**isDefault** | **Boolean** | Indicates if it is the default Rainbow offer. Only one offer can be the default one (i.e. Essential)    Default offer is the offer which related profile is automatically assigned to newly created companies and users. | 
**creationDate** | **Date** | Offer creation date | 
**profileId** | **String** | Id of the profile linked to this offer | 
**canBeSold** | **Boolean** | Indicates if the offer can be sold to customers.    Some offers will not be sold (Essential, Beta, ...).    If canBeSold is true, zuoraOfferId, zuoraProductRatePlanId and zuoraProductRatePlanChargeId have to be set. | 
**businessModel** | **String** | Indicates the business model associated to this offer (number of users, usage, flat fee...)   * &#x60;nb_users&#x60;: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * &#x60;usage&#x60;: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * &#x60;flat_fee&#x60;: Offers having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). This should be the business model for some specific business offers like HDS. * &#x60;none&#x60;: no business model. Should be used for offers which are not sold (like Essential, Beta, ...).   | 
**businessSpecific** | **[String]** | Indicates if the offer is related to specific(s) business (for verticals like HDS)   * &#x60;NONE&#x60;: This offer can be used if the company does not have a businessSpecific field. * &#x60;HDS&#x60;: This offer can only used if the company have a businessSpecific HDS (HealthCare). * If offer has no businessSpecific field (existing offers, as no migration scripts has been written), the offer is considered like if it has businessSpecific equal to [\&quot;NONE\&quot;].   | [optional] 
**autoSubscribe** | **Boolean** | Indicates if the offer has to be automatically subscribed at company creation. | 
**isExclusive** | **Boolean** | Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won&#39;t be possible to assign a second exclusive offer).    Used on GUI side to know if the offer has to be displayed as a radio button or as a check box. | 
**isPrepaid** | **Boolean** | Indicates if the offer is a prepaid offer | 
**prepaidDuration** | **Number** | Prepaid offer duration (in month).    Only set if &#x60;isPrepaid&#x60; is true. | 
**provisioningNeeded** | [**[AdminGetRainbowOfferByIdSuccessProvisioningNeeded]**](AdminGetRainbowOfferByIdSuccessProvisioningNeeded.md) | Array of Objects which indicates if account must be provisioned on other components when subscribing to this offer. | [optional] 
**zuoraOfferId** | **String** | ID of the related offer in Zuora (if offer can be sold) | 
**zuoraProductRatePlanId** | **String** | ID of the ProductRatePlanId to use when creating a subscription for the related offer in Zuora (if offer can be sold) | 
**zuoraProductRatePlanChargeId** | **String** | ID of the ProductRatePlanChargeId to use when creating a subscription for the related offer in Zuora (if offer can be sold) | 
**hasConference** | **Boolean** | Indicates if the offer contains conference services | 
**isDemo** | **Boolean** | Indicates if the offer is a demo offer | 



## Enum: BusinessModelEnum


* `nb_users` (value: `"nb_users"`)

* `usage` (value: `"usage"`)

* `flat_fee` (value: `"flat_fee"`)

* `none` (value: `"none"`)




