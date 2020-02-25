/*
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
 *
 * The version of the OpenAPI document: 1.104.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ale.rainbow.s2s.client.auth.api;

import com.ale.rainbow.s2s.client.auth.ApiCallback;
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.ApiResponse;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.Pair;
import com.ale.rainbow.s2s.client.auth.ProgressRequestBody;
import com.ale.rainbow.s2s.client.auth.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.ale.rainbow.s2s.client.auth.models.DeleteMetricsSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetApiRainbowAuthenticationV10AboutSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetApiRainbowPingSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetMetricsSuccess;
import com.ale.rainbow.s2s.client.auth.models.PutApiRainbowLogsLevels;
import com.ale.rainbow.s2s.client.auth.models.PutApiRainbowLogsLevelsSuccess;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CommonApi {
    private ApiClient localVarApiClient;

    public CommonApi() {
        this(Configuration.getDefaultApiClient());
    }

    public CommonApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for deleteMetrics
     * @param accept application/json.  Then the result is in JSON format. For other cases the result is in text format. (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call deleteMetricsCall(String accept, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/rainbow/metrics";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null) {
            localVarHeaderParams.put("accept", localVarApiClient.parameterToString(accept));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json", "text/plain"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call deleteMetricsValidateBeforeCall(String accept, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'accept' is set
        if (accept == null) {
            throw new ApiException("Missing the required parameter 'accept' when calling deleteMetrics(Async)");
        }
        

        okhttp3.Call localVarCall = deleteMetricsCall(accept, _callback);
        return localVarCall;

    }

    /**
     * Clear performance metrics
     * Clear metrics
     * @param accept application/json.  Then the result is in JSON format. For other cases the result is in text format. (required)
     * @return DeleteMetricsSuccess
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public DeleteMetricsSuccess deleteMetrics(String accept) throws ApiException {
        ApiResponse<DeleteMetricsSuccess> localVarResp = deleteMetricsWithHttpInfo(accept);
        return localVarResp.getData();
    }

    /**
     * Clear performance metrics
     * Clear metrics
     * @param accept application/json.  Then the result is in JSON format. For other cases the result is in text format. (required)
     * @return ApiResponse&lt;DeleteMetricsSuccess&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<DeleteMetricsSuccess> deleteMetricsWithHttpInfo(String accept) throws ApiException {
        okhttp3.Call localVarCall = deleteMetricsValidateBeforeCall(accept, null);
        Type localVarReturnType = new TypeToken<DeleteMetricsSuccess>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Clear performance metrics (asynchronously)
     * Clear metrics
     * @param accept application/json.  Then the result is in JSON format. For other cases the result is in text format. (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call deleteMetricsAsync(String accept, final ApiCallback<DeleteMetricsSuccess> _callback) throws ApiException {

        okhttp3.Call localVarCall = deleteMetricsValidateBeforeCall(accept, _callback);
        Type localVarReturnType = new TypeToken<DeleteMetricsSuccess>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getApiRainbowAuthenticationV10About
     * @param accept application/json (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getApiRainbowAuthenticationV10AboutCall(String accept, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/rainbow/authentication/v1.0/about";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null) {
            localVarHeaderParams.put("accept", localVarApiClient.parameterToString(accept));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getApiRainbowAuthenticationV10AboutValidateBeforeCall(String accept, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'accept' is set
        if (accept == null) {
            throw new ApiException("Missing the required parameter 'accept' when calling getApiRainbowAuthenticationV10About(Async)");
        }
        

        okhttp3.Call localVarCall = getApiRainbowAuthenticationV10AboutCall(accept, _callback);
        return localVarCall;

    }

    /**
     * About authentication portal
     * Get portal information (module name, version)
     * @param accept application/json (required)
     * @return GetApiRainbowAuthenticationV10AboutSuccess
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public GetApiRainbowAuthenticationV10AboutSuccess getApiRainbowAuthenticationV10About(String accept) throws ApiException {
        ApiResponse<GetApiRainbowAuthenticationV10AboutSuccess> localVarResp = getApiRainbowAuthenticationV10AboutWithHttpInfo(accept);
        return localVarResp.getData();
    }

    /**
     * About authentication portal
     * Get portal information (module name, version)
     * @param accept application/json (required)
     * @return ApiResponse&lt;GetApiRainbowAuthenticationV10AboutSuccess&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GetApiRainbowAuthenticationV10AboutSuccess> getApiRainbowAuthenticationV10AboutWithHttpInfo(String accept) throws ApiException {
        okhttp3.Call localVarCall = getApiRainbowAuthenticationV10AboutValidateBeforeCall(accept, null);
        Type localVarReturnType = new TypeToken<GetApiRainbowAuthenticationV10AboutSuccess>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * About authentication portal (asynchronously)
     * Get portal information (module name, version)
     * @param accept application/json (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getApiRainbowAuthenticationV10AboutAsync(String accept, final ApiCallback<GetApiRainbowAuthenticationV10AboutSuccess> _callback) throws ApiException {

        okhttp3.Call localVarCall = getApiRainbowAuthenticationV10AboutValidateBeforeCall(accept, _callback);
        Type localVarReturnType = new TypeToken<GetApiRainbowAuthenticationV10AboutSuccess>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getApiRainbowPing
     * @param accept application/json (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getApiRainbowPingCall(String accept, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/rainbow/ping";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null) {
            localVarHeaderParams.put("accept", localVarApiClient.parameterToString(accept));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getApiRainbowPingValidateBeforeCall(String accept, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'accept' is set
        if (accept == null) {
            throw new ApiException("Missing the required parameter 'accept' when calling getApiRainbowPing(Async)");
        }
        

        okhttp3.Call localVarCall = getApiRainbowPingCall(accept, _callback);
        return localVarCall;

    }

    /**
     * Get authentication portal status report
     * This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.
     * @param accept application/json (required)
     * @return GetApiRainbowPingSuccess
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public GetApiRainbowPingSuccess getApiRainbowPing(String accept) throws ApiException {
        ApiResponse<GetApiRainbowPingSuccess> localVarResp = getApiRainbowPingWithHttpInfo(accept);
        return localVarResp.getData();
    }

    /**
     * Get authentication portal status report
     * This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.
     * @param accept application/json (required)
     * @return ApiResponse&lt;GetApiRainbowPingSuccess&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GetApiRainbowPingSuccess> getApiRainbowPingWithHttpInfo(String accept) throws ApiException {
        okhttp3.Call localVarCall = getApiRainbowPingValidateBeforeCall(accept, null);
        Type localVarReturnType = new TypeToken<GetApiRainbowPingSuccess>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get authentication portal status report (asynchronously)
     * This API allows to check authentication portal status. &lt;br/&gt; &lt;br/&gt; If no database connection is available, an error 503 Service Unavailable is returned.
     * @param accept application/json (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getApiRainbowPingAsync(String accept, final ApiCallback<GetApiRainbowPingSuccess> _callback) throws ApiException {

        okhttp3.Call localVarCall = getApiRainbowPingValidateBeforeCall(accept, _callback);
        Type localVarReturnType = new TypeToken<GetApiRainbowPingSuccess>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getMetrics
     * @param accept application/json.  Then the result is in  JSON format. For other cases the result is in text format. (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMetricsCall(String accept, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/rainbow/metrics";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (accept != null) {
            localVarHeaderParams.put("accept", localVarApiClient.parameterToString(accept));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json", "text/plain"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getMetricsValidateBeforeCall(String accept, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'accept' is set
        if (accept == null) {
            throw new ApiException("Missing the required parameter 'accept' when calling getMetrics(Async)");
        }
        

        okhttp3.Call localVarCall = getMetricsCall(accept, _callback);
        return localVarCall;

    }

    /**
     * Get performance metrics
     * Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param accept application/json.  Then the result is in  JSON format. For other cases the result is in text format. (required)
     * @return GetMetricsSuccess
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public GetMetricsSuccess getMetrics(String accept) throws ApiException {
        ApiResponse<GetMetricsSuccess> localVarResp = getMetricsWithHttpInfo(accept);
        return localVarResp.getData();
    }

    /**
     * Get performance metrics
     * Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param accept application/json.  Then the result is in  JSON format. For other cases the result is in text format. (required)
     * @return ApiResponse&lt;GetMetricsSuccess&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GetMetricsSuccess> getMetricsWithHttpInfo(String accept) throws ApiException {
        okhttp3.Call localVarCall = getMetricsValidateBeforeCall(accept, null);
        Type localVarReturnType = new TypeToken<GetMetricsSuccess>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get performance metrics (asynchronously)
     * Get portal performance metrics&lt;br/&gt; &lt;br/&gt; It allows to show Node specific metrics like: &lt;ul&gt;     &lt;li&gt;processCpuTotal&lt;/li&gt;     &lt;li&gt;processStartTime&lt;/li&gt;     &lt;li&gt;osMemoryHeap&lt;/li&gt;     &lt;li&gt;processOpenFileDescriptors&lt;/li&gt;     &lt;li&gt;processMaxFileDescriptors&lt;/li&gt;     &lt;li&gt;eventLoopLag&lt;/li&gt;     &lt;li&gt;processHandles&lt;/li&gt;     &lt;li&gt;processRequests&lt;/li&gt;     &lt;li&gt;heapSizeAndUsed&lt;/li&gt;     &lt;li&gt;heapSpacesSizeAndUsed&lt;/li&gt;     &lt;li&gt;version&lt;/li&gt; &lt;/ul&gt; Node metrics probes are launched every 10 seconds.&lt;br/&gt;&lt;br/&gt;  A first custom metric is available to probe portal Rest API performance (an histogram of response time)&lt;br/&gt; &lt;br/&gt; When &#39;content-type&#39; header field is set to &#39;application/json&#39;, the result is in JSON format. For other cases the result is in text format.
     * @param accept application/json.  Then the result is in  JSON format. For other cases the result is in text format. (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMetricsAsync(String accept, final ApiCallback<GetMetricsSuccess> _callback) throws ApiException {

        okhttp3.Call localVarCall = getMetricsValidateBeforeCall(accept, _callback);
        Type localVarReturnType = new TypeToken<GetMetricsSuccess>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for putApiRainbowLogsLevels
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call putApiRainbowLogsLevelsCall(PutApiRainbowLogsLevels body, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/api/rainbow/logs/levels";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call putApiRainbowLogsLevelsValidateBeforeCall(PutApiRainbowLogsLevels body, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling putApiRainbowLogsLevels(Async)");
        }
        

        okhttp3.Call localVarCall = putApiRainbowLogsLevelsCall(body, _callback);
        return localVarCall;

    }

    /**
     * Change log level
     * Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)
     * @param body  (required)
     * @return PutApiRainbowLogsLevelsSuccess
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public PutApiRainbowLogsLevelsSuccess putApiRainbowLogsLevels(PutApiRainbowLogsLevels body) throws ApiException {
        ApiResponse<PutApiRainbowLogsLevelsSuccess> localVarResp = putApiRainbowLogsLevelsWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Change log level
     * Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)
     * @param body  (required)
     * @return ApiResponse&lt;PutApiRainbowLogsLevelsSuccess&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PutApiRainbowLogsLevelsSuccess> putApiRainbowLogsLevelsWithHttpInfo(PutApiRainbowLogsLevels body) throws ApiException {
        okhttp3.Call localVarCall = putApiRainbowLogsLevelsValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PutApiRainbowLogsLevelsSuccess>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Change log level (asynchronously)
     * Allow to change the log level of the portal. The requested log level is applied to the requested transports (console, file, syslog, ...)
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> successful operation </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call putApiRainbowLogsLevelsAsync(PutApiRainbowLogsLevels body, final ApiCallback<PutApiRainbowLogsLevelsSuccess> _callback) throws ApiException {

        okhttp3.Call localVarCall = putApiRainbowLogsLevelsValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PutApiRainbowLogsLevelsSuccess>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
