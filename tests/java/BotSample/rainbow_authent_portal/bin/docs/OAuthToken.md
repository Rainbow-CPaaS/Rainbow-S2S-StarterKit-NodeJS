
# OAuthToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The authorization code sent by Rainbow authentication server from the GET /api/rainbow/authentication/v1.0/oauth/authorize endpoint. &lt;br/&gt; &lt;b&gt;Mandatory&lt;/b&gt; to exchange an authorization code against an access token. &lt;br/&gt; Note that once it has been used, the authorization code is revoked. &lt;br/&gt; &lt;br/&gt; For more information, details are available in the &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-4.1.3\&quot;&gt;OAuth 2.0 RFC, section 4.1.3&lt;/a&gt;. |  [optional]
**grantType** | [**GrantTypeEnum**](#GrantTypeEnum) | Desired grant type to use for token endpoint. &lt;br/&gt; Must be set to: - &lt;strong&gt;authorization_code&lt;/strong&gt; to exchange an authorization code against an access token   (details are available in the &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-4.1.3\&quot;&gt;OAuth 2.0 RFC, section 4.1.3&lt;/a&gt;), - &lt;strong&gt;refresh_token&lt;/strong&gt; to refresh an access token using the refresh token   (details are available in the &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-6\&quot;&gt;OAuth 2.0 RFC, section 6&lt;/a&gt;). | 
**redirectUri** | **String** | The redirect_uri used to retrieve the authorization code sent by Rainbow authentication server from the GET /api/rainbow/authentication/v1.0/oauth/authorize endpoint. &lt;br/&gt; &lt;b&gt;Mandatory&lt;/b&gt; to exchange an authorization code against an access token. &lt;br/&gt; &lt;br/&gt; For more information, details are available in the &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-4.1.3\&quot;&gt;OAuth 2.0 RFC, section 4.1.3&lt;/a&gt;. |  [optional]
**refreshToken** | **String** | The refresh token sent by Rainbow authentication server from the GET /api/rainbow/authentication/v1.0/oauth/authorize endpoint of from a previous refresh token performed using this POST /api/rainbow/authentication/v1.0/oauth/token endpoint. &lt;br/&gt; &lt;b&gt;Mandatory&lt;/b&gt; to refresh an access token. &lt;br/&gt; The provided refresh_token must not be expired. If the refresh token is expired, the application has to redo the whole OAuth authorization code flow. &lt;br/&gt; Note that once it has been used to refresh an access token, the refresh_token is revoked. The new refresh token returned in the response with the access token replaces the previous one. &lt;br/&gt; &lt;br/&gt; For more information, details are available in the &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-6\&quot;&gt;OAuth 2.0 RFC, section 6&lt;/a&gt;. |  [optional]


<a name="GrantTypeEnum"></a>
## Enum: GrantTypeEnum
Name | Value
---- | -----
_AUTHORIZATION_CODE | &quot;{authorization_code&quot;
REFRESH_TOKEN_ | &quot;refresh_token}&quot;



