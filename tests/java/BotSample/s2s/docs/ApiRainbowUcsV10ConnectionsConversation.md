

# ApiRainbowUcsV10ConnectionsConversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the conversation Id | 
**action** | [**ActionEnum**](#ActionEnum) | the action type | 
**peer** | **String** | the peer Id | 
**type** | [**TypeEnum**](#TypeEnum) | the peer type | 
**mute** | **Boolean** | the mute flag |  [optional]



## Enum: ActionEnum

Name | Value
---- | -----
CREATE | &quot;create&quot;
UPDATE | &quot;update&quot;
DELETE | &quot;delete&quot;



## Enum: TypeEnum

Name | Value
---- | -----
USER | &quot;user&quot;
BOT | &quot;bot&quot;
ROOM | &quot;room&quot;



