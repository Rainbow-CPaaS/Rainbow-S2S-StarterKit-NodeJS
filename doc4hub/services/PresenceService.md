<a name="PresenceService"></a>

## PresenceService
**Kind**: global class  

* [PresenceService](#PresenceService)
    * [new PresenceService()](#new_PresenceService_new)
    * [.start()](#PresenceService+start)
    * [.stop()](#PresenceService+stop)
    * [.setPresence(show, status)](#PresenceService+setPresence)

<a name="new_PresenceService_new"></a>

### new PresenceService()
This module manages the presence of the connected user.     <br><br>     The main methods proposed in that module allow to: <br>     - Change the connected user presence

<a name="PresenceService+start"></a>

### presenceService.start()
Start presence service

**Kind**: instance method of [<code>PresenceService</code>](#PresenceService)  
<a name="PresenceService+stop"></a>

### presenceService.stop()
Stop presence servie

**Kind**: instance method of [<code>PresenceService</code>](#PresenceService)  
<a name="PresenceService+setPresence"></a>

### presenceService.setPresence(show, status)
change current user presence

**Kind**: instance method of [<code>PresenceService</code>](#PresenceService)  

| Param | Type | Description |
| --- | --- | --- |
| show | <code>\*</code> | is the presence value [online, xa, dnd] |
| status | <code>\*</code> | is the status message ( online, away, or "") |

