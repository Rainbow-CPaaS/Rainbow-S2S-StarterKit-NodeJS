# RainbowAdminPortal.AdminFilebackendstoragesPostBackends

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endPoint** | **String** | Backend End-Point. The URL for authentication (ex: http://swift.rainbow.rdna:5000/v3) | 
**tenantId** | **String** | Authentication | 
**tenantName** | **String** | Authentication | 
**userName** | **String** | Authentication | 
**password** | **String** | Authentication | 
**regionName** | **String** | Free value | 
**rootStorageURL** | **String** | The beginning of the path to access to a resource (ex: http://swift.rainbow.rdna:8080/v1/AUTH_a67b0e12592941488a5f53189c61022d) | 
**hostName** | **String** | This value has to be used inside the zone.json file managed by Rainbow operation team. If not set during File Backend creation, the domain name of the endPoint URL is replicated in this field. | [optional] [default to &#39;domainNameOfTheEndPointURL&#39;]


