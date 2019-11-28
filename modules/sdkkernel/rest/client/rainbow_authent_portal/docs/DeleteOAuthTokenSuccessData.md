# RainbowAuthenticationPortal.DeleteOAuthTokenSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessTokenExpiresAt** | **Date** | Date when the access token expires. | 
**accessTokenIssuedAt** | **Date** | Date of the last access token generation. Access token is requested by the application and has a short expiration time, therefore it can be considered as an indicator of the application activity for the user/application associated to this OAuth token. | 
**appId** | **String** | Unique identifier of the Application for which the OAuth token has been generated. | 
**appName** | **String** | Name of the Application for which the OAuth token has been generated. | 
**creationDate** | **Date** | Date when the OAuth token has been created. &lt;br/&gt; Corresponds to the first time the user gave his consent so that the application can use Rainbow APIs in his name (delegation). | 
**id** | **String** | OAuth token unique identifier. | 
**refreshTokenExpiresAt** | **Date** | Date when the refresh token expires. | 
**refreshTokenIssuedAt** | **Date** | Date of the last refresh token generation. | 
**scope** | **String** | Scope granted to the application. | 
**userId** | **String** | Unique identifier of the user for which the OAuth token has been generated. | 



## Enum: ScopeEnum


* `{all}` (value: `"{all}"`)




