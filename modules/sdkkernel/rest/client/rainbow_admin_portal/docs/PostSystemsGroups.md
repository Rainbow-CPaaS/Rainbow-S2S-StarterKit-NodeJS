# RainbowAdminPortal.PostSystemsGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Group name describing a private network of pabx | 
**companies** | **[String]** | List of Company unique identifier. A least one Id. This field is wanted to classify SystemsGroups inside the rainbow infrastructure. | 
**systems** | **[String]** | List of Systems unique identifier. May be empty. Several checks were done. Possible error cases are: (404 not found), (409 conflict - Systems already belongs to another group), (403 forbidden - one of the systems mustn&#39;t be administrated by the administrator) | [optional] 


