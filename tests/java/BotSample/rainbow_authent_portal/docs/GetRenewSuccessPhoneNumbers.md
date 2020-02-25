

# GetRenewSuccessPhoneNumbers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceType** | **String** | Phone number device type, one of &lt;code&gt;landline&lt;/code&gt;, &lt;code&gt;mobile&lt;/code&gt;, &lt;code&gt;fax&lt;/code&gt;, &lt;code&gt;other&lt;/code&gt;. | 
**internalNumber** | **String** | &lt;b&gt;[Only for phone numbers linked to a system (pbx)]&lt;/b&gt; &lt;br/&gt; If phone is linked to a system (pbx), internal phone number. &lt;br/&gt; Usable within a PBX group. &lt;br/&gt; Admins and users can modify this internalNumber field. |  [optional]
**isFromSystem** | **Boolean** | Boolean indicating if phone is linked to a system (pbx). | 
**number** | **String** | User phone number (as entered by user) |  [optional]
**numberE164** | **String** | User E.164 phone number, computed by server from &#x60;number&#x60; and &#x60;country&#x60; fields |  [optional]
**pbxId** | **String** | &lt;b&gt;[Only for phone numbers linked to a system (pbx)]&lt;/b&gt; &lt;br/&gt; If phone is linked to a system (pbx), unique identifier of that pbx. |  [optional]
**phoneNumberId** | **String** | Phone number unique id in phone-numbers directory collection. | 
**shortNumber** | **String** | &lt;b&gt;[Only for phone numbers linked to a system (pbx)]&lt;/b&gt; &lt;br/&gt; If phone is linked to a system (pbx), short phone number (corresponds to the number monitored by PCG). &lt;br/&gt; Only usable within the same PBX. &lt;br/&gt; Only PCG can set this field. |  [optional]
**systemId** | **String** | &lt;b&gt;[Only for phone numbers linked to a system (pbx)]&lt;/b&gt; &lt;br/&gt; If phone is linked to a system (pbx), unique identifier of that system in Rainbow database. |  [optional]
**type** | **String** | Phone number type, one of &lt;code&gt;home&lt;/code&gt;, &lt;code&gt;work&lt;/code&gt;, &lt;code&gt;other&lt;/code&gt;. | 



