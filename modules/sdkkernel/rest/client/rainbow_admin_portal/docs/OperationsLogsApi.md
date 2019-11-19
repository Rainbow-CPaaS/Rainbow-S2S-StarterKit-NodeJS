# RainbowAdminPortal.OperationsLogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOperationLog**](OperationsLogsApi.md#getOperationLog) | **GET** /api/rainbow/admin/v1.0/logs/operations | Get operation logs



## getOperationLog

> GetOperationLogSuccess getOperationLog(accept, opts)

Get operation logs

This API can be used to list operation logs.       When operations are done by an admin on subscription or profile (for now), an operation log is stored with the details regarding the operation.    Each operation log details:    - which resource has been updated (type and unique identifier),    - who performed the operation (userId, loginEmail, companyId, companyName),    - when the operation has been performed (operationDate),    - what is the type of operation (operationType: create/update/delete),    - how were the data before the operation (previousData),    - how are the data after the operation (newData).    A context regarding the resource for which the operation has been performed is also stored (resourceContext). At least the companyId is stored, allowing to filter on the companies for which the operation has been carried out.       The operation logs can be filtered based on several fields. By default, operation logs are sorted by descending operationDate (from the youngest to the oldest).    Examples:    - All operations for all the company manageable by the logged in administrator (format small): GET https://openrainbow.com/api/rainbow/admin/v1.0/logs/operations    - All operations done on subscription resource for all the company manageable by the logged in administrator (format full): GET https://openrainbow.com/api/rainbow/admin/v1.0/logs/operations?format&#x3D;full&amp;resourceType&#x3D;subscription    - All operations done on subscription resource from 2017-10-01 for all the company manageable by the logged in administrator (format full): GET https://openrainbow.com/api/rainbow/admin/v1.0/logs/operations?format&#x3D;full&amp;resourceType&#x3D;subscription&amp;fromDate&#x3D;2017-10-01    - All operations done on subscription resource between 2017-10-15 12:00:00 and 2017-10-15 12:30:00 for all the company manageable by the logged in administrator (format full): GET https://openrainbow.com/api/rainbow/admin/v1.0/logs/operations?format&#x3D;full&amp;resourceType&#x3D;subscription&amp;fromDate&#x3D;2017-10-15 12:00:00toDate&#x3D;2017-10-15 12:30:00    - All operations done on subscription resource for company 59bbbda83c43dba62752b48e from 2017-10-01 (format full): GET https://openrainbow.com/api/rainbow/admin/v1.0/logs/operations?format&#x3D;full&amp;resourceType&#x3D;subscription&amp;fromDate&#x3D;2017-10-01&amp;resourceContextCompanyId&#x3D;59bbbda83c43dba62752b48e

### Example

