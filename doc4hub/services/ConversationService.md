<a name="ConversationService"></a>

## ConversationService
**Kind**: global class  

* [ConversationService](#ConversationService)
    * [new ConversationService()](#new_ConversationService_new)
    * [.start()](#ConversationService+start)
    * [.stop()](#ConversationService+stop)
    * [.setConversationChatState(cvId, state)](#ConversationService+setConversationChatState) ⇒ <code>Boolean</code>
    * [.createConversation(peerType, peerId)](#ConversationService+createConversation) ⇒ <code>json</code>
    * [.createUserConversation(userId)](#ConversationService+createUserConversation) ⇒ <code>json</code>
    * [.createBotConversation(botId)](#ConversationService+createBotConversation) ⇒ <code>json</code>
    * [.createBubbleConversation(roomId)](#ConversationService+createBubbleConversation) ⇒ <code>json</code>
    * [.deleteConversation(convId)](#ConversationService+deleteConversation) ⇒ <code>json</code>
    * [.getAllConversations()](#ConversationService+getAllConversations)
    * [.getConversation(convId)](#ConversationService+getConversation) ⇒ <code>json</code>

<a name="new_ConversationService_new"></a>

### new ConversationService()
This module is the basic module for handling conversations in Rainbow. In Rainbow, conversations are the way to get in touch with someone or something (i.e. a Rainbow contact, a external phone number, a connected thing, ...) so a conversation is the "long tail" of communication between you and someone or something else like a bubble.A Rainbow conversation by default supports sending and receiving Instant Messages with a single recipient (one-to-one conversation) or with several persons in bubble.The main methods and events proposed in that service allow to:  - Create or close a Rainbow conversation (one-to-one of bubble),  - Get all conversations or get a conversation by Id  - Retrieve all information linked to that conversation

<a name="ConversationService+start"></a>

### conversationService.start()
Start the conversation service.All conversations are retrieved at startup.

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
<a name="ConversationService+stop"></a>

### conversationService.stop()
Stop conversation service.When stopped, all conversation are closed.

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
<a name="ConversationService+setConversationChatState"></a>

### conversationService.setConversationChatState(cvId, state) ⇒ <code>Boolean</code>
set a conversation chat state

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>Boolean</code> - true if chat state set or throws an exception  

| Param | Type | Description |
| --- | --- | --- |
| cvId | <code>String</code> |  |
| state | <code>String</code> | the conversation state. |

<a name="ConversationService+createConversation"></a>

### conversationService.createConversation(peerType, peerId) ⇒ <code>json</code>
Creates conversation givven a connection ID, a peer type ( bot,user, buble) and a peer ID

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - a json data object containning [Conversation](../api/Conversation) properties  

| Param | Type | Description |
| --- | --- | --- |
| peerType | <code>String</code> | the peer type ['bot','user', 'room'] |
| peerId | <code>String</code> | the peer Id |

<a name="ConversationService+createUserConversation"></a>

### conversationService.createUserConversation(userId) ⇒ <code>json</code>
Creates a conversation with a user

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - a json data object containning [Conversation](../api/Conversation) properties  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>String</code> | the user ID |

<a name="ConversationService+createBotConversation"></a>

### conversationService.createBotConversation(botId) ⇒ <code>json</code>
Creates a conversation with a bot

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - a json data object containning [Conversation](../api/Conversation) properties  

| Param | Type | Description |
| --- | --- | --- |
| botId | <code>String</code> | the bot Id |

<a name="ConversationService+createBubbleConversation"></a>

### conversationService.createBubbleConversation(roomId) ⇒ <code>json</code>
Create a chat room conversation

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - a json data object containning [Conversation](../api/Conversation) properties  

| Param | Type | Description |
| --- | --- | --- |
| roomId | <code>String</code> | the room Id |

<a name="ConversationService+deleteConversation"></a>

### conversationService.deleteConversation(convId) ⇒ <code>json</code>
Deletes a conversation givven its Id

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - json data object representing a conversation  

| Param | Type | Description |
| --- | --- | --- |
| convId | <code>String</code> | the conversation Id |

<a name="ConversationService+getAllConversations"></a>

### conversationService.getAllConversations()
Get all conversation for the current connexion{json} a json list of [Conversation](../api/Conversation) object data properties

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
<a name="ConversationService+getConversation"></a>

### conversationService.getConversation(convId) ⇒ <code>json</code>
Get a conversation data givven its Id

**Kind**: instance method of [<code>ConversationService</code>](#ConversationService)  
**Returns**: <code>json</code> - a json data object containning [Conversation](../api/Conversation) properties  

| Param | Type |
| --- | --- |
| convId | <code>String</code> | 

