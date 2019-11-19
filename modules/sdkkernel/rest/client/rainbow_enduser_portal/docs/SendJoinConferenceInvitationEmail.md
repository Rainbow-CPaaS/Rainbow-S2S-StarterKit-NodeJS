# RainbowEnduserPortal.SendJoinConferenceInvitationEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | **[String]** | A list of rainbow userId | 
**emails** | **[String]** | A list of guest user. Persons don&#39;t have a Rainbow account. | 
**lang** | **String** | Language of the email notification if user language value is not available. | [optional] [default to &#39;en&#39;]
**instantMessage** | **String** | When the meeting is an instant meeting nor a scheduled meeting, free message reported to a mail and to an instant message.    In addition with an email, a message stanza is sent to each rainbow users. This allow clients to be notified and join the room, then join the conference:        &#x60;&#x60;&#x60;html &lt;message           from&#x3D;&#39;inviter user&#39;s jid&#39;           to&#x3D;&#39;invited user&#39;s jid &#39;&gt;            &lt;x xmlns&#x3D;&#39;jabber:x:audioconference&#39;                 jid: &#39;room jid&#39;                 message: &#39;instantMessage given in body parameter&#39; MAY BE NULL as data is not mandatory                 confendpointid: &#39;confId&#39;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;  | [optional] 


