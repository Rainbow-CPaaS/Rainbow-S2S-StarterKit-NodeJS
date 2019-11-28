# RainbowAuthenticationPortal.GetBasicLoginSuccessLoggedInApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | **String** | Application activity &lt;ul&gt;  &lt;li&gt; &lt;code&gt;A&lt;/code&gt;: AGRICULTURE, FORESTRY AND FISHING  &lt;li&gt; &lt;code&gt;B&lt;/code&gt;: MINING AND QUARRYING  &lt;li&gt; &lt;code&gt;C&lt;/code&gt;: MANUFACTURING  &lt;li&gt; &lt;code&gt;D&lt;/code&gt;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY  &lt;li&gt; &lt;code&gt;E&lt;/code&gt;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES  &lt;li&gt; &lt;code&gt;F&lt;/code&gt;: CONSTRUCTION  &lt;li&gt; &lt;code&gt;G&lt;/code&gt;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES  &lt;li&gt; &lt;code&gt;H&lt;/code&gt;: TRANSPORTATION AND STORAGE  &lt;li&gt; &lt;code&gt;I&lt;/code&gt;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;J&lt;/code&gt;: INFORMATION AND COMMUNICATION  &lt;li&gt; &lt;code&gt;K&lt;/code&gt;: FINANCIAL AND INSURANCE ACTIVITIES  &lt;li&gt; &lt;code&gt;L&lt;/code&gt;: REAL ESTATE ACTIVITIES  &lt;li&gt; &lt;code&gt;M&lt;/code&gt;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES  &lt;li&gt; &lt;code&gt;N&lt;/code&gt;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;O&lt;/code&gt;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY  &lt;li&gt; &lt;code&gt;P&lt;/code&gt;: EDUCATION  &lt;li&gt; &lt;code&gt;Q&lt;/code&gt;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES  &lt;li&gt; &lt;code&gt;R&lt;/code&gt;: ARTS, ENTERTAINMENT AND RECREATION  &lt;li&gt; &lt;code&gt;S&lt;/code&gt;: OTHER SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;T&lt;/code&gt;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE  &lt;li&gt; &lt;code&gt;U&lt;/code&gt;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES &lt;/ul&gt; | 
**dateOfCreation** | **Date** | Application creation date | 
**dateOfDeployment** | **Date** | Date of deployment of the application. | 
**dateOfDeploymentRequest** | **Date** | Date of deployment request of the application. | 
**env** | **String** | Environment where the application is deploy | 
**id** | **String** | Application unique identifier | 
**name** | **String** | Application name | 
**ownerId** | **String** | Unique identifier of the application owner | 
**platform** | **String** | Platform where the application is running | 
**state** | **String** | State of the application | 
**type** | **String** | Application type | 



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





## Enum: PlatformEnum


* `official` (value: `"official"`)

* `sandbox` (value: `"sandbox"`)





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




