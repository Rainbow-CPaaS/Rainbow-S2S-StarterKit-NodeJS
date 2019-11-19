# RainbowAdminPortal.GetOperationLogSuccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Operation log unique identifier | 
**operationDate** | **Date** | Date when the operation has been performed by the administrator | 
**operationType** | **String** | Type of performed operation | 
**operationMessage** | **String** | Optional string which can be used to describe the operation | [optional] 
**doneBy** | [**GetOperationLogSuccessDoneBy**](GetOperationLogSuccessDoneBy.md) |  | 
**resourceType** | **String** | Type of the resource on which the operation has been performed | 
**resourceId** | **String** | Unique identifier of the resource on which the operation has been performed | 
**resourceContext** | [**GetOperationLogSuccessResourceContext**](GetOperationLogSuccessResourceContext.md) |  | 
**previousData** | [**Object**](.md) |  | 
**newData** | [**Object**](.md) |  | 



## Enum: OperationTypeEnum


* `create` (value: `"create"`)

* `update` (value: `"update"`)

* `delete` (value: `"delete"`)





## Enum: ResourceTypeEnum


* `subscription` (value: `"subscription"`)

* `profile` (value: `"profile"`)




