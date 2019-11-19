# RainbowEnduserPortal.CreateRoomSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator** | **String** | Rainbow Id of creator | 
**visibility** | **String** | Public/private group visibility for search | 
**jid** | **String** | Room MUC JID | 
**activeUsersCounter** | **Number** | The number of users with the status &#39;accepted&#39; or &#39;invited&#39;. Only available when format&#x3D;full | 
**customData** | [**Object**](.md) |  | 
**creationDate** | **Date** | Creation date of the room (read only, set automatically during room creation) | 
**isActive** | **Boolean** | When set to true all room users are invited to share their presence. Else they have to wait an event from XMPP server. This flag is reset when the room is inactive for a while (basically 60 days), and set when the first user share his presence. This flag is read-only. | 
**autoRegister** | **String** | A user can create a room and not have to register users. He can share instead a public link also called &#39;public URL&#39;([users public link][0]). According with autoRegister value, if another person uses the link to join the room:   * autoRegister &#x3D; &#39;unlock&#39;: If this user is not yet registered inside this room, he is automatically included with the status &#39;accepted&#39; and join the room. * autoRegister &#x3D; &#39;lock&#39;: If this user is not yet registered inside this room, he can&#39;t access to the room. So that he can&#39;t join the room. * autoRegister &#x3D; &#39;unlock_ack&#39;: If this user is not yet registered inside this room, he can&#39;t access to the room waiting for the room&#39;s owner acknowledgment.   [0]: #api-users_rooms_public_link | 
**users** | **[Object]** | List of users members of the room. Empty at room creation | 
**confEndpoints** | **[Object]** | Conference end point of a room user. This user is always a &#39;moderator&#39;. Only one confEndPoint per room. | 
**guestEmails** | **[String]** | Array of non rainbow users email. The former conference.guestEmails field should be deprecated sooner or later | 
**name** | **String** | Room name. | 
**topic** | **String** | Room topic | 
**id** | **String** | Room unique identifier (like 56d0277a0261b53142a5cab5) | 
**disableNotifications** | **Boolean** | When set to true, there is no more notifications to be sent by a room in all cases with text body (user join/leave, conference start/end) | 



## Enum: VisibilityEnum


* `private` (value: `"private"`)

* `public` (value: `"public"`)




