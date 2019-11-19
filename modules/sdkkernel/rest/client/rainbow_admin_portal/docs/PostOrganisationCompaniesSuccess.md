# RainbowAdminPortal.PostOrganisationCompaniesSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Company name | 
**latinName** | **String** | Company name format for search purpose | 
**creationDate** | **Date** | Company creation date (Read only) | 
**statusUpdatedDate** | **Date** | Date of last company status update | 
**settings** | [**Object**](.md) |  | 
**forceHandshake** | **Boolean** | Precondition - Several companies under an organization - Users under one company doesn&#39;t have to acknowledge when they are added to the network of another user belonging to the other company(ies) of the same organization | 
**status** | **String** | Company status | 
**visibility** | **String** | Company visibility (define if users being in this company can be searched by users being in other company) | 
**visibleBy** | **[String]** | If visibility is private, list of companyIds for which visibility is allowed | 
**organisationId** | **String** | Organization from which the company is linked in | 
**offerType** | **String** | Allowed company offer types (lead - opportunity to become freemium or premium) | 
**id** | **String** | Company unique identifier | 



## Enum: OfferTypeEnum


* `lead` (value: `"lead"`)

* `freemium` (value: `"freemium"`)

* `premium` (value: `"premium"`)




