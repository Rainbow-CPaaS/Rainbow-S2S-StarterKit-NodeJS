# RainbowEnduserPortal.UpdateRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visibility** | **String** | Public/private group visibility for search | [optional] [default to &#39;private&#39;]
**topic** | **String** | Room topic | [optional] 
**name** | **String** | Room name | [optional] 
**owner** | **String** | User unique identifier; New room owner must be a moderator and current owner must have valid licence (feature BUBBLE_PROMOTE_MEMBER) | [optional] 
**autoRegister** | **String** | A user can create a room and not have to register users. He can share instead a public link also called &#39;public URL&#39;([users public link][0]). According with autoRegister value, if another person uses the link to join the room:   * autoRegister &#x3D; &#39;unlock&#39;: If this user is not yet registered inside this room, he is automatically included with the status &#39;accepted&#39; and join the room. * autoRegister &#x3D; &#39;lock&#39;: If this user is not yet registered inside this room, he can&#39;t access to the room. So that he can&#39;t join the room. * autoRegister &#x3D; &#39;unlock_ack&#39; (value not authorized yet): If this user is not yet registered inside this room, he can&#39;t access to the room waiting for the room&#39;s owner acknowledgment.   [0]: #api-users_rooms_public_link | [optional] [default to &#39;unlock&#39;]



## Enum: VisibilityEnum


* `private` (value: `"private"`)

* `public` (value: `"public"`)





## Enum: AutoRegisterEnum


* `unlock` (value: `"unlock"`)

* `lock` (value: `"lock"`)




