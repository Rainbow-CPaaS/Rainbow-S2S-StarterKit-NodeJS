## Classes

<dl>
<dt><a href="#ImService">ImService</a></dt>
<dd></dd>
<dt><a href="#ImService">ImService</a></dt>
<dd></dd>
</dl>

<a name="ImService"></a>

## ImService
**Kind**: global class  

* [ImService](#ImService)
    * [new ImService()](#new_ImService_new)
    * [new ImService(_eventEmitter, _logger, _s2sMessageApi, _connectedUserInfo, _connectionInfo)](#new_ImService_new)
    * [.stop()](#ImService+stop)
    * [.sendMessage(cvId, messageToBeSent, lang, content, title)](#ImService+sendMessage)
    * [.acknowledgeMessageAsRead(cvId, messageId)](#ImService+acknowledgeMessageAsRead)
    * [.acknowledgeMessageReception(cvId, messageId)](#ImService+acknowledgeMessageReception)
    * [.getAllMessagesFromAConversation(cvId)](#ImService+getAllMessagesFromAConversation)

<a name="new_ImService_new"></a>

### new ImService()
This module manages Instant Messages. It allows to send messages to a user or a bubble.     <br><br>     The main methods proposed in that module allow to: <br>     - Send a message to a conversation ( user or room) <br>     - Mark a message as read <br>

<a name="new_ImService_new"></a>

### new ImService(_eventEmitter, _logger, _s2sMessageApi, _connectedUserInfo, _connectionInfo)
constructor


| Param | Type | Description |
| --- | --- | --- |
| _eventEmitter | <code>\*</code> | the event manager module |
| _logger | <code>\*</code> | the logger module |
| _s2sMessageApi | <code>\*</code> | S2S messaging API |
| _connectedUserInfo | <code>\*</code> | connected user info |
| _connectionInfo | <code>\*</code> | connection info |

<a name="ImService+stop"></a>

### imService.stop()
Stop ImService

**Kind**: instance method of [<code>ImService</code>](#ImService)  
<a name="ImService+sendMessage"></a>

### imService.sendMessage(cvId, messageToBeSent, lang, content, title)
send a messaeg to peers in a conversation

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type | Description |
| --- | --- | --- |
| cvId | <code>\*</code> | the conversation id to send message to |
| messageToBeSent | <code>\*</code> | the message to send |
| lang | <code>\*</code> | the language used |
| content | <code>\*</code> |  |
| title | <code>\*</code> | the message subject |

<a name="ImService+acknowledgeMessageAsRead"></a>

### imService.acknowledgeMessageAsRead(cvId, messageId)
acknowledge a message as read using its message id

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type |
| --- | --- |
| cvId | <code>\*</code> | 
| messageId | <code>\*</code> | 

<a name="ImService+acknowledgeMessageReception"></a>

### imService.acknowledgeMessageReception(cvId, messageId)
acknowledge a message reception

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type | Description |
| --- | --- | --- |
| cvId | <code>\*</code> | the conversation in witch the message is exchnaged |
| messageId | <code>\*</code> | the message id |

<a name="ImService+getAllMessagesFromAConversation"></a>

### imService.getAllMessagesFromAConversation(cvId)
retreive all message from a conversation

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Description |
| --- | --- |
| cvId | the conversation id |

<a name="ImService"></a>

## ImService
**Kind**: global class  

* [ImService](#ImService)
    * [new ImService()](#new_ImService_new)
    * [new ImService(_eventEmitter, _logger, _s2sMessageApi, _connectedUserInfo, _connectionInfo)](#new_ImService_new)
    * [.stop()](#ImService+stop)
    * [.sendMessage(cvId, messageToBeSent, lang, content, title)](#ImService+sendMessage)
    * [.acknowledgeMessageAsRead(cvId, messageId)](#ImService+acknowledgeMessageAsRead)
    * [.acknowledgeMessageReception(cvId, messageId)](#ImService+acknowledgeMessageReception)
    * [.getAllMessagesFromAConversation(cvId)](#ImService+getAllMessagesFromAConversation)

<a name="new_ImService_new"></a>

### new ImService()
This module manages Instant Messages. It allows to send messages to a user or a bubble.     <br><br>     The main methods proposed in that module allow to: <br>     - Send a message to a conversation ( user or room) <br>     - Mark a message as read <br>

<a name="new_ImService_new"></a>

### new ImService(_eventEmitter, _logger, _s2sMessageApi, _connectedUserInfo, _connectionInfo)
constructor


| Param | Type | Description |
| --- | --- | --- |
| _eventEmitter | <code>\*</code> | the event manager module |
| _logger | <code>\*</code> | the logger module |
| _s2sMessageApi | <code>\*</code> | S2S messaging API |
| _connectedUserInfo | <code>\*</code> | connected user info |
| _connectionInfo | <code>\*</code> | connection info |

<a name="ImService+stop"></a>

### imService.stop()
Stop ImService

**Kind**: instance method of [<code>ImService</code>](#ImService)  
<a name="ImService+sendMessage"></a>

### imService.sendMessage(cvId, messageToBeSent, lang, content, title)
send a messaeg to peers in a conversation

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type | Description |
| --- | --- | --- |
| cvId | <code>\*</code> | the conversation id to send message to |
| messageToBeSent | <code>\*</code> | the message to send |
| lang | <code>\*</code> | the language used |
| content | <code>\*</code> |  |
| title | <code>\*</code> | the message subject |

<a name="ImService+acknowledgeMessageAsRead"></a>

### imService.acknowledgeMessageAsRead(cvId, messageId)
acknowledge a message as read using its message id

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type |
| --- | --- |
| cvId | <code>\*</code> | 
| messageId | <code>\*</code> | 

<a name="ImService+acknowledgeMessageReception"></a>

### imService.acknowledgeMessageReception(cvId, messageId)
acknowledge a message reception

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Type | Description |
| --- | --- | --- |
| cvId | <code>\*</code> | the conversation in witch the message is exchnaged |
| messageId | <code>\*</code> | the message id |

<a name="ImService+getAllMessagesFromAConversation"></a>

### imService.getAllMessagesFromAConversation(cvId)
retreive all message from a conversation

**Kind**: instance method of [<code>ImService</code>](#ImService)  

| Param | Description |
| --- | --- |
| cvId | the conversation id |

