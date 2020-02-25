
# GetBasicLoginSuccessLoggedInApplication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | [**ActivityEnum**](#ActivityEnum) | Application activity &lt;ul&gt;  &lt;li&gt; &lt;code&gt;A&lt;/code&gt;: AGRICULTURE, FORESTRY AND FISHING  &lt;li&gt; &lt;code&gt;B&lt;/code&gt;: MINING AND QUARRYING  &lt;li&gt; &lt;code&gt;C&lt;/code&gt;: MANUFACTURING  &lt;li&gt; &lt;code&gt;D&lt;/code&gt;: ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY  &lt;li&gt; &lt;code&gt;E&lt;/code&gt;: WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES  &lt;li&gt; &lt;code&gt;F&lt;/code&gt;: CONSTRUCTION  &lt;li&gt; &lt;code&gt;G&lt;/code&gt;: WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES  &lt;li&gt; &lt;code&gt;H&lt;/code&gt;: TRANSPORTATION AND STORAGE  &lt;li&gt; &lt;code&gt;I&lt;/code&gt;: ACCOMMODATION AND FOOD SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;J&lt;/code&gt;: INFORMATION AND COMMUNICATION  &lt;li&gt; &lt;code&gt;K&lt;/code&gt;: FINANCIAL AND INSURANCE ACTIVITIES  &lt;li&gt; &lt;code&gt;L&lt;/code&gt;: REAL ESTATE ACTIVITIES  &lt;li&gt; &lt;code&gt;M&lt;/code&gt;: PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES  &lt;li&gt; &lt;code&gt;N&lt;/code&gt;: ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;O&lt;/code&gt;: PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY  &lt;li&gt; &lt;code&gt;P&lt;/code&gt;: EDUCATION  &lt;li&gt; &lt;code&gt;Q&lt;/code&gt;: HUMAN HEALTH AND SOCIAL WORK ACTIVITIES  &lt;li&gt; &lt;code&gt;R&lt;/code&gt;: ARTS, ENTERTAINMENT AND RECREATION  &lt;li&gt; &lt;code&gt;S&lt;/code&gt;: OTHER SERVICE ACTIVITIES  &lt;li&gt; &lt;code&gt;T&lt;/code&gt;: ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE  &lt;li&gt; &lt;code&gt;U&lt;/code&gt;: ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES  &lt;li&gt; &lt;code&gt;NONE&lt;/code&gt;: Undefined activity &lt;/ul&gt; |  [optional]
**dateOfDeployment** | [**OffsetDateTime**](OffsetDateTime.md) | Date of deployment of the application. | 
**name** | **String** | Application name | 
**dateOfDeploymentRequest** | [**OffsetDateTime**](OffsetDateTime.md) | Date of deployment request of the application. | 
**id** | **String** | Application unique identifier | 
**state** | [**StateEnum**](#StateEnum) | State of the application | 
**env** | [**EnvEnum**](#EnvEnum) | Environment where the application is deploy | 
**ownerId** | **String** | Unique identifier of the application owner | 
**type** | [**TypeEnum**](#TypeEnum) | Application type | 
**platform** | [**PlatformEnum**](#PlatformEnum) | Platform where the application is running | 
**dateOfCreation** | [**OffsetDateTime**](OffsetDateTime.md) | Application creation date | 


<a name="ActivityEnum"></a>
## Enum: ActivityEnum
Name | Value
---- | -----
A | &quot;A&quot;
B | &quot;B&quot;
C | &quot;C&quot;
D | &quot;D&quot;
E | &quot;E&quot;
F | &quot;F&quot;
G | &quot;G&quot;
H | &quot;H&quot;
I | &quot;I&quot;
J | &quot;J&quot;
K | &quot;K&quot;
L | &quot;L&quot;
M | &quot;M&quot;
N | &quot;N&quot;
O | &quot;O&quot;
P | &quot;P&quot;
Q | &quot;Q&quot;
R | &quot;R&quot;
S | &quot;S&quot;
T | &quot;T&quot;
U | &quot;U&quot;
NONE | &quot;NONE&quot;


<a name="StateEnum"></a>
## Enum: StateEnum
Name | Value
---- | -----
NEW | &quot;new&quot;
ACTIVE | &quot;active&quot;
BLOCKED | &quot;blocked&quot;
DELETED | &quot;deleted&quot;
STOPPED | &quot;stopped&quot;


<a name="EnvEnum"></a>
## Enum: EnvEnum
Name | Value
---- | -----
NOT_DEPLOYED | &quot;not_deployed&quot;
IN_DEPLOYMENT | &quot;in_deployment&quot;
DEPLOYED | &quot;deployed&quot;


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
WEB | &quot;web&quot;
MOBILE | &quot;mobile&quot;
DESKTOP | &quot;desktop&quot;
SERVER | &quot;server&quot;
BOT | &quot;bot&quot;
IOT | &quot;iot&quot;
ADMIN | &quot;admin&quot;


<a name="PlatformEnum"></a>
## Enum: PlatformEnum
Name | Value
---- | -----
OFFICIAL | &quot;official&quot;
SANDBOX | &quot;sandbox&quot;