```javascript
var RainbowAdminPortal = require('rainbow_admin_portal');
var defaultClient = RainbowAdminPortal.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new RainbowAdminPortal.OperationsLogsApi();
var accept = "accept_example"; // String | application/json
var opts = {
  'format': "format_example", // String | Allows to retrieve more or less operation log details in response.    - `small`: id operationDate operationType resourceType resourceId    - `medium`: id operationDate operationType resourceType resourceId doneBy resourceContext    - `full`: all log fields (id operationDate operationType operationMessage resourceType resourceId doneBy resourceContext previousData newData)
  'limit': 3.4, // Number | Allow to specify the number of operation logs to retrieve.
  'offset': 3.4, // Number | Allow to specify the position of first operation log to retrieve (first operation log if not specified). Warning: if offset > total, no results are returned.
  'sortField': "sortField_example", // String | Sort operation logs list based on the given field.
  'sortOrder': 3.4, // Number | Specify order when sorting operation log list.
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Allows to filter operation logs from provided date (ISO 8601 format).
  'toDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Allows to filter operation logs until provided date (ISO 8601 format).
  'resourceContextCompanyId': "resourceContextCompanyId_example", // String | Allows to filter operation logs on field resourceContext.companyId.    This allows to retrieve logs for a given company on which the operation has been performed (by default, if this filter is not provided, all the logs regarding all companies the administrator has right to manage are returned).    Only companies manageable by the administrator can be provided in the filter. If a company not manageable by the admin is provided, this one is excluded from the filter (i.e. no logs regarding this company will be returned, as the administrator has no rights to manage this company).
  'resourceContextCompanyName': "resourceContextCompanyName_example", // String | Allows to filter operation logs on field resourceContext.companyName.       This allows to search logs based on target company name. The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter 'My company', 'Company', 'A comp 1', 'Comp of comps', ...    Filter applies on companies manageable by the administrator.
  'resourceContextUserId': "resourceContextUserId_example", // String | Allows to filter operation logs on field resourceContext.userId.    This allows to retrieve logs for a given user on which the operation has been performed.    For now, only usable for resourceType=`profile`.
  'doneByCompanyId': "doneByCompanyId_example", // String | Allows to filter operation logs on field doneBy.companyId.    This allows to retrieve logs of operations performed by administrators of a given company.
  'operationType': "operationType_example", // String | Allows to filter operation logs on field operationType.    This allows to retrieve logs for the requested operation type.
  'resourceType': "resourceType_example", // String | Allows to filter operation logs on field resourceType.    This allows to retrieve logs for the requested resource type.
  'resourceId': "resourceId_example" // String | Allows to filter operation logs on field resourceId.    This allows to retrieve logs for operations performed on the requested resource.    Note: as profiles does not have an id, resourceId of operation logs with resourceType=profile is the userId of the user owning the profile.
};
apiInstance.getOperationLog(accept, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| application/json | 
 **format** | **String**| Allows to retrieve more or less operation log details in response.    - &#x60;small&#x60;: id operationDate operationType resourceType resourceId    - &#x60;medium&#x60;: id operationDate operationType resourceType resourceId doneBy resourceContext    - &#x60;full&#x60;: all log fields (id operationDate operationType operationMessage resourceType resourceId doneBy resourceContext previousData newData) | [optional] 
 **limit** | **Number**| Allow to specify the number of operation logs to retrieve. | [optional] 
 **offset** | **Number**| Allow to specify the position of first operation log to retrieve (first operation log if not specified). Warning: if offset &gt; total, no results are returned. | [optional] 
 **sortField** | **String**| Sort operation logs list based on the given field. | [optional] 
 **sortOrder** | **Number**| Specify order when sorting operation log list. | [optional] 
 **fromDate** | **Date**| Allows to filter operation logs from provided date (ISO 8601 format). | [optional] 
 **toDate** | **Date**| Allows to filter operation logs until provided date (ISO 8601 format). | [optional] 
 **resourceContextCompanyId** | **String**| Allows to filter operation logs on field resourceContext.companyId.    This allows to retrieve logs for a given company on which the operation has been performed (by default, if this filter is not provided, all the logs regarding all companies the administrator has right to manage are returned).    Only companies manageable by the administrator can be provided in the filter. If a company not manageable by the admin is provided, this one is excluded from the filter (i.e. no logs regarding this company will be returned, as the administrator has no rights to manage this company). | [optional] 
 **resourceContextCompanyName** | **String**| Allows to filter operation logs on field resourceContext.companyName.       This allows to search logs based on target company name. The filtering is case insensitive and on partial name match: all companies **containing** the provided name value will be returned (whatever the position of the match).    Ex: if filtering is done on _comp_, companies with the following names are match the filter &#39;My company&#39;, &#39;Company&#39;, &#39;A comp 1&#39;, &#39;Comp of comps&#39;, ...    Filter applies on companies manageable by the administrator. | [optional] 
 **resourceContextUserId** | **String**| Allows to filter operation logs on field resourceContext.userId.    This allows to retrieve logs for a given user on which the operation has been performed.    For now, only usable for resourceType&#x3D;&#x60;profile&#x60;. | [optional] 
 **doneByCompanyId** | **String**| Allows to filter operation logs on field doneBy.companyId.    This allows to retrieve logs of operations performed by administrators of a given company. | [optional] 
 **operationType** | **String**| Allows to filter operation logs on field operationType.    This allows to retrieve logs for the requested operation type. | [optional] 
 **resourceType** | **String**| Allows to filter operation logs on field resourceType.    This allows to retrieve logs for the requested resource type. | [optional] 
 **resourceId** | **String**| Allows to filter operation logs on field resourceId.    This allows to retrieve logs for operations performed on the requested resource.    Note: as profiles does not have an id, resourceId of operation logs with resourceType&#x3D;profile is the userId of the user owning the profile. | [optional] 

### Return type

[**GetOperationLogSuccess**](GetOperationLogSuccess.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

