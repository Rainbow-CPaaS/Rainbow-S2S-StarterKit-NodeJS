# RainbowAdminPortal.PostCompanySSOSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Authentication server type | 
**loginUrl** | **String** | Identity provider URL to perform a login (SAML) | 
**logoutUrl** | **String** | Identity provider URL to perform a logout (SAML) | [optional] 
**certificates** | **[String]** | List of strings containing Identity provider certificates in a PEM format (SAML) | [optional] 
**uidAttribute** | **String** | Attribute name provided by the identity provider to identify a user (SAML) | [optional] 
**enabled** | **Boolean** | Enable or disable the use of these single-sign-on settings | [optional] [default to true]



## Enum: TypeEnum


* `SAML` (value: `"SAML"`)




