# RainbowApplicationPortal.ApplicationsApplicationsPutAppsSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **String** | Application unique identifier. | 
**appSecret** | **String** | Application secret token. | 
**origin** | **String** | Application origin. | 
**name** | **String** | Application title. | 
**latinName** | **String** | Application latin name. | 
**ownerId** | **String** | Unique identifier of the application owner. | 
**dateOfCreation** | **Date** | Date of creation of the application. | 
**dateOfDeploymentRequest** | **Date** | Date of deployment request of the application. | 
**dateOfDeployment** | **Date** | Date of deployment of the application. | 
**state** | **String** | State of the application. | 
**type** | **String** | Application type. | 
**activity** | **String** | * &#x60;A&#x60;: AGRICULTURE, FORESTRY AND FISHING * &#x60;B&#x60;: MINING AND QUARRYING * &#x60;C&#x60;: MANUFACTURING * &#x60;D&#x60;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY * &#x60;E&#x60;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES * &#x60;F&#x60;: CONSTRUCTION * &#x60;G&#x60;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES * &#x60;H&#x60;: TRANSPORTATION AND STORAGE * &#x60;I&#x60;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES * &#x60;J&#x60;: INFORMATION AND COMMUNICATION * &#x60;K&#x60;: FINANCIAL AND INSURANCE ACTIVITIES * &#x60;L&#x60;: REAL ESTATE ACTIVITIES * &#x60;M&#x60;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES * &#x60;N&#x60;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES * &#x60;O&#x60;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY * &#x60;P&#x60;: EDUCATION * &#x60;Q&#x60;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES * &#x60;R&#x60;: ARTS, ENTERTAINMENT AND RECREATION * &#x60;S&#x60;: OTHER SERVICE ACTIVITIES * &#x60;T&#x60;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE * &#x60;U&#x60;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES  | 
**env** | **String** | Environnement where the application is deploy. | 



## Enum: StateEnum


* `new` (value: `"new"`)

* `active` (value: `"active"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)

* `stopped` (value: `"stopped"`)





## Enum: TypeEnum


* `web` (value: `"web"`)

* `mobile` (value: `"mobile"`)

* `desktop` (value: `"desktop"`)

* `server` (value: `"server"`)

* `bot` (value: `"bot"`)

* `iot` (value: `"iot"`)

* `admin` (value: `"admin"`)





## Enum: ActivityEnum


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





## Enum: EnvEnum


* `not_deployed` (value: `"not_deployed"`)

* `in_deployment` (value: `"in_deployment"`)

* `deployed` (value: `"deployed"`)




