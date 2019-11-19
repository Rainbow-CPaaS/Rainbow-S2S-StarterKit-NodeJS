# RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureId** | **String** | Feature unique identifier | 
**featureName** | **String** | Feature name | 
**featureUniqueRef** | **String** | Feature unique reference (to be used for controls on limitations linked to this feature in server/client code) | 
**featureType** | **String** | Feature limitation type (&#x60;boolean&#x60;, &#x60;number&#x60;, &#x60;string&#x60;, &#x60;undefined&#x60;) | 
**addedDate** | **Date** | Date when the feature was updated for the profile | 
**lastUpdateDate** | **Date** | Date when the feature was updated for the profile | 
**isEnabled** | **Boolean** | In case feature has type boolean (on/off), is the feature enabled | [optional] 
**limitMin** | **Number** | In case feature has type number, limit min of the feature (if applicable) | [optional] 
**limitMax** | **Number** | In case feature has type number, limit max of the feature (if applicable) | [optional] 


