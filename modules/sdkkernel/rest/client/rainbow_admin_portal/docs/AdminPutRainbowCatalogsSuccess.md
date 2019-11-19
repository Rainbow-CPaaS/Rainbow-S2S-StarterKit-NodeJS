# RainbowAdminPortal.AdminPutRainbowCatalogsSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Catalog unique identifier | 
**name** | **String** | Catalog name | 
**description** | **String** | Catalog description | 
**isDefault** | **Boolean** | Indicates if it is the default Rainbow catalog. Only one catalog can be the default one.    Default catalog is the catalog which automatically assigned to newly created companies.    Only superadmin can specify a different catalog for a given company. | 
**creationDate** | **Date** | Catalog creation date | 
**offersList** | **[String]** | List of offerIds the catalog contains | 


