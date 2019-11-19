# RainbowEnduserPortal.AddUserToRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | User unique identifier (like 56f42c1914e2a8a91b99e595) | 
**reason** | **String** | reason (to be used for XMPP invitation) | 
**privilege** | **String** | User privilege | [optional] [default to &#39;user&#39;]
**status** | **String** | User invitation status    A message stanza is sent to added user. This allow clients to be notified and join the room:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;inviter user&#39;s jid&#39;           to&#x3D;&#39;invited user&#39;s jid &#39;&gt;            &lt;x xmlns&#x3D;&#39;jabber:x:conference&#39;                 jid: &#39;room jid&#39;                 reason: &#39;reason given in body parameter&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    A message stanza is sent to moderators as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s invited display name has been invited to join the bubble &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;invitation&#39;                 jid: &#39;invited user&#39;s jid&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;  | 



## Enum: PrivilegeEnum


* `user` (value: `"user"`)

* `moderator` (value: `"moderator"`)

* `guest` (value: `"guest"`)





## Enum: StatusEnum


* `invited` (value: `"invited"`)

* `accepted` (value: `"accepted"`)

* `unsubscribed` (value: `"unsubscribed"`)




