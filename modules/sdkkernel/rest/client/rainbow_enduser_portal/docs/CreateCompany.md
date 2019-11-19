# RainbowEnduserPortal.CreateCompany

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Company name | 
**visibility** | **String** | Company visibility (define if users being in this company can be searched by users being in other company).    Under the same organisation, a company can choose the visibility&#x3D;organisation. That means users belonging to this company are visible for users of foreign companies having the same visibility inside the same organisation.    The visibility&#x3D;organisation is same as visibility&#x3D;private outside the organisation. That is to say users can&#39;t be searched. | [optional] [default to &#39;public&#39;]
**country** | **String** | Company country (ISO 3166-1 alpha3 format) | [optional] 
**state** | **String** | When country is &#39;USA&#39; or &#39;CAN&#39;, a state must be defined. Else it is not managed.    USA states code list: &#x60;AA&#x60;:\&quot;Armed Forces America\&quot;, &#x60;AE&#x60;:\&quot;Armed Forces\&quot;, &#x60;AP&#x60;:\&quot;Armed Forces Pacific\&quot;, &#x60;AK&#x60;:\&quot;Alaska\&quot;, &#x60;AL&#x60;:\&quot;Alabama\&quot;, &#x60;AR&#x60;:\&quot;Arkansas\&quot;, &#x60;AZ&#x60;:\&quot;Arizona\&quot;, &#x60;CA&#x60;:\&quot;California\&quot;, &#x60;CO&#x60;:\&quot;Colorado\&quot;, &#x60;CT&#x60;:\&quot;Connecticut\&quot;, &#x60;DC&#x60;:\&quot;Washington DC\&quot;, &#x60;DE&#x60;:\&quot;Delaware\&quot;, &#x60;FL&#x60;:\&quot;Florida\&quot;, &#x60;GA&#x60;:\&quot;Georgia\&quot;, &#x60;GU&#x60;:\&quot;Guam\&quot;, &#x60;HI&#x60;:\&quot;Hawaii\&quot;, &#x60;IA&#x60;:\&quot;Iowa\&quot;, &#x60;ID&#x60;:\&quot;Idaho\&quot;, &#x60;IL&#x60;:\&quot;Illinois\&quot;, &#x60;IN&#x60;:\&quot;Indiana\&quot;, &#x60;KS&#x60;:\&quot;Kansas\&quot;, &#x60;KY&#x60;:\&quot;Kentucky\&quot;, &#x60;LA&#x60;:\&quot;Louisiana\&quot;, &#x60;MA&#x60;:\&quot;Massachusetts\&quot;, &#x60;MD&#x60;:\&quot;Maryland\&quot;, &#x60;ME&#x60;:\&quot;Maine\&quot;, &#x60;MI&#x60;:\&quot;Michigan\&quot;, &#x60;MN&#x60;:\&quot;Minnesota\&quot;, &#x60;MO&#x60;:\&quot;Missouri\&quot;, &#x60;MS&#x60;:\&quot;Mississippi\&quot;, &#x60;MT&#x60;:\&quot;Montana\&quot;, &#x60;NC&#x60;:\&quot;North Carolina\&quot;, &#x60;ND&#x60;:\&quot;North Dakota\&quot;, &#x60;NE&#x60;:\&quot;Nebraska\&quot;, &#x60;NH&#x60;:\&quot;New Hampshire\&quot;, &#x60;NJ&#x60;:\&quot;New Jersey\&quot;, &#x60;NM&#x60;:\&quot;New Mexico\&quot;, &#x60;NV&#x60;:\&quot;Nevada\&quot;, &#x60;NY&#x60;:\&quot;New York\&quot;, &#x60;OH&#x60;:\&quot;Ohio\&quot;, &#x60;OK&#x60;:\&quot;Oklahoma\&quot;, &#x60;OR&#x60;:\&quot;Oregon\&quot;, &#x60;PA&#x60;:\&quot;Pennsylvania\&quot;, &#x60;PR&#x60;:\&quot;Puerto Rico\&quot;, &#x60;RI&#x60;:\&quot;Rhode Island\&quot;, &#x60;SC&#x60;:\&quot;South Carolina\&quot;, &#x60;SD&#x60;:\&quot;South Dakota\&quot;, &#x60;TN&#x60;:\&quot;Tennessee\&quot;, &#x60;TX&#x60;:\&quot;Texas\&quot;, &#x60;UT&#x60;:\&quot;Utah\&quot;, &#x60;VA&#x60;:\&quot;Virginia\&quot;, &#x60;VI&#x60;:\&quot;Virgin Islands\&quot;, &#x60;VT&#x60;:\&quot;Vermont\&quot;, &#x60;WA&#x60;:\&quot;Washington\&quot;, &#x60;WI&#x60;:\&quot;Wisconsin\&quot;, &#x60;WV&#x60;:\&quot;West Virginia\&quot;, &#x60;WY&#x60;:\&quot;Wyoming\&quot;    Canada states code list: &#x60;AB&#x60;: \&quot;Alberta\&quot;, &#x60;BC&#x60;: \&quot;British Columbia\&quot;, &#x60;MB&#x60;: \&quot;Manitoba\&quot;, &#x60;NB&#x60;: \&quot;New Brunswick\&quot;, &#x60;NL&#x60;: \&quot;Newfoundland and Labrador\&quot;, &#x60;NS&#x60;: \&quot;Nova Scotia\&quot;, &#x60;NT&#x60;: \&quot;Northwest Territories\&quot;, &#x60;NU&#x60;: \&quot;Nunavut\&quot;, &#x60;ON&#x60;: \&quot;Ontario\&quot;, &#x60;PE&#x60;: \&quot;Prince Edward Island\&quot;, &#x60;QC&#x60;: \&quot;Quebec\&quot;, &#x60;SK&#x60;: \&quot;Saskatchewan\&quot;, &#x60;YT&#x60;: \&quot;Yukon\&quot;  | [optional] 
**slogan** | **String** | A free string corresponding to the slogan of the company | [optional] 
**description** | **String** | A free string that describes the company | [optional] 
**size** | **String** |  An overview of the number of employees | [optional] 
**economicActivityClassification** | **String** | * &#x60;A&#x60;: AGRICULTURE, FORESTRY AND FISHING * &#x60;B&#x60;: MINING AND QUARRYING * &#x60;C&#x60;: MANUFACTURING * &#x60;D&#x60;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY * &#x60;E&#x60;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES * &#x60;F&#x60;: CONSTRUCTION * &#x60;G&#x60;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES * &#x60;H&#x60;: TRANSPORTATION AND STORAGE * &#x60;I&#x60;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES * &#x60;J&#x60;: INFORMATION AND COMMUNICATION * &#x60;K&#x60;: FINANCIAL AND INSURANCE ACTIVITIES * &#x60;L&#x60;: REAL ESTATE ACTIVITIES * &#x60;M&#x60;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES * &#x60;N&#x60;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES * &#x60;O&#x60;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY * &#x60;P&#x60;: EDUCATION * &#x60;Q&#x60;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES * &#x60;R&#x60;: ARTS, ENTERTAINMENT AND RECREATION * &#x60;S&#x60;: OTHER SERVICE ACTIVITIES * &#x60;T&#x60;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE * &#x60;U&#x60;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES  | [optional] 
**website** | **String** | Company website URL | [optional] 
**avatarShape** | **String** | Company&#39;s avatar customization | [optional] 
**giphyEnabled** | **Boolean** | Whether or not giphy feature is enabled for users belonging to this company (possibility to use animated gifs in conversations) | [optional] 



## Enum: VisibilityEnum


* `public` (value: `"public"`)

* `private` (value: `"private"`)

* `organisation` (value: `"organisation"`)





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





## Enum: AvatarShapeEnum


* `square` (value: `"square"`)

* `circle` (value: `"circle"`)




