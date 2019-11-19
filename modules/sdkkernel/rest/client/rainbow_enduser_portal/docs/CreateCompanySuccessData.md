# RainbowEnduserPortal.CreateCompanySuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | Company country (ISO 3166-1 alpha3 format) | [optional] 
**organisationId** | **String** | Optional identifier to indicate the company belongs to an organisation | 
**city** | **String** | Company city | [optional] 
**postalCode** | **String** | Company postal code | [optional] 
**description** | **String** | A free string that describes the company (2000 char length) | [optional] 
**giphyEnabled** | **Boolean** | Whether or not giphy feature is enabled for users belonging to this company (possibility to use animated gifs in conversations) | [optional] 
**isBP** | **Boolean** | Indicates if the company is a Business partner company | [default to false]
**customData** | [**Object**](.md) |  | [optional] 
**userSelfRegisterAllowedDomains** | **[String]** | Allow users with email domain matching one of the values of this array to join the company by self-register process (if userSelfRegisterEnabled is true) | 
**userSelfRegisterEnabled** | **Boolean** | Allow users with email domain matching &#39;userSelfRegisterAllowedDomains&#39; to join the company by self-register process | 
**businessSpecific** | **String** | When the customer has subscribed to specific business offers, this field is set to the associated specific business (ex: HDS for HealthCare business specific) | [optional] 
**offerType** | **String** | Allowed company offer types | 
**statusUpdatedDate** | **Date** | Date of last company status update (Read only) | 
**catalogId** | **String** | Id of the catalog of Rainbow offers to which the company is linked. The catalog corresponds to the list of offers the company can subscribe. | 
**bpCRDid** | **String** | Reference of the Business Partner in CDR | [optional] 
**street** | **String** | Company street | [optional] 
**companyContactId** | **String** | User Id of a Rainbow user which is the contact for this company | [optional] 
**adminAllowedUpdateSubscriptionsOps** | **String** | In the case the company is linked to a Business Partner company and &#x60;adminHasRightToUpdateSubscriptions&#x60; is enabled, indicates the update operations for which the &#x60;bp_admin&#x60; allows the &#x60;company_admin&#x60; to perform on the subscriptions of his company.    Can only be set by &#x60;superadmin&#x60; or &#x60;bp_admin&#x60;/&#x60;bp_finance&#x60; of the related company.    Possible values:   * &#x60;all&#x60;: company_admin is allowed to perform all update operations on the subscriptions of his company * &#x60;increase_only&#x60;: company_admin is only allowed to increase &#x60;maxNumberUsers&#x60; on the subscriptions of his company (decrease is forbidden)   | [optional] 
**currency** | **String** | Company currency, for payment of premium offers (ISO 4217 format)    For now, only USD and EUR are supported | [optional] 
**id** | **String** | Company unique identifier | 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state should be defined. Else it is not managed. | [optional] 
**adminEmail** | **String** | Company contact person email | [optional] 
**economicActivityClassification** | **String** | * &#x60;A&#x60;: AGRICULTURE, FORESTRY AND FISHING * &#x60;B&#x60;: MINING AND QUARRYING * &#x60;C&#x60;: MANUFACTURING * &#x60;D&#x60;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY * &#x60;E&#x60;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES * &#x60;F&#x60;: CONSTRUCTION * &#x60;G&#x60;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES * &#x60;H&#x60;: TRANSPORTATION AND STORAGE * &#x60;I&#x60;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES * &#x60;J&#x60;: INFORMATION AND COMMUNICATION * &#x60;K&#x60;: FINANCIAL AND INSURANCE ACTIVITIES * &#x60;L&#x60;: REAL ESTATE ACTIVITIES * &#x60;M&#x60;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES * &#x60;N&#x60;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES * &#x60;O&#x60;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY * &#x60;P&#x60;: EDUCATION * &#x60;Q&#x60;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES * &#x60;R&#x60;: ARTS, ENTERTAINMENT AND RECREATION * &#x60;S&#x60;: OTHER SERVICE ACTIVITIES * &#x60;T&#x60;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE * &#x60;U&#x60;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES  | [optional] 
**bpHasRightToConnect** | **Boolean** | When True, the BP can connect CPE equipment of managed companies. So when False, the \&quot;equipment\&quot; tab should be removed from the admin GUI | [optional] 
**website** | **String** | Company website URL | [optional] 
**externalReference2** | **String** | Free field that BP can use to link their customers to their IS/IT tools    Only applicable by &#x60;superadmin&#x60; or by &#x60;bp_admin&#x60;/&#x60;bp_finance&#x60; on one of his customer companies. | [optional] 
**visibility** | **String** | Company visibility (define if users being in this company can be searched by users being in other company) | 
**bpHasRightToSell** | **Boolean** | Indicates if the Business has the right to sell | [optional] 
**bpType** | **String** | Indicates BP Company type   * &#x60;IR&#x60;: Indirect Reseller, * &#x60;VAD&#x60;: Value Added Distributor, * &#x60;DR&#x60;: Direct Reseller.   | [optional] 
**bpId** | **String** | Optional identifier which links the company to the corresponding Business partner company | 
**bpIsContractAccepted** | **Boolean** | Indicates if the Business has accepted the contract and can sell Rainbow offers | [optional] 
**bpContractAcceptationInfo** | [**CreateCompanySuccessDataBpContractAcceptationInfo**](CreateCompanySuccessDataBpContractAcceptationInfo.md) |  | [optional] 
**adminHasRightToUpdateSubscriptions** | **Boolean** | In the case the company is linked to a Business Partner company, indicates if the &#x60;bp_admin&#x60; allows the &#x60;company_admin&#x60; to update the subscriptions of his company (if enable, allowed operations depend of the value of &#x60;adminAllowedUpdateSubscriptionsOps&#x60;).    Can only be set by &#x60;superadmin&#x60; or &#x60;bp_admin&#x60;/&#x60;bp_finance&#x60; of the related company. | [optional] 
**creationDate** | **Date** | Company creation date (Read only) | 
**bpBusinessModel** | **String** | Indicates BP business model | [optional] 
**externalReference** | **String** | Free field that BP can use to link their customers to their IS/IT tools    Only applicable by &#x60;superadmin&#x60; or by &#x60;bp_admin&#x60;/&#x60;bp_finance&#x60; on one of his customer companies. | [optional] 
**supportEmail** | **String** | Company support email | [optional] 
**bpApplicantNumber** | **String** | Reference of the Business Partner in ALE Finance tools (SAP) | [optional] 
**size** | **String** |  An overview of the number of employees | 
**avatarShape** | **String** | Company&#39;s avatar customization | [optional] 
**name** | **String** | Company name | 
**slogan** | **String** | A free string corresponding to the slogan of the company (255 char length) | [optional] 
**visibleBy** | **[String]** | If visibility is private, list of companyIds for which visibility is allowed | 
**lastAvatarUpdateDate** | **Date** | Date of last company avatar update (Read only) | 
**status** | **String** | Company status | 



