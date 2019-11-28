<a name="ConnectionService"></a>

## ConnectionService
**Kind**: global class  

* [ConnectionService](#ConnectionService)
    * [new ConnectionService()](#new_ConnectionService_new)
    * [.start()](#ConnectionService+start)
    * [.stop()](#ConnectionService+stop)
    * [.createConnection(ressource, callbackurl)](#ConnectionService+createConnection) ⇒ <code>Object</code>
    * [.deleteConnection(id)](#ConnectionService+deleteConnection) ⇒ <code>Boolean</code>
    * [.getAllConnections()](#ConnectionService+getAllConnections) ⇒ <code>json</code>
    * [.getConnection(convId)](#ConnectionService+getConnection) ⇒ <code>json</code>

<a name="new_ConnectionService_new"></a>

### new ConnectionService()
This module is the basic module for handling connections in Rainbow.

The main methods and events proposed in that service allow to:
  - Create or close a Rainbow connections,
  - Get all connections or get a connection by its Id
  - Retrieve all information linked to that connection,

<a name="ConnectionService+start"></a>

### connectionService.start()
Start the connection service.
When started, all user connections are retreived

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
<a name="ConnectionService+stop"></a>

### connectionService.stop()
Stop connection service.
When stoppped, all user connections are closed.

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
<a name="ConnectionService+createConnection"></a>

### connectionService.createConnection(ressource, callbackurl) ⇒ <code>Object</code>
Creates a connection givven a ressource name and a callback url

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
**Returns**: <code>Object</code> - a json data object {resource:xxx,id:xxx,callbackurl:xxx}
|Json object property | Type | Description |
|------------ | ------------- | ------------- |
|**resource** | **String** | The client resource |
|**id** | **String** | The connection identifier |
|**callbackUrl** | **String** | The app webhook |  

| Param | Type | Description |
| --- | --- | --- |
| ressource | <code>String</code> | the connection ressource name |
| callbackurl | <code>String</code> | the webhoock callback url on whitch the events will be received |

<a name="ConnectionService+deleteConnection"></a>

### connectionService.deleteConnection(id) ⇒ <code>Boolean</code>
Delete a connection  givven its Id

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
**Returns**: <code>Boolean</code> - true in cas on sucess or throws an exception  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="ConnectionService+getAllConnections"></a>

### connectionService.getAllConnections() ⇒ <code>json</code>
Get all connection of the connected user

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
**Returns**: <code>json</code> - an array list of connection data in json format  
<a name="ConnectionService+getConnection"></a>

### connectionService.getConnection(convId) ⇒ <code>json</code>
Get a connection data givven its Id

**Kind**: instance method of [<code>ConnectionService</code>](#ConnectionService)  
**Returns**: <code>json</code> - a json data object {resource:xxx,id:xxx,callbackurl:xxx}  

| Param | Type |
| --- | --- |
| convId | <code>String</code> | 

