

# ApiRainbowUcsV10ConnectionsReceipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msgId** | **String** |  | 
**entity** | [**EntityEnum**](#EntityEnum) | The receipt emitter entity | 
**conversationId** | **String** | Its value is the &#39;undefined&#39; conversation &#39;0000000000000000&#39; on the server &#39;received receipt&#39; event |  [optional]
**event** | [**EventEnum**](#EventEnum) |  | 



## Enum: EntityEnum

Name | Value
---- | -----
CLIENT | &quot;client&quot;
SERVER | &quot;server&quot;



## Enum: EventEnum

Name | Value
---- | -----
RECEIVED | &quot;received&quot;
READ | &quot;read&quot;



