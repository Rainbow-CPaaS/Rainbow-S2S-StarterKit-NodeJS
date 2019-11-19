# RainbowEnduserPortal.SendUserRoomInvitationCancelationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario** | **String** | The curent scenario used | 
**guestEmails** | **[String]** | Emails of guest left in the room | 
**invalidUsers** | **String** | List of invalid userId (not well formed or not Rainbow user) | 
**status** | **String** | If at least, one userId is valid or an email is well formed, status is \&quot;Cancellation successfully sent\&quot;. Else an error 400 Bad request is returned. | 


