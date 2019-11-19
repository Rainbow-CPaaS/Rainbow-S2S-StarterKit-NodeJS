# RainbowAdminPortal.PutCompaniesCustomData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **String** | Company&#39;s custom data key1. | 
**key2** | **String** | Company&#39;s custom data key2.    customData can only be created/updated by:   * &#x60;superadmin&#x60; (all companies), * &#x60;bp_admin&#x60; and &#x60;bp_finance&#x60; for the companies he manages (except his own BP company), * &#x60;organization_admin&#x60; for the companies he manages.  Restrictions on customData Object:   * max 10 keys, * max key length: 64 characters, * max value length: 512 characters.   | 


