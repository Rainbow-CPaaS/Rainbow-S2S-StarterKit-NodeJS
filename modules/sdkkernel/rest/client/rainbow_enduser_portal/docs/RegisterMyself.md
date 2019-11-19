# RainbowEnduserPortal.RegisterMyself

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginEmail** | **String** | User email address (used for login).    Must be unique (409 error is returned if a user already exists with the same email address). | 
**password** | **String** | User password.    Rules: more than 8 characters, at least 1 capital letter, 1 number, 1 special character. | 
**temporaryToken** | **String** | User temporary token (obtained from [POST /api/rainbow/enduser/v1.0/notifications/emails/self-register][0] API) (do not use if invitationId or joinCompanyInvitationId is specified).  [0]: #api-enduser_notifications_emails-EmailSelfRegister | [optional] 
**invitationId** | **String** | User invitation unique identifier (like 569ce8c8f9336c471b98eda4) (obtained from [POST /api/rainbow/enduser/v1.0/notifications/emails/invite-by-end-user][0] API) (do not use if temporaryToken or joinCompanyInvitationId is specified).  [0]: #api-enduser_notifications_emails-enduser_InviteByEndUser | [optional] 
**joinCompanyInvitationId** | **String** | Join company invitation unique identifier (like 5819ed7c9547b313509237d6) (obtained from [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0] API) (do not use if temporaryToken or invitationId is specified).  [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite | [optional] 
**openInviteId** | **String** | A Rainbow user is sharing with co-workers an unique URL to join a meeting. This URL is used by somebody not yet a Rainbow user (doesn&#39;t have a Rainbow account). Some explanations about this use case:   * Each user has a personal UUID. In the api documentation, this UUID is called **openInviteId**. It can be generated on demand. * The public URL is based on this openInviteId (ex: https://web.openrainbow.com/#/invite?invitationId&#x3D;0fc06e0ce4a849fcbe214ae5e1107417&amp;scenario&#x3D;public-url) * Refer to /api/rainbow/enduser/v1.0/users/:userId/open-invites/xxxx API(s) to manage the openInviteId   | [optional] 
**isInitialized** | **Boolean** | Is user initialized | [optional] [default to false]
**firstName** | **String** | User first name | [optional] 
**lastName** | **String** | User last name | [optional] 
**nickName** | **String** | User nickName | [optional] 
**title** | **String** | User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...) | [optional] 
**jobTitle** | **String** | User job title | [optional] 
**emails** | [**UpdateUserEmails**](UpdateUserEmails.md) |  | [optional] 
**phoneNumbers** | [**RegisterMyselfPhoneNumbers**](RegisterMyselfPhoneNumbers.md) |  | [optional] 
**country** | **String** | User country (ISO 3166-1 alpha3 format) | [optional] 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state can be defined. Else it is not managed.    USA states code list: &#x60;AA&#x60;:\&quot;Armed Forces America\&quot;, &#x60;AE&#x60;:\&quot;Armed Forces\&quot;, &#x60;AP&#x60;:\&quot;Armed Forces Pacific\&quot;, &#x60;AK&#x60;:\&quot;Alaska\&quot;, &#x60;AL&#x60;:\&quot;Alabama\&quot;, &#x60;AR&#x60;:\&quot;Arkansas\&quot;, &#x60;AZ&#x60;:\&quot;Arizona\&quot;, &#x60;CA&#x60;:\&quot;California\&quot;, &#x60;CO&#x60;:\&quot;Colorado\&quot;, &#x60;CT&#x60;:\&quot;Connecticut\&quot;, &#x60;DC&#x60;:\&quot;Washington DC\&quot;, &#x60;DE&#x60;:\&quot;Delaware\&quot;, &#x60;FL&#x60;:\&quot;Florida\&quot;, &#x60;GA&#x60;:\&quot;Georgia\&quot;, &#x60;GU&#x60;:\&quot;Guam\&quot;, &#x60;HI&#x60;:\&quot;Hawaii\&quot;, &#x60;IA&#x60;:\&quot;Iowa\&quot;, &#x60;ID&#x60;:\&quot;Idaho\&quot;, &#x60;IL&#x60;:\&quot;Illinois\&quot;, &#x60;IN&#x60;:\&quot;Indiana\&quot;, &#x60;KS&#x60;:\&quot;Kansas\&quot;, &#x60;KY&#x60;:\&quot;Kentucky\&quot;, &#x60;LA&#x60;:\&quot;Louisiana\&quot;, &#x60;MA&#x60;:\&quot;Massachusetts\&quot;, &#x60;MD&#x60;:\&quot;Maryland\&quot;, &#x60;ME&#x60;:\&quot;Maine\&quot;, &#x60;MI&#x60;:\&quot;Michigan\&quot;, &#x60;MN&#x60;:\&quot;Minnesota\&quot;, &#x60;MO&#x60;:\&quot;Missouri\&quot;, &#x60;MS&#x60;:\&quot;Mississippi\&quot;, &#x60;MT&#x60;:\&quot;Montana\&quot;, &#x60;NC&#x60;:\&quot;North Carolina\&quot;, &#x60;ND&#x60;:\&quot;North Dakota\&quot;, &#x60;NE&#x60;:\&quot;Nebraska\&quot;, &#x60;NH&#x60;:\&quot;New Hampshire\&quot;, &#x60;NJ&#x60;:\&quot;New Jersey\&quot;, &#x60;NM&#x60;:\&quot;New Mexico\&quot;, &#x60;NV&#x60;:\&quot;Nevada\&quot;, &#x60;NY&#x60;:\&quot;New York\&quot;, &#x60;OH&#x60;:\&quot;Ohio\&quot;, &#x60;OK&#x60;:\&quot;Oklahoma\&quot;, &#x60;OR&#x60;:\&quot;Oregon\&quot;, &#x60;PA&#x60;:\&quot;Pennsylvania\&quot;, &#x60;PR&#x60;:\&quot;Puerto Rico\&quot;, &#x60;RI&#x60;:\&quot;Rhode Island\&quot;, &#x60;SC&#x60;:\&quot;South Carolina\&quot;, &#x60;SD&#x60;:\&quot;South Dakota\&quot;, &#x60;TN&#x60;:\&quot;Tennessee\&quot;, &#x60;TX&#x60;:\&quot;Texas\&quot;, &#x60;UT&#x60;:\&quot;Utah\&quot;, &#x60;VA&#x60;:\&quot;Virginia\&quot;, &#x60;VI&#x60;:\&quot;Virgin Islands\&quot;, &#x60;VT&#x60;:\&quot;Vermont\&quot;, &#x60;WA&#x60;:\&quot;Washington\&quot;, &#x60;WI&#x60;:\&quot;Wisconsin\&quot;, &#x60;WV&#x60;:\&quot;West Virginia\&quot;, &#x60;WY&#x60;:\&quot;Wyoming\&quot;    Canada states code list: &#x60;AB&#x60;: \&quot;Alberta\&quot;, &#x60;BC&#x60;: \&quot;British Columbia\&quot;, &#x60;MB&#x60;: \&quot;Manitoba\&quot;, &#x60;NB&#x60;: \&quot;New Brunswick\&quot;, &#x60;NL&#x60;: \&quot;Newfoundland and Labrador\&quot;, &#x60;NS&#x60;: \&quot;Nova Scotia\&quot;, &#x60;NT&#x60;: \&quot;Northwest Territories\&quot;, &#x60;NU&#x60;: \&quot;Nunavut\&quot;, &#x60;ON&#x60;: \&quot;Ontario\&quot;, &#x60;PE&#x60;: \&quot;Prince Edward Island\&quot;, &#x60;QC&#x60;: \&quot;Quebec\&quot;, &#x60;SK&#x60;: \&quot;Saskatchewan\&quot;, &#x60;YT&#x60;: \&quot;Yukon\&quot;  | [optional] 
**language** | **String** | User language       Language format is composed of locale using format &#x60;ISO 639-1&#x60;, with optionally the regional variation using &#x60;ISO 3166‑1 alpha-2&#x60; (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes | [optional] 
**timezone** | **String** | User timezone name       Allowed values: one of the timezone names defined in [IANA tz database][0]   Timezone name are composed as follow: &#x60;Area/Location&#x60; (ex: Europe/Paris, America/New_York,...)  [0]: https://www.iana.org/time-zones | [optional] 
**visibility** | **String** | User visibility (define if users can be searched of not, overwrite visibility setting at company level) | [optional] 



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

* `none` (value: `"none"`)




