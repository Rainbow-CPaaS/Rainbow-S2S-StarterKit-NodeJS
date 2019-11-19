# RainbowAdminPortal.AdminPostRainbowProfilesSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Profile unique identifier | 
**name** | **String** | Profile name | 
**description** | **String** | Profile description | 
**creationDate** | **Date** | Profile creation date | 
**featuresList** | **Date** | List of features associated to this profile, with the associated restriction (if any):    &#x60;featureId&#x60;: Feature unique identified    &#x60;featureName&#x60;: Feature name (automatically filled by server based on name of Feature having provided featureId)    &#x60;featureUniqueRef&#x60;: Feature unique reference (to be used for controls on limitations linked to this feature in server/client code) (automatically filled by server based on uniqueRef of Feature having provided featureId)    &#x60;featureType&#x60;: Feature limitation type (automatically filled by server based on name of Feature having provided featureId)    &#x60;addedDate&#x60;: Date when the feature was updated for the profile    &#x60;lastUpdateDate&#x60;: Date when the feature was updated for the profile    &#x60;isEnabled&#x60;: In case feature has type boolean (on/off), is the feature enabled    &#x60;limitMin&#x60;: In case feature has type number, limit min of the feature (if applicable)    &#x60;limitMax&#x60;: In case feature has type number, limit max of the feature (if applicable) | 


