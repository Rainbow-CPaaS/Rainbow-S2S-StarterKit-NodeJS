# RainbowAdminPortal.PutSystems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | System name/description | [optional] 
**siteId** | **String** | Site from which the system is linked with. | [optional] 
**type** | **String** | CCA type (Call Control Agent). | [optional] 
**country** | **String** | System country (ISO 3166-1 alpha3 format) | [optional] 
**version** | **String** | CCA software version | [optional] 
**serverPingTimeout** | **String** | CCA config data | [optional] [default to &#39;120&#39;]
**pbxMainBundlePrefix** | **String** | CCA config data | [optional] 
**usePbxMainBundlePrefix** | **Boolean** | Whether or not pbxMainBundlePrefix is used by PCG | [optional] 
**pbxNumberingTranslator** | [**[PutSystemsPbxNumberingTranslator]**](PutSystemsPbxNumberingTranslator.md) | List of several regular expressions used to validate internal or external phone numbers. Up to 100 regular expressions are allowed. (64 max char by regexp). To reset the list, use [] | [optional] 
**pbxNationalPrefix** | **String** | National prefix | [optional] 
**pbxInternationalPrefix** | **String** | International prefix | [optional] 
**searchResultOrder** | **[String]** | List of directory types to order search results | [optional] 
**isShared** | **Boolean** | Indicates if the system is **multi-company** (shared across multiple companies).   * isShared flag can&#39;t be set to true if isCentrex flag is true (these settings are exclusives). * Shared systems can be linked to several sites from different companies. * Several shared PBX can be attached to a same Rainbow company, as well as \&quot;standard\&quot; systems (i.e. systems without isShared flag, and so being linked only to this company). * Companies being linked to shared PBX can&#39;t be attached to centrex systems. * It is understood that this approach exposes all users of the shared PBX to all companies that have users on this PBX (for association, for dial by name).    Anyway it seats on a PBX infra where all PBX users can directly dial (by short num and DBN) any other users of the network from their deskphones. * In cases the underlying infra is an homogeneous network of PBX, PBX grouping has to be managed. * isShared flag can be updated to true only if the system has &#x60;isCentrex&#x60;&#x3D;false and is linked to at least one site or if a bpId is set. * isShared flag can be updated to false only if the system is linked to one site (exactly). In that case, bpId field is automatically reset to null.   | [optional] 
**bpId** | **String** | Link the system to the corresponding Business partner company.    &#x60;bpId&#x60; must correspond to a valid company having &#x60;isBP&#x60; equal to true.    Only directly settable by &#x60;superadmin&#x60;. | [optional] 



## Enum: TypeEnum


* `oxo` (value: `"oxo"`)

* `oxe` (value: `"oxe"`)

* `third_party` (value: `"third_party"`)

* `undefined` (value: `"undefined"`)




