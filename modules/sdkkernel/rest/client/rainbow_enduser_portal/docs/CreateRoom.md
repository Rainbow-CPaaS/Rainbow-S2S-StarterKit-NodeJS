# RainbowEnduserPortal.CreateRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Room name | 
**visibility** | **String** | Public/private group visibility for search | [optional] [default to &#39;private&#39;]
**topic** | **String** | Room topic | [optional] 
**history** | **String** | previous messages history to provide to a new room user | [optional] [default to &#39;none&#39;]
**_number** | **Number** | to use when history&#x3D;number | [optional] 
**disableNotifications** | **Boolean** | When set to true, there is no more notifications to be sent by a room in all cases with text body (user join/leave, conference start/end) | [optional] [default to false]
**mediaType** | **String** | Defines at creation the room will host a conference. | [optional] 
**autoRegister** | **String** | A user can create a room and not have to register users. He can share instead a public link also called &#39;public URL&#39;([users public link][0]). According with autoRegister value, if another person uses the link to join the room:   * autoRegister &#x3D; &#39;unlock&#39;: If this user is not yet registered inside this room, he is automatically included with the status &#39;accepted&#39; and join the room. * autoRegister &#x3D; &#39;lock&#39;: If this user is not yet registered inside this room, he can&#39;t access to the room. So that he can&#39;t join the room. * autoRegister &#x3D; &#39;unlock_ack&#39; (value not authorized yet): If this user is not yet registered inside this room, he can&#39;t access to the room waiting for the room&#39;s owner acknowledgment.   [0]: #api-users_rooms_public_link | [optional] [default to &#39;unlock&#39;]



## Enum: VisibilityEnum


* `private` (value: `"private"`)

* `public` (value: `"public"`)





## Enum: HistoryEnum


* `none` (value: `"none"`)

* `all` (value: `"all"`)

* `number` (value: `"number"`)





## Enum: MediaTypeEnum


* `pstnAudio` (value: `"pstnAudio"`)

* `webrtc` (value: `"webrtc"`)





## Enum: AutoRegisterEnum


* `unlock` (value: `"unlock"`)

* `lock` (value: `"lock"`)




