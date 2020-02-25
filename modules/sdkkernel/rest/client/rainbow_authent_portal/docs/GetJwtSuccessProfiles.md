# RainbowAuthenticationPortal.GetJwtSuccessProfiles

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignationDate** | **String** | Date when the subscription was attached to user profile | 
**businessModel** | **String** | Indicates the business model associated to this offer (number of users, usage, ...) - &#x60;nb_users&#x60;: Licencing business model. Subscriptions having this business model are billed according to the number of users bought for it. - &#x60;usage&#x60;: Subscriptions having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). - &#x60;flat_fee&#x60;: Subscriptions having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). - &#x60;none&#x60;: no business model. Should be used for offers which are not sold (like Essential...). | [optional] [default to &#39;none&#39;]
**businessSpecific** | **[String]** | Indicates if the subscription is related to specific(s) business (for verticals like HDS) - &#x60;NONE&#x60;: This subscription is used if the company does not have a businessSpecific field. - &#x60;HDS&#x60;: This subscription is used if the company have a businessSpecific HDS (HealthCare). | [optional] 
**canBeSold** | **Boolean** | Indicates if the offer is billed. &lt;br/&gt; Some offers will not be billed (Essential, Demo, ...). | 
**hasConference** | **Boolean** | Indicates if the profile contains conference services | [optional] 
**isDefault** | **Boolean** | Indicates if this profile is linked to user&#39;s company&#39;s subscription to default offer (i.e. Essential) | 
**isDemo** | **Boolean** | Indicates if the profile is linked to a demo subscription | [optional] 
**isExclusive** | **Boolean** | Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won&#39;t be possible to assign a second exclusive offer). | [optional] 
**isPrepaid** | **Boolean** | Indicates if the profile is linked to a prepaid subscription | [optional] 
**offerId** | **String** | Id of the Rainbow offer to which company subscription is attached | 
**offerName** | **String** | Name of the Rainbow offer to which company subscription is attached | 
**offerTechnicalDescription** | **String** | Offer technical description. | [optional] 
**prepaidDuration** | **Number** | Prepaid subscription duration (in month). &lt;br/&gt;Only set if &#x60;isPrepaid&#x60; is true. | [optional] 
**profileId** | **String** | Id of the Rainbow profile to which company subscription is attached | 
**profileName** | **String** | Name of the Rainbow profile to which company subscription is attached | 
**provisioningNeeded** | [**[GetJwtSuccessProvisioningNeeded]**](GetJwtSuccessProvisioningNeeded.md) | Array of Objects which indicates if account must be provisioned on other internal components when subscribing to this offer. | [optional] 
**status** | **String** | Status of the company subscription to which user profile is assigned &lt;br/&gt; &lt;br/&gt; Possible values: &lt;code&gt;active&lt;/code&gt;, &lt;code&gt;alerting&lt;/code&gt;, &lt;code&gt;hold&lt;/code&gt;, &lt;code&gt;terminated&lt;/code&gt; | 
**subscriptionId** | **String** | Id of company subscription to which user profile is assigned (one of the subscriptions available to user&#39;s company) | 
**zuoraOfferId** | **String** | ID of the related offer in Zuora (if offer can be sold) | [optional] 
**zuoraProductRatePlanChargeId** | **String** | ID of the ProductRatePlanChargeId used in Zuora (if offer can be sold) | [optional] 
**zuoraProductRatePlanId** | **String** | ID of the ProductRatePlanId to used in Zuora (if offer can be sold) | [optional] 


<a name="BusinessModelEnum"></a>
## Enum: BusinessModelEnum


* `nb_users` (value: `"nb_users"`)

* `usage` (value: `"usage"`)

* `flat_fee` (value: `"flat_fee"`)

* `none` (value: `"none"`)




