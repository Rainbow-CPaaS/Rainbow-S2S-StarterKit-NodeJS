# RainbowAdminPortal.PutUsers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginEmail** | **String** | User email address (used for login).    Must be unique (409 error is returned if a user already exists with the same email address). | [optional] 
**password** | **String** | User password.    Rules: more than 8 characters, at least 1 capital letter, 1 number, 1 special character. | [optional] 
**phoneNumbers** | [**[PutUsersPhoneNumbers]**](PutUsersPhoneNumbers.md) | Array of user PhoneNumbers objects       _Notes:_* Provided PhoneNumbers data overwrite previous values:    * PhoneNumbers which are not known on server side are added,   * PhoneNumbers which are changed are updated,   * PhoneNumbers which are not provided but existed on server side are deleted.   * This does not applies to PhoneNumbers linked to a system(pbx), which can only be updated (addition and deletion of system PhoneNumbers are ignored). * When number is present, the server tries to compute the associated E.164 number (&#x60;numberE164&#x60; field) using provided PhoneNumber country if available, user country otherwise. If &#x60;numberE164&#x60; can&#39;t be computed, an error 400 is returned (ex: wrong phone number, phone number not matching country code, ...) * PhoneNumber linked to a system (pbx) can also be updated. In that case, &#x60;shortNumber&#x60; and &#x60;systemId&#x60; of the existing system PhoneNumber must be provided with the fields to update (see example bellow). * System phoneNumbers can&#39;t be created nor deleted using this API, only PCG can create/delete system PhoneNumbers.   | [optional] 
**firstName** | **String** | User first name | [optional] 
**lastName** | **String** | User last name | [optional] 
**nickName** | **String** | User nickName | [optional] 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | [optional] 
**jobTitle** | **String** | User job title | [optional] 
**emails** | [**[PutUsersEmails]**](PutUsersEmails.md) | Array of user emails addresses objects | [optional] 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | [optional] 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state can be defined. Else it is not managed.    USA states code list: &#x60;AA&#x60;:\&quot;Armed Forces America\&quot;, &#x60;AE&#x60;:\&quot;Armed Forces\&quot;, &#x60;AP&#x60;:\&quot;Armed Forces Pacific\&quot;, &#x60;AK&#x60;:\&quot;Alaska\&quot;, &#x60;AL&#x60;:\&quot;Alabama\&quot;, &#x60;AR&#x60;:\&quot;Arkansas\&quot;, &#x60;AZ&#x60;:\&quot;Arizona\&quot;, &#x60;CA&#x60;:\&quot;California\&quot;, &#x60;CO&#x60;:\&quot;Colorado\&quot;, &#x60;CT&#x60;:\&quot;Connecticut\&quot;, &#x60;DC&#x60;:\&quot;Washington DC\&quot;, &#x60;DE&#x60;:\&quot;Delaware\&quot;, &#x60;FL&#x60;:\&quot;Florida\&quot;, &#x60;GA&#x60;:\&quot;Georgia\&quot;, &#x60;GU&#x60;:\&quot;Guam\&quot;, &#x60;HI&#x60;:\&quot;Hawaii\&quot;, &#x60;IA&#x60;:\&quot;Iowa\&quot;, &#x60;ID&#x60;:\&quot;Idaho\&quot;, &#x60;IL&#x60;:\&quot;Illinois\&quot;, &#x60;IN&#x60;:\&quot;Indiana\&quot;, &#x60;KS&#x60;:\&quot;Kansas\&quot;, &#x60;KY&#x60;:\&quot;Kentucky\&quot;, &#x60;LA&#x60;:\&quot;Louisiana\&quot;, &#x60;MA&#x60;:\&quot;Massachusetts\&quot;, &#x60;MD&#x60;:\&quot;Maryland\&quot;, &#x60;ME&#x60;:\&quot;Maine\&quot;, &#x60;MI&#x60;:\&quot;Michigan\&quot;, &#x60;MN&#x60;:\&quot;Minnesota\&quot;, &#x60;MO&#x60;:\&quot;Missouri\&quot;, &#x60;MS&#x60;:\&quot;Mississippi\&quot;, &#x60;MT&#x60;:\&quot;Montana\&quot;, &#x60;NC&#x60;:\&quot;North Carolina\&quot;, &#x60;ND&#x60;:\&quot;North Dakota\&quot;, &#x60;NE&#x60;:\&quot;Nebraska\&quot;, &#x60;NH&#x60;:\&quot;New Hampshire\&quot;, &#x60;NJ&#x60;:\&quot;New Jersey\&quot;, &#x60;NM&#x60;:\&quot;New Mexico\&quot;, &#x60;NV&#x60;:\&quot;Nevada\&quot;, &#x60;NY&#x60;:\&quot;New York\&quot;, &#x60;OH&#x60;:\&quot;Ohio\&quot;, &#x60;OK&#x60;:\&quot;Oklahoma\&quot;, &#x60;OR&#x60;:\&quot;Oregon\&quot;, &#x60;PA&#x60;:\&quot;Pennsylvania\&quot;, &#x60;PR&#x60;:\&quot;Puerto Rico\&quot;, &#x60;RI&#x60;:\&quot;Rhode Island\&quot;, &#x60;SC&#x60;:\&quot;South Carolina\&quot;, &#x60;SD&#x60;:\&quot;South Dakota\&quot;, &#x60;TN&#x60;:\&quot;Tennessee\&quot;, &#x60;TX&#x60;:\&quot;Texas\&quot;, &#x60;UT&#x60;:\&quot;Utah\&quot;, &#x60;VA&#x60;:\&quot;Virginia\&quot;, &#x60;VI&#x60;:\&quot;Virgin Islands\&quot;, &#x60;VT&#x60;:\&quot;Vermont\&quot;, &#x60;WA&#x60;:\&quot;Washington\&quot;, &#x60;WI&#x60;:\&quot;Wisconsin\&quot;, &#x60;WV&#x60;:\&quot;West Virginia\&quot;, &#x60;WY&#x60;:\&quot;Wyoming\&quot;    Canada states code list: &#x60;AB&#x60;: \&quot;Alberta\&quot;, &#x60;BC&#x60;: \&quot;British Columbia\&quot;, &#x60;MB&#x60;: \&quot;Manitoba\&quot;, &#x60;NB&#x60;: \&quot;New Brunswick\&quot;, &#x60;NL&#x60;: \&quot;Newfoundland and Labrador\&quot;, &#x60;NS&#x60;: \&quot;Nova Scotia\&quot;, &#x60;NT&#x60;: \&quot;Northwest Territories\&quot;, &#x60;NU&#x60;: \&quot;Nunavut\&quot;, &#x60;ON&#x60;: \&quot;Ontario\&quot;, &#x60;PE&#x60;: \&quot;Prince Edward Island\&quot;, &#x60;QC&#x60;: \&quot;Quebec\&quot;, &#x60;SK&#x60;: \&quot;Saskatchewan\&quot;, &#x60;YT&#x60;: \&quot;Yukon\&quot;  | [optional] 
**language** | **String** | User language       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**timezone** | **String** | User timezone name    Allowed values: one of the timezone names defined in [IANA tz database][0]   Timezone name are composed as follow: &#x60;Area/Location&#x60; (ex: Europe/Paris, America/New_York,...)  [0]: https://www.iana.org/time-zones | [optional] 
**accountType** | **String** | User subscription type | [optional] [default to &#39;free&#39;]
**roles** | **[String]** | List of user roles       The general rule is that a user must have the roles that the wants to assign to someone else.    Examples:   * an &#x60;admin&#x60; can add or remove the role &#x60;admin&#x60; to another user of the company(ies) he manages, * an &#x60;bp_admin&#x60; can add or remove the role &#x60;bp_admin&#x60; to another user of the company(ies) he manages, * an &#x60;app_superadmin&#x60; can add or remove the role &#x60;app_superadmin&#x60; to another user...  Here are some explanations regarding the roles available in Rainbow:   * &#x60;admin&#x60;, &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; roles are related to company management (and resources linked to companies, such as users, systems, subscriptions, ...). * &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; roles can only be set to users of a BP company (company with isBP&#x3D;true). * &#x60;app_admin&#x60;, &#x60;app_support&#x60; and &#x60;app_superadmin&#x60; roles are related to application management. * &#x60;all_company_channels_admin&#x60;, &#x60;public_channels_admin&#x60; and &#x60;closed_channels_admin&#x60; roles are related to channels management. * Only &#x60;superadmin&#x60; can set &#x60;superadmin&#x60; and &#x60;support&#x60; roles to a user. * A user with admin rights (admin, bp_admin, superadmin) can&#39;t change his own roles, except for roles related to channels (&#x60;all_company_channels_admin&#x60;, &#x60;public_channels_admin&#x60; and &#x60;closed_channels_admin&#x60;).   | [optional] 
**adminType** | **String** | Mandatory if roles array contains &#x60;admin&#x60; role: specifies at which entity level the administrator has admin rights in the hierarchy ORGANIZATIONS/COMPANIES/SITES/SYSTEMS | [optional] 
**companyId** | **String** | User company unique identifier (like 569ce8c8f9336c471b98eda1)    companyName field is automatically filled on server side based on companyId. | [optional] 
**isActive** | **Boolean** | Is user active | [optional] [default to true]
**isInitialized** | **Boolean** | Is user initialized | [optional] [default to false]
**visibility** | **String** | User visibility (define if the user can be searched by users being in other company). * private: can be searched by users of his company only * public: can be searched by all users * none: Default value reserved for guest. Means &#39;can&#39;t be search inside or outside his company&#39;   | [optional] 
**timeToLive** | **Number** | Duration in second to wait before automatically starting a user deletion from the creation date.    Once the timeToLive has been reached, the user won&#39;t be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment.    Value -1 means timeToLive is disable (i.e. user account will not expire).    If created user has role &#x60;guest&#x60; and no timeToLive is provided, a default value of 172800 seconds is set (48 hours).    If created user does not have role &#x60;guest&#x60; and no timeToLive is provided, a default value of -1 is set (no expiration). | [optional] 
**authenticationType** | **String** | User authentication type (if not set company default authentication will be used) | [optional] 



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





## Enum: AccountTypeEnum


* `free` (value: `"free"`)

* `basic` (value: `"basic"`)

* `advanced` (value: `"advanced"`)





## Enum: AdminTypeEnum


* `organization_admin` (value: `"organization_admin"`)

* `company_admin` (value: `"company_admin"`)

* `site_admin` (value: `"site_admin"`)





## Enum: VisibilityEnum


* `private` (value: `"private"`)

* `public` (value: `"public"`)

* `none` (value: `"none"`)





## Enum: AuthenticationTypeEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `RAINBOW` (value: `"RAINBOW"`)

* `SAML` (value: `"SAML"`)




