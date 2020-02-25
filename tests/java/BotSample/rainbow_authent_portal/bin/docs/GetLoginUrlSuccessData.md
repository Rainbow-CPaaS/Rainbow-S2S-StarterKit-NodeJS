
# GetLoginUrlSuccessData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizationEndpoint** | **String** | OIDC provider&#39;s authorization endpoint &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. | 
**clientId** | **String** | client_id used for Rainbow application in OIDC provider &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. | 
**discoveryUrl** | **String** | OIDC provider&#39;s discoveryUrl &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. |  [optional]
**issuer** | **String** | OIDC provider&#39;s Issuer Identifier &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. | 
**jwksUri** | **String** | OIDC provider&#39;s jwks_uri &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. &lt;br/&gt; This setting is used to retrieve the OIDC provider&#39;s signing key(s) in order to validate the id_token&#39;s signature. |  [optional]
**loginUrl** | **String** | URL to use to perform a login. &lt;br/&gt; Not returned if authentication type is OIDC with &#x60;onlyUseImplicitFlow&#x60;&#x3D;true | 
**logoutUrl** | **String** | URL to use to perform a logout. | 
**onlyUseImplicitFlow** | **Boolean** | Indicates if configuration allows to use only OIDC implicit flow. &lt;br/&gt; Only returned if &#x60;type&#x60; is &#x60;OIDC&#x60;. &lt;br/&gt; If onlyUseImplicitFlow is set to true, &#x60;loginUrl&#x60; is not returned. &lt;br/&gt;&lt;br/&gt; Implicit flow can be used instead of authorization code grant implemented by Rainbow APIs, but in that case implicit flow has to be implemented by the client. The id_token retrieved by the client using implicit flow can then be used to get a Rainbow token using API GET /api/rainbow/authentication/v1.0/oidc-client/jwt. | 
**type** | [**TypeEnum**](#TypeEnum) | Authentication type. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
RAINBOW | &quot;RAINBOW&quot;
SAML | &quot;SAML&quot;
OIDC | &quot;OIDC&quot;



