# RainbowAuthenticationPortal.GetLoginUrlSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[GetLoginUrlSuccessData]**](GetLoginUrlSuccessData.md) | List of authentication type with the associated login URL. | 
**authorizationEndpoint** | **String** | OIDC provider&#39;s authorization endpoint | 
**clientId** | **String** | client_id used for Rainbow application in OIDC provider | 
**discoveryUrl** | **String** | OIDC provider&#39;s discoveryUrl | [optional] 
**issuer** | **String** | OIDC provider&#39;s Issuer Identifier | 
**jwksUri** | **String** | OIDC provider&#39;s jwks_uri &lt;br/&gt; This setting is used to retrieve the OIDC provider&#39;s signing key(s) in order to validate the id_token&#39;s signature. | [optional] 
**onlyUseImplicitFlow** | **Boolean** | Indicates if configuration allows to use only OIDC implicit flow. &lt;br/&gt; If onlyUseImplicitFlow is set to true, &#x60;loginUrl&#x60; is not returned. &lt;br/&gt;&lt;br/&gt; Implicit flow can be used instead of authorization code grant implemented by Rainbow APIs, but in that case implicit flow has to be implemented by the client. The id_token retrieved by the client using implicit flow can then be used to get a Rainbow token using API GET /api/rainbow/authentication/v1.0/oidc-client/jwt. | 


