# RainbowEnduserPortal.UpdateUserData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privilege** | **String** | User privilege | 
**status** | **String** | User invitation status    A message stanza with the new status is sent to all room users (if a user&#39;s status is modified).        &#x60;&#x60;&#x60;html &lt;message           from&#x3D; &#39;a portal client connected&#39;           to&#x3D;&#39;room user jid&#39;           id&#x3D;&#39;lh2bs617&#39;           type&#x3D;&#39;management&#39;           xmlns: &#39;jabber :client&#39; &gt;           &lt;room               roomid : mongoid of the room               roomjid: jid of the room               userjid : jid of the modified user               status : new status of the modified user           /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    A message stanza is sent to room users as a private room message. This allow clients to display notifications:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;room jid&#39;           to&#x3D;&#39;room jid/user&#39;s nic&#39;&gt;            &lt;x body  user&#39;s updated display name has been invited to join the bubble or welcome &lt;/body&amp;gt            &lt;x event xmlns&#x3D;&#39;jabber:iq:configuration&#39;                 name: &#39;join&#39; or &#39;welcome&#39; or &#39;leave&#39;                 jid: &#39;updated user&#39;s jid&#39; /&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;  | 



## Enum: PrivilegeEnum


* `user` (value: `"user"`)

* `moderator` (value: `"moderator"`)

* `guest` (value: `"guest"`)





## Enum: StatusEnum


* `invited` (value: `"invited"`)

* `accepted` (value: `"accepted"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `rejected` (value: `"rejected"`)




