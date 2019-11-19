# RainbowAdminPortal.GetPbxIdSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **String** | System country (ISO 3166-1 alpha2 format) | 
**pbxGroup** | [**[GetPbxIdSuccessPbxGroup]**](GetPbxIdSuccessPbxGroup.md) | Set of pabx sharing the same unified dial plan. List of object (systemId, pbxId) | 
**id** | **String** | System unique identifier | 
**name** | **String** | System name/description | 
**pbxId** | **String** | Call Control Agent (CCA) login. | 
**siteId** | **[String]** | Site from which the system is linked with. | 
**type** | **String** | CCA type | 
**version** | **String** | CCA software version | 
**jidPbxagent** | **String** | CCA Jabber Id | 
**jidPbxagentPassword** | **String** | CCA Jabber Id access code. The value of this field is depending on status field. &gt; - &#x60;created, activating&#x60;: This is the public access code. The code must be used by the CCA for the first connection. &gt; - &#x60;activated&#x60;: This is an Hash code of the private access code, reduced to the last eight digits | 
**jidPbxpcg** | **String** | PCG Jabber Id for this system | 
**jidPbxpcgPassword** | **String** | PCG CCA Jabber Id password for this system | 
**status** | **String** | CCA status report. (read only) &gt; - &#x60;created&#x60;: CCA uses a public access code to join rainbow infrastructure (see jid_pbxagent_password field) &gt; - &#x60;activating&#x60;: Rainbow infrastructure has proposed a private access code to replace the former public access code &gt; - &#x60;activated&#x60;: CCA has accepted the new access code, that will be used for the next initialization. | [default to &#39;created&#39;]
**serverPingTimeout** | **String** | CCA config data | 
**pbxMainBundlePrefix** | **[String]** | CCA config data | 
**pbxNumberingTranslator** | [**[GetPbxIdSuccessPbxNumberingTranslator]**](GetPbxIdSuccessPbxNumberingTranslator.md) | list of several regular expressions used to validate internal or external phone numbers. Up to 100 regular expressions are allowed. (64 max char by regexp). To reset the list, use [] | 
**pbxNationalPrefix** | **String** | National prefix | 
**pbxInternationalPrefix** | **String** | International prefix | 
**creationDate** | **Date** | System creation date (Read only) | 
**statusUpdatedDate** | **Date** | Date of last system status update (Read only) | 
**searchResultOrder** | **[String]** | List of directory types to order search results | 
**isShared** | **Boolean** | Indicates if the system is **multi-company** (shared across multiple companies) | 
**isCentrex** | **Boolean** | Indicates if the system is one tenant or **multi-tenant (OXE - OTEC-S)** | 
**bpId** | **String** | Identifier which links the system to the corresponding Business partner company. Obligatory when a BP admin creates a isCentrex or isShared system not yet used by a company | [default to &#39;null&#39;]



## Enum: StatusEnum


* `created` (value: `"created"`)

* `activating` (value: `"activating"`)

* `activated` (value: `"activated"`)