## Enum: BusinessSpecificEnum


* `HDS` (value: `"HDS"`)





## Enum: OfferTypeEnum


* `freemium` (value: `"freemium"`)

* `premium` (value: `"premium"`)





## Enum: AdminAllowedUpdateSubscriptionsOpsEnum


* `all` (value: `"all"`)

* `increase_only` (value: `"increase_only"`)





## Enum: StateEnum


* `AK` (value: `"AK"`)

* `AL` (value: `"AL"`)

* `....` (value: `"...."`)

* `NY` (value: `"NY"`)

* `WY` (value: `"WY"`)





## Enum: EconomicActivityClassificationEnum


* `NONE` (value: `"NONE"`)

* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)

* `F` (value: `"F"`)

* `G` (value: `"G"`)

* `H` (value: `"H"`)

* `I` (value: `"I"`)

* `J` (value: `"J"`)

* `K` (value: `"K"`)

* `L` (value: `"L"`)

* `M` (value: `"M"`)

* `N` (value: `"N"`)

* `O` (value: `"O"`)

* `P` (value: `"P"`)

* `Q` (value: `"Q"`)

* `R` (value: `"R"`)

* `S` (value: `"S"`)

* `T` (value: `"T"`)

* `U` (value: `"U"`)





## Enum: VisibilityEnum


* `public` (value: `"public"`)

* `private` (value: `"private"`)

* `organisation` (value: `"organisation"`)





## Enum: BpTypeEnum


* `IR` (value: `"IR"`)

* `VAD` (value: `"VAD"`)

* `DR` (value: `"DR"`)





## Enum: SizeEnum


* `self-employed` (value: `"self-employed"`)

* `1-10 employees` (value: `"1-10 employees"`)

* `11-50 employees` (value: `"11-50 employees"`)

* `51-200 employees` (value: `"51-200 employees"`)

* `201-500 employees` (value: `"201-500 employees"`)

* `501-1000 employees` (value: `"501-1000 employees"`)

* `1001-5000 employees` (value: `"1001-5000 employees"`)

* `5001-10,000 employees` (value: `"5001-10,000 employees"`)

* `10,001+ employees` (value: `"10,001+ employees"`)





## Enum: AvatarShapeEnum


* `square` (value: `"square"`)

* `circle` (value: `"circle"`)





## Enum: StatusEnum


* `initializing` (value: `"initializing"`)

* `active` (value: `"active"`)

* `alerting` (value: `"alerting"`)

* `hold` (value: `"hold"`)

* `terminated` (value: `"terminated"`)




