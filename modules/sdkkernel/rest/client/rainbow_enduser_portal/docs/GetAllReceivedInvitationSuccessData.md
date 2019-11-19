# RainbowEnduserPortal.GetAllReceivedInvitationSuccessData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Invitation unique Id | 
**invitedUserId** | **String** | Invited user unique Rainbow Id.    Only available for the inviting user if the invited user has been invited from his userId (parameter invitedUserId in API POST /api/rainbow/enduser/v1.0/users/:userId/invitations) or if the invitation has been accepted. | [optional] 
**invitedPhoneNumber** | **String** | Invited user phoneNumber | [optional] 
**invitedUserEmail** | **String** | Invited user email | [optional] 
**invitingUserId** | **String** | Inviting user unique Rainbow Id | 
**invitingUserEmail** | **String** | Inviting user loginEmail | 
**requestedNotificationLanguage** | **String** | Requested notification language (used to re-send email request in that language) | 
**invitingDate** | **Date** | Date the invitation was created | 
**lastNotificationDate** | **Date** | Date when the last email notification was sent | 
**status** | **String** | Invitation status: one of &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;auto-accepted&#x60;, &#x60;declined&#x60;, &#x60;canceled&#x60;, &#x60;failed&#x60;* &#x60;pending&#x60;: invitation has been sent by inviting user and not yet accepted by invited user * &#x60;accepted&#x60;: invitation has been accepted by invited user * &#x60;auto-accepted&#x60;: invitation has been auto-accepted (case of users in same company) * &#x60;declined&#x60;: invitation has been declined by invited user. Only invited user can see that he has declined an invitation. Inviting user still see the invitation as &#x60;pending&#x60; * &#x60;canceled&#x60;: invitation has been canceled by inviting user. If invited user does not have an account in Rainbow, he can still use this invitationId received by email to create his Rainbow account, but he will not be added to inviting user roster. * &#x60;failed&#x60;: invitation email failed to be sent to invited user (determined by parsing SMTP server logs). It can be the case if the provided invited email address does not exists.   | 
**type** | **String** | Invitation type:   * &#x60;visibility&#x60; (invited user exists in Rainbow), * &#x60;registration&#x60; (invited user did not exist in Rainbow when invitation was sent)   | 


