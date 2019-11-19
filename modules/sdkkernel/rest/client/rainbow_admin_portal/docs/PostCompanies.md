# RainbowAdminPortal.PostCompanies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Company status.    Companies created by a &#x60;bp_admin&#x60; or a &#x60;bp_finance&#x60; are created with the status &#x60;initializing&#x60; (if status is provided, it is ignored).    Otherwise, if status is not provided, default value is &#x60;active&#x60;. | [optional] 
**privateDC** | **String** | Tag allowing to specify if the company and related data will be created on a given private data center    Supported values are the keys being in privateDCs section of zones.json file.    HDS (HealthCare) privateDC is charged. When creating a company with \&quot;privateDC\&quot;: \&quot;HDS\&quot;, a subscription to the \&quot;HDS Company\&quot; offer is automatically done. This require that the created company is linked to a BP company which has &#x60;bpHasRightToSell&#x60; equal to true and a valid &#x60;bpApplicantNumber&#x60;.    Only settable by &#x60;superadmin&#x60;, &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60;. | [optional] 
**name** | **String** | Company name | 
**country** | **String** | Company country (ISO 3166-1 alpha3 format) | [optional] 
**street** | **String** | Company street | [optional] 
**city** | **String** | Company street | [optional] 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state must be defined. Else it is not managed.    USA states code list: &#x60;AA&#x60;:\&quot;Armed Forces America\&quot;, &#x60;AE&#x60;:\&quot;Armed Forces\&quot;, &#x60;AP&#x60;:\&quot;Armed Forces Pacific\&quot;, &#x60;AK&#x60;:\&quot;Alaska\&quot;, &#x60;AL&#x60;:\&quot;Alabama\&quot;, &#x60;AR&#x60;:\&quot;Arkansas\&quot;, &#x60;AZ&#x60;:\&quot;Arizona\&quot;, &#x60;CA&#x60;:\&quot;California\&quot;, &#x60;CO&#x60;:\&quot;Colorado\&quot;, &#x60;CT&#x60;:\&quot;Connecticut\&quot;, &#x60;DC&#x60;:\&quot;Washington DC\&quot;, &#x60;DE&#x60;:\&quot;Delaware\&quot;, &#x60;FL&#x60;:\&quot;Florida\&quot;, &#x60;GA&#x60;:\&quot;Georgia\&quot;, &#x60;GU&#x60;:\&quot;Guam\&quot;, &#x60;HI&#x60;:\&quot;Hawaii\&quot;, &#x60;IA&#x60;:\&quot;Iowa\&quot;, &#x60;ID&#x60;:\&quot;Idaho\&quot;, &#x60;IL&#x60;:\&quot;Illinois\&quot;, &#x60;IN&#x60;:\&quot;Indiana\&quot;, &#x60;KS&#x60;:\&quot;Kansas\&quot;, &#x60;KY&#x60;:\&quot;Kentucky\&quot;, &#x60;LA&#x60;:\&quot;Louisiana\&quot;, &#x60;MA&#x60;:\&quot;Massachusetts\&quot;, &#x60;MD&#x60;:\&quot;Maryland\&quot;, &#x60;ME&#x60;:\&quot;Maine\&quot;, &#x60;MI&#x60;:\&quot;Michigan\&quot;, &#x60;MN&#x60;:\&quot;Minnesota\&quot;, &#x60;MO&#x60;:\&quot;Missouri\&quot;, &#x60;MS&#x60;:\&quot;Mississippi\&quot;, &#x60;MT&#x60;:\&quot;Montana\&quot;, &#x60;NC&#x60;:\&quot;North Carolina\&quot;, &#x60;ND&#x60;:\&quot;North Dakota\&quot;, &#x60;NE&#x60;:\&quot;Nebraska\&quot;, &#x60;NH&#x60;:\&quot;New Hampshire\&quot;, &#x60;NJ&#x60;:\&quot;New Jersey\&quot;, &#x60;NM&#x60;:\&quot;New Mexico\&quot;, &#x60;NV&#x60;:\&quot;Nevada\&quot;, &#x60;NY&#x60;:\&quot;New York\&quot;, &#x60;OH&#x60;:\&quot;Ohio\&quot;, &#x60;OK&#x60;:\&quot;Oklahoma\&quot;, &#x60;OR&#x60;:\&quot;Oregon\&quot;, &#x60;PA&#x60;:\&quot;Pennsylvania\&quot;, &#x60;PR&#x60;:\&quot;Puerto Rico\&quot;, &#x60;RI&#x60;:\&quot;Rhode Island\&quot;, &#x60;SC&#x60;:\&quot;South Carolina\&quot;, &#x60;SD&#x60;:\&quot;South Dakota\&quot;, &#x60;TN&#x60;:\&quot;Tennessee\&quot;, &#x60;TX&#x60;:\&quot;Texas\&quot;, &#x60;UT&#x60;:\&quot;Utah\&quot;, &#x60;VA&#x60;:\&quot;Virginia\&quot;, &#x60;VI&#x60;:\&quot;Virgin Islands\&quot;, &#x60;VT&#x60;:\&quot;Vermont\&quot;, &#x60;WA&#x60;:\&quot;Washington\&quot;, &#x60;WI&#x60;:\&quot;Wisconsin\&quot;, &#x60;WV&#x60;:\&quot;West Virginia\&quot;, &#x60;WY&#x60;:\&quot;Wyoming\&quot;    Canada states code list: &#x60;AB&#x60;: \&quot;Alberta\&quot;, &#x60;BC&#x60;: \&quot;British Columbia\&quot;, &#x60;MB&#x60;: \&quot;Manitoba\&quot;, &#x60;NB&#x60;: \&quot;New Brunswick\&quot;, &#x60;NL&#x60;: \&quot;Newfoundland and Labrador\&quot;, &#x60;NS&#x60;: \&quot;Nova Scotia\&quot;, &#x60;NT&#x60;: \&quot;Northwest Territories\&quot;, &#x60;NU&#x60;: \&quot;Nunavut\&quot;, &#x60;ON&#x60;: \&quot;Ontario\&quot;, &#x60;PE&#x60;: \&quot;Prince Edward Island\&quot;, &#x60;QC&#x60;: \&quot;Quebec\&quot;, &#x60;SK&#x60;: \&quot;Saskatchewan\&quot;, &#x60;YT&#x60;: \&quot;Yukon\&quot;  | [optional] 
**postalCode** | **String** | Company postal code | [optional] 
**currency** | **String** | Company currency, for payment of premium offers (ISO 4217 format)    For now, only USD and EUR are supported    Only settable by &#x60;superadmin&#x60; | [optional] 
**visibility** | **String** | Company visibility (define if users being in this company can be searched by users being in other company).   Under the same organisation, a company can choose the visibility&#x3D;organisation. That means users belonging to this company are visible for users of foreign companies having the same visibility inside the same organisation.   The visibility&#x3D;organisation is same as visibility&#x3D;private outside the organisation. That is to say users can&#39;t be searched. | [optional] [default to &#39;private&#39;]
**visibleBy** | **[String]** | If visibility is private or organisation, list of company &#x60;ids&#x60; for which visibility is allowed | [optional] 
**adminEmail** | **String** | Company contact person email | [optional] 
**supportEmail** | **String** | Company support email | [optional] 
**companyContactId** | **String** | User Id of a Rainbow user which is the contact for this company | [optional] 
**userSelfRegisterEnabled** | **Boolean** | Allow users with email domain matching &#39;userSelfRegisterAllowedDomains&#39; to join the company by self-register process | [optional] 
**userSelfRegisterAllowedDomains** | **[String]** | Allow users with email domain matching one of the values of this array to join the company by self-register process (if userSelfRegisterEnabled is true) | [optional] 
**slogan** | **String** | A free string corresponding to the slogan of the company | [optional] 
**description** | **String** | A free string that describes the company (2000 char length) | [optional] 
**size** | **String** |  An overview of the number of employees | [optional] [default to &#39;self-employed&#39;]
**economicActivityClassification** | **String** | * &#x60;A&#x60;: AGRICULTURE, FORESTRY AND FISHING * &#x60;B&#x60;: MINING AND QUARRYING * &#x60;C&#x60;: MANUFACTURING * &#x60;D&#x60;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY * &#x60;E&#x60;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES * &#x60;F&#x60;: CONSTRUCTION * &#x60;G&#x60;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES * &#x60;H&#x60;: TRANSPORTATION AND STORAGE * &#x60;I&#x60;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES * &#x60;J&#x60;: INFORMATION AND COMMUNICATION * &#x60;K&#x60;: FINANCIAL AND INSURANCE ACTIVITIES * &#x60;L&#x60;: REAL ESTATE ACTIVITIES * &#x60;M&#x60;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES * &#x60;N&#x60;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES * &#x60;O&#x60;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY * &#x60;P&#x60;: EDUCATION * &#x60;Q&#x60;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES * &#x60;R&#x60;: ARTS, ENTERTAINMENT AND RECREATION * &#x60;S&#x60;: OTHER SERVICE ACTIVITIES * &#x60;T&#x60;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE * &#x60;U&#x60;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES  | [optional] 
**website** | **String** | Company website url | [optional] 
**giphyEnabled** | **Boolean** | Whether or not giphy feature is enabled for users belonging to this company (possibility to use animated gifs in conversations) | [optional] 
**catalogId** | **String** | Id of the catalog of Rainbow offers to which the company is linked. The catalog corresponds to the list of offers the company can subscribe.    When a new company is created, if no catalogId is specified the company is automatically linked to the default catalog.    When a &#x60;bp_admin&gt;&#x60; or &#x60;bp_finance&gt;&#x60; creates a company, catalogId of this new company is automatically set to BP company&#39;s catalogId.    When an &#x60;organization_admin&gt;&#x60; creates a company, catalogId of this new company is automatically set to organization_admin&#39;s company&#39;s catalogId.       Only &#x60;superadmin&#x60; can set a different catalogId to a company. | [optional] 
**customData** | [**PutCompaniesCustomData**](PutCompaniesCustomData.md) |  | [optional] 
**bpId** | **String** | Link the company to the corresponding Business partner company.    &#x60;bpId&#x60; must correspond to a valid company having &#x60;isBP&#x60; equal to true.    Only directly settable by &#x60;superadmin&#x60;.    If the company is **created** by a &#x60;bp_admin&#x60; or a &#x60;bp_finance&#x60;, &#x60;bpId&#x60; is automatically set to BP company &#x60;id&#x60;.    For existing companies, &#x60;bp_admin&#x60; must use invitation mechanism to a company admin in order to request a link of this company company to his BP company. | [optional] 
**adminHasRightToUpdateSubscriptions** | **Boolean** | In the case the company is linked to a Business Partner company, indicates if the &#x60;bp_finance&#x60; allows the &#x60;company_admin&#x60; to update the subscriptions of his company (if enable, allowed operations depend of the value of &#x60;adminAllowedUpdateSubscriptionsOps&#x60;).    Can only be set by &#x60;superadmin&#x60; or &#x60;bp_finance&#x60; of the related company. | [optional] 
**adminAllowedUpdateSubscriptionsOps** | **String** | In the case the company is linked to a Business Partner company and &#x60;adminHasRightToUpdateSubscriptions&#x60; is enabled, indicates the update operations for which the &#x60;bp_finance&#x60; allows the &#x60;company_admin&#x60; to perform on the subscriptions of his company.    Can only be set by &#x60;superadmin&#x60; or &#x60;bp_finance&#x60; of the related company.    Possible values:   * &#x60;all&#x60;: company_admin is allowed to perform all update operations on the subscriptions of his company * &#x60;increase_only&#x60;: company_admin is only allowed to increase &#x60;maxNumberUsers&#x60; on the subscriptions of his company (decrease is forbidden)   | [optional] 
**isBP** | **Boolean** | Indicates if the company is a Business partner company    Only settable by &#x60;superadmin&#x60; | [optional] 
**bpType** | **String** | Indicates BP Company type   * &#x60;IR&#x60;: Indirect Reseller, * &#x60;VAD&#x60;: Value Added Distributor, * &#x60;DR&#x60;: Direct Reseller.     Only applicable if &#x60;isBP&#x60; is true.    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpBusinessModel** | **String** | Indicates BP business model    Only applicable if &#x60;isBP&#x60; is true.    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpApplicantNumber** | **String** | Reference of the Business Partner in ALE Finance tools (SAP)    Only applicable if &#x60;isBP&#x60; is true and &#x60;bpType&#x60; is DR or VAD.    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpCRDid** | **String** | Reference of the Business Partner in CDR    Only applicable if &#x60;isBP&#x60; is true and &#x60;bpType&#x60; is DR or VAD.    If &#x60;bpCRDid&#x60; is not defined, BP won&#39;t be able to sell (i.e. &#x60;bpHasRightToSell&#x60; can&#39;t be set to true)    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpHasRightToSell** | **Boolean** | Indicates if the Business has the right to sell    Only applicable if &#x60;isBP&#x60; is true and &#x60;bpType&#x60; is DR or VAD.    Only applicable if &#x60;bpCRDid&#x60; is defined.    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpHasRightToConnect** | **Boolean** | When True [Default], the BP can connect CPE equipment of managed companies. So when False, the \&quot;equipment\&quot; tab should be removed from the admin GUI    Only applicable if &#x60;isBP&#x60; is true.    Only settable by &#x60;superadmin&#x60;. | [optional] 
**bpIsContractAccepted** | **Boolean** | Indicates if the Business has accepted the contract and can sell Rainbow offers    Should be set by &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60;.    Only applicable if &#x60;isBP&#x60; is true. | [optional] [default to false]
**externalReference** | **String** | Free field that BP can use to link their Indirect Resellers / End Customers to their IS/IT tools    Only applicable by &#x60;superadmin&#x60; or by &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; on one of his Indirect Resellers / End Customers companies. | [optional] 
**externalReference2** | **String** | Free field that BP can use to link their Indirect Resellers / End Customers to their IS/IT tools    Only applicable by &#x60;superadmin&#x60; or by &#x60;bp_admin&#x60; or &#x60;bp_finance&#x60; on one of his Indirect Resellers / End Customers companies. | [optional] 
**avatarShape** | **String** | Company&#39;s avatar customization | [optional] 
**isCentrex** | **Boolean** | Indicates if the company is one tenant of a multi-tenant call server (OXE - OTEC-S) (default: false) | [optional] 
**companyCallNumber** | **String** | If isCentrex &#x3D; true, this is the company access number [multi-company call + company Area, ex: 8 210, 8 211] | [optional] 



## Enum: StatusEnum


* `initializing` (value: `"initializing"`)

* `active` (value: `"active"`)

* `alerting` (value: `"alerting"`)

* `hold` (value: `"hold"`)

* `terminated` (value: `"terminated"`)





## Enum: StateEnum


* `null` (value: `"null"`)

* `AA` (value: `"AA"`)

* `AE` (value: `"AE"`)

* `AP` (value: `"AP"`)

* `AK` (value: `"AK"`)

* `AL` (value: `"AL"`)

* `AR` (value: `"AR"`)

* `AZ` (value: `"AZ"`)

* `CA` (value: `"CA"`)

* `CO` (value: `"CO"`)

* `CT` (value: `"CT"`)

* `DC` (value: `"DC"`)

* `DE` (value: `"DE"`)

* `FL` (value: `"FL"`)

* `GA` (value: `"GA"`)

* `GU` (value: `"GU"`)

* `HI` (value: `"HI"`)

* `IA` (value: `"IA"`)

* `ID` (value: `"ID"`)

* `IL` (value: `"IL"`)

* `IN` (value: `"IN"`)

* `KS` (value: `"KS"`)

* `KY` (value: `"KY"`)

* `LA` (value: `"LA"`)

* `MA` (value: `"MA"`)

* `MD` (value: `"MD"`)

* `ME` (value: `"ME"`)

* `MI` (value: `"MI"`)

* `MN` (value: `"MN"`)

* `MO` (value: `"MO"`)

* `MS` (value: `"MS"`)

* `MT` (value: `"MT"`)

* `NC` (value: `"NC"`)

* `ND` (value: `"ND"`)

* `NE` (value: `"NE"`)

* `NH` (value: `"NH"`)

* `NJ` (value: `"NJ"`)

* `NM` (value: `"NM"`)

* `NV` (value: `"NV"`)

* `NY` (value: `"NY"`)

* `OH` (value: `"OH"`)

* `OK` (value: `"OK"`)

* `OR` (value: `"OR"`)

* `PA` (value: `"PA"`)

* `PR` (value: `"PR"`)

* `RI` (value: `"RI"`)

* `SC` (value: `"SC"`)

* `SD` (value: `"SD"`)

* `TN` (value: `"TN"`)

* `TX` (value: `"TX"`)

* `UT` (value: `"UT"`)

* `VA` (value: `"VA"`)

* `VI` (value: `"VI"`)

* `VT` (value: `"VT"`)

* `WA` (value: `"WA"`)

* `WI` (value: `"WI"`)

* `WV` (value: `"WV"`)

* `WY` (value: `"WY"`)

* `AB` (value: `"AB"`)

* `BC` (value: `"BC"`)

* `MB` (value: `"MB"`)

* `NB` (value: `"NB"`)

* `NL` (value: `"NL"`)

* `NS` (value: `"NS"`)

* `NT` (value: `"NT"`)

* `NU` (value: `"NU"`)

* `ON` (value: `"ON"`)

* `PE` (value: `"PE"`)

* `QC` (value: `"QC"`)

* `SK` (value: `"SK"`)

* `YT` (value: `"YT"`)





## Enum: VisibilityEnum


* `public` (value: `"public"`)

* `private` (value: `"private"`)

* `organisation` (value: `"organisation"`)





## Enum: UserSelfRegisterEnabledEnum


* `true` (value: `"true"`)





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





## Enum: EconomicActivityClassificationEnum


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





## Enum: AdminAllowedUpdateSubscriptionsOpsEnum


* `all` (value: `"all"`)

* `increase_only` (value: `"increase_only"`)





## Enum: BpTypeEnum


* `IR` (value: `"IR"`)

* `VAD` (value: `"VAD"`)

* `DR` (value: `"DR"`)





## Enum: BpBusinessModelEnum


* `referral` (value: `"referral"`)

* `resell` (value: `"resell"`)





## Enum: AvatarShapeEnum


* `square` (value: `"square"`)

* `circle` (value: `"circle"`)




